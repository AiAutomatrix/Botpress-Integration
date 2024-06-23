import axios from 'axios';
import { sdk } from '@botpress/sdk';
import z from 'zod';

export default new sdk.IntegrationDefinition({
  name: 'facebook-login',
  version: '0.0.1',
  configuration: {
    schema: z.object({
      webhookUrl: z.string().describe('The url to post the bot answers to.'),
      Publishablekey: z.string(),
      Secretkey: z.string(),
    }),
  },
  actions: {
    generateDeviceCode: {
      input: {
        schema: z.object({}),
      },
      output: {
        schema: z.object({
          userCode: z.string(),
          verificationUri: z.string(),
        }),
      },
      handler: async (ctx) => {
        const response = await axios.post('https://graph.facebook.com/v2.6/device/login', {
          access_token: `${ctx.configuration.Publishablekey}|${ctx.configuration.Secretkey}`,
          scope: 'public_profile'
        });

        return {
          userCode: response.data.user_code,
          verificationUri: response.data.verification_uri
        };
      }
    },
    pollForAuthorization: {
      input: {
        schema: z.object({
          code: z.string(),
        }),
      },
      output: {
        schema: z.object({
          accessToken: z.string().optional(),
          user: z.object({
            name: z.string(),
            picture: z.string()
          }).optional(),
          error: z.string().optional(),
        }),
      },
      handler: async (ctx) => {
        try {
          const response = await axios.post('https://graph.facebook.com/v2.6/device/login_status', {
            access_token: `${ctx.configuration.Publishablekey}|${ctx.configuration.Secretkey}`,
            code: ctx.input.code
          });

          if (response.data.access_token) {
            const userDetails = await fetchUserDetails(response.data.access_token);
            return {
              accessToken: response.data.access_token,
              user: {
                name: userDetails.name,
                picture: userDetails.picture.data.url
              }
            };
          } else {
            return { error: 'Authorization pending' };
          }
        } catch (error) {
          return { error: error.message };
        }
      }
    }
  }
});
