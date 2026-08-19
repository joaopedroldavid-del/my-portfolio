import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { isLocale } from '../../core/i18n/locale.model';
import { About } from '../../sections/about/about';
import { Contact } from '../../sections/contact/contact';
import { Experience } from '../../sections/experience/experience';
import { Hero } from '../../sections/hero/hero';
import { Skills } from '../../sections/skills/skills';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

/**
 * Casca de uma página em um idioma.
 *
 * O locale vem de `data.locale` da rota e é aplicado no construtor — de forma
 * síncrona, antes de qualquer renderização. É isso que garante que o passo de
 * prerender no servidor já produza o HTML no idioma certo.
 */
@Component({
  selector: 'app-shell',
  imports: [Header, Footer, Hero, About, Skills, Experience, Contact],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Shell {
  private readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;

  constructor() {
    const locale = inject(ActivatedRoute).snapshot.data['locale'];
    if (isLocale(locale)) {
      this.i18n.setLocale(locale);
    }
  }
}
