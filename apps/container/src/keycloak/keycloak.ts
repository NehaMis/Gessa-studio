import Keycloak from "keycloak-js";

const AUTH_SERVER_URL = "http://auth-dev.gessa.io";
const DATABASE = "demo-realm";
const CLIENT_ID = "masterClient";
const SECRET_KEY = "v52XsV7Hn3XRuf1ZJJlmmAekRJL1nDR9"

const keycloakConfig = {
  url: AUTH_SERVER_URL,
  realm: DATABASE,
  clientId: CLIENT_ID,
  credentials:{
    secret:SECRET_KEY
  },
  cors:true
};
const keycloak = Keycloak(keycloakConfig)
export default keycloak;