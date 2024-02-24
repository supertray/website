export const languages = {
  en: 'English',
  de: 'Deutsch',
};

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'joinWaitlist': 'Join Waitlist',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
  },
  de: {
    'joinWaitlist': 'Warteliste beitreten',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
  },
} as const;
