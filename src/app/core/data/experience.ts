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
        title: { pt: 'Full-Stack Developer', en: 'Full-Stack Developer' },
        start: '2025-05',
        end: null,
        bullets: {
          pt: [
            'Desenvolvimento full-stack no ERP da Cassol Centerlar. Atuo nos dois lados da plataforma: o monólito Java legado e a migração para uma nova arquitetura baseada em micro-frontends e microsserviços.',
            'ERP legado (Java EE no WildFly, Oracle): um monólito em camadas com telas JSF/PrimeFaces, uma camada Business/DAO e mapeamentos JPA/Hibernate; uma API REST JAX-RS que os novos front-ends usam para login, filiais, configuração e contratos.',
            'Nova plataforma (Cassol Hub): micro-frontends Angular 21 (standalone, zoneless, OnPush) unidos por Native Federation sob um shell que cuida de login, layout e menus; um design system compartilhado publicado como biblioteca npm interna para componentes e auth guards; gestão de identidade e acesso no Keycloak; microsserviços Spring Boot assumindo módulos do monólito e compartilhando seu banco Oracle.',
            'Desenvolvimento orientado a especificação com OpenSpec e codificação assistida por IA com Claude Code para planejamento, implementação e code review, com uma etapa de aprovação de QA antes de cada merge.',
          ],
          en: [
            'Full-stack development on Cassol Centerlar’s ERP. I work on both sides of the platform: the legacy Java monolith and the move to a new architecture built on micro-frontends and microservices.',
            'Legacy ERP (Java EE on WildFly, Oracle): a layered monolith with JSF/PrimeFaces screens, a Business/DAO layer and JPA/Hibernate mappings; a JAX-RS REST API that the new front ends use for login, branches, configuration and contracts.',
            'New platform (Cassol Hub): Angular 21 micro-frontends (standalone, zoneless, OnPush) joined by Native Federation under a shell that handles login, layout and menus; a shared design system published as an internal npm library for components and auth guards; Identity and access management on Keycloak; Spring Boot microservices taking over modules from the monolith while sharing its Oracle database.',
            'Spec-driven development with OpenSpec, and AI-assisted coding with Claude Code for planning, implementation and code review, with a QA approval step before every merge.',
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
    name: 'Ita Calçados',
    roles: [
      {
        title: { pt: 'Full-Stack Developer', en: 'Full-Stack Developer' },
        start: '2026-09',
        end: null,
        bullets: {
          pt: [
            'Desenvolvimento ponta a ponta da plataforma de e-commerce de roupas e calçados da Ita Calçados, da arquitetura ao lançamento em produção. Tem um backend assíncrono em Python/FastAPI (SQLAlchemy, Pydantic v2) sobre PostgreSQL/Supabase, e uma loja e painel administrativo em React 18 + TypeScript.',
            'Checkout e pagamentos construídos sobre o gateway AppMax: cartão de crédito com parcelamento configurável, Pix e tratamento de análise antifraude; regras de estado de pagamento que impedem que um cliente seja cobrado duas vezes; reserva atômica de estoque em compras concorrentes.',
            'Opções de entrega: cotação de frete pelos Correios e agendamento de retirada na loja calculado a partir do horário de funcionamento e do fuso horário da loja.',
            'Uma área administrativa com controle de acesso por módulo, cobrindo: pedidos e notas fiscais; catálogo de produtos com imagens por cor; cupons e um programa de influenciadores; configurações de frete, checkout e do site; um dashboard de vendas.',
            'Performance e confiabilidade: cache com Redis, cache em CDN com purge a cada salvamento no admin, deploy serverless na Vercel, logs estruturados e testes de carga da jornada completa do cliente.',
            'Segurança e conformidade: hardening do banco de dados (Row-Level Security, Data API bloqueada); consentimento versionado da política de privacidade conforme a LGPD; toda mudança de schema entregue com scripts de backup e rollback para produção.',
            'SEO com páginas de produto renderizadas no servidor e sitemap dinâmico.',
            'Garantia de qualidade com testes automatizados: testes unitários com Pytest, além de testes de integração contra um banco PostgreSQL real (cerca de 95% de cobertura no backend); Vitest/MSW no frontend e Playwright para testes end-to-end.',
            'Desenvolvimento orientado a especificação com OpenSpec e codificação assistida por IA com Claude Code para planejamento, implementação e code review, com uma etapa de aprovação de QA antes de cada release.',
          ],
          en: [
            'End-to-end development of Ita Calçados’ e-commerce platform for clothing and footwear, from architecture to the production launch. It has an async Python/FastAPI backend (SQLAlchemy, Pydantic v2) on PostgreSQL/Supabase, and a React 18 + TypeScript storefront and admin panel.',
            'Checkout and payments built on the AppMax gateway: credit card with configurable installments, Pix, and antifraud review handling; payment-state rules that keep a customer from being charged twice; atomic stock reservation under concurrent purchases.',
            'Delivery options: Correios shipping quotes, and in-store pickup scheduling calculated from the store’s opening hours and time zone.',
            'An admin area with access control by module, covering: orders and invoices; a product catalog with images per color; coupons and an influencer program; shipping, checkout and site settings; a sales dashboard.',
            'Performance and reliability: Redis caching, CDN caching with a purge on every admin save, serverless deployment on Vercel, structured logging, and load tests of the full customer journey.',
            'Security and compliance: database hardening (Row-Level Security, Data API locked down); versioned privacy-policy consent under the LGPD; every schema change shipped with backup and rollback scripts for production.',
            'SEO through server-rendered product pages and a dynamic sitemap.',
            'Quality assurance with automated tests: Pytest unit tests, plus integration tests against a real PostgreSQL database (about 95% backend coverage); Vitest/MSW for the frontend and Playwright for end-to-end tests.',
            'Spec-driven development with OpenSpec, and AI-assisted coding with Claude Code for planning, implementation and code review, with a QA approval step before every release.',
          ],
        },
        tech: ['Python', 'FastAPI', 'React', 'Supabase'],
      },
    ],
  },
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
