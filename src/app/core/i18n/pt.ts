/**
 * Dicionário português — a FONTE DA FORMA.
 *
 * O tipo `Dict` é derivado deste objeto, então adicionar uma chave aqui e
 * esquecer de traduzi-la em en.ts quebra o build. Note a ausência de
 * `as const`: ele fixaria os valores como tipos literais ("Sobre" em vez de
 * string) e o dicionário inglês não conseguiria atribuir os próprios textos.
 */
export const PT = {
  meta: {
    title: 'João Pedro Lourenço David — Desenvolvedor Full-Stack',
    description:
      'Desenvolvedor full-stack com foco em Java, Python, Angular e React.',
  },

  a11y: {
    skipToContent: 'Ir para o conteúdo',
    themeLabel: 'Alternar tema',
    languageLabel: 'Idioma',
    mainNav: 'Navegação principal',
    closeDialog: 'Fechar',
  },

  theme: {
    light: 'Claro',
    dark: 'Escuro',
    system: 'Sistema',
  },

  language: {
    pt: 'Português',
    en: 'English',
    short: { pt: 'PT', en: 'EN' },
  },

  nav: {
    about: 'Sobre',
    skills: 'Tecnologias',
    projects: 'Projetos',
    experience: 'Trajetória',
    contact: 'Contato',
  },

  hero: {
    role: 'Desenvolvedor Full-Stack',
    headline: 'Da operação\nao código.',
    lead:
      'Entrei no mercado de trabalho pela logística, virei analista de dados e hoje desenvolvo ' +
      'software de ponta a ponta, do back-end à interface.',
    location: 'São Paulo, SP',
    ctaExperience: 'Ver trajetória',
    ctaResume: 'Baixar currículo',
  },

  about: {
    heading: 'Sobre',
    paragraphs: [
      'Não migrei para tecnologia de fora para dentro. Entrei no mercado de trabalho como ' +
        'estagiário de transportes, aprendi a operação pelo lado de quem a executa, ' +
        'e fui me aproximando do código à medida que percebia o quanto dela podia ' +
        'ser automatizada.',
      'Como analista de dados, passei dois anos construindo indicadores de custo ' +
        'logístico e automações em Python e SQL. Uma delas virou um sistema de ' +
        'mensageria que alcança mais de mil clientes por dia. Foi ali que a ' +
        'programação deixou de ser ferramenta e virou o trabalho.',
      'Hoje trabalho como desenvolvedor full-stack: APIs e sistemas de gestão em Java e ' +
        'Python, interfaces em Angular e React, e integrações entre sistemas, ERPs e ' +
        'serviços externos. Também desenvolvo projetos próprios, como o e-commerce da Ita ' +
        'Calçados, que levei da arquitetura à produção. A experiência na operação continua ' +
        'sendo um diferencial: antes de pensar em como escrever o código, procuro entender ' +
        'o problema que ele precisa resolver.',
    ],
    photoAlt: 'Retrato de João Pedro Lourenço David',
  },

  skills: {
    heading: 'Tecnologias',
    lead: 'O que uso no dia a dia, agrupado por onde atua.',
  },

  projects: {
    heading: 'Projetos',
    // TODO(joão): rascunho meu — ajusta pra sua voz.
    instructions: 'Escolha uma cidade e uma data para consultar a estimativa.',
    testButton: 'Testar',
    visitSite: 'Visitar site',
    modal: {
      cityLabel: 'Cidade',
      dateLabel: 'Data',
      searchButton: 'Buscar',
      loading: 'Buscando…',
      highLabel: 'Máx',
      lowLabel: 'Mín',
      historicalNote: 'Estimativa baseada em dados históricos (2020–2024) — não é uma previsão em tempo real.',
      errorNotSupported: 'Esta cidade ainda não é suportada pela API.',
      errorBadDate: 'Data inválida. Tente outra data.',
      errorGeneric: 'Não foi possível buscar a previsão agora. Tente novamente.',
    },
  },

  experience: {
    heading: 'Trajetória',
    current: 'Atual',
    presentLabel: 'atual',
    otherWork: 'Projetos paralelos',
  },

  education: {
    heading: 'Formação',
    expected: 'conclusão prevista',
  },

  languages: {
    heading: 'Idiomas',
  },

  contact: {
    heading: 'Contato',
    lead: 'Aberto a conversar sobre oportunidades e projetos.',
    emailLabel: 'E-mail',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    resumeLabel: 'Currículo em PDF',
  },

  footer: {
    builtWith: 'Feito em Angular',
    viewSource: 'Ver o código',
  },

  notFound: {
    title: 'Página não encontrada',
    lead: 'O endereço que você abriu não existe.',
    back: 'Voltar ao início',
  },
};

/**
 * Forma do dicionário. Qualquer outro idioma precisa satisfazer isto por
 * completo — chave faltando ou a mais é erro de compilação.
 */
export type Dict = typeof PT;
