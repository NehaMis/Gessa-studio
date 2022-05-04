import { EndPointsUrl } from '../fake-api/api/endpointUrl';
import { ProjectsApi } from '../../../container2/src/fake-api/api/projects';
export class FakeApiService {
  constructor() {}

  callGetApi(apiUrl: string, reqParams?: any): any {
    const data = this.getData(apiUrl, reqParams);
  }

  getData(apiUrl: string, params: any) {
    let data: unknown;
    switch (apiUrl) {
      case EndPointsUrl.projects:
        data = ProjectsApi.get;
        return data;
      case EndPointsUrl.projectsById:
        data = ProjectsApi.get;
        return data;
    }
  }
}

export default FakeApiService;
