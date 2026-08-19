import { describe, expect, it } from 'vitest';

import { DEFAULT_LOCALE, isLocale, localeFromLanguages } from './locale.model';

describe('isLocale', () => {
  it('aceita apenas os locales suportados', () => {
    expect(isLocale('pt')).toBe(true);
    expect(isLocale('en')).toBe(true);
    expect(isLocale('es')).toBe(false);
    expect(isLocale('pt-BR')).toBe(false); // a URL usa a forma curta
    expect(isLocale(null)).toBe(false);
    expect(isLocale(undefined)).toBe(false);
  });
});

describe('localeFromLanguages', () => {
  it('extrai o idioma base de uma tag com região', () => {
    expect(localeFromLanguages(['pt-BR'])).toBe('pt');
    expect(localeFromLanguages(['en-GB'])).toBe('en');
  });

  it('respeita a ordem de preferência do browser', () => {
    expect(localeFromLanguages(['en-US', 'pt-BR'])).toBe('en');
    expect(localeFromLanguages(['pt-BR', 'en-US'])).toBe('pt');
  });

  it('ignora idiomas não suportados e segue para o próximo', () => {
    expect(localeFromLanguages(['es-ES', 'fr-FR', 'en-US'])).toBe('en');
  });

  it('cai no padrão quando nada casa', () => {
    expect(localeFromLanguages(['es-ES', 'ja-JP'])).toBe(DEFAULT_LOCALE);
    expect(localeFromLanguages([])).toBe(DEFAULT_LOCALE);
  });

  it('não diferencia maiúsculas', () => {
    expect(localeFromLanguages(['PT-br'])).toBe('pt');
  });
});
