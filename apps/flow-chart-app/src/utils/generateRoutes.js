import { mergeDeep } from '.';

export default function generateRoutesFromConfigs(configs, defaultAuth) {
  let allRoutes = [];
  configs.forEach((config) => {
    allRoutes = [...allRoutes, ...setRoutes(config, defaultAuth)];
  });
  return allRoutes;
}

export function setRoutes(config, defaultAuth) {
  let routes = [...config.routes];

  routes = routes.map((route) => {
    let auth =
      config.auth || config.auth === null ? config.auth : defaultAuth || null;
    auth = route.auth || route.auth === null ? route.auth : auth;
    const settings = mergeDeep({}, config.settings, route.settings);

    return {
      ...route,
      settings,
      auth,
    };
  });

  return [...routes];
}
