import { describe, expect, it } from 'vitest';

import { Role, formatRange, formatYearMonth } from './content.model';

describe('formatYearMonth', () => {
  it('formata em português sem o literal "de" e sem ponto abreviativo', () => {
    // O Intl.format direto devolveria 'mai. de 2025', que fica pesado numa
    // timeline. Só as partes de mês e ano são usadas.
    expect(formatYearMonth('2025-05', 'pt')).toBe('mai 2025');
    expect(formatYearMonth('2022-06', 'pt')).toBe('jun 2022');
  });

  it('formata em inglês', () => {
    expect(formatYearMonth('2025-05', 'en')).toBe('May 2025');
    expect(formatYearMonth('2024-12', 'en')).toBe('Dec 2024');
  });

  it('não desloca o mês por fuso horário', () => {
    // Datas construídas em horário local podem cair no mês anterior conforme o
    // fuso da máquina. O formatador usa UTC justamente para evitar isso.
    expect(formatYearMonth('2023-01', 'en')).toBe('Jan 2023');
    expect(formatYearMonth('2023-12', 'en')).toBe('Dec 2023');
  });
});

describe('formatRange', () => {
  const role = (start: string, end: string | null): Role =>
    ({
      title: { pt: '', en: '' },
      start: start as Role['start'],
      end: end as Role['end'],
      bullets: { pt: [], en: [] },
      tech: [],
    });

  it('usa o rótulo de "atual" quando não há data de término', () => {
    expect(formatRange(role('2025-05', null), 'pt', 'atual')).toBe('mai 2025 — atual');
    expect(formatRange(role('2025-05', null), 'en', 'present')).toBe('May 2025 — present');
  });

  it('mostra um único mês em vez de um intervalo de igual início e fim', () => {
    // O freelance durou um mês; 'dez 2024 — dez 2024' seria ruído.
    expect(formatRange(role('2024-12', '2024-12'), 'pt', 'atual')).toBe('dez 2024');
  });

  it('mostra o intervalo completo quando início e fim diferem', () => {
    expect(formatRange(role('2023-04', '2025-05'), 'pt', 'atual')).toBe('abr 2023 — mai 2025');
  });
});
