import { Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

/* eslint-disable-next-line */
export interface ChipProps {
  value: string;
  color: string;
}

const StyledChip = styled('div')(({ theme }) => {
  return {
    '.chip-component': {
      display: 'flex',
      boxSizing: 'border-box',
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '42px',
      maxWidth: '100px',
      margin: '5px',
      padding: '5px 7px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '4px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',

      '.chip': {
        padding: '5px',
        fontSize: '12px',
        width: 'inherit',
        lineClamp: 'inherit',
        color: theme.palette.getContrastText(theme.palette.primary.main),
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
    },
  };
});

export function Chip(props: ChipProps) {
  const theme = useTheme();

  return (
    <StyledChip>
      <div
        className="chip-component"
        style={{
          backgroundColor: props.color
            ? props.color
            : theme.palette.primary.main,
        }}
      >
        <div className="chip">
          <Typography variant="body1">{props.value}</Typography>
        </div>
      </div>
    </StyledChip>
  );
}

export default Chip;
