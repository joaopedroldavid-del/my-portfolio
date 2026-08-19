import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
} from '@angular/core';

import { RevealService } from './reveal.service';

/**
 * Marca um elemento para ser revelado ao entrar no viewport.
 *
 * ── Por que o estado oculto NÃO vive só aqui ──
 *
 * A página é prerenderizada. Se o CSS escondesse `[data-reveal]` sem condição,
 * visitantes sem JavaScript — e crawlers que não o executam — receberiam um
 * HTML completo e inteiramente invisível, perdendo justamente as duas coisas
 * que o prerender existe para garantir.
 *
 * Por isso a regra de ocultar é escopada em `html.js`, classe adicionada de
 * forma síncrona pelo script inline do index.html: sem JavaScript ela nunca
 * existe e o conteúdo aparece normalmente; com JavaScript ela existe antes da
 * primeira pintura, então não há flash.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    '[attr.data-reveal]': '""',
    '[style.--reveal-delay]': 'delay() + "ms"',
  },
})
export class Reveal {
  /** Atraso em ms — escalona itens de uma mesma lista. */
  readonly delay = input(0, { alias: 'appRevealDelay' });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly reveal = inject(RevealService);

  constructor() {
    const element = this.host.nativeElement;

    // afterNextRender só roda no browser, então não há acesso a DOM durante o
    // prerender no servidor.
    afterNextRender(() => this.reveal.register(element));

    inject(DestroyRef).onDestroy(() => this.reveal.unregister(element));
  }
}
