interface IPageConfigSetting {
  key: string;
}

export interface IPageConfig {
  settings?: IPageConfigSetting;
  routes: Array<IRoute>;
}
