import { SkillGroup } from './content.model';

/**
 * Tecnologias agrupadas por domínio.
 *
 * `items` contém apenas NOMES PRÓPRIOS — Java, Oracle, Angular. Habilidades
 * conceituais ("modelagem de dados", "microsserviços") ficam de fora de
 * propósito: são texto que precisaria de tradução, e visualmente uma frase
 * descritiva ao lado de "Oracle" sugere que as duas coisas são do mesmo tipo,
 * quando não são. Os conceitos aparecem nos destaques da trajetória, onde têm
 * contexto.
 *
 * Também não há indicador de proficiência: barra de porcentagem é arbitrária e
 * fácil de contestar numa entrevista.
 */
export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: 'languages',
    label: { pt: 'Linguagens', en: 'Languages' },
    items: [
      'Java',
      'Python',
      'TypeScript',
      'JavaScript',
      'SQL',
      'Go',
    ],
  },
  {
    id: 'backend',
    label: { pt: 'Backend', en: 'Backend' },
    items: [
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'Jakarta EE',
      'JAX-RS',
      'JSF',
      'PrimeFaces',
      'Maven',
      'FastAPI',
      'Flask',
      'SQLAlchemy',
      'Pydantic',
    ],
  },
  {
    id: 'frontend',
    label: { pt: 'Frontend', en: 'Frontend' },
    items: [
      'Angular',
      'React',
      'Next.js',
      'Native Federation',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 'databases',
    label: { pt: 'Bancos de dados', en: 'Databases' },
    items: [
      'Oracle',
      'PostgreSQL',
      'Supabase',
      'Snowflake',
      'Redis',
    ],
  },
  {
    id: 'security',
    label: { pt: 'Segurança', en: 'Security' },
    items: [
      'Keycloak',
    ],
  },
  {
    id: 'testing',
    label: { pt: 'Testes', en: 'Testing' },
    items: [
      'Pytest',
      'Vitest',
      'Playwright',
    ],
  },
  {
    id: 'data',
    label: { pt: 'Dados & BI', en: 'Data & BI' },
    items: [
      'Pandas',
      'Power BI',
      'Excel',
      'VBA',
    ],
  },
  {
    id: 'ai',
    label: { pt: 'IA', en: 'AI' },
    items: [
      'LangChain',
      'Claude Code',
      'Codex',
      'Cursor',
    ],
  },
  {
    id: 'tools',
    label: { pt: 'Ferramentas & métodos', en: 'Tools & Methods' },
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Vercel',
      'Scrum',
      'Kanban',
    ],
  },
];
