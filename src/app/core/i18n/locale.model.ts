/**
 * Locales suportados.
 *
 * O valor curto ('pt' | 'en') é o que aparece na URL — /pt e /en. A tag BCP 47
 * completa vai para o atributo lang do <html> e para o hreflang, porque
 * buscadores e leitores de tela precisam da região, não só do idioma.
 */
export const LOCALES = ['pt', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pt';

/** Chave no localStorage — usada só para decidir o destino de '/'. */
export const LOCALE_STORAGE_KEY = 'locale';

export const LANG_TAG: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en-US',
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/**
 * Escolhe o locale a partir das preferências de idioma do browser.
 * Só é consultado quando o visitante chega em '/' sem idioma na URL — a URL,
 * quando existe, sempre vence.
 */
export function localeFromLanguages(languages: readonly string[]): Locale {
  for (const language of languages) {
    const base = language.toLowerCase().split('-')[0];
    if (isLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}
