import { LANG_TAG, Locale } from '../i18n/locale.model';

/**
 * Texto que existe nos dois idiomas.
 *
 * Este tipo é a peça central do modelo de conteúdo. Em vez de manter duas
 * árvores paralelas (`Record<Locale, Experience[]>`), o esqueleto é único e
 * apenas os campos textuais são bilíngues. Consequência: as versões PT e EN
 * não podem divergir em quantidade, ordem ou estrutura — o que era o risco de
 * duplicar os arrays — e esquecer uma tradução é erro de compilação.
 */
export type Translated<T = string> = Record<Locale, T>;

/** Mês em ISO parcial: 'AAAA-MM'. Formatado por idioma só na renderização. */
export type YearMonth = `${number}-${string}`;

export interface Role {
  /** Cargo — traduzido. */
  title: Translated;
  start: YearMonth;
  /** `null` significa cargo atual. */
  end: YearMonth | null;
  /** Destaques do cargo — traduzidos. */
  bullets: Translated<readonly string[]>;
  /** Tecnologias: nomes próprios, não se traduzem. */
  tech: readonly string[];
}

export interface Organization {
  /** Nome da empresa — nome próprio, não se traduz. */
  name: string;
  /** Cargos na empresa, do mais recente ao mais antigo. */
  roles: readonly Role[];
}

export interface SkillGroup {
  id: string;
  /** Rótulo do grupo — traduzido. */
  label: Translated;
  /** Nomes de tecnologia — não se traduzem. */
  items: readonly string[];
}

/**
 * Formata 'AAAA-MM' no idioma pedido.
 *
 * Usa `formatToParts` em vez do `format` direto porque o português insere um
 * literal — 'mai. de 2025' — que fica pesado numa timeline. Pegando apenas as
 * partes de mês e ano, o Intl continua responsável pelos nomes dos meses (sem
 * lista hardcoded) e nós controlamos a junção: 'mai 2025' / 'May 2025'.
 */
export function formatYearMonth(value: YearMonth, locale: Locale): string {
  const [year, month] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, 1));
  const parts = new Intl.DateTimeFormat(LANG_TAG[locale], {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).formatToParts(date);

  const monthPart = parts.find((p) => p.type === 'month')?.value.replace(/\.$/, '') ?? '';
  const yearPart = parts.find((p) => p.type === 'year')?.value ?? '';
  return `${monthPart} ${yearPart}`;
}

/** Intervalo de um cargo. `end` nulo usa o rótulo de "atual" do dicionário. */
export function formatRange(role: Role, locale: Locale, presentLabel: string): string {
  const start = formatYearMonth(role.start, locale);
  // Um cargo de mês único (o freelance) não precisa de intervalo.
  if (role.end === role.start) return start;
  const end = role.end ? formatYearMonth(role.end, locale) : presentLabel;
  return `${start} — ${end}`;
}
