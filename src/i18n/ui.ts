export const languages = {
  en: 'English',
  de: 'Deutsch',
};

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'joinWaitlist': 'Join Waitlist',
    'joinTheWaitlist': 'Join the waitlist',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy',
    'head.description':
      'Innovative document management for efficient collaboration, time-saving, and enhanced security in businesses.',
    'nav.switchTo': 'Switch language to',
    'waitlistForm.firstName': 'First Name',
    'waitlistForm.lastName': 'Last Name',
    'waitlistForm.company': 'Company Name',
    'waitlistForm.email': 'Email',
    'waitlistForm.useCase': 'Tell us a bit about your use case. This helps us understand your needs better.',
    'form.validation.required': 'This field is required',
    'form.validation.email': 'Please enter a valid email address',
    'form.validation.invalidResult': 'The result is not correct',
    'waitlistForm.alreadyOnWaitlist': 'You are already on the waitlist',
    'waitlistForm.success': 'You are now on the waitlist.',
    'loading': 'Loading...',
    'waitlistForm.enterResult': 'Enter the result',
  },
  de: {
    'joinWaitlist': 'Warteliste beitreten',
    'joinTheWaitlist': 'Der Warteliste beitreten',
    'footer.legal': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'head.description':
      'Innovatives Dokumentenmanagement für effiziente Zusammenarbeit, Zeitersparnis und erhöhte Sicherheit in Unternehmen.',
    'nav.switchTo': 'Sprache wechseln zu',
    'waitlistForm.firstName': 'Vorname',
    'waitlistForm.lastName': 'Nachname',
    'waitlistForm.company': 'Unternehmensname',
    'waitlistForm.email': 'E-Mail',
    'waitlistForm.useCase':
      'Erzähle uns ein bisschen über deine Problemstellung. Das hilft uns, deine Bedürfnisse besser zu verstehen.',
    'form.validation.required': 'Dieses Feld ist erforderlich',
    'form.validation.email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    'form.validation.invalidResult': 'Das Ergebnis ist nicht korrekt',
    'waitlistForm.alreadyOnWaitlist': 'Sie sind bereits auf der Warteliste',
    'waitlistForm.success': 'Du stehst jetzt auf der Warteliste.',
    'loading': 'Lädt...',
    'waitlistForm.enterResult': 'Ergebnis eingeben',
  },
} as const;
