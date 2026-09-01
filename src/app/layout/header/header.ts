import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { LOCALES, LOCALE_STORAGE_KEY, Locale } from '../../core/i18n/locale.model';
import { ThemeService } from '../../core/theme/theme.service';

/** Âncoras neutras de idioma — ver o comentário em `SECTIONS`. */
type SectionId = 'about' | 'skills' | 'projects' | 'experience' | 'contact';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly i18n = inject(I18nService);
  private readonly theme = inject(ThemeService);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly t = this.i18n.t;
  protected readonly locale = this.i18n.locale;
  protected readonly locales = LOCALES;
  protected readonly themeChoice = this.theme.choice;

  /**
   * Os ids das âncoras são neutros de idioma de propósito.
   *
   * O seletor de idioma usa `preserveFragment`, então quem está lendo
   * /pt#experience continua em /en#experience ao trocar. Se as âncoras fossem
   * traduzidas (#trajetoria vs #experience), a troca cairia numa âncora
   * inexistente e o leitor perderia a posição na página.
   */
  protected readonly sections: readonly SectionId[] = [
    'about',
    'skills',
    'projects',
    'experience',
    'contact',
  ];

  /** Alterna a borda inferior do header depois do topo da página. */
  private readonly _scrolled = signal(false);
  protected readonly scrolled = this._scrolled.asReadonly();

  /** Rótulo do estado atual do tema — o ciclo tem três estados e o botão
      precisa comunicar qual está ativo. */
  protected readonly themeLabel = computed(() => this.t().theme[this.themeChoice()]);

  constructor() {
    if (!this.isBrowser) return;

    afterNextRender(() => {
      const update = () => this._scrolled.set(window.scrollY > 8);
      update();
      window.addEventListener('scroll', update, { passive: true });
    });
  }

  protected navLabel(id: SectionId): string {
    return this.t().nav[id];
  }

  protected localeLabel(locale: Locale): string {
    return this.t().language.short[locale];
  }

  protected toggleTheme(): void {
    this.theme.toggle();
  }

  /** Lembra o idioma escolhido apenas para decidir o destino de '/'. */
  protected rememberLocale(locale: Locale): void {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      /* armazenamento bloqueado — a URL continua sendo a fonte da verdade */
    }
  }
}
