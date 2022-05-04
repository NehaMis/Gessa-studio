import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const ProjectDetailsDialog = ({
  infoWindow,
  setInfoWindow,
  loadNextProject,
}: {
  infoWindow: { text: string; visible: boolean; mode: string };
  setInfoWindow: any;
  loadNextProject: () => void;
}) => {
  return (
    <Dialog
      open={infoWindow.visible && infoWindow.mode === 'desktop'}
      onClose={() =>
        setInfoWindow({
          ...infoWindow,
          visible: false,
        })
      }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Project update'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {infoWindow.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => loadNextProject()}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
