import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SKILL_GROUPS } from '../../core/data/skills';
import { I18nService } from '../../core/i18n/i18n.service';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  private readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly locale = this.i18n.locale;
  protected readonly groups = SKILL_GROUPS;
}
