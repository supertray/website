export const languages = {
  en: 'English',
  de: 'Deutsch',
};

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'headline1': 'Working with documents is broken.',
    'headline2': 'We are fixing it in the cloud or <span class="text-orange-10">on your server.</span>',
    'joinWaitlist': 'Join Waitlist',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',

    'slackMessages.0.message':
      'Where can I find the contract for our freelancer Tom? I have looked for it inside shared/freelancer/contracts folder on our nas but only can find the version A1 😖',
    'slackMessages.0.displayName': 'Sebastian',
    'slackMessages.0.time': '09:15 AM',

    'slackMessages.1.message': 'Hi Sue, I cannot access this doc. Can you please share it with me?',
    'slackMessages.1.displayName': 'Monica',
    'slackMessages.1.time': '02:35 PM',

    'slackMessages.2.message': 'I have shared it with you. Can you access it now?',
    'slackMessages.2.displayName': 'Sue',
    'slackMessages.2.time': '04:12 PM',

    'slackMessages.3.message':
      'WTF… I found version B4-final inside customers/acme/projects/website-relaunch/freelancers…<br />Is this really the final version?',
    'slackMessages.3.displayName': 'Alex',
    'slackMessages.3.time': '11:44 AM',

    'slackMessages.4.message':
      'Hey, can you please send me the invoice of an amazon order from april 2022. We cannot find it…',
    'slackMessages.4.displayName': 'Susan',
    'slackMessages.4.time': '08:31 AM',

    'slackMessages.5.message': 'I sent it to you via mail. I will search for it and send it again.',
    'slackMessages.5.displayName': 'Ben',
    'slackMessages.5.time': '01:56 PM',
  },
  de: {
    'headline1': 'Die Arbeit mit Dokumenten ist fehlerhaft.',
    'headline2': 'Wir ändern das. In der Cloud oder <span class="text-orange-10">auf deinem Server.</span>',
    'joinWaitlist': 'Warteliste beitreten',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',

    'slackMessages.0.message':
      'Wo finde ich den Vertrag für unseren Freelancer Tom? Ich habe im Ordner shared/freelancer/contracts auf unserem Netzlaufwerk gesucht, aber nur die Verion A1 gefunden 😖',
    'slackMessages.0.displayName': 'Sebastian',
    'slackMessages.0.time': '09:15',

    'slackMessages.1.message': 'Hi Maya, ich kann nicht auf das Dokument zugreifen. Kannst du es bitte mit mir teilen?',
    'slackMessages.1.displayName': 'Monika',
    'slackMessages.1.time': '14:35',

    'slackMessages.2.message': 'Ich habe es nochmal freigegeben. Kannst du jetzt darauf zugreifen?',
    'slackMessages.2.displayName': 'Maya',
    'slackMessages.2.time': '16:12',

    'slackMessages.3.message':
      'OMG… Ich habe den Vertrag als B4-final im Ordner kunden/acme/projekte/website-relaunch/freelancer gefunden…<br />Ist das wirklich die finale Version?',
    'slackMessages.3.displayName': 'Alexander',
    'slackMessages.3.time': '11:44',

    'slackMessages.4.message':
      'Hey, kannst du mir bitte die Rechnung deiner Amazon-Bestellung aus dem April 2022 schicken? Ich kann sie nirgendwo finden...',
    'slackMessages.4.displayName': 'Susanne',
    'slackMessages.4.time': '08:31',

    'slackMessages.5.message': 'Ich habe sie dir per Mail geschickt. Ich suche sie und schicke sie dir nochmal.',
    'slackMessages.5.displayName': 'Benjamin',
    'slackMessages.5.time': '13:56',
  },
} as const;
