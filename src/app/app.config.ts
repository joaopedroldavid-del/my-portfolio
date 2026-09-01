import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    // Único consumidor: WeatherApiService, chamado a partir do modal de
    // projetos — é a primeira chamada de rede do site.
    provideHttpClient(),
    provideRouter(
      routes,
      // Necessário para a navegação por âncora entre as seções (#about, #contact).
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    ),
    // NOTA: `withViewTransitions()` foi removido de propósito.
    //
    // Dois motivos. Primeiro, ele é @developerPreview desde a 19 — e a regra
    // deste projeto é não expor API instável em código que serve de vitrine.
    // Segundo, ele quebrava na prática: cada clique numa âncora (/pt#about) é
    // uma navegação de rota, disparava uma transição que abortava com
    // "InvalidStateError: Transition was aborted because of invalid state", e a
    // transição abortada deixava resíduo visual na tela.
    //
    // Existe uma forma de contornar (skipTransition no onViewTransitionCreated),
    // mas o tipo desse callback também é developer preview, então seria trocar
    // um problema por outro.
  ],
};
