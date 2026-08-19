/**
 * Contrato de tema.
 *
 * `ThemeChoice` é o que o usuário escolhe e o que persistimos.
 * `ResolvedTheme` é o que a interface realmente pinta — 'system' precisa ser
 * resolvido contra a preferência do sistema antes de virar cor.
 */
export type ThemeChoice = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

/** Chave no localStorage. Precisa bater com o guard inline do index.html. */
export const THEME_STORAGE_KEY = 'theme';

/**
 * Só 'light' e 'dark' são persistidos. A ausência da chave *é* o estado
 * 'system' — foi isso que permitiu ao guard do index.html cair no
 * @media (prefers-color-scheme) e acompanhar o sistema sem JavaScript.
 */
export function isPersistedChoice(value: unknown): value is ResolvedTheme {
  return value === 'light' || value === 'dark';
}
