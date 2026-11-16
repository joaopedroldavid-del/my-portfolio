import { Organization } from './content.model';

/**
 * Trajetória profissional.
 *
 * A Cassol é uma organização única com três cargos aninhados, e não três
 * entradas soltas: a progressão estagiário -> analista -> programador é o
 * argumento central da página, e intercalar trabalhos paralelos no meio dela
 * quebraria a leitura.
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
            'Desenvolvo micro-frontends Angular e microsserviços Spring Boot para o Cassol Hub, a nova plataforma que assume módulos do ERP legado em Java EE, usando Native Federation e um banco Oracle compartilhado.',
            'Desenvolvi o módulo de Gestão de Contratos, um micro-frontend Angular integrado ao web service JAX-RS legado e ao banco Oracle.',
            'Desenvolvi o módulo Comercial para tabelas de preço e pedidos de compra, substituindo a interface do TOTVS Gemco por uma única tela construída sobre as tabelas Oracle dele.',
            'Aprimorei a autenticação e a gestão de acesso no Keycloak, atualizando o microsserviço e o micro-frontend relacionados, e criei uma biblioteca npm interna com auth guards compartilhados entre os micro-frontends.',
            'Integrei serviços de terceiros para emissão e leitura de documentos fiscais (NF-e, CT-e, MDF-e, NFS-e).',
            'Mantenho o ERP legado (Java EE, WildFly, JSF/PrimeFaces, JPA/Hibernate, JAX-RS, Oracle), corrigindo defeitos e entregando melhorias.',
            'Faço manutenção e ajustes em um microsserviço em Go.',
            'Uso desenvolvimento orientado a especificação (OpenSpec) e Claude Code para planejamento, implementação e code review, com aprovação de QA antes de cada merge.',
          ],
          en: [
            'Build Angular micro-frontends and Spring Boot microservices for Cassol Hub, the new platform that takes over modules from the legacy Java EE ERP, using Native Federation and a shared Oracle database.',
            'Developed the Contracts Management module, an Angular micro-frontend integrated with the legacy JAX-RS web service and the Oracle database.',
            'Developed the Commercial module for price tables and purchase orders, replacing the TOTVS Gemco interface with a single screen built on its Oracle tables.',
            'Improved authentication and access management on Keycloak, updating the related microservice and micro-frontend, and built an internal npm library with shared auth guards used across the micro-frontends.',
            'Integrated third-party services to issue and read Brazilian tax documents (NF-e, CT-e, MDF-e, NFS-e).',
            'Maintain the legacy ERP (Java EE, WildFly, JSF/PrimeFaces, JPA/Hibernate, JAX-RS, Oracle), fixing defects and shipping improvements.',
            'Maintain and adjust a Go microservice.',
            'Use spec-driven development (OpenSpec) and Claude Code for planning, implementation and code review, with QA approval before each merge.',
          ],
        },
        tech: [
          'Java',
          'Spring Boot',
          'Jakarta EE',
          'JAX-RS',
          'Angular',
          'TypeScript',
          'Native Federation',
          'Keycloak',
          'Oracle',
          'Go',
        ],
      },
      {
        title: { pt: 'Analista de Dados', en: 'Data Analyst' },
        start: '2023-04',
        end: '2025-05',
        bullets: {
          pt: [
            'Construí KPIs de custos logísticos e de entrega em Power BI e Excel para acompanhar o desempenho e encontrar reduções de custo.',
            'Escrevi e otimizei consultas SQL no Snowflake sobre grandes volumes de dados para dashboards e relatórios gerenciais.',
            'Criei automações em Python para validar dados de entrega e contatar clientes, reduzindo devoluções e custos logísticos.',
            'Construí um sistema de mensageria para pesquisas de NPS que alcançou mais de 1.000 clientes por dia com baixo custo operacional.',
            'Criei ferramentas em Excel, VBA e SQL para consolidar dados de várias plataformas e automatizar tarefas operacionais.',
            'Fiz o onboarding e o treinamento de novos membros da equipe em SQL, Excel e regras de negócio.',
          ],
          en: [
            'Built logistics and delivery cost KPIs in Power BI and Excel to track performance and find cost reductions.',
            'Wrote and optimized SQL queries on Snowflake over large datasets for dashboards and management reports.',
            'Built Python automations to validate delivery data and contact customers, reducing returns and logistics costs.',
            'Built an NPS survey messaging system that reached more than 1,000 customers per day at low operating cost.',
            'Built Excel, VBA and SQL tools to consolidate data from several platforms and automate operational tasks.',
            'Onboarded and trained new team members on SQL, Excel and business rules.',
          ],
        },
        tech: ['Python', 'Pandas', 'SQL', 'Snowflake', 'Power BI', 'Excel', 'VBA'],
      },
      {
        title: { pt: 'Estagiário de Transportes', en: 'Transport Intern' },
        start: '2022-06',
        end: '2023-04',
        bullets: {
          pt: [
            'Gerenciei dados logísticos e preparei relatórios para a equipe de transportes.',
          ],
          en: [
            'Managed logistics data and prepared reports for the transportation team.',
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
        title: {
          pt: 'Full-Stack Developer (contrato freelance)',
          en: 'Full-Stack Developer (freelance contract)',
        },
        start: '2026-09',
        end: null,
        bullets: {
          pt: [
            'Construí uma plataforma de e-commerce de roupas e calçados da arquitetura ao lançamento em produção: backend assíncrono em FastAPI (SQLAlchemy, Pydantic v2) sobre PostgreSQL/Supabase, e loja e painel administrativo em React 18 + TypeScript.',
            'Implementei o checkout no gateway de pagamento AppMax (cartão de crédito parcelado, Pix, análise antifraude), com regras de estado de pagamento que impedem cobrança dupla e reserva atômica de estoque em pedidos concorrentes.',
            'Adicionei cotação de frete pelos Correios e agendamento de retirada na loja baseado no horário de funcionamento e no fuso horário da loja.',
            'Construí um painel administrativo com controle de acesso por módulo para pedidos, notas fiscais, catálogo de produtos, cupons, programa de influenciadores, configurações do site e dashboard de vendas.',
            'Melhorei a performance com cache em Redis e em CDN (com purge a cada salvamento no admin), deploy serverless na Vercel e logs estruturados; rodei testes de carga da jornada completa do cliente.',
            'Reforcei a segurança do banco com Row-Level Security do PostgreSQL, adicionei consentimento versionado conforme a LGPD e entreguei toda mudança de schema com scripts de backup e rollback.',
            'Implementei SEO com páginas de produto renderizadas no servidor e sitemap dinâmico.',
            'Alcancei cerca de 95% de cobertura de testes no backend com testes unitários e de integração em Pytest contra PostgreSQL; testei o frontend com Vitest/MSW e os fluxos end-to-end com Playwright.',
          ],
          en: [
            'Built a clothing and footwear e-commerce platform from architecture to production launch: async FastAPI backend (SQLAlchemy, Pydantic v2) on PostgreSQL/Supabase, and a React 18 + TypeScript storefront and admin panel.',
            'Implemented checkout on the AppMax payment gateway (credit card installments, Pix, antifraud review), with payment-state rules that prevent double charges and atomic stock reservation for concurrent orders.',
            'Added Correios shipping quotes and in-store pickup scheduling based on store hours and time zone.',
            'Built an admin panel with module-based access control for orders, invoices, product catalog, coupons, an influencer program, site settings and a sales dashboard.',
            'Improved performance with Redis and CDN caching (purged on admin saves), serverless deployment on Vercel and structured logging; ran load tests on the full customer journey.',
            'Hardened the database with PostgreSQL Row-Level Security, added versioned LGPD consent, and shipped every schema change with backup and rollback scripts.',
            'Implemented SEO with server-rendered product pages and a dynamic sitemap.',
            'Reached about 95% backend test coverage with Pytest unit and integration tests against PostgreSQL; tested the frontend with Vitest/MSW and end-to-end flows with Playwright.',
          ],
        },
        tech: [
          'Python',
          'FastAPI',
          'PostgreSQL',
          'Supabase',
          'Redis',
          'React',
          'TypeScript',
          'Vercel',
        ],
      },
    ],
  },
  {
    name: 'Vetto AI',
    roles: [
      {
        title: {
          pt: 'Testador de QA — conversas com IA (freelance)',
          en: 'QA Tester — AI Conversations (freelance)',
        },
        start: '2026-03',
        end: '2026-06',
        bullets: {
          pt: [
            'Avaliei conversas geradas por IA a partir de personas e cenários predefinidos, verificando precisão, coerência e alinhamento com a intenção do usuário.',
          ],
          en: [
            'Evaluated AI-generated conversations against predefined personas and scenarios, checking accuracy, coherence and alignment with user intent.',
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
            'Construí uma aplicação web em Next.js com login pela API do cliente, uma tabela de relatório alimentada por dados da API e exportação para Excel.',
          ],
          en: [
            "Built a Next.js web application with login through the client's API, a reporting table fed by API data, and Excel export.",
          ],
        },
        tech: ['Next.js', 'JavaScript', 'HTML', 'CSS'],
      },
    ],
  },
];
