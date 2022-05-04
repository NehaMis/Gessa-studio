import { purple } from '@mui/material/colors';
import { styled } from '@mui/system';
import IconComponent, {
  IconComponentProps,
} from '../icon-component/icon-component';

/* eslint-disable-next-line */
export interface IChipProps {
  text: string;
  leftIcon?: IconComponentProps;
  rightIcon?: IconComponentProps;
  style: ChipStyle;
  actionClick?: any;
}

export type ChipStyle = 'solid' | 'outline';

const StyledChips = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.primary['400'],
    },
  };
});

export function Chip(props: IChipProps) {
  const actionClickedPerform = (action: any) => {
    props.actionClick(action);
  };
  return (
    <div
      className="rounded-full py-3 border-2 px-2 box-border flex flex-col  h-8 justify-center overflow-hidden w-40"
      style={{
        backgroundColor: props.style === 'solid' ? '#18a0fb' : '#2c2c2c',
        border: '1px solid',
        borderColor: '#57b4aa',
        width: 'auto',
      }}
    >
      <div className="flex flex-row justify-between items-center gap-2">
        <div
          className={`flex flex-row justify-start items center gap-2  ${
            props.rightIcon ? 'w-5/6' : 'w-full'
          }`}
        >
          {props && props.leftIcon && (
            <div
              className=" h-5 w-1/6 rounded-full flex flex-col justify-center items-center p-1"
              style={{
                backgroundColor:
                  props.style === 'solid' ? '#ffffff' : '#ffffff',
              }}
            >
              <IconComponent
                name={props.leftIcon?.name}
                size={props.leftIcon?.size}
                color={props.leftIcon?.color}
                style={props.leftIcon?.style}
              />
            </div>
          )}
          {props && props.text && (
            <div
              className={`flex flex-row justify-center items-center ${
                props.rightIcon ? 'w-full' : ''
              } ${props.leftIcon ? 'w-full' : ''} ${
                props.leftIcon && props.rightIcon ? 'w-5/6' : ''
              }
              ${props.rightIcon && !props.leftIcon ? 'w-full' : ''}
              `}
              style={{
                color: props.style === 'solid' ? '#ffffff' : '#1890ff',
                fontSize: '12px',
              }}
            >
              <p
                className="flex flex-row items-center justify-start overflow-ellipsis"
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  maxWidth: '70px',
                  color: '#57b4aa',
                }}
              >
                {props.text}
              </p>
            </div>
          )}
        </div>

        <div
          className={`flex flex-row w-1/6 ${props.rightIcon ? 'w-1/6' : ''}`}
        >
          {props && props.rightIcon && (
            <div
              className=" h-5 w-full rounded-full flex flex-col justify-center items-center"
              style={{
                backgroundColor:
                  props.style === 'solid' ? '#ffffff' : 'transparent',
              }}
            >
              <IconComponent
                name={props.rightIcon?.name}
                size={props.rightIcon?.size}
                color={props.rightIcon?.color}
                label={props.rightIcon?.label}
                style={props.rightIcon?.style}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chip;
