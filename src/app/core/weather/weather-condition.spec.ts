import { describe, expect, it } from 'vitest';

import { classifyCondition } from './weather-condition';

describe('classifyCondition', () => {
  it('reconhece chuva em variações do termo', () => {
    expect(classifyCondition('light rain')).toBe('rainy');
    expect(classifyCondition('Drizzle')).toBe('rainy');
    expect(classifyCondition('thunderstorm')).toBe('rainy');
  });

  it('reconhece sol', () => {
    expect(classifyCondition('clear')).toBe('sunny');
    expect(classifyCondition('Sunny')).toBe('sunny');
  });

  it('reconhece nublado', () => {
    expect(classifyCondition('cloudy')).toBe('cloudy');
    expect(classifyCondition('overcast')).toBe('cloudy');
  });

  it('cai em "unknown" para texto não mapeado', () => {
    expect(classifyCondition('windy')).toBe('unknown');
  });
});
