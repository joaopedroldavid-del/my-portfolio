// Lê `.env` (não commitado) e gera `src/environments/environment.ts`
// (também não commitado). Roda antes de `npm start`/`npm run build` via
// os scripts `prestart`/`prebuild` do package.json.
//
// É uma substituição em BUILD TIME, não uma leitura de segredo em runtime: o
// build de produção é estático (outputMode: 'static', sem servidor Node), e a
// própria URL não é sensível — a API não exige chave, então qualquer visitante
// já a vê na aba de rede do navegador. O `.env` existe para não hardcodar a
// URL no código-fonte, não para escondê-la.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const envPath = `${root}.env`;
const outPath = `${root}src/environments/environment.ts`;

function parseEnv(text) {
  const values = {};
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim().replace(/^['"]|['"]$/g, '');
    values[key] = value;
  }
  return values;
}

let env = {};
try {
  env = parseEnv(readFileSync(envPath, 'utf8'));
} catch {
  // Normal na Vercel: não existe .env no build, a variável já vem em
  // process.env (é assim que a Vercel injeta o que foi cadastrado no
  // dashboard). Só é problema se process.env também não tiver o valor —
  // e isso o aviso abaixo cobre.
}

// process.env vence o .env: é o que a Vercel injeta a partir do dashboard,
// e localmente também funciona se a variável estiver exportada no shell.
const weatherApiBaseUrl = process.env.WEATHER_API_BASE_URL ?? env.WEATHER_API_BASE_URL ?? '';
if (!weatherApiBaseUrl) {
  console.warn(
    '[generate-environment] WEATHER_API_BASE_URL não definido. Copie .env.example para .env e ajuste.',
  );
}

const content = `// GERADO por scripts/generate-environment.mjs a partir do .env — não editar
// à mão, não commitar (veja .gitignore). Formato documentado em
// environment.example.ts.
export const environment = {
  weatherApiBaseUrl: ${JSON.stringify(weatherApiBaseUrl)},
};
`;

writeFileSync(outPath, content);
console.log(`[generate-environment] ${outPath} gerado.`);
