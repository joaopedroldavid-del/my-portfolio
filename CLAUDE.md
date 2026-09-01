# CLAUDE.md — Portfólio Pessoal

## O que é este projeto

Portfólio pessoal bilíngue (PT-BR / EN-US) de João Pedro Lourenço David,
desenvolvedor na Cassol Centerlar.

O site **é** o projeto de showcase: a trajetória profissional continua sendo o
conteúdo central, porque ele entrou na área por dentro da empresa e a maior
parte do que construiu não tem repositório próprio. Consequência direta para
qualquer alteração: a qualidade do próprio código e da própria interface é o
portfólio. Decisão técnica ruim aqui não é dívida técnica — é argumento
perdido em entrevista.

Existe uma exceção pontual: um projeto com repositório e demo **próprios**
(fora da Cassol) ganha um cartão na seção **Projetos**. É o caso do
`ai-weather-forecasting`, uma API de estimativa de clima. Tudo que não tem
repositório próprio continua vivendo em Experiência/Tecnologias — a seção de
Projetos não é uma lista geral de "coisas que ele fez".

Site de página única com 5 seções, prerenderizado em build time. **Ainda não
está em produção** — falta deploy na Vercel e três arquivos (ver
[Pendências](#pendências)).

Objetivo: um recrutador PT ou EN encontra no Google e lê em 90 segundos.

## Stack

- Angular **21.2 LTS** (não 22 — ver [Por que 21](#por-que-angular-21-e-não-22))
- TypeScript 5.9 (`>=5.9 <6` exigido pela 21)
- SCSS em arquivos separados (`.ts` / `.html` / `.scss` por componente)
- `@angular/ssr` 21.2 em modo **estático** (prerender, sem runtime Node)
- Vitest 4 (default da CLI 21)
- Zoneless change detection (default na 21)
- Deploy: Vercel, saída estática
- **Zero dependências de UI ou de i18n** — nem biblioteca de componentes, nem
  ngx-translate. Isso é proposital e vale manter.

## Comandos essenciais

```bash
npm install          # instalar dependências
npm start            # servidor de desenvolvimento (porta 4200)
npm run build        # build de produção com prerender das 3 rotas
npm test             # Vitest, 17 testes
npx tsc --noEmit -p tsconfig.app.json   # typecheck isolado, mais rápido que o build
```

`npm start` e `npm run build` rodam antes um `pre*` script
(`scripts/generate-environment.mjs`) que lê `.env` (não commitado — copie de
`.env.example`) e gera `src/environments/environment.ts` (também não
commitado — formato em `environment.example.ts`). É uma substituição em
**build time**, não runtime: o site é 100% estático, sem servidor Node em
produção, então não existe leitura de `.env` depois do build.

## Estrutura de pastas

```
src/
  app/
    app.routes.ts          → /pt, /en literais + chooser em '' + 404
    app.routes.server.ts   → RenderMode por rota (tudo Prerender, exceto '**')
    core/
      i18n/                → serviço de locale, dicionários PT/EN, model
      theme/               → serviço de tema, ciclo de escolha, model
      data/                → conteúdo tipado (experiência, skills, contato, formação, projetos)
      weather/             → cliente da API de clima (WeatherApiService) + conversão de data
      site.ts              → SITE_URL e constantes de Open Graph
    layout/
      shell/               → casca por idioma; injeta data.locale no i18n
      header/  footer/
    sections/
      hero/  about/  skills/  projects/  experience/  contact/
    shared/
      reveal/              → diretiva + serviço de revelação no scroll
      project-modal/       → dialog de "testar projeto" (primeiro modal do site)
      locale-redirect/     → página '/' com escolha de idioma
      not-found/
  styles/
    _tokens.scss           → paleta dos dois temas, tipografia, espaçamento, movimento
    _typography.scss       → @font-face das 3 famílias
    _mixins.scss           → bp(), container, label, focus-ring, motion-safe
    _reset.scss
  styles.scss              → folha global; importa os parciais na ordem correta
  index.html               → script síncrono anti-flash de tema + classe .js

public/
  fonts/  img/  cv/  og/
```

O `includePaths` do `angular.json` aponta para `src/styles`, então dentro de
componentes basta `@use 'mixins' as m;` — sem caminho relativo.

## Convenções importantes

### Camadas e responsabilidades

- **Templates leem UM signal**: `{{ t().nav.about }}`, não uma função por
  binding. É o padrão que rende bem com zoneless + `OnPush`.
- **Conteúdo vive em `core/data/`, nunca hardcoded em template.** Os templates
  iteram sobre dados tipados.
- **Componentes de seção não têm lógica de negócio** — só leem signal e
  formatam.

### Idioma

- **A URL é a fonte da verdade do idioma.** Nunca o `localStorage`. Ele guarda
  apenas para qual idioma redirecionar quando alguém chega em `/`.
- Rotas são **literais** (`/pt`, `/en`), não `/:lang`. Assim o crawler do
  prerender descobre as duas sozinho, sem `getPrerenderParams`.
- O dicionário português (`core/i18n/pt.ts`) é a **fonte da forma**:
  `export type Dict = typeof PT`. O inglês é `const EN: Dict`, então chave
  faltando ou sobrando é erro de compilação.
- Âncoras de seção são **neutras de idioma** (`#about`, não `#sobre`), porque o
  seletor de idioma usa `preserveFragment`.

### Tema

- Três estados: `light` / `dark` / `system`, em ciclo puro.
- `system` **não é persistido**: a ausência da chave no `localStorage` *é* o
  estado `system`. Isso devolve o controle ao `@media (prefers-color-scheme)`,
  que acompanha o SO sem listener em JS e funciona sem JavaScript.
- O serviço **semeia seu signal a partir do DOM** (`dataset.theme`), em vez de
  redecidir. É o que evita o segundo salto de cor na hidratação.

### Estilo

- Cores só via custom properties (`var(--ink)`), nunca hex direto em componente.
- Espaçamento em múltiplos de 8, via `var(--sp-*)`.
- Breakpoints só via `@include m.bp(md)` — mobile-first, sempre `min-width`.
- Movimento sempre dentro de `@include m.motion-safe` ou de um
  `@media (prefers-reduced-motion: no-preference)`.

### Cor de texto sobre o accent

Use **`var(--accent-on)`**, nunca `white`. Branco sobre o accent dá 6,36:1 no
tema claro (passa AA) mas apenas **3,07:1** no escuro (falha). No escuro o texto
sobre o accent precisa ser quase-preto. O token resolve isso por tema.

## ⚠️ NÃO FAÇA

### API instável

- **Não use API em developer preview.** Este código é vitrine. Ficam de fora na
  21: `resource()`, `httpResource()`, Signal Forms (`@angular/forms/signals`),
  Angular Aria e `withViewTransitions()`.
- **Não readicione `withViewTransitions()`.** É `@developerPreview` desde a 19
  *e* quebrava na prática: cada clique em âncora é uma navegação de rota,
  disparava uma transição que abortava com
  `InvalidStateError: Transition was aborted because of invalid state`, e a
  transição abortada deixava resíduo visual. O motivo está documentado em
  `app.config.ts`.
- **Não use sintaxe exclusiva da 22** (`@boundary`, arrow function em template).

### Angular 21 especificamente

- **Não esqueça `changeDetection: ChangeDetectionStrategy.OnPush`.** Não é
  default na 21 (virou na 22). Sem ele, zoneless + signals desperdiça o ganho.
  Os schematics do `angular.json` já o aplicam em `ng g c`.
- **Não escreva `standalone: true`** — é redundante desde a 19 e um revisor nota.
- **Não adicione `RenderMode.Server`** em `app.routes.server.ts`. Com
  `outputMode: 'static'` não existe servidor em produção.
- **Não recrie `src/server.ts`** nem reintroduza o Express. Foram removidos por
  serem código morto em modo estático.

### Prerender (SSG)

- **Não acesse `window`, `document`, `localStorage`, `navigator` ou
  `matchMedia` em tempo de construção sem guard.** Use
  `isPlatformBrowser(inject(PLATFORM_ID))` ou `afterNextRender()`. É de longe a
  forma mais comum de quebrar o build de prerender.
- **Não deixe conteúdo depender de JavaScript para aparecer.** O HTML
  prerenderizado precisa ser legível sem JS — é metade do motivo de o prerender
  existir.

### Reveal no scroll

- **Não use `IntersectionObserver` aqui.** Já existiu e foi removido. O modo de
  falha é severo: enquanto não revelado o elemento está com `opacity: 0`, então
  um observer que não dispara não degrada a animação — deixa a página em branco.
  E existe ambiente onde ele existe (`typeof` retorna `'function'`), aceita
  `observe()` sem erro e nunca chama o callback.
- **Não agende o check inicial com `requestAnimationFrame`.** Browsers pausam
  rAF em aba oculta, e abrir o site em aba de fundo é comum. O check inicial é
  síncrono de propósito.
- **Não remova a guarda `.js`** da regra que oculta os elementos de reveal em
  `styles.scss`. É o que garante que sem JavaScript nada seja ocultado.

### Tipos e dados

- **Não use `as const` nos dicionários.** Ele fixaria os valores como tipos
  literais (`"Sobre"` em vez de `string`) e o dicionário inglês não conseguiria
  atribuir os próprios textos. Sem ele a segurança de chave continua intacta.
- **Não crie `Record<Locale, Experience[]>`.** O padrão é esqueleto único com
  campos bilíngues (`Translated<T>`), que torna divergência de quantidade ou
  ordem entre idiomas estruturalmente impossível.
- **Não coloque texto traduzido em campos neutros.** `tech` e `SkillGroup.items`
  contêm apenas nomes próprios (Java, Oracle). Habilidade conceitual traduzida
  vai em `bullets` ou no rótulo do grupo.
- **Não use `any`.** Se precisar, justifique em comentário.

### Conteúdo e design

- **Não adicione barra ou porcentagem de proficiência** nas skills. Foi decisão
  explícita: é arbitrário e frágil de defender em entrevista.
- **Não intercale os trabalhos paralelos (Vetto AI, freelance) entre os cargos
  da Cassol.** A progressão estagiário → analista → programador é o argumento
  central da página; quebrá-la esvazia o site.
- **Não adicione formulário de contato.** Exige backend, cria ponto de falha e
  quase ninguém preenche.
- **Não digite o intervalo total da empresa à mão** — ele é derivado dos cargos
  em `Experience.orgRange()`.

### Sass e config

- **Não use as funções globais `map-get` / `map-keys`** (deprecadas no Dart
  Sass). Use `@use 'sass:map'` e `map.get`.
- **Não adicione chaves fora do schema no `vercel.json`** (ex.: `comment`). A
  Vercel valida contra schema e o deploy falha.
- **Não adicione redirect de `/` para `/pt`** no `vercel.json`. A raiz detecta o
  idioma do browser; um 308 entregaria português a um recrutador estrangeiro. O
  motivo está em `DEPLOY.md`.

## Testes

- 17 testes em 4 arquivos, cobrindo **lógica real** — nada de teste de
  componente estático, que não agrega.
- O que é coberto: ciclo de tema, formatação de data por idioma, detecção de
  locale do browser, paridade estrutural dos dicionários.
- Rodar: `npm test`.
- **Ao alterar `nextChoice`, `formatYearMonth`, `formatRange` ou
  `localeFromLanguages`, rode os testes.** Eles foram validados por mutação:
  quebrar o ciclo de tema derruba 2 testes; remover o tratamento de mês único
  derruba 1.
- Teste novo deve provar que falha quando o código quebra. Teste que passa
  sempre não vale nada.

## Ambiente de desenvolvimento — armadilhas conhecidas

O painel de browser embutido roda com `visibilityState: "hidden"`. Consequências
ao verificar mudanças:

- `requestAnimationFrame` e `IntersectionObserver` **não disparam**.
  `setTimeout` funciona.
- Screenshots vêm em branco quando a página está rolada, e rolagem programática
  pode travar o painel (recupera com `navigate` + `force: true`).
- **Para capturar a página inteira**, use viewport altíssima
  (`resize_window` com `height: 4900`) em vez de rolar.
- Para verificar conteúdo, prefira `get_page_text` e medição de geometria
  (`getBoundingClientRect`, `elementFromPoint`) a screenshot.
- **Não meça `getComputedStyle` logo após uma troca de tema** — a transição de
  320ms está em curso e o valor lido é o inicial. Já gerou um falso diagnóstico
  de "dark mode quebrado".

## Pendências

Arquivos e valores que ainda precisam de ação, nenhum exigindo mudança de
estrutura:

| O que | Onde | Situação |
|---|---|---|
| Foto de perfil | `public/img/portrait.svg` | Placeholder "JP". Substituir o arquivo basta — sem mudança de código. |
| `SITE_URL` | `core/site.ts` | Placeholder. Alimenta canonical, hreflang e OG — OG exige URL absoluta. Trocar após o primeiro deploy. |
| Textos do Hero e do Sobre | `core/i18n/pt.ts` e `en.ts` | Rascunho meu, marcado com `TODO(joão)`. São a voz dele. |
| URL do LinkedIn | `core/data/contact.ts` | Conferir uma vez. O currículo traz um formato inválido (sem `/in/`, com acentos, que slugs do LinkedIn não aceitam); o valor atual é a forma ASCII. |

**Resolvido:** os PDFs do currículo já estão em `public/cv/`
(`Curriculo-JoaoPedroLourencoDavid.pdf` e `Resume-JoaoPedroLourencoDavid.pdf`), e
os caminhos em `contact.ts` batem com eles.

⚠️ **Bloqueio externo — CORS na API de clima:** `ai-weather-forecasting` não
tem `CORSMiddleware` configurado. Sem isso, o navegador bloqueia a chamada do
modal de Projetos para a API a partir do domínio do portfólio. Precisa ser
corrigido naquele repositório (fora do escopo deste), não aqui.

⚠️ **Acoplamento por nome de arquivo:** os caminhos em `contact.ts` são strings
literais. Renomear um PDF sem atualizar o código gera **404 silencioso** — o link
continua clicável e nada no build acusa. Após qualquer troca de arquivo em
`public/cv/`, confira que cada `href="/cv/..."` do HTML gerado corresponde a um
arquivo existente em `dist/my-portfolio/browser/cv/`.

## Por que Angular 21 e não 22

Duas razões, ambas concretas:

1. Paridade com a versão usada na Cassol.
2. O Angular 22 exige Node `^24.15.0` e a máquina tem **24.14.0** — a 22
   exigiria atualizar o Node antes. A 21 aceita `^24.0.0`.

Ao atualizar no futuro, o que muda de imediato: `OnPush` passa a ser default (os
overrides explícitos ficam redundantes mas inofensivos), e `resource()`,
`httpResource()` e Signal Forms saem de experimental.

## Git e PRs

- Branch: `feat/`, `fix/`, `chore/` + descrição em kebab-case
- Commits no imperativo, descrevendo o *porquê* quando não for óbvio
- Não commitar `dist/` nem `.angular/` (já no `.gitignore`)
- **O `package-lock.json` é commitado** de propósito — o `.gitignore` original
  o ignorava, o que tornaria os builds da Vercel não reproduzíveis

---

## Master Rules
Do not follow these rules unless the user explicitly instructs you to do so.

- For searching and reading, ALWAYS use the Haiku template from the default effort.
- For creating plans, ALWAYS use the latest Sonnet template.
- For writing code and reviewing, ALWAYS use the latest Opus template from the minimum effort.
- NEVER sign anything on behalf of Claude/Anthropic (commits, all, comments ...)

---
