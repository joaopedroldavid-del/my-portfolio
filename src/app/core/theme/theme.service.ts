import {
  DOCUMENT,
  effect,
  inject,
  Injectable,
  PLATFORM_ID,
  afterNextRender,
  computed,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { nextChoice } from './theme-choice';
import { isPersistedChoice, ResolvedTheme, THEME_STORAGE_KEY, ThemeChoice } from './theme.model';

/**
 * Estado de tema da aplicação.
 *
 * Divisão de trabalho com o guard inline do index.html:
 *   - o guard pinta antes do primeiro frame (e é o único que consegue fazê-lo);
 *   - este serviço *lê o que o guard já pintou* e assume as escritas seguintes.
 * O primeiro valor do signal bate com o que está na tela, então não existe um
 * segundo salto de cor durante a hidratação.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** Preferência do sistema operacional. No prerender assume claro. */
  private readonly systemPrefersDark = signal(false);

  /** Intenção do usuário — a fonte da verdade. */
  private readonly _choice = signal<ThemeChoice>('system');
  readonly choice = this._choice.asReadonly();

  /** O que a interface realmente pinta. */
  readonly resolved = computed<ResolvedTheme>(() => {
    const choice = this._choice();
    if (choice !== 'system') return choice;
    return this.systemPrefersDark() ? 'dark' : 'light';
  });

  constructor() {
    if (this.isBrowser) {
      // O guard só escreve data-theme quando houve escolha explícita, então a
      // presença do atributo *é* o sinal de que existe preferência salva.
      const painted = this.doc.documentElement.dataset['theme'];
      if (isPersistedChoice(painted)) {
        this._choice.set(painted);
      }

      const query = window.matchMedia('(prefers-color-scheme: dark)');
      this.systemPrefersDark.set(query.matches);
      query.addEventListener('change', (event) => this.systemPrefersDark.set(event.matches));
    }

    // Reflete a escolha no DOM e no armazenamento.
    effect(() => {
      const choice = this._choice();
      if (!this.isBrowser) return;

      const root = this.doc.documentElement;
      if (choice === 'system') {
        // Remover o atributo devolve o controle ao @media do CSS, que segue o
        // sistema sem JavaScript. Por isso 'system' nunca é persistido.
        delete root.dataset['theme'];
        this.safeRemove();
      } else {
        root.dataset['theme'] = choice;
        this.safeWrite(choice);
      }
    });

    // Habilita a transição de cor só depois do primeiro frame, senão a
    // hidratação faria um cross-fade indesejado.
    afterNextRender(() => this.doc.documentElement.classList.add('theme-ready'));
  }

  toggle(): void {
    this._choice.set(nextChoice(this._choice()));
  }

  set(choice: ThemeChoice): void {
    this._choice.set(choice);
  }

  // localStorage lança em modo privado/cookies bloqueados — o tema não é
  // motivo para derrubar a página.
  private safeWrite(value: ResolvedTheme): void {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, value);
    } catch {
      /* ignorado de propósito */
    }
  }

  private safeRemove(): void {
    try {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } catch {
      /* ignorado de propósito */
    }
  }
}
