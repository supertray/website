import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    headline1: z.string(),
    headline2: z.string(),
    slackMessages: z.array(
      z.array(
        z.object({
          displayName: z.string(),
          message: z.string(),
          time: z.string(),
          avatar: z.string(),
          index: z.number(),
        }),
      ),
    ),
    paragraphs: z.array(z.string()),
    featureHeadline: z.string(),
    featureParagraph: z.string(),
    featureGrid: z.array(
      z.object({
        headline: z.string(),
        paragraph: z.string(),
        icon: z.string(),
      }),
    ),
    joinWaitlist: z.object({
      copy: z.string(),
      cta: z.string(),
    }),
  }),
});

const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    content: z.string(),
  }),
});

const waitlistCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    paragraph: z.string(),
  }),
});

export const collections = {
  home: homeCollection,
  legal: legalCollection,
  privacy: legalCollection,
  waitlist: waitlistCollection,
};
