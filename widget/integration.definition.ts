import { z, IntegrationDefinition } from '@botpress/sdk';
import { integrationName } from './package.json';

const integrationDefinition = new IntegrationDefinition({
  name: integrationName,
  version: '0.0.1',
  readme: 'hub.md',
  icon: 'icon.svg',
  actions: {
    widget: {
      title: 'Widget Module Deployed',
      description: 'A simple widget module',
      input: {
        schema: z.object({
          insertHTMLWidgetCodeHere: z.string().optional().default('<div>Your widget HTML code here</div>'),
        }),
      },
      output: {
        schema: z.object({
          message: z.string(),
        }),
      },
    },
    // Define other actions here if needed
  },
});

export default integrationDefinition;
