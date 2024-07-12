import { z, IntegrationDefinition } from '@botpress/sdk'
import { integrationName } from './package.json'

export default new IntegrationDefinition({
  name: integrationName,
  version: '0.0.1',
  readme: 'hub.md',
  icon: 'icon.svg',
   // This is where we define the configuration schema for our integration.
   configuration: {
    schema: z.object({
        accessToken: z.string(),
        pageId: z.string(), // Defines that pageId should be a string.
    })
},
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
      title: 'Facebook Post',
      description: 'Create a media post on Facebook Page using access tokens',
      input: {
        schema: z.object({
          message: z.string(),
          mediaUrl: z.string().url(),
          
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
