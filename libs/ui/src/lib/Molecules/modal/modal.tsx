import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import { minHeight, useTheme } from '@mui/system';
import IconComponent, {
  IconComponentProps,
} from '../../Atoms/icon-component/icon-component';

/* eslint-disable-next-line */
export interface ModalProps {
  title: string;
  subtitle: string;
  icon: IconComponentProps;
  actions: Array<actionType>;
}
export type actionType = {
  name: string;
  varient: string;
};

const StyledModal = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.background.paper,
    },
  };
});

export function Modal(props: ModalProps) {
  const theme = useTheme();

  return (
    <StyledModal>
      <div
        className="relative box-border flex flex-col justify-between h-40  w-full rounded"
        style={{
          backgroundColor: theme.palette.background.paper,
          minWidth: '300px',
        }}
      >
        <div className="flex flex-row justify-between items-start w-full  p-3">
          <div className="flex flex-row justify-start items-start gap-5">
            <div
              className=" rounded-full flex flex-col justify-center items-center"
              style={{
                backgroundColor: theme.palette.background.default,
                width: '45px',
                height: '45px',
                minHeight: '45px',
                minWidth: '45px',
              }}
            >
              <IconComponent
                style={props.icon.style}
                name={props.icon.name}
                color={props.icon.color}
                label={props.icon.label}
                size={props.icon.size}
              />
            </div>
            {(props.title || props.subtitle) && (
              <div
                className="flex flex-grow flex-col  justify-start items start gap-2"
                style={{
                  color: theme.palette.getContrastText(
                    theme.palette.background.paper
                  ),
                }}
              >
                {props.title && (
                  <div className=" text-base font-medium">{props.title}</div>
                )}
                {props.subtitle && (
                  <div
                    className="text-sm"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {props.subtitle}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-row justify-end items-start ">
            <Close
              className="h-5"
              onClick={(e) => console.log('close clicked')}
            />
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(153,153,153,0.4)',
            padding: 0,
          }}
        ></div>
        <div className="flex flex-col items-end  p-3">
          {props.actions && props.actions.length && (
            <div className="flex flex-row justify-center items-end gap-2">
              {props.actions &&
                props.actions.map((action: any) => {
                  return (
                    <Button
                      variant={action.varient}
                      style={{
                        color:
                          theme.palette.mode === 'light' &&
                          action.varient === 'contained'
                            ? '#FFFFFF'
                            : theme.palette.getContrastText(
                                theme.palette.background.paper
                              ),
                        borderColor: 'rgba(153,153,153,0.4)',
                      }}
                    >
                      {action.name}
                    </Button>
                  );
                })}
            </div>
          )}
        </div>
      </div>{' '}
    </StyledModal>
  );
}

export default Modal;
