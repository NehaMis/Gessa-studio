import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import IconComponent, {
  IconComponentProps,
} from '../../Atoms/icon-component/icon-component';

/* eslint-disable-next-line */
export interface CardHeader1Props {
  title: string;
  actions: Array<IActions>;
}

export type ITypeAction = 'button' | 'icon';
export interface IActions {
  type: ITypeAction;
  action: IconComponentProps;
}

const StyledCardHeader1 = styled('div')(({ theme }) => {
  return { 'card-header-1': { height: '80px', backgroundColor: 'white' } };
});

export function CardHeader1(props: CardHeader1Props) {
  const getActionsArrayRender = (action: any) => {
    switch (action.type.toLowerCase()) {
      case 'button':
        return (
          <button
            className="p-2 bg-gray-400 color-red"
            style={{
              backgroundColor: action.action.color,
              color: '#ffffff',
              borderRadius: '4px',
            }}
          >
            {action.action.label}
          </button>
        );
      case 'icon':
        return (
          <IconComponent
            name={action.action.name}
            size={action.action.size}
            color={action.action.color}
          />
        );
      default:
        return <Typography variant="body1">{action.action.label}</Typography>;
    }
  };

  return (
    <StyledCardHeader1>
      <div className=" card-header-1 box-border flex flex-row justify-between items-center p-1">
        <div className="">
          <p className="leading-6 pl-1">{props.title}</p>
        </div>
        <div className="box-border flex flex-row justify-end items-center gap-5">
          {props.actions.map((action) => {
            return getActionsArrayRender(action);
          })}
        </div>
      </div>
    </StyledCardHeader1>
  );
}

export default CardHeader1;
