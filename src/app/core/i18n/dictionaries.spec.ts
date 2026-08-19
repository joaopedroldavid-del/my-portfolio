import { describe, expect, it } from 'vitest';

import { EN } from './en';
import { PT } from './pt';

/** Caminhos de todas as folhas do objeto, em ordem — a "forma" do dicionário. */
function shape(value: unknown, path = ''): string[] {
  if (Array.isArray(value)) {
    // Arrays de texto guardam prosa (os parágrafos do Sobre): comparamos o
    // tamanho, não o conteúdo.
    return [`${path}[]:${value.length}`];
  }
  if (value !== null && typeof value === 'object') {
    return Object.keys(value)
      .sort()
      .flatMap((key) => shape((value as Record<string, unknown>)[key], path ? `${path}.${key}` : key));
  }
  return [path];
}

describe('paridade dos dicionários', () => {
  it('português e inglês têm exatamente a mesma forma', () => {
    // O TypeScript já garante isto em tempo de compilação; o teste existe para
    // que a intenção fique explícita e para pegar divergência de TAMANHO de
    // array, que o tipo não cobre.
    expect(shape(EN)).toEqual(shape(PT));
  });

  it('o Sobre tem o mesmo número de parágrafos nos dois idiomas', () => {
    expect(EN.about.paragraphs.length).toBe(PT.about.paragraphs.length);
  });

  it('nenhum texto está vazio', () => {
    const vazios: string[] = [];
    const walk = (value: unknown, path: string): void => {
      if (typeof value === 'string') {
        if (value.trim() === '') vazios.push(path);
        return;
      }
      if (Array.isArray(value)) {
        value.forEach((v, i) => walk(v, `${path}[${i}]`));
        return;
      }
      if (value && typeof value === 'object') {
        for (const [k, v] of Object.entries(value)) walk(v, path ? `${path}.${k}` : k);
      }
    };
    walk(PT, 'PT');
    walk(EN, 'EN');
    expect(vazios).toEqual([]);
  });
});
