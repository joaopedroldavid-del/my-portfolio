import { Dict } from './pt';

/**
 * Dicionário inglês. Tipado como `Dict`, então o compilador garante paridade
 * estrutural com o português.
 */
export const EN: Dict = {
  meta: {
    title: 'João Pedro Lourenço David — Software Developer',
    description:
      'Software developer focused on Java, Spring Boot, Go and Angular. ' +
      'I started in logistics operations and now build the systems that run them.',
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
    role: 'Software Developer',
    headline: 'From operations\nto code.',
    lead:
      'I started my career in logistics, transitioned into data analysis, and now build the ' +
      'systems that move the operation.',
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
      'Today, I work as a developer, building APIs and management systems using ' +
        'Java, interfaces with Angular, and integrations between internal systems, ' +
        'ERPs, and external services. My previous experience in operations continues ' +
        'to be a key strength: before thinking about how to write the code, I try ' +
        'to understand the problem it needs to solve.',
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
    lead: 'Projects with their own repository and demo, outside the Cassol experience.',
    // TODO(joão): my draft — adjust to your voice.
    description:
      'An API that estimates the weather for a Brazilian city on a chosen date, based on historical ' +
      'INMET data, using FastAPI and LangChain on the back end.',
    // TODO(joão): my draft — adjust to your voice.
    instructions: 'Pick a city and a date to look up the estimate.',
    testButton: 'Test',
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
    otherWork: 'Other work',
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
