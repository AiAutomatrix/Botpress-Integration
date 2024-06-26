import { z, IntegrationDefinition } from '@botpress/sdk'
import { integrationName } from './package.json'

export default new IntegrationDefinition({
  name: integrationName,
  version: '0.0.1',
  readme: 'hub.md',
  icon: 'icon.svg',
  actions: {
    facebookAction: {
      title: 'Facebook',
      description: 'A simple Facebook action',
      input: {
        schema: z.object({
          input: z.string().optional(),
        }),
      },
      output: {
        schema: z.object({
          message: z.string(),
        }),
      },
    },
    instaAction: {
      title: 'Instagram',
      description: 'A simple Instagram action',
      input: {
        schema: z.object({
          input: z.string().optional(),
        }),
      },
      output: {
        schema: z.object({
          message: z.string(),
        }),
      },
    },
    linkedInAction: {
      title: 'LinkedIn',
      description: 'A simple LinkedIn action',
      input: {
        schema: z.object({
          input: z.string().optional(),
        }),
      },
      output: {
        schema: z.object({
          message: z.string(),
        }),
      },
    },
    createFacebookPost: {
      title: 'Create Facebook Post',
      description: 'Create a post on Facebook Page',
      input: {
        schema: z.object({
          message: z.string(),
          link: z.string().optional(),
          scheduledTime: z.string().optional(),
        }),
      },
      output: {
        schema: z.object({
          postId: z.string(),
        }),
      },
    },
  },
});
