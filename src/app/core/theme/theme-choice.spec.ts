import { describe, expect, it } from 'vitest';

import { nextChoice } from './theme-choice';
import { ThemeChoice } from './theme.model';

describe('nextChoice', () => {
  it('cicla light -> dark -> system e volta ao início em três passos', () => {
    expect(nextChoice('light')).toBe('dark');
    expect(nextChoice('dark')).toBe('system');
    expect(nextChoice('system')).toBe('light');
  });

  it('alcança os três estados a partir de qualquer ponto de partida', () => {
    // Esta é a garantia que perdemos ao tentar "pular" o estado invisível:
    // com o pulo, 'system' ficava inalcançável quando o SO estava em escuro.
    for (const inicio of ['light', 'dark', 'system'] as ThemeChoice[]) {
      const vistos = new Set<ThemeChoice>();
      let atual = inicio;
      for (let i = 0; i < 3; i++) {
        vistos.add(atual);
        atual = nextChoice(atual);
      }
      expect(vistos).toEqual(new Set(['light', 'dark', 'system']));
      expect(atual).toBe(inicio); // três passos fecham o ciclo
    }
  });
});
