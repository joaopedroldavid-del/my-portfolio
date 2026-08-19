import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { EDUCATION, LANGUAGES } from '../../core/data/education';
import { YearMonth, formatYearMonth } from '../../core/data/content.model';
import { I18nService } from '../../core/i18n/i18n.service';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  private readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly locale = this.i18n.locale;

  protected readonly education = EDUCATION;
  protected readonly languages = LANGUAGES;

  protected period(start: YearMonth, end: YearMonth): string {
    const loc = this.locale();
    return `${formatYearMonth(start, loc)} — ${formatYearMonth(end, loc)}`;
  }
}
