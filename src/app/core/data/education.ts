import { Translated, YearMonth } from './content.model';

/**
 * Formação e idiomas.
 *
 * Um curso em andamento é informação que recrutador procura ativamente em
 * perfil de início de carreira — por isso aparece na página, e não só no PDF.
 */
export interface Education {
  institution: string;
  degree: Translated;
  start: YearMonth;
  end: YearMonth;
  /** Marca que a conclusão é prevista, não realizada. */
  expected: boolean;
}

export const EDUCATION: readonly Education[] = [
  {
    institution: 'Universidade do Sul de Santa Catarina',
    degree: {
      pt: 'Bacharelado em Ciência da Computação',
      en: "Bachelor's Degree in Computer Science",
    },
    start: '2023-01',
    end: '2027-07',
    expected: true,
  },
];

export const LANGUAGES: readonly Translated[] = [
  { pt: 'Português — C2', en: 'Portuguese — C2' },
  { pt: 'Espanhol — A1', en: 'Spanish — A1' },
  { pt: 'Inglês — B1', en: 'English — B1' },
];
