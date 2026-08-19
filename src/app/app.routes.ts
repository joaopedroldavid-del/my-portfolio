import { Routes } from '@angular/router';

import { Shell } from './layout/shell/shell';
import { LocaleRedirect } from './shared/locale-redirect/locale-redirect';
import { NotFound } from './shared/not-found/not-found';

/**
 * Rotas literais por idioma, em vez de um parâmetro '/:lang'.
 *
 * O motivo é o prerender: com caminhos literais, o crawler do build descobre
 * '/pt' e '/en' sozinho a partir do router. Com um parâmetro, seria necessário
 * declarar `getPrerenderParams` para enumerar os valores possíveis.
 */
export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LocaleRedirect },
  { path: 'pt', component: Shell, data: { locale: 'pt' } },
  { path: 'en', component: Shell, data: { locale: 'en' } },
  { path: '**', component: NotFound },
];
