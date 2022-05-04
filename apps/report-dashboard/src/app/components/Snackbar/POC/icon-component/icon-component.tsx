import { display, styled } from '@mui/system';
import './icon-component.css';

/* eslint-disable-next-line */
export interface IconComponentProps {
  name: any;
  size: number;
  color?: string;
  label?: string;
  style?: IconType;
  handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleDoubleClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

export type IconType = 'regular' | 'boxed';

const StyledIconComponent = styled('div')(({ theme }) => {
  return {
    'gessa-icon': {
      span: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
      '.icon_span': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  };
});

export function IconComponent(props: IconComponentProps) {
  return (
    <StyledIconComponent
      onClick={props.handleClick}
      onDoubleClick={props.handleDoubleClick}
    >
      <div
        className="icon-div"
        style={{
          // margin: '10px',
          backgroundColor:
            props.style === 'boxed' ? props.color + '50' : 'transparent',
          height: props.size + 'px',
          width: props.size + 'px',
          color: props.color,
        }}
        title={props.label ? props.label : props.name}
      >
        <span
          className={'icon-span icon-' + props.name}
          style={{
            height: +props.size + 'px',
            width: props.size + 'px',
            fontSize: props.size + 'px',
          }}
        ></span>
      </div>
    </StyledIconComponent>
  );
}

export default IconComponent;
