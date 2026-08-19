import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18nService } from '../../core/i18n/i18n.service';
import { CONTACT } from '../../core/data/contact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly contact = CONTACT;
  protected readonly year = 2026;
}
