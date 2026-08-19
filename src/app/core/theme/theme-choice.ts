import { ThemeChoice } from './theme.model';

/**
 * Próxima escolha de tema quando o usuário aciona o toggle.
 *
 * Ciclo de três estados: light -> dark -> system -> light...
 *
 * Por que o ciclo é puro, sem pular estados:
 *
 * Existem três escolhas mas apenas duas cores. Quando o sistema operacional
 * está em escuro, 'system' e 'dark' pintam exatamente igual — e o mesmo vale
 * para 'system' e 'light' quando o sistema está claro. Ou seja, um passo do
 * ciclo sempre será visualmente idêntico ao anterior.
 *
 * A tentação é pular esse passo para que todo clique mude a cor. Mas pular
 * torna 'system' INALCANÇÁVEL: com o SO em escuro, o ciclo degeneraria em
 * light -> dark -> light -> dark, e o usuário nunca conseguiria voltar a
 * seguir o sistema.
 *
 * Então o ciclo é preservado inteiro, e a responsabilidade de deixar claro o
 * que aconteceu passa para o botão: ele precisa mostrar os três estados
 * (rótulo ou ícone distinto para 'system'). Sem isso, um dos cliques parece
 * quebrado.
 */
export function nextChoice(current: ThemeChoice): ThemeChoice {
  switch (current) {
    case 'light':
      return 'dark';
    case 'dark':
      return 'system';
    case 'system':
      return 'light';
  }
}
