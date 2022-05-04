import { createContext, useState, FC, ReactNode } from 'react';
import Keycloak from "keycloak-js";
const AUTH_SERVER_URL = "http://auth-dev.gessa.io";
const DATABASE = "Gessa-studio";
const CLIENT_ID = "gessa-studio";
const keycloakConfig = {
  url: AUTH_SERVER_URL,
  realm: DATABASE,
  clientId: CLIENT_ID,
};
const keycloakData = Keycloak(keycloakConfig)

export const KeycloakContext = createContext<KeycloakContextType | null>(null);

export const KeycloakProvider: FC<ReactNode> = ({children}) => {
  const [keycloak, setKeycloak] = useState<IKeycloak>({
    keycloakDetails: keycloakData,
  });

  return (
    <KeycloakContext.Provider value={{ keycloak, setKeycloak }}>
      {children}
    </KeycloakContext.Provider>
  );
};

export default KeycloakProvider;
