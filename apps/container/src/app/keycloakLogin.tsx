import React, { useEffect, useState } from 'react';
import App from './app';
import keycloakData from '../keycloak/keycloak';
import keycloak from '../keycloak/keycloak';

export function KeycloakLogin() {  
    const [initKeycloak, setInitKeycloak] = useState({})
    const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    keycloakData.init({ onLoad: 'login-required' }).then((authenticated) => {
      console.log('authenticated', authenticated);
      setInitKeycloak(keycloakData)
      setIsAuth(authenticated)
      console.log(keycloak.token)
    });
  }, []);

  if (initKeycloak) {
    if (isAuth)
      return (
        <App/>
      );
    else return <div>Loading Keycloak...</div>;
  }
  return <div>Initializing Keycloak...</div>;
}

export default KeycloakLogin;
