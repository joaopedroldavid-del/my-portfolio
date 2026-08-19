import { Organization } from './content.model';

/**
 * Trajetória profissional.
 *
 * A Cassol é uma organização única com três cargos aninhados, e não três
 * entradas soltas: a progressão estagiário -> analista -> programador é o
 * argumento central da página, e intercalar trabalhos paralelos no meio dela
 * quebraria a leitura.
 *
 * Os textos são deliberadamente mais curtos que os do currículo — parágrafo de
 * currículo não se lê em tela.
 */
export const MAIN_EXPERIENCE: readonly Organization[] = [
  {
    name: 'Cassol Centerlar',
    roles: [
      {
        title: { pt: 'Programador', en: 'Software Developer' },
        start: '2025-05',
        end: null,
        bullets: {
          pt: [
            'Participei da implementação de um novo Sistema de Gestão de Transportes (TMS), aplicando conceitos de REST API e arquitetura de microsserviços, utilizando Go para o backend e Angular para o frontend.',
            'Participei de um projeto de modernização e estruturação de páginas dinâmicas e intuitivas utilizando Angular para melhorar a experiência do usuário e adotar tecnologias atuais.',
            'Desenvolvi e mantive APIs e serviços utilizando Java/Spring Boot/JavaEE, Go e Python/FastAPI para melhorar a eficiência do sistema e escalabilidade.',
            'Implementei soluções baseadas em IA e automação utilizando Python para otimizar processos de negócio e criar agentes inteligentes.',
            'Acelerei a velocidade de desenvolvimento alavancando ferramentas de codificação assistida por IA como Claude Code para otimizar o desenvolvimento de APIs, automatizar geração de código e conduzir prototipagem rápida, possibilitando ciclos de iteração mais rápidos e redução de débito técnico mantendo padrões de qualidade de código.',
          ],
          en: [
            'Participated in the implementation of a new Transportation Management System (TMS), applying REST API and microservices concepts.',
            'Participated in a project to modernize and structure dynamic and intuitive pages using Angular to improve user experience and adopt current technologies.',
            'Developed and maintained APIs and services using Java/Spring Boot/JavaEE, Go, and Python/FastAPI to improve system efficiency and scalability.',
            'Implemented AI and automation-based solutions using Python to optimize business processes and create intelligent agents.',
            'Accelerated development velocity by leveraging AI-assisted coding tools such as Claude Code to streamline API development, automate code generation, and conduct rapid prototyping, enabling faster iteration cycles and reducing technical debt while maintaining code quality standards.',
          ],
        },
        tech: [
          'Java',
          'Spring Boot',
          'Jakarta EE',
          'Go',
          'Angular',
          'TypeScript',
          'Python',
          'FastAPI',
          'Oracle',
        ],
      },
      {
        title: { pt: 'Analista de Dados', en: 'Data Analyst' },
        start: '2023-04',
        end: '2025-05',
        bullets: {
          pt: [
            'Desenvolvi e monitorei KPIs focados em custos logísticos e de entrega utilizando Excel e Power BI para apoiar a tomada de decisão estratégica, redução de custos e melhoria dos níveis de serviço.',
            'Criei e otimizei consultas SQL para extrair, manipular e analisar grandes volumes de dados, garantindo relatórios rápidos e precisos através de dashboards e relatórios gerenciais.',
            'Automatizei processos com Python para validar dados de entrega e comunicar-se com clientes, reduzindo devoluções e diminuindo custos logísticos enquanto melhorava os níveis de serviço.',
            'Implementei um sistema de mensageria para enviar pesquisas de satisfação baseadas no modelo NPS, alcançando mais de 1.000 clientes por dia com custos mínimos.',
            'Construí ferramentas customizadas em Excel integradas com SQL e VBA para consolidar dados de múltiplas plataformas, automatizando tarefas operacionais e possibilitando análises mais rápidas e acessíveis para o time.',
            'Forneci mentoria técnica a novos membros da equipe compartilhando conhecimento em SQL, Excel, regras de negócio e desenvolvimento de aplicações, acelerando o onboarding e melhorando a produtividade do time.',
          ],
          en: [
            'Developed and monitored KPIs focused on logistics and delivery costs using Excel and Power BI to support strategic decision-making, cost reduction, and service level improvement.',
            'Created and optimized SQL queries to extract, manipulate, and analyze large datasets, ensuring fast and accurate reporting through dashboards and management reports.',
            'Automated processes with Python to validate delivery data and communicate with customers, reducing returns and lowering logistics costs while enhancing service levels.',
            'Implemented a messaging system to send satisfaction surveys based on the NPS model, reaching over 1,000 customers per day with minimal costs.',
            'Built custom Excel tools integrated with SQL and VBA to streamline data from multiple platforms, automating operational tasks and enabling faster, more accessible analytics for the team.',
            'Provided technical mentoring to new team members by sharing knowledge in SQL, Excel, business rules, and app development, accelerating onboarding and improving team productivity.',
          ],
        },
        tech: ['Python', 'Pandas', 'SQL', 'Oracle', 'Power BI', 'Excel', 'VBA'],
      },
      {
        title: { pt: 'Estagiário de Transportes', en: 'Transport Intern' },
        start: '2022-06',
        end: '2023-04',
        bullets: {
          pt: [
            'Apoiei operações logísticas gerenciando dados e criando relatórios preliminares.',
            'Adquiri experiência prática na análise de dados de transportes e logística, fortalecendo habilidades fundamentais em inteligência de negócios e operações.',
          ],
          en: [
            'Supported logistics operations by managing data and creating preliminary reports.',
            'Gained hands-on experience in analyzing transportation and logistics data, strengthening foundational skills in business intelligence and operations.',
          ],
        },
        tech: ['Excel', 'SQL'],
      },
    ],
  },
];

/**
 * Trabalhos paralelos. Separados da trajetória principal de propósito: têm
 * valor técnico, mas não fazem parte da progressão dentro da Cassol.
 */
export const SIDE_EXPERIENCE: readonly Organization[] = [
  {
    name: 'Vetto AI',
    roles: [
      {
        title: { pt: 'Testador de QA (freelance)', en: 'QA Tester (freelance)' },
        start: '2026-03',
        end: '2026-06',
        bullets: {
          pt: [
            'Minhas responsabilidades principais envolvem analisar conversas impulsionadas por IA baseadas em personas predefinidas e cenários contextuais. Avalio se as respostas da IA são precisas, coerentes e alinhadas com a intenção do usuário, enquanto também verifico a capacidade do modelo em interpretar corretamente e adaptar-se a diferentes personas.',
          ],
          en: [
            'My primary responsibility involves analyzing AI-driven conversations based on predefined personas and contextual scenarios. I assess whether the AI responses are accurate, coherent, and aligned with the user’s intent, while also verifying the model’s ability to properly interpret and adapt to different personas.',
          ],
        },
        tech: ['LLM', 'QA'],
      },
    ],
  },
  {
    name: 'Freelance',
    roles: [
      {
        title: { pt: 'Desenvolvedor Web', en: 'Web Developer' },
        start: '2024-12',
        end: '2024-12',
        bullets: {
          pt: [
            'Entreguei uma aplicação web em Next.js: login autenticado pela API do cliente, relatório interativo em tabela e exportação para Excel.',
          ],
          en: [
            'I delivered a Next.js web application: login authenticated against the client’s API, an interactive table report, and Excel export.',
          ],
        },
        tech: ['Next.js', 'JavaScript', 'HTML', 'CSS'],
      },
    ],
  },
];
