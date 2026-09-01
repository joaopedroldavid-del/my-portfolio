/**
 * Classifica o texto livre da API ("cloudy", "light rain"...) num pequeno
 * conjunto de categorias visuais. A API não documenta um enum fechado, então
 * isto é heurístico por palavra-chave — função pura, ganha teste como
 * `toApiDate`.
 */
export type WeatherCondition = 'sunny' | 'cloudy' | 'rainy' | 'unknown';

const RAINY_KEYWORDS = ['rain', 'drizzle', 'shower', 'storm', 'thunder'];
const SUNNY_KEYWORDS = ['clear', 'sunny', 'sun'];
const CLOUDY_KEYWORDS = ['cloud', 'overcast', 'fog', 'mist', 'haze'];

export function classifyCondition(raw: string): WeatherCondition {
  const value = raw.toLowerCase();
  if (RAINY_KEYWORDS.some((keyword) => value.includes(keyword))) return 'rainy';
  if (SUNNY_KEYWORDS.some((keyword) => value.includes(keyword))) return 'sunny';
  if (CLOUDY_KEYWORDS.some((keyword) => value.includes(keyword))) return 'cloudy';
  return 'unknown';
}
