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
    experience: 'Experience',
    contact: 'Contact',
  },

  hero: {
    role: 'Software Developer',
    headline: 'From operations\nto code.',
    lead:
      'I joined Cassol through logistics, became a data analyst, and now build the ' +
      'systems that move the operation.',
    location: 'São Paulo, Brazil',
    ctaExperience: 'See experience',
    ctaResume: 'Download resume',
  },

  about: {
    heading: 'About',
    paragraphs: [
      'I did not move into tech from the outside. I joined Cassol as a transport ' +
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
