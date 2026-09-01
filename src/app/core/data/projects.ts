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
export interface Project {
  id: string;
  /** Nome do projeto — nome próprio, não se traduz. */
  name: string;
  repoUrl: string;
  /** Tecnologias — nomes próprios, não se traduzem. */
  tech: readonly string[];
  /**
   * Cidades aceitas pela demo. O valor é enviado como está para a API
   * (`location`), então precisa bater exatamente com o que ela espera.
   */
  cities: readonly string[];
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'ai-weather-forecasting',
    name: 'AI Weather Forecasting',
    repoUrl: 'https://github.com/joaopedroldavid-del/ai-weather-forecasting',
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Supabase'],
    cities: ['São Paulo', 'Florianópolis', 'Curitiba'],
  },
];
