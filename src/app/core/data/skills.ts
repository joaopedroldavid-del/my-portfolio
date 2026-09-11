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
    id: 'backend',
    label: { pt: 'Backend', en: 'Backend' },
    items: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'Jakarta EE',
      'JSF',
      'PrimeFaces',
      'EJB',
      'CDI',
      'JAX-RS',
      'WebSocket',
      'Maven',
      'Go',
    ],
  },
  {
    id: 'frontend',
    label: { pt: 'Frontend', en: 'Frontend' },
    items: [
      'Angular',
      'React',
      'TypeScript',
      'Native Federation',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Next.js',
      'Vite',
    ],
  },
  {
    id: 'data',
    label: { pt: 'Dados & BI', en: 'Data & BI' },
    items: [
      'Oracle',
      'Snowflake',
      'PostgreSQL',
      'Supabase',
      'SQL',
      'PL/SQL',
      'Power BI',
      'Excel',
      'VBA',
    ],
  },
  {
    id: 'python',
    label: { pt: 'Python & IA', en: 'Python' },
    items: [
      'Python',
      'FastAPI',
      'Flask',
      'SQLAlchemy',
      'Pandas',
      'LangChain',
      'GenAI',
      'Stripe',
    ],
  },
  {
    id: 'ai',
    label: { pt: 'IA', en: 'AI' },
    items: ['Claude Ecossytem', 'Codex', 'Cursor'],
  },
  {
    id: 'infra',
    label: { pt: 'Infraestrutura & DevOps', en: 'Infrastructure & DevOps' },
    items: ['Docker', 'Nginx', 'Kafka', 'Consul', 'Elastic APM', 'MinIO', 'Swagger', 'JWT'],
  },
  {
    id: 'testing',
    label: { pt: 'Testes', en: 'Testing' },
    items: ['Vitest', 'Playwright', 'Pytest', 'MSW'],
  },
  {
    id: 'process',
    label: { pt: 'Processo', en: 'Process' },
    items: ['Git', 'Scrum', 'Kanban'],
  },
];
