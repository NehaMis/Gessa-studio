import project from '../app/pages/projects/store';
import { IRProjectContentTree } from '../app/pages/projects/store/projectContentTreeSlice';
import { IRProjects } from '../app/pages/projects/store/projectsSlice';
import { IRProjectTabs } from '../app/pages/projects/store/projectTabSlice';
import { IConnectorData } from '../fake-db/db/project-connector-db';
import { _IRDialog } from './dropdownSlice';
import { IRedpDataSlice } from '../app/pages/projects/store/edpDataSlice';
// @ts-ignore
// import chartDataObj from 'flowChartApp/FlowChartSlice';

export { default as project } from '../app/pages/projects/store';

export interface IRootState {
  project: {
    projects: IRProjects;
    projectTabs: IRProjectTabs;
    projectContentTree: IRProjectContentTree;
    dialogSlice: _IRDialog;
    connectorSlice: IConnectorData[];
    edpDataSlice: IRedpDataSlice;
  };
}

const reducers = {
  project,
};

export default reducers;
