import { styled } from '@mui/system';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledUi = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.primary.main,
    },
  };
});

export function Ui(props: UiProps) {
  return (
    <StyledUi>
      <h1 className="p-4 bg-blue-300">Welcome to Ui!</h1>
    </StyledUi>
  );
}

export default Ui;
