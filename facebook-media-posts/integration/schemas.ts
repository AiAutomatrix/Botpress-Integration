import * as z from 'zod';

// Zod schema for action input (post content)
export const PostContentSchema = z.object({
  content: z.string(),
  platform: z.enum(['facebook', 'linkedin', 'instagram', 'twitter', 'youtube']),
});

// Zod schema for configuration parameters (API keys, etc.)
export const ConfigurationSchema = z.object({
  apiKey: z.string(),
  // Add more configuration parameters as needed
}).nonstrict(); // Allows for additional fields
