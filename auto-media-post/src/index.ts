import * as sdk from '@botpress/sdk'
import * as bp from '.botpress'

export default new bp.Integration({
  register: async () => {
    /**
     * This is called when a bot installs the integration.
     * You should use this handler to instanciate ressources in the external service and ensure that the configuration is valid.
     */
    throw new sdk.RuntimeError('Invalid configuration') // replace this with your own validation logic
  },
  unregister: async () => {
    /**
     * This is called when a bot removes the integration.
     * You should use this handler to instanciate ressources in the external service and ensure that the configuration is valid.
     */
    throw new sdk.RuntimeError('Invalid configuration') // replace this with your own validation logic
  },
  actions: {
    facebookAction: async (props) => {
      /**
       * This is called when a bot calls the action `helloWorld`.
       */
      props.logger.forBot().info('Facebook Card') // this log will be visible by the bots that use this integration

      let { input } = props.input
      input = input || 'World'
      return { message: `This is your Facebook post "${input}"` }
    },
    instaAction: async (props) => {
      /**
       * This is called when a bot calls the action `helloWorld`.
       */
      props.logger.forBot().info('Instagram Card') // this log will be visible by the bots that use this integration

      let { input } = props.input
      input = input || 'World'
      return { message: `This is your Instagram post "${input}"` }
    },
    linkedInAction: async (props) => {
      /**
       * This is called when a bot calls the action `helloWorld`.
       */
      props.logger.forBot().info('LinkedIn Card') // this log will be visible by the bots that use this integration

      let { input } = props.input
      input = input || 'World'
      return { message: `This is your LinkedIn post "${input}"` }
    },
    createFacebookPost: async (props) => {
      try {
        const { message, link, scheduledTime } = props.input;

        // Prepare the request payload
        const payload = {
          message,
          link,
          published: scheduledTime ? false : true,
        };

        if (scheduledTime) {
          payload['scheduled_publish_time'] = scheduledTime;
        }

        // Make the API call to create the post
        const response = await sdk.http.post(`https://graph.facebook.com/v20.0/${PAGE_ID}/feed`, {
          headers: {
            'Content-Type': 'application/json',
          },
          data: payload,
          params: {
            access_token: PAGE_ACCESS_TOKEN,
          },
        });

        // Return the post ID upon successful creation
        return { postId: response.data.id };
      } catch (error) {
        // Handle any errors that occur during the API call
        console.error('Error creating Facebook post:', error);
        throw new sdk.RuntimeError('Failed to create Facebook post');
      }
    },
  },
  
  channels: {},
  handler: async () => {},
})
