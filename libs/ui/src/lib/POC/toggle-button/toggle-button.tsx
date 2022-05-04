import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';
import IconComponent, {
  IconComponentProps,
} from '../../Atoms/icon-component/icon-component';

/* eslint-disable-next-line */
export interface ToggleButtonProps {
  actions: Array<IconComponentProps>;
}

const StyledToggleButton = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.primary.main,
    },
  };
});

export function ToggleButtonComponent(props: ToggleButtonProps) {
  const [alignment, setAlignment] = React.useState<string | null>(
    props.actions[0].name
  );

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const getActionSeperated = (action: any) => {
    return (
      <ToggleButton
        value={action.name}
        aria-label={action.name}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div
          style={{
            backgroundColor: alignment === action.name ? '#458ff2' : '#ffffff',
            height: '36px',
            width: '36px',
            borderRadius: '4px',
          }}
          className="flex flex-col justify-center items-center"
        >
          <IconComponent
            name={action.name}
            color={alignment !== action.name ? action.color : '#ffffff'}
            label={action.label}
            size={action.size}
          ></IconComponent>
        </div>
      </ToggleButton>
    );
  };
  return (
    <StyledToggleButton>
      <div
        style={{ height: '38px', width: 'auto', boxSizing: 'border-box' }}
        className="flex flex-row justify-center items-center p-1.5"
      >
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          style={{ boxSizing: 'border-box', height: '48px' }}
        >
          {props.actions.map((action) => {
            return getActionSeperated(action);
          })}
        </ToggleButtonGroup>
      </div>
    </StyledToggleButton>
  );
}

export default ToggleButtonComponent;
