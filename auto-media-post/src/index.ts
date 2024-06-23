import * as sdk from '@botpress/sdk';
import * as bp from 'botpress';

import integrationDefinition from './integration.definition';

export default new bp.Integration({
  register: async () => {
    // Perform any registration tasks here, such as validating configuration or setting up external resources
    console.log('Integration registered successfully');
  },
  unregister: async () => {
    // Perform cleanup tasks here when the integration is uninstalled
    console.log('Integration unregistered successfully');
  },
  actions: {
    ...integrationDefinition.actions, // Include actions from integration definition
  },
  channels: {
    ...integrationDefinition.channels, // Include channels from integration definition
  },
  handler: async (event, action, logger) => {
    // Define your handler logic here if needed
    console.log('Handling event:', event);
    console.log('Triggered action:', action);

    // Example: Handling specific actions
    if (action.name === 'facebookShare') {
      // Execute logic related to facebookShare action
      try {
        await integrationDefinition.actions.facebookShare.handler();
      } catch (error) {
        logger.error('Error executing facebookShare action:', error);
      }
    }
  },
});
