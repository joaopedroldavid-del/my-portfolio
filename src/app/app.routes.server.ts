import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Modo de renderização por rota.
 *
 * Tudo o que é conhecido em build time é prerenderizado. Não existe
 * `RenderMode.Server` aqui porque, com `outputMode: 'static'`, não há servidor
 * Node em produção.
 */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'pt', renderMode: RenderMode.Prerender },
  { path: 'en', renderMode: RenderMode.Prerender },
  // Rotas desconhecidas não podem ser enumeradas em build time. `Client` entrega
  // a casca e monta o 404 no browser — é o que dispensa `getPrerenderParams`.
  { path: '**', renderMode: RenderMode.Client },
];
