# Portfólio — João Pedro Lourenço David

Portfólio pessoal bilíngue, construído em Angular 21 com prerender estático.

Não é um template preenchido: o site é o próprio projeto de showcase, então as
decisões técnicas abaixo são deliberadas e estão documentadas no código.

**Stack:** Angular 21 LTS · TypeScript · SCSS · Vitest · prerender via `@angular/ssr`

---

## Decisões que valem explicação

### Prerender estático, não SPA

`outputMode: "static"` gera HTML completo para cada rota em build time. Não há
runtime Node em produção — o `server.ts` do scaffold foi removido junto com a
dependência do Express.

O motivo é concreto: serviços que geram preview de link (LinkedIn, WhatsApp,
Slack) em geral não executam JavaScript. Numa SPA, eles veriam apenas o
`index.html` vazio. Com prerender, cada idioma tem um documento completo, com
título, descrição e Open Graph próprios.

### Dois idiomas, duas rotas, sem biblioteca de i18n

`/pt` e `/en` são rotas **literais** — não um parâmetro `/:lang`. Com caminhos
literais o crawler do prerender descobre as duas sozinho, sem precisar de
`getPrerenderParams`.

O idioma vem da URL, nunca do `localStorage`. Se o armazenamento vencesse a URL,
mandar `/en` para alguém abriria em português — o que anularia o motivo de haver
duas rotas.

A tradução é um serviço de ~40 linhas com signals, sem dependência externa. O
tipo do dicionário é derivado do português:

```ts
export const PT = { nav: { about: 'Sobre' } };
export type Dict = typeof PT;
export const EN: Dict = { nav: { about: 'About' } };  // chave faltando = erro de build
```

### Tema sem flash na primeira pintura

O HTML prerenderizado é específico de idioma mas agnóstico de tema — não pode
conhecer o `localStorage` do visitante. E o Angular sobe depois da primeira
pintura, então aplicar tema num `effect()` pisca sempre.

A solução tem duas partes. Um script síncrono no `<head>` grava `data-theme`
antes de qualquer stylesheet, e o serviço Angular depois **semeia seu signal a
partir do DOM** em vez de redecidir — assim o primeiro valor bate com o que já
está na tela e não há segundo salto.

O estado `system` não é persistido: a *ausência* da chave é o estado `system`.
Isso devolve o controle ao `@media (prefers-color-scheme)` do CSS, que acompanha
o sistema operacional sem um único listener em JavaScript e funciona com JS
desligado.

### Reveal no scroll que não pode apagar a página

O efeito de revelação exige que o elemento comece com `opacity: 0`. Isso cria um
modo de falha severo: se o mecanismo de detecção não roda, a página fica
permanentemente em branco — não "sem animação", mas vazia.

Duas defesas contra isso:

1. A regra que oculta é escopada em `html.js`, classe adicionada pelo script
   inline. Sem JavaScript nada é ocultado e o HTML prerenderizado aparece
   inteiro.
2. A detecção usa `getBoundingClientRect`, não `IntersectionObserver`. Durante o
   desenvolvimento encontrei um ambiente onde o `IntersectionObserver` existe,
   aceita `observe()` sem erro e nunca chama o callback — um guard de
   `typeof === 'undefined'` não cobre esse caso. O check inicial também é
   síncrono, e não via `requestAnimationFrame`, porque browsers pausam rAF em
   aba oculta: abrir o site em aba de fundo deixaria o conteúdo invisível.

### Nada de API em developer preview

O código é vitrine, então não expõe API instável. `resource()`, `httpResource()`
e Signal Forms ficaram fora (experimentais na 21), e o
`withViewTransitions()` — que eu havia adicionado — foi removido ao descobrir
que é `@developerPreview` e que abortava com `InvalidStateError` a cada
navegação por âncora.

### Conteúdo como dado tipado com campos bilíngues

O esqueleto do conteúdo é único; só os campos textuais são bilíngues:

```ts
interface Role {
  title: Translated;                     // traduzido
  bullets: Translated<readonly string[]>;
  tech: readonly string[];               // nomes próprios, neutros
  start: YearMonth;                      // ISO, formatado por idioma na renderização
}
```

Com dois arrays paralelos (`Record<Locale, Role[]>`), nada impediria as versões
divergirem em quantidade ou ordem. Com esqueleto único isso é estruturalmente
impossível.

Datas são formatadas com `Intl.DateTimeFormat.formatToParts`, usando apenas as
partes de mês e ano — o `format` direto em português devolveria `mai. de 2025`.

---

## Acessibilidade

- Contraste WCAG AA verificado numericamente nos dois temas
- O botão de tema tem cor de texto **invertida por tema**: branco sobre o accent
  passa no claro (6,4:1) mas falharia no escuro (3,1:1), então existe um token
  `--accent-on`
- `prefers-reduced-motion` desliga toda animação
- Navegação por teclado com foco visível e link para saltar a navegação
- Âncoras de seção são neutras de idioma (`#about`, não `#sobre`), para que
  trocar de idioma preserve a posição na página

---

## Comandos

```bash
npm start        # servidor de desenvolvimento
npm run build    # build de produção com prerender
npm test         # Vitest
```

Instruções de deploy e os arquivos que ainda precisam ser substituídos estão em
[DEPLOY.md](DEPLOY.md).
