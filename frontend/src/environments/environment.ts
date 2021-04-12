/* @DONE replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: process.env['AUTH0_SERVER_URL'], // the running FLASK api server url
  auth0: {
    url: 'purvi-udacity.us', // the auth0 domain prefix
    audience: 'capstone_api', // the audience set for the auth0 app
    clientId: '6TY6xaOUYvkQNrgcS3WR0clXpW99IBAM', // the client id generated for the auth0 app
    callbackURL: process.env['AUTH0_CALLBACK_URL'], // the base url of the running ionic application. 
  }
};
