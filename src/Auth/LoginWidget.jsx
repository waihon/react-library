import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const LoginWidget = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const onSuccess = (tokens) => {
    oktaAuth.handleLoiginRedirect(tokens);
  };

  const onError = (err) => {
    console.log('Sign in error: ', err);
  }

  if (!authState) {
    return (<SpinnerLoading />);
  }

  return authState.isAuthenticated ?
    <Redirect to {{ pathname: '/' }} />
    :
    <div></div>
};

export default LoginWidget;
