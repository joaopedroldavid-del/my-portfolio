import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

/**
 * Revela elementos conforme entram no viewport.
 *
 * ── Por que geometria e não IntersectionObserver ──
 *
 * A primeira versão usava IntersectionObserver. Ele foi trocado porque o modo
 * de falha é severo: enquanto o elemento não é revelado ele está com
 * `opacity: 0`, então um observer que não dispara não degrada a animação — ele
 * deixa a página permanentemente em branco.
 *
 * E isso não é hipotético. Em ambiente headless de teste o IntersectionObserver
 * existe (`typeof` retorna 'function'), aceita `observe()` sem erro e nunca
 * chama o callback. Um guard de `typeof === 'undefined'` não cobre esse caso.
 *
 * `getBoundingClientRect` não tem esse problema: é síncrono e sempre responde.
 * Para as ~19 caixas desta página o custo é irrelevante, e o listener é único
 * e throttled por requestAnimationFrame — mais barato, no fim, que 19
 * observers.
 *
 * ── Anima uma vez ──
 *
 * Elementos revelados saem do conjunto, e quando ele esvazia os listeners são
 * removidos. Reanimar ao rolar para cima chama atenção para o efeito em vez do
 * conteúdo.
 */
@Injectable({ providedIn: 'root' })
export class RevealService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly pending = new Set<HTMLElement>();
  private listening = false;
  private frame: number | null = null;

  register(element: HTMLElement): void {
    if (!this.isBrowser) return;

    this.pending.add(element);
    this.listen();

    // Checagem SÍNCRONA, de propósito — não via requestAnimationFrame.
    //
    // Browsers pausam rAF em aba oculta. Abrir o portfólio em aba de fundo
    // (cmd-clique a partir de um link) é comum, e nesse caso um agendamento por
    // rAF só rodaria ao focar a aba. Se o visitante focasse e não rolasse — o
    // conteúdo acima da dobra já estando na tela — nada dispararia e a página
    // ficaria em branco. Leitura de geometria é síncrona e sempre responde.
    this.flush();
  }

  unregister(element: HTMLElement): void {
    this.pending.delete(element);
    if (this.pending.size === 0) this.stop();
  }

  private listen(): void {
    if (this.listening) return;
    this.listening = true;
    window.addEventListener('scroll', this.schedule, { passive: true });
    window.addEventListener('resize', this.schedule, { passive: true });
    // Ao voltar para a aba, reavalia: durante o período oculto nenhum frame
    // rodou, então pode haver pendência acumulada.
    document.addEventListener('visibilitychange', this.onVisible);
  }

  private stop(): void {
    if (!this.listening) return;
    this.listening = false;
    window.removeEventListener('scroll', this.schedule);
    window.removeEventListener('resize', this.schedule);
    document.removeEventListener('visibilitychange', this.onVisible);
    if (this.frame !== null) cancelAnimationFrame(this.frame);
    this.frame = null;
  }

  private readonly onVisible = (): void => {
    // Flush direto: se a aba acabou de ficar visível, rAF ainda pode não ter
    // retomado neste instante.
    if (document.visibilityState === 'visible') this.flush();
  };

  /** Agrupa rajadas de scroll em uma única leitura por frame. */
  private readonly schedule = (): void => {
    if (this.frame !== null) return;
    this.frame = requestAnimationFrame(() => {
      this.frame = null;
      this.flush();
    });
  };

  private flush(): void {
    // Dispara um pouco antes da borda inferior, para que a animação termine
    // quando o leitor de fato chega no elemento.
    const limit = window.innerHeight * 0.92;

    for (const element of [...this.pending]) {
      const box = element.getBoundingClientRect();
      const visible = box.top < limit && box.bottom > 0;
      if (!visible) continue;

      element.classList.add('is-revealed');
      this.pending.delete(element);
    }

    if (this.pending.size === 0) this.stop();
  }
}
