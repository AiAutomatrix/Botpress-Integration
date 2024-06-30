import * as sdk from '@botpress/sdk'
import * as bp from '.botpress'
import axios from 'axios'

export default new bp.Integration({
  register: async () => {
    /**
     * This is called when a bot installs the integration.
     * You should use this handler to instantiate resources in the external service and ensure that the configuration is valid.
     */
    throw new sdk.RuntimeError('Invalid configuration') // replace this with your own validation logic
  },
  unregister: async () => {
    /**
     * This is called when a bot removes the integration.
     * You should use this handler to instantiate resources in the external service and ensure that the configuration is valid.
     */
    throw new sdk.RuntimeError('Invalid configuration') // replace this with your own validation logic
  },
  actions: {
    facebookAction: async (props) => {
      /**
       * This is called when a bot calls the action `facebookAction`.
       */
      props.logger.forBot().info('Facebook Card') // this log will be visible by the bots that use this integration

      let { input } = props.input
      input = input || 'World'
      return { message: `This is your Facebook post "${input}"` }
    },
    instaAction: async (props) => {
      /**
       * This is called when a bot calls the action `instaAction`.
       */
      props.logger.forBot().info('Instagram Card') // this log will be visible by the bots that use this integration

      let { input } = props.input
      input = input || 'World'
      return { message: `This is your Instagram post "${input}"` }
    },
    linkedInAction: async (props) => {
      /**
       * This is called when a bot calls the action `linkedInAction`.
       */
      props.logger.forBot().info('LinkedIn Card') // this log will be visible by the bots that use this integration

      let { input } = props.input
      input = input || 'World'
      return { message: `This is your LinkedIn post "${input}"` }
    },
    createFacebookPost: async (props) => {
      const pageAccessToken = 'YOUR_PAGE_ACCESS_TOKEN'; // Replace with your long-lived Page access token
      const pageId = 'YOUR_PAGE_ID'; // Replace with your Page ID
      const { message, mediaUrl } = props.input;

      try {
        const response = await axios.post(`https://graph.facebook.com/${pageId}/photos`, {
          url: mediaUrl,
          caption: message,
          access_token: pageAccessToken,
        });

        if (response.data) {
          return { postId: response.data.id };
        } else {
          throw new sdk.RuntimeError('Failed to post media on Facebook.');
        }
      } catch (error) {
        console.error('Error posting to Facebook:', error);
        throw new sdk.RuntimeError('Error occurred while posting to Facebook.');
      }
    },
  },
  channels: {},
  handler: async () => {},
});
