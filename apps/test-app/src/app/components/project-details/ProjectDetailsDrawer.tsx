import { Drawer } from '@mui/material';
import { Button } from '@mui/material';

const ProjectDetailsDrawer = ({
  infoWindow,
  setInfoWindow,
  loadNextProject,
}: {
  infoWindow: { text: string; visible: boolean; mode: string };
  setInfoWindow: any;
  loadNextProject: () => void;
}) => {
  return (
    <Drawer
      anchor="bottom"
      open={infoWindow.visible && infoWindow.mode === 'mobile'}
      onClose={() =>
        setInfoWindow({
          ...infoWindow,
          visible: false,
        })
      }
    >
      <div className="flex justify-between">
        <p className="p-4">{infoWindow.text}</p>
        <Button onClick={() => loadNextProject()}>Ok</Button>
      </div>
    </Drawer>
  );
};

export default ProjectDetailsDrawer;
