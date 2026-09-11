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
            'Desenvolvimento full-stack nos módulos de SGD, Vendas e Operações (VO) e Logística do ERP da Cassol, incluindo APIs REST em Java (JSF, PrimeFaces, EJB, Hibernate, JAX-RS) e consultas SQL Oracle avançadas para os domínios de frete e fiscal.',
            'Atuação na resolução de problemas em produção, otimizando processos de integração e processamento de documentos fiscais.',
            'Adaptação e evolução de sistemas fiscais para atender mudanças regulatórias, garantindo a correta aplicação e persistência das informações tributárias.',
            'Desenvolvimento de micro-frontends Angular e contribuições em autenticação e na arquitetura do shell que orquestra os módulos via Native Federation.',
            'Manutenção e evolução de um microsserviço em Go para gestão de transportes, com mensageria assíncrona, descoberta de serviços e observabilidade.',
            'Modernização da geração de relatórios do sistema, migrando de ferramentas legadas para uma solução baseada em HTML/CSS mais flexível e reutilizável.',
            'Desenvolvimento e manutenção de APIs em Python/FastAPI e soluções de automação e agentes de IA para otimizar processos de negócio internos.',
            'Acelero o desenvolvimento usando ferramentas de codificação assistida por IA como Claude Code, automatizando geração de código e prototipagem para reduzir débito técnico mantendo a qualidade.',
          ],
          en: [
            'Full-stack development across the SGD, Sales & Operations (VO), and Logistics modules of Cassol’s ERP, including Java REST APIs (JSF, PrimeFaces, EJB, Hibernate, JAX-RS) and advanced Oracle SQL work for the freight and tax domains.',
            'Production troubleshooting, optimizing integration and fiscal document processing pipelines.',
            'Adapting and evolving fiscal systems to meet regulatory changes, ensuring correct application and persistence of tax information.',
            'Development of Angular micro-frontends and contributions to authentication and the architecture of the shell that orchestrates the modules via Native Federation.',
            'Maintenance and evolution of a Go microservice for transportation management, with asynchronous messaging, service discovery, and observability.',
            'Modernization of the system’s report generation, migrating from legacy tooling to a more flexible, reusable HTML/CSS-based solution.',
            'Development and maintenance of Python/FastAPI APIs and automation/AI agent solutions to optimize internal business processes.',
            'Accelerating development by leveraging AI-assisted coding tools such as Claude Code to automate code generation and rapid prototyping, reducing technical debt while maintaining code quality standards.',
          ],
        },
        tech: [
          'Java',
          'Spring Boot',
          'Jakarta EE',
          'JSF',
          'PrimeFaces',
          'Hibernate',
          'JAX-RS',
          'Go',
          'Kafka',
          'Consul',
          'WebSocket',
          'Angular',
          'TypeScript',
          'MinIO',
          'Python',
          'FastAPI',
          'Oracle',
          'PL/SQL',
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
