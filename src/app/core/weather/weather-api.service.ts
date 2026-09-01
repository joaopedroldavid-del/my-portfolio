import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

import { environment } from '../../../environments/environment';
import { toApiDate } from './weather-date';

/**
 * A API não exige autenticação — só distingue "cidade sem suporte" (404) de
 * "data mal formada" (400/422) de qualquer outra falha, para a UI mostrar
 * cada caso com uma mensagem própria em vez de um erro genérico.
 */
export type WeatherErrorKind = 'not-supported' | 'bad-date' | 'generic';

export interface WeatherForecast {
  location: string;
  date: string;
  forecast: {
    temperature_max: number;
    temperature_min: number;
    temperature_avg: number;
    wind_speed: number;
    /** Condição em texto livre (ex.: "cloudy") — vem da API, não traduzida. */
    forecast: string;
    precipitation: number;
    /** Anos usados na média histórica — não é previsão em tempo real. */
    years: readonly number[];
  };
  narrative: string;
}

@Injectable({ providedIn: 'root' })
export class WeatherApiService {
  private readonly http = inject(HttpClient);

  private readonly _loading = signal(false);
  private readonly _error = signal<WeatherErrorKind | null>(null);
  private readonly _result = signal<WeatherForecast | null>(null);

  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly result = this._result.asReadonly();

  search(location: string, isoDate: string): void {
    this._loading.set(true);
    this._error.set(null);
    this._result.set(null);

    this.http
      .post<WeatherForecast>(`${environment.weatherApiBaseUrl}/forecast`, {
        location,
        date: toApiDate(isoDate),
      })
      .subscribe({
        next: (forecast) => {
          this._result.set(forecast);
          this._loading.set(false);
        },
        error: (err: HttpErrorResponse) => {
          this._error.set(this.mapError(err));
          this._loading.set(false);
        },
      });
  }

  reset(): void {
    this._error.set(null);
    this._result.set(null);
  }

  private mapError(err: HttpErrorResponse): WeatherErrorKind {
    if (err.status === 404) return 'not-supported';
    if (err.status === 400 || err.status === 422) return 'bad-date';
    return 'generic';
  }
}
