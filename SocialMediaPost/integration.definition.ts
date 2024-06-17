import actions from './integration/integration';
import { ConfigurationSchema } from './integration/schemas';

// Function to validate configuration against schema
const validateConfiguration = ConfigurationSchema.parse;

// Export your integration definition
export default {
  name: 'SocialMediaPost', // Replace with your integration name
  version: '1.0.0',
  readme: 'hub.md', // Replace with your README file
  icon: 'icon.svg', // Replace with the path to your icon
  actions,
  validateConfiguration,
};
