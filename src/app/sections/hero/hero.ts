import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CONTACT } from '../../core/data/contact';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  protected readonly locale = this.i18n.locale;

  /** O PDF acompanha o idioma ativo da página. */
  protected readonly resumeHref = computed(() => CONTACT.resume[this.locale()]);
}
