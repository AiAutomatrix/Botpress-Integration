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
  },
  
  channels: {},
  handler: async () => {},
})
