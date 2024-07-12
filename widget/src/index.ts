import * as sdk from '@botpress/sdk';
import * as bp from '.botpress';  // Adjust the path as per your project structure
import integrationDefinition from '/workspaces/Botpress-Integration/widget/integration.definition';

// Extract the actions from integrationDefinition
const { actions } = integrationDefinition;

export default new bp.Integration({
  register: async () => {
    // Implement your registration logic here
    // Example: validate configuration, instantiate resources
    throw new sdk.RuntimeError('Invalid configuration');
  },
  unregister: async () => {
    // Implement your unregister logic here
    // Example: release resources
    throw new sdk.RuntimeError('Invalid configuration');
  },
  actions: {
    widget: async ({ ctx, input }) => {
      try {
        // Example logic: Inserting code or performing some action based on input
        const task = await insertCode(input);

        // Return a response based on the task result
        return { message: `Widget created with ID: ${task.id}` };
      } catch (error) {
        // Handle errors gracefully
        throw new sdk.RuntimeError(`Failed to execute widget action`);
      }
    },
    // Add other actions defined in integrationDefinition here
    // For example:
    // action2: async ({ ctx, input }) => { ... }
  },
  channels: {},
  handler: async () => {
    // Handler function, add implementation if needed
  },
});

// Example function to simulate inserting code or performing an action
async function insertCode(input: any): Promise<{ id: string }> {
  // Replace with your actual logic
  // For demonstration, returning a mock task object
  return { id: 'Bigtimetreat0101' };
}
