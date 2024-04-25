export const oktaConfig = {
  clientId: '{clientId}',
  issuer: 'http://{issuer}/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: true,
}
