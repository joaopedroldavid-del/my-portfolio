import { computed, DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';

import { OG_LOCALE, SITE_NAME, SITE_URL } from '../site';
import { EN } from './en';
import { Dict, PT } from './pt';
import { DEFAULT_LOCALE, LANG_TAG, LOCALES, Locale } from './locale.model';

const DICTS: Record<Locale, Dict> = { pt: PT, en: EN };

/**
 * Estado de idioma e metadados da página.
 *
 * A URL é a fonte da verdade: quem define o locale é a rota (/pt ou /en), não
 * uma preferência salva. Se o armazenamento vencesse a URL, mandar /en para um
 * recrutador estrangeiro abriria em português — o que anularia o motivo de
 * existirem duas rotas.
 *
 * Por isso `setLocale` é chamado pelo componente de rota durante a construção:
 * o valor já está correto no passo de prerender, e todas as tags abaixo saem
 * gravadas no HTML estático em vez de dependerem de JavaScript no cliente.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly doc = inject(DOCUMENT);

  private readonly _locale = signal<Locale>(DEFAULT_LOCALE);
  readonly locale = this._locale.asReadonly();

  /**
   * Dicionário ativo. Os templates leem UM signal — `{{ t().nav.about }}` — em
   * vez de uma função por binding, que é o padrão que rende bem com zoneless.
   */
  readonly t = computed<Dict>(() => DICTS[this._locale()]);

  /** Tag BCP 47 completa, para o atributo lang e para hreflang. */
  readonly langTag = computed(() => LANG_TAG[this._locale()]);

  constructor() {
    effect(() => {
      const locale = this._locale();
      const t = this.t();
      const url = `${SITE_URL}/${locale}`;

      this.doc.documentElement.lang = LANG_TAG[locale];
      this.doc.title = t.meta.title;

      this.setMeta('name', 'description', t.meta.description);

      // Canonical evita que /pt e /en sejam tratadas como conteúdo duplicado.
      this.setLink('canonical', url);

      // hreflang recíproco: cada rota aponta para si e para a irmã. Sem o par
      // completo, buscadores ignoram a declaração.
      for (const alt of LOCALES) {
        this.setLink('alternate', `${SITE_URL}/${alt}`, LANG_TAG[alt]);
      }
      // x-default indica o destino para quem não casa com nenhum idioma.
      this.setLink('alternate', `${SITE_URL}/${DEFAULT_LOCALE}`, 'x-default');

      // Open Graph usa o atributo `property`, não `name` — trocar os dois é o
      // erro clássico que faz o preview do link vir vazio.
      this.setMeta('property', 'og:type', 'profile');
      this.setMeta('property', 'og:site_name', SITE_NAME);
      this.setMeta('property', 'og:locale', OG_LOCALE[locale]);
      this.setMeta('property', 'og:title', t.meta.title);
      this.setMeta('property', 'og:description', t.meta.description);
      this.setMeta('property', 'og:url', url);
      this.setMeta('property', 'og:image', `${SITE_URL}/og/og-${locale}.png`);
      this.setMeta('property', 'og:image:width', '1200');
      this.setMeta('property', 'og:image:height', '630');

      this.setMeta('name', 'twitter:card', 'summary_large_image');
      this.setMeta('name', 'twitter:title', t.meta.title);
      this.setMeta('name', 'twitter:description', t.meta.description);
      this.setMeta('name', 'twitter:image', `${SITE_URL}/og/og-${locale}.png`);
    });
  }

  setLocale(locale: Locale): void {
    this._locale.set(locale);
  }

  private setMeta(attr: 'name' | 'property', key: string, content: string): void {
    let tag = this.doc.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (!tag) {
      tag = this.doc.createElement('meta');
      tag.setAttribute(attr, key);
      this.doc.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;

    let tag = this.doc.querySelector<HTMLLinkElement>(selector);
    if (!tag) {
      tag = this.doc.createElement('link');
      tag.setAttribute('rel', rel);
      if (hreflang) tag.setAttribute('hreflang', hreflang);
      this.doc.head.appendChild(tag);
    }
    tag.setAttribute('href', href);
  }
}
