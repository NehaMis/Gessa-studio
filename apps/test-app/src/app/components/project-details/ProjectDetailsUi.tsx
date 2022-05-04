import {
  IProjectDetail,
  IProjectFormatted,
} from '../../../store/projectsSlice';
import Loader from '../loader/Loader';
import ProjectDetailsActions from './ProjectDetailsActions';
import ProjectDetailsCard from './ProjectDetailsCard';
import ProjectDetailsHighlight from './ProjectDetailsHighlight';
import { IWorker } from '../../../fake-db/db/worker-db';
import { Paper, Typography } from '@mui/material';

export const ProjectDetailsUi = ({
  user,
  project,
  onAccept,
  onReject,
}: {
  user: IWorker;
  project: IProjectFormatted;
  onAccept: (userId: string, projectId: string) => void;
  onReject: (userId: string, projectId: string) => void;
}) => {
  return project ? (
    <div className="p-5 w-full">
      <Paper className="md:p-4 rounded" elevation={0}>
        <div className="rounded overflow-auto h-content md:h-content-md flex flex-col md:flex-row">
          <div className="w-full md:w-6/12 lg-w-4/12">
            <div
              className="w-full h-40 md:h-80 rounded-t md:rounded-b relative"
              style={{
                background:
                  '#ccc url(' +
                  project.projectTitle.imageUrl +
                  ') no-repeat center/cover',
              }}
            >
              <ProjectDetailsHighlight
                classes="invisible md:visible rounded w-full h-24 absolute bottom-0 bg-gradient-to-t from-black items-end p-3 pb-1 text-white"
                project={project}
              />
            </div>

            <div className="md:hidden pl-4 pr-4 pt-2 pb-2">
              <Typography variant="body1" className="font-bold">
                {project.projectTitle.name}
              </Typography>
              <Typography variant="body1">{project.company.name}</Typography>
            </div>

            <ProjectDetailsHighlight classes="md:hidden" project={project} />

            <ProjectDetailsActions
              user={user}
              project={project}
              onAccept={onAccept}
              onReject={onReject}
              classes="hidden md:flex gap-4 pt-4"
            />
          </div>

          <div className="w-full md:w-6/12 lg:w-8/12">
            <div className="hidden md:block pl-4 pr-4">
              <p className="font-bold text-2xl lg:text-4xl">
                {project.projectTitle.name}
              </p>
              <p className="text-xl">{project.company.name}</p>
            </div>

            <div className="p-4">
              {project.details.map((detail: IProjectDetail, index: number) => (
                <ProjectDetailsCard
                  key={detail.key}
                  detail={detail}
                  showSeparator={index < project.details.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        <ProjectDetailsActions
          user={user}
          project={project}
          onAccept={onAccept}
          onReject={onReject}
          classes="flex md:hidden gap-2 pl-4 pr-4 pb-4"
        />
      </Paper>
    </div>
  ) : (
    <Loader />
  );
};
