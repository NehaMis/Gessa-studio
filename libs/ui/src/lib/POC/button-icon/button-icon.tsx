import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import IconComponent, {
  IconComponentProps,
} from '../../Atoms/icon-component/icon-component';

/* eslint-disable-next-line */
export interface ButtonIconProps {
  buttonAction: {
    type: string;
    action: IconComponentProps;
  };
}
const StyledButtonIcon = styled('div')(({ theme }) => {
  return {
    button_icon: {
      button: { height: '48px', width: 'auto', padding: '10px' },
    },
  };
});

export function ButtonIcon(props: ButtonIconProps) {
  return (
    <StyledButtonIcon>
      <div className="flex flex-row justify-start items-center p-1">
        <button
          style={{
            height: '48px',
            backgroundColor: '#459ff2',
            minWidth: '48px',
            borderRadius: '4px',
          }}
          className="flex flex-row justify-center items-center"
        >
          {props.buttonAction.type === 'button' && (
            <IconComponent
              name={props.buttonAction.action.name}
              color={props.buttonAction.action.color}
              label={props.buttonAction.action.label}
              size={props.buttonAction.action.size}
            ></IconComponent>
          )}
          {props.buttonAction.type === 'string' && (
            <Typography variant="body1">
              {props.buttonAction.action.label}
            </Typography>
          )}
        </button>
      </div>
    </StyledButtonIcon>
  );
}

export default ButtonIcon;
