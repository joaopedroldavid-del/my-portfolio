import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CONTACT } from '../../core/data/contact';
import { I18nService } from '../../core/i18n/i18n.service';
import { ThemeService } from '../../core/theme/theme.service';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private readonly i18n = inject(I18nService);
  private readonly theme = inject(ThemeService);

  protected readonly t = this.i18n.t;
  protected readonly locale = this.i18n.locale;

  /** O PDF acompanha o idioma ativo da página. */
  protected readonly resumeHref = computed(() => CONTACT.resume[this.locale()]);

  /**
   * A foto muda automaticamente conforme o tema: portrait-dark.png para dark,
   * portrait-light.png para light. O computed reage ao tema sem precisar de
   * event listeners — Angular cuida das atualizações.
   */
  protected readonly portraitSrc = computed(() => {
    const resolvedTheme = this.theme.resolved();
    return resolvedTheme === 'dark' ? '/img/portrait-dark.png' : '/img/portrait-light.png';
  });
}
