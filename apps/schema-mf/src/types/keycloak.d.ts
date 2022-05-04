interface IKeycloak {
    keycloakDetails:any;
  }
  
  type KeycloakContextType = {
    keycloak: IKeycloak;
    setKeycloak: (keycloak: IKeycloak) => void;
  };
  