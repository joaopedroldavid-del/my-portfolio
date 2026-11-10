/**
 * Projetos com repositório próprio.
 *
 * Diferente de `experience.ts`/`skills.ts`, isto não é o padrão-geral do site:
 * a experiência profissional continua sendo o conteúdo central. Um projeto só
 * ganha um cartão aqui quando tem repositório e demo próprios — ver a nota em
 * CLAUDE.md.
 *
 * `name`/`tech`/`cities` são nomes próprios e não se traduzem, seguindo o
 * mesmo padrão de `SkillGroup.items`. A prosa (descrição, instruções) fica no
 * dicionário — como `about.paragraphs` — porque é texto longo, não um rótulo.
 */
import { Translated } from './content.model';

export interface Project {
  id: string;
  /** Nome do projeto — nome próprio, não se traduz. */
  name: string;
  description: Translated;
  repoUrl?: string;
  siteUrl?: string;
  /** Tecnologias — nomes próprios, não se traduzem. */
  tech: readonly string[];
  /**
   * Cidades aceitas pela demo. O valor é enviado como está para a API
   * (`location`), então precisa bater exatamente com o que ela espera.
   * Projeto sem demo interativa não declara cidades.
   */
  cities?: readonly string[];
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'ita-calcados',
    name: 'Ita Calçados',
    description: {
      pt:
        'E-commerce de roupas e calçados da Ita Calçados, em produção: backend em Python/FastAPI ' +
        'sobre PostgreSQL/Supabase, loja e painel administrativo em React + TypeScript, ' +
        'pagamentos pela AppMax e frete pelos Correios.',
      en:
        'Ita Calçados’ clothing and footwear e-commerce, live in production: a Python/FastAPI ' +
        'backend on PostgreSQL/Supabase, a React + TypeScript storefront and admin panel, ' +
        'AppMax payments and Correios shipping.',
    },
    siteUrl: 'https://www.itacalcados.com/',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'ai-weather-forecasting',
    name: 'AI Weather Forecasting',
    description: {
      pt:
        'API que estima o clima de uma cidade brasileira numa data escolhida, a partir de dados ' +
        'históricos do INMET, usando FastAPI e LangChain no back-end.',
      en:
        'An API that estimates the weather for a Brazilian city on a chosen date, based on historical ' +
        'INMET data, using FastAPI and LangChain on the back end.',
    },
    repoUrl: 'https://github.com/joaopedroldavid-del/ai-weather-forecasting',
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Supabase'],
    cities: ['São Paulo', 'Florianópolis', 'Curitiba'],
  },
];
