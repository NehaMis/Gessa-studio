interface IRoute {
  path: string;
  component:
    | React.LazyExoticComponent<FunctionComponent>
    | (() => EmotionJSX.Element);
  exact?: boolean;
  showInNavbar?: boolean;
  name?: string;
}

type RouteContextType = {
  routes: Array<IRoute>;
  addRoute: (route: IRoute) => void;
  removeRoute: (route: IRoute) => void;
};
