import BaseUrlProjects from './baseUrl';

const baseUrlProjects = BaseUrlProjects.BASE_URL_PROJECTS;
const baseUrlConnector = BaseUrlProjects.BASE_URL_CONNECTOR;
const baseUrlDataFlow = BaseUrlProjects.BASE_URL_DATA_FLOW;

export class EndPointsUrl {
  /**
   * Projects Service
   */
  public static readonly projects = `${baseUrlProjects}/projects`;
  public static readonly projectsById = `${baseUrlProjects}/projects/{id}`;
  public static readonly project_content_tree = `${baseUrlProjects}/project_content_tree`;

  /**
   * Connector service
   */
  public static readonly connector = `${baseUrlConnector}/connector`;
}

export default EndPointsUrl;
