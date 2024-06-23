import { IntegrationDefinition } from '@botpress/sdk';
import { integrationName } from './package.json';
import z from 'zod';
import { openFeedDialog } from './auto-media-post/src/facebook'; // Adjusted import path as needed

const integrationDefinition = new IntegrationDefinition({
  name: integrationName,
  version: '0.0.1',
  readme: 'hub.md',
  icon: 'icon.svg',
  configuration: {
    schema: z.object({
      webhookUrl: z.string().description('The URL to post the bot answers to.'),
    }),
  },
  events: {
    webhook: {
      schema: z.object({ id: z.string() }),
    },
  },
  actions: {
    facebookShare: {
      async handler(event, action, logger) {
        try {
          await openFeedDialog(); // Call your function to open Facebook Feed Dialog
          // Additional logic can be added here if needed
        } catch (error) {
          logger.error('Failed to open Facebook Feed Dialog', error);
          throw error; // Rethrow the error to handle it further up the call stack if necessary
        }
      },
      description: 'Open Facebook Feed Dialog for sharing content.',
    },
  },
  channels: {
    webhook: {
      conversation: {
        tags: {
          id: { title: 'Conversation ID', description: 'The ID of the conversation' },
        },
      },
      messages: {
        text: {
          schema: z.object({
            text: z.string(),
          }),
        },
      },
    },
    comment: {
      messages: {
        text: {
          schema: z.object({ text: z.string() }),
        },
      },
      message: {
        tags: {
          id: {
            title: 'Message ID',
            description: 'Message ID from Stripe',
          },
        },
      },
      conversation: {
        tags: {
          taskId: {
            title: 'Task ID',
            description: 'Task ID from Stripe',
          },
        },
      },
    },
  },
  user: {
    tags: {
      id: {
        title: 'User ID',
        description: 'User ID from Stripe',
      },
    },
  },
});

export default integrationDefinition;
