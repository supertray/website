import { defaultLang, ui } from './ui';

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations<L extends keyof typeof ui & string>(lang: L) {
  return function t<K extends keyof (typeof ui)[L] & string>(key: K): (typeof ui)[L][K] | `[MISSING_${L}_${K}]` {
    return ui[lang][key] || `[MISSING_${lang}_${key}]`;
  };
}
