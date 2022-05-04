import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import './main.css';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak/keycloak';
import App from './app/app';
import KeycloakLogin from './app/keycloakLogin';

ReactDOM.render(
  <StrictMode>
    <App />
    {/* <KeycloakLogin /> */}
  </StrictMode>,
  document.getElementById('root')
);
