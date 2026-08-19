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
      'Maven',
      'Go',
    ],
  },
  {
    id: 'frontend',
    label: { pt: 'Frontend', en: 'Frontend' },
    items: ['Angular', 'TypeScript', 'Native Federation', 'JavaScript', 'HTML', 'CSS', 'Next.js'],
  },
  {
    id: 'data',
    label: { pt: 'Dados & BI', en: 'Data & BI' },
    items: ['Oracle', 'Snowflake', 'SQL', 'Power BI', 'Excel', 'VBA'],
  },
  {
    id: 'python',
    label: { pt: 'Python & IA', en: 'Python' },
    items: ['Python', 'FastAPI', 'Flask', 'Pandas', 'LangChain', 'GenAI'],
  },
  {
    id: 'ai',
    label: { pt: 'IA', en: 'AI' },
    items: ['Claude Ecossytem', 'Codex', 'Cursor'],
  },
  {
    id: 'process',
    label: { pt: 'Processo', en: 'Process' },
    items: ['Git', 'Scrum', 'Kanban'],
  },
];
