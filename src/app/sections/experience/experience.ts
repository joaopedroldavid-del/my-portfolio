import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Organization, Role, formatRange, formatYearMonth } from '../../core/data/content.model';
import { MAIN_EXPERIENCE, SIDE_EXPERIENCE } from '../../core/data/experience';
import { I18nService } from '../../core/i18n/i18n.service';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  private readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly locale = this.i18n.locale;

  protected readonly main = MAIN_EXPERIENCE;
  protected readonly side = SIDE_EXPERIENCE;

  /**
   * Intervalo total na empresa, DERIVADO dos cargos em vez de digitado à mão —
   * assim não há como o cabeçalho contradizer a lista abaixo dele. Os cargos
   * estão do mais recente ao mais antigo, então o início vem do último.
   */
  protected orgRange(org: Organization): string {
    const locale = this.locale();
    const oldest = org.roles[org.roles.length - 1];
    const newest = org.roles[0];
    const start = formatYearMonth(oldest.start, locale);
    const end = newest.end
      ? formatYearMonth(newest.end, locale)
      : this.t().experience.presentLabel;
    return `${start} — ${end}`;
  }

  protected range(role: Role): string {
    return formatRange(role, this.locale(), this.t().experience.presentLabel);
  }

  protected isCurrent(role: Role): boolean {
    return role.end === null;
  }
}
