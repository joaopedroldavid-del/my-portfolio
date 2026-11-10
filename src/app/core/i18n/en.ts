import { Dict } from './pt';

/**
 * Dicionário inglês. Tipado como `Dict`, então o compilador garante paridade
 * estrutural com o português.
 */
export const EN: Dict = {
  meta: {
    title: 'João Pedro Lourenço David — Full-Stack Developer',
    description:
      'Full-stack developer focused on Java, Python, Angular and React.',
  },

  a11y: {
    skipToContent: 'Skip to content',
    themeLabel: 'Toggle theme',
    languageLabel: 'Language',
    mainNav: 'Main navigation',
    closeDialog: 'Close',
  },

  theme: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },

  language: {
    pt: 'Português',
    en: 'English',
    short: { pt: 'PT', en: 'EN' },
  },

  nav: {
    about: 'About',
    skills: 'Stack',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },

  hero: {
    role: 'Full-Stack Developer',
    headline: 'From operations\nto code.',
    lead:
      'I started my career in logistics, moved into data analysis, and now build software end ' +
      'to end, from the back end to the interface.',
    location: 'São Paulo, Brazil',
    ctaExperience: 'See experience',
    ctaResume: 'Download resume',
  },

  about: {
    heading: 'About',
    paragraphs: [
      'I did not move into tech from the outside. I started my career as a transport ' +
        'intern, learned the operation from the people running it, and drifted ' +
        'toward code as I realised how much of it could be automated.',
      'As a data analyst I spent two years building logistics cost indicators and ' +
        'automations in Python and SQL. One of them became a messaging system that ' +
        'reaches over a thousand customers a day. That is where programming stopped ' +
        'being a tool and became the job.',
      'Today I work as a full-stack developer: APIs and management systems in Java and ' +
        'Python, interfaces in Angular and React, and integrations between systems, ERPs and ' +
        'external services. I also build my own projects, like the Ita Calçados e-commerce, ' +
        'which I took from architecture to production. My background in operations is still ' +
        'a strength: before thinking about how to write the code, I try to understand the ' +
        'problem it needs to solve.',
    ],
    photoAlt: 'Portrait of João Pedro Lourenço David',
  },

  skills: {
    heading: 'Stack',
    lead: 'What I work with day to day, grouped by where it applies.',
  },

  projects: {
    heading: 'Projects',
    // TODO(joão): my draft — adjust to your voice.
    instructions: 'Pick a city and a date to look up the estimate.',
    testButton: 'Test',
    visitSite: 'Visit site',
    modal: {
      cityLabel: 'City',
      dateLabel: 'Date',
      searchButton: 'Search',
      loading: 'Searching…',
      highLabel: 'High',
      lowLabel: 'Low',
      historicalNote: 'Estimate based on historical data (2020–2024) — not a real-time forecast.',
      errorNotSupported: 'This city is not supported by the API yet.',
      errorBadDate: 'Invalid date. Try another date.',
      errorGeneric: 'Could not fetch the forecast right now. Please try again.',
    },
  },

  experience: {
    heading: 'Experience',
    current: 'Current',
    presentLabel: 'present',
    otherWork: 'Side work',
  },

  education: {
    heading: 'Education',
    expected: 'expected',
  },

  languages: {
    heading: 'Languages',
  },

  contact: {
    heading: 'Contact',
    lead: 'Open to conversations about opportunities and projects.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    resumeLabel: 'Resume (PDF)',
  },

  footer: {
    builtWith: 'Built with Angular',
    viewSource: 'View source',
  },

  notFound: {
    title: 'Page not found',
    lead: 'The address you opened does not exist.',
    back: 'Back to home',
  },
};
