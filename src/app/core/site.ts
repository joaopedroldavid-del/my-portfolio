/**
 * URL pública do site.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * TODO(joão): trocar pela URL real após o primeiro deploy na Vercel.
 *
 * Precisa ser absoluta e sem barra ao final. É usada em canonical, hreflang e
 * nas tags Open Graph — e OG exige URL absoluta: caminho relativo faz o
 * LinkedIn e o WhatsApp não acharem a imagem, e o preview do link cai para
 * texto puro.
 *
 * Se depois você apontar um domínio próprio, muda só aqui.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const SITE_URL = 'https://portfolio-joao-pedro-david.vercel.app';

export const SITE_NAME = 'Portfolio: JoaoPedroLDavid';

/** Tag BCP 47 usada em og:locale (formato com underscore, não hífen). */
export const OG_LOCALE: Record<'pt' | 'en', string> = {
  pt: 'pt_BR',
  en: 'en_US',
};
