import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { IRootState } from '.';
import { IProject, IProjectShifts } from '../fake-db/db/projects-db';
import { getFormattedTime } from '../utils/getFormattedTime';

export interface IProjectDetail {
  key: string;
  value: Array<string> | string;
  caption?: string;
  icon?: string;
  action?: { icon: string; url: string };
}

export interface IProjectFormatted extends IProject {
  details: Array<IProjectDetail>;
}

export const getProjects = createAsyncThunk(
  'worker/matches',
  async (auth: IAuth, { dispatch }) => {
    const response = await axios.get(
      `https://test.testapp.com/api/worker/${auth.user_id}/matches`
    );
    const data: Array<IProject> = response.data;
    const projectDetails: Array<IProjectFormatted> = data.map(
      (project: IProject) => {
        const details = [];

        // Shifts
        if (project.shifts.length > 0) {
          details.push({
            key: 'Shift Dates',
            icon: 'Shift-Dates',
            value: project.shifts.map((shift: IProjectShifts) =>
              getFormattedTime(shift.startDate, shift.endDate)
            ),
          });
        }

        // Location
        if (
          project &&
          project.company &&
          project.company.address &&
          project.company.address.formattedAddress
        ) {
          details.push({
            key: 'Location',
            icon: 'Location',
            value: project.company.address.formattedAddress,
            caption:
              project.milesToTravel + 'miles from your project search location',
            action: {
              icon: 'Chevron-Right',
              url:
                'https://www.google.com/maps/search/' +
                project.company.address.formattedAddress,
            },
          });
        }

        // Requirements
        if (
          project &&
          project.requirements &&
          project.requirements.length > 0
        ) {
          details.push({
            key: 'Requirements',
            icon: 'Requirements',
            value: project.requirements.map((e) => '-' + e),
          });
        }

        // Report to
        if (project && project.company && project.company.reportTo) {
          let contact = project.company.reportTo.phone;
          if (contact) {
            contact = ` (${contact.slice(0, 3)}) ${contact.slice(
              3,
              6
            )} ${contact.slice(6, 10)}`;
          } else {
            contact = '';
          }
          details.push({
            key: 'Report To',
            icon: 'Report-To',
            value: project.company.reportTo.name + contact,
          });
        }

        return {
          ...project,
          details,
        };
      }
    );

    dispatch(setProjects(projectDetails));
  }
);

const projectAdapter = createEntityAdapter<IProjectFormatted>({
  selectId: ({ projectId }) => projectId,
});

export const {
  selectAll: selectProjects,
  selectById: selectProjectById,
  selectIds: selectProjectIds,
} = projectAdapter.getSelectors((state: IRootState) => state.projects);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectAdapter.getInitialState(),
  reducers: {
    setProjects: projectAdapter.setAll,
    addProject: projectAdapter.addOne,
    addProjects: projectAdapter.addMany,
  },
});

export const { setProjects, addProject, addProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
