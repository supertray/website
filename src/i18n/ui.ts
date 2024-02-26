export const languages = {
  en: 'English',
  de: 'Deutsch',
};

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'joinWaitlist': 'Join Waitlist',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy',
    'head.description':
      'Innovative document management for efficient collaboration, time-saving, and enhanced security in businesses.',
  },
  de: {
    'joinWaitlist': 'Warteliste beitreten',
    'footer.legal': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'head.description':
      'Innovatives Dokumentenmanagement für effiziente Zusammenarbeit, Zeitersparnis und erhöhte Sicherheit in Unternehmen.',
  },
} as const;
