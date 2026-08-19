# Deploy

## Antes do primeiro deploy

Um arquivo ainda é placeholder:

| Arquivo | O que é |
|---|---|
| `public/img/portrait.svg` | Foto de perfil. Hoje é um placeholder "JP". Substituir o arquivo basta. |

Os currículos já estão no lugar:

| Arquivo | Idioma |
|---|---|
| `public/cv/Curriculo-JoaoPedroLourencoDavid.pdf` | português |
| `public/cv/Resume-JoaoPedroLourencoDavid.pdf` | inglês |

Os caminhos ficam em `src/app/core/data/contact.ts` como strings literais.
Renomear um PDF sem atualizar o código gera **404 silencioso**: o link continua
clicável e o build não acusa nada. Depois de qualquer troca, rode `npm run build`
e confirme que cada `href="/cv/..."` do HTML gerado tem arquivo correspondente em
`dist/my-portfolio/browser/cv/`.

## Depois do primeiro deploy

Atualizar `SITE_URL` em `src/app/core/site.ts` com a URL real. Ela alimenta
canonical, hreflang e Open Graph, e OG **exige URL absoluta** — com o valor
errado o preview do link no LinkedIn e no WhatsApp cai para texto puro.

## Configuração da Vercel

Nenhuma configuração manual é necessária: o preset Angular detecta o projeto,
roda `ng build` e serve `dist/my-portfolio/browser`. As rotas prerenderizadas
`/pt` e `/en` são servidas pelo handler de filesystem, que é avaliado antes do
fallback de SPA.

### Sobre o `vercel.json`

Ele contém **apenas** cabeçalhos de cache, em três faixas:

- `*.js` / `*.css` — a saída do build tem hash no nome, então cache eterno é seguro
- `/fonts/*` — nome fixo; cache de 30 dias permite substituir uma fonte
- `/img`, `/cv`, `/og` — serão trocados durante a configuração; cache de 1 dia

### Por que NÃO há redirect de `/` para `/pt`

A raiz é uma página prerenderizada que mostra os dois idiomas como links e, no
browser, redireciona conforme `localStorage` e depois `navigator.languages`.

Um redirect 308 na Vercel seria mais rápido, mas ignoraria o idioma do
visitante: um recrutador estrangeiro abrindo o domínio nu receberia português.
Como o portfólio tem dois mercados como alvo, a detecção vale o custo de uma
pintura. A raiz também traz `canonical` para `/pt`, então buscadores não a
tratam como conteúdo duplicado.

## Comandos

Build de produção com prerender:

```bash
npm run build
```

Testes:

```bash
npm test
```
