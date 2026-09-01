import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

import { Project } from '../../core/data/projects';
import { I18nService } from '../../core/i18n/i18n.service';
import { classifyCondition } from '../../core/weather/weather-condition';
import { WeatherApiService } from '../../core/weather/weather-api.service';

/**
 * Duração da animação de saída, em ms — espelha `--dur` de `_tokens.scss`.
 * Não dá pra ler a custom property daqui sem um `getComputedStyle` a mais;
 * como as duas só precisam ficar em sincronia visual (não bit-a-bit), o valor
 * fixo com este comentário é suficiente.
 */
const CLOSE_ANIMATION_MS = 320;

/**
 * Modal de "testar projeto". Primeiro dialog do site — não há biblioteca de
 * UI para se apoiar, então trap de foco, Escape e clique no backdrop são
 * implementados à mão aqui.
 *
 * O componente só é criado quando o usuário clica em "Testar" (`@if` no
 * template de `Projects`), então nunca existe durante o prerender — não há
 * necessidade de guardas de SSR além da leitura de foco no `constructor`.
 */
@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'onKeydown($event)',
  },
})
export class ProjectModal {
  readonly project = input.required<Project>();
  readonly closed = output<void>();

  private readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;

  private readonly weatherApi = inject(WeatherApiService);
  protected readonly loading = this.weatherApi.loading;
  protected readonly error = this.weatherApi.error;
  protected readonly result = this.weatherApi.result;

  /** Categoria visual da condição atual — decide qual ícone animado mostrar. */
  protected readonly condition = computed(() => {
    const forecast = this.result();
    return forecast ? classifyCondition(forecast.forecast.forecast) : null;
  });

  // `null` até o usuário escolher — o <select> nativo já mostra a primeira
  // cidade selecionada, então o fallback só importa na hora de buscar.
  protected readonly city = signal<string | null>(null);
  protected readonly date = signal('');

  /**
   * Fica `true` do clique em fechar até o fim da animação de saída — o
   * template usa isto para trocar a classe do backdrop/diálogo. Sem isso o
   * `@if` do componente-pai removeria o modal do DOM instantaneamente, e a
   * animação de entrada nunca teria uma simétrica de saída.
   */
  protected readonly closing = signal(false);

  private readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    if (!this.isBrowser) return;
    // Move o foco para dentro do diálogo assim que ele existe no DOM.
    afterNextRender(() => this.dialog()?.nativeElement.focus());
  }

  protected onCityChange(event: Event): void {
    this.city.set((event.target as HTMLSelectElement).value);
  }

  protected onDateChange(event: Event): void {
    this.date.set((event.target as HTMLInputElement).value);
  }

  protected search(): void {
    if (!this.date()) return;
    const location = this.city() ?? this.project().cities[0];
    this.weatherApi.search(location, this.date());
  }

  protected close(): void {
    if (this.closing()) return;
    this.closing.set(true);

    // Sem preferência por menos movimento, a animação CSS de saída nem existe
    // (ver o motion-safe em project-modal.scss) — fechar tem que ser
    // imediato, ou o modal ficaria preso por 320ms sem nada visível mudando.
    if (this.prefersReducedMotion()) {
      this.emitClosed();
      return;
    }
    setTimeout(() => this.emitClosed(), CLOSE_ANIMATION_MS);
  }

  private emitClosed(): void {
    this.weatherApi.reset();
    this.closed.emit();
  }

  private prefersReducedMotion(): boolean {
    return this.isBrowser && matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key === 'Tab') this.trapFocus(event);
  }

  /** Prende Tab/Shift+Tab dentro do diálogo — não há foco preso por padrão. */
  private trapFocus(event: KeyboardEvent): void {
    const root = this.dialog()?.nativeElement;
    if (!root) return;

    const focusable = root.querySelectorAll<HTMLElement>(
      'button, select, input, [href], [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = root.ownerDocument.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  protected rounded(value: number): number {
    return Math.round(value);
  }
}
