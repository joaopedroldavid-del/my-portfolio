/**
 * Converte a data de um `<input type="date">` ('AAAA-MM-DD', formato nativo
 * do HTML) para o formato exigido pela API ('MM-DD-AAAA').
 *
 * Função pura só para essa conversão — é o único trecho de lógica de negócio
 * real desta feature, então é o único que ganha teste, seguindo a política de
 * testes do projeto (ver `content.model.spec.ts`).
 */
export function toApiDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');
  return `${month}-${day}-${year}`;
}
