import { describe, expect, it } from 'vitest';

import { toApiDate } from './weather-date';

describe('toApiDate', () => {
  it('converte AAAA-MM-DD (formato do input nativo) para MM-DD-AAAA (formato da API)', () => {
    expect(toApiDate('2026-09-02')).toBe('09-02-2026');
  });

  it('preserva zeros à esquerda em mês e dia', () => {
    expect(toApiDate('2026-01-05')).toBe('01-05-2026');
  });
});
