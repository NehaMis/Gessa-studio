import { IProjectFormatted } from '../../../store/projectsSlice';
import { styled } from '@mui/system';

const StyledProjectDetailsHighlight = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.secondary['500'],
      color: theme.palette.getContrastText(theme.palette.secondary['500']),
    },
  };
});

const ProjectDetailsHighlight = ({
  project,
  classes,
}: {
  project: IProjectFormatted;
  classes: string;
}) => {
  return (
    <StyledProjectDetailsHighlight
      className={
        classes + ' md:bg-transparent flex justify-between pl-4 pr-4 pt-3 pb-2'
      }
    >
      <div className="text-left">
        <p className="font-bold text-xs">Distance</p>
        <p className="font-bold text-3xl text-white">
          {+project.milesToTravel.toFixed(2)} miles
        </p>
      </div>
      <div className="text-right">
        <p className="font-bold text-xs">Hourly Rate</p>
        <p className="font-bold text-3xl text-white">
          <sup>$</sup>
          {(+project.wagePerHourInCents / 100).toFixed(2)}
        </p>
      </div>
    </StyledProjectDetailsHighlight>
  );
};

export default ProjectDetailsHighlight;
