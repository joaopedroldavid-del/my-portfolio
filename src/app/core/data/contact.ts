/**
 * Dados de contato. Neutros de idioma — um e-mail não se traduz.
 */
export const CONTACT = {
  email: 'joaopedrolouren97@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joaopedrolourencodavid',
  github: 'https://github.com/joaopedroldavid-del',
  location: 'São Paulo, SP',
  /** Currículo por idioma — os arquivos vivem em public/cv/. */
  resume: {
    pt: '/cv/Curriculo-JoaoPedroLourencoDavid.pdf',
    en: '/cv/Resume-JoaoPedroLourencoDavid.pdf',
  },
} as const;

export class YourComponentName {
  justCopied = false;

  copyToClipboard(text: string): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.justCopied = true;
        setTimeout(() => {
          this.justCopied = false;
        }, 2000); // Volta ao normal após 2 segundos
      })
      .catch((err) => {
        console.error('Erro ao copiar:', err);
      });
  }
}
