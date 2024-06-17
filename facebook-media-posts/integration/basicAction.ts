import * as z from 'zod';

// Define Zod schemas for input and output validation
const InputSchema = z.object({
  message: z.string(),
});

const OutputSchema = z.object({
  success: z.boolean(),
  response: z.string(),
});

// Define your basic action function
const BasicAction = async ({ input }: { input: { message: string } }): Promise<{ success: boolean; response: string }> => {
  try {
    // Validate input against schema
    const validatedInput = InputSchema.parse(input);

    // Action logic
    console.log('Received message:', validatedInput.message);
    const response = `Echo: ${validatedInput.message}`;

    // Validate and return output
    const output = OutputSchema.parse({ success: true, response });
    return output;
  } catch (error) {
    console.error('Error in BasicAction:', error);
    throw error; // Re-throwing error to propagate it
  }
};

export default BasicAction;
