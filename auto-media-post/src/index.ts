import * as sdk from '@botpress/sdk'
import * as bp from '.botpress'

export default new bp.Integration({
  register: async () => {
    /**
     * This is called when a bot installs the integration.
     * You should use this handler to instantiate resources in the external service
     * and ensure that the configuration is valid.
     */
    throw new bp.RuntimeError('Invalid configuration'); // Adjust to your validation logic
  },
  unregister: async () => {
    /**
     * This is called when a bot removes the integration.
     * You should use this handler to clean up resources in the external service.
     */
    throw new bp.RuntimeError('Invalid configuration'); // Adjust to your cleanup logic
  },
  actions: {}, // Ensure this matches the actions defined in integration.definition.ts
  channels: {}, // You can add channel definitions as per your integration requirements
  handler: async () => {
    // Optional: Implement integration-specific handler logic
  },
});
