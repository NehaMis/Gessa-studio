import { styled } from '@mui/system';
// import '../../../static/assets/icons/icomoon/style.css';

/* eslint-disable-next-line */
export interface IconComponentProps {
  name: string;
  size: number;
  color?: string;
  label?: string;
  style?: IconType;
}

export type IconType = 'regular' | 'boxed';

const StyledIconComponent = styled('div')(({ theme }) => {
  return {
    icon_class: {
      span: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
    },
  };
});

export function IconComponent(props: IconComponentProps) {
  return (
    <StyledIconComponent>
      <div
        className="gessa-icon"
        style={{
          backgroundColor:
            props.style === 'boxed' ? props.color + '50' : 'transparent',
          height: props.size + 'px',
          width: props.size + 'px',
          color: props.color,
        }}
        title={props.label ? props.label : props.name}
      >
        <span
          className={
            'flex flex-row justify-center items-center icon-' + props.name
          }
          style={{
            height: +props.size + 'px',
            width: props.size + 'px',
            fontSize: props.size - 8 + 'px',
          }}
        ></span>
      </div>{' '}
    </StyledIconComponent>
  );
}

export default IconComponent;
