import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { CONTACT } from '../../core/data/contact';
import { I18nService } from '../../core/i18n/i18n.service';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly locale = this.i18n.locale;
  protected readonly contact = CONTACT;

  protected readonly resumeHref = computed(() => CONTACT.resume[this.locale()]);
  protected readonly mailto = computed(() => `mailto:${CONTACT.email}`);

  /** Rastreia se o email foi copiado recentemente — usado para feedback visual. */
  protected readonly justCopied = signal(false);

  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  /**
   * Copia o e-mail para o clipboard e mostra feedback visual.
   *
   * O feedback dura 2 segundos, depois volta ao estado inicial.
   * Se o usuário clicar novamente durante o feedback, o timeout é resetado.
   */
  protected copyToClipboard(email: string): void {
    if (!navigator.clipboard) {
      // Fallback para navegadores antigos
      this.fallbackCopy(email);
      return;
    }

    navigator.clipboard
      .writeText(email)
      .then(() => {
        this.justCopied.set(true);

        // Reset o timeout anterior se existir
        if (this.timeoutId) clearTimeout(this.timeoutId);

        // Reseta o estado após 2 segundos
        this.timeoutId = setTimeout(() => {
          this.justCopied.set(false);
          this.timeoutId = null;
        }, 2000);
      })
      .catch(() => {
        // Se falhar (raro em navegadores modernos), tenta fallback
        this.fallbackCopy(email);
      });
  }

  /**
   * Fallback para copiar via `execCommand` (navegadores antigos ou contexto inseguro).
   * Usa um textarea temporário, fora do viewport.
   */
  private fallbackCopy(text: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    try {
      textarea.select();
      document.execCommand('copy');
      this.justCopied.set(true);

      if (this.timeoutId) clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.justCopied.set(false);
        this.timeoutId = null;
      }, 2000);
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
