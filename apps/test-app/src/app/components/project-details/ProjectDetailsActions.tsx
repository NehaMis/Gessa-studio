import { Button } from '@mui/material';
import { IWorker } from '../../../fake-db/db/worker-db';
import { IProjectFormatted } from '../../../store/projectsSlice';

const ProjectDetailsActions = ({
  user,
  project,
  onAccept,
  onReject,
  classes,
}: {
  user: IWorker;
  project: IProjectFormatted;
  onAccept: (userId: string, projectId: string) => void;
  onReject: (userId: string, projectId: string) => void;
  classes: string;
}) => {
  return (
    <div className={classes}>
      <Button
        className="flex-1 p-3 text-lg"
        variant="outlined"
        onClick={() => {
          onReject(user?.workerId, project.projectId);
        }}
      >
        No Thanks
      </Button>
      <Button
        className="flex-1 p-3 text-lg"
        variant="contained"
        onClick={() => {
          onAccept(user?.workerId, project.projectId);
        }}
      >
        I'll Take it
      </Button>
    </div>
  );
};

export default ProjectDetailsActions;
