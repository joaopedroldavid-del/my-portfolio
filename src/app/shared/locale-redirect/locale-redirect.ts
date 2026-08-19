import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  Locale,
  isLocale,
  localeFromLanguages,
} from '../../core/i18n/locale.model';

/**
 * Página de entrada em '/'.
 *
 * Em modo estático não existe servidor para ler o Accept-Language, então a
 * escolha acontece no browser. Mas a página NÃO é um redirect vazio: ela
 * renderiza os dois idiomas como links, o que a mantém útil para crawlers e
 * para quem está sem JavaScript. O redirect é só uma conveniência em cima.
 */
@Component({
  selector: 'app-locale-redirect',
  imports: [RouterLink],
  templateUrl: './locale-redirect.html',
  styleUrl: './locale-redirect.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocaleRedirect {
  private readonly router = inject(Router);

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;

    afterNextRender(() => {
      // replaceUrl para que o botão voltar não fique preso neste salto.
      void this.router.navigateByUrl(`/${this.preferredLocale()}`, { replaceUrl: true });
    });
  }

  private preferredLocale(): Locale {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (isLocale(stored)) return stored;
    } catch {
      /* armazenamento bloqueado — cai nas preferências do browser */
    }
    return localeFromLanguages(navigator.languages ?? [navigator.language ?? DEFAULT_LOCALE]);
  }
}
