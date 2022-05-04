import {
  ButtonIcon,
  IActions,
  Searchbar,
  ToggleButtonComponent,
} from '@gessa/ui';
import { styled } from '@mui/system';
import IconComponent, {
  IconComponentProps,
} from '../../Atoms/icon-component/icon-component';

/* eslint-disable-next-line */
export interface HeaderProps {
  search: {
    value: string;
    placeholder: string;
    icon: IconComponentProps;
  };
  actions: Array<IActions>;
  buttonAction: Array<IconComponentProps>;

  onSearchEvent: any;
  onFilterEvent: any;
  onToggleSwitchEvent: any;
  onAddButtonClickEvent: any;
}

const StyledHeader = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.primary.main,
    },
  };
});

export function Header(props: HeaderProps) {
  const onSearchHandler = (search: string) => {};

  const getFilteredIcons = (action: any) => {
    return (
      <div className="flex flex-col justify-center items-center w-20 h-2">
        <IconComponent
          name={action.action.name}
          size={action.action.size}
          color={action.action.color}
        />
      </div>
    );
  };

  const getFilteredButtonActions = (action: any) => {
    const obj = {
      type: 'button',
      action: {
        name: 'Add',
        label: 'Add',
        size: 25,
        color: '#ffffff',
      },
    };
    return <ButtonIcon buttonAction={obj} />;
  };

  return (
    <StyledHeader>
      <div className="flex flex-row justify-end items-center gap-2">
        <div className="w-22">
          <Searchbar
            value={props.search.value}
            placeholder={props.search.placeholder}
            icon={props.search.icon}
            onSearch={onSearchHandler}
          />
        </div>
        <div className="flex flex-row justify-end items-center gap-2 ">
          {props.actions.map((action) => {
            return getFilteredIcons(action);
          })}
        </div>
        <div className="flex flex-row justify-center items-center  h-2">
          <ToggleButtonComponent actions={props.buttonAction} />
        </div>
        <div className="flex flex-row justify-end items-center gap-2">
          {props.actions.map((action) => {
            return getFilteredButtonActions(action);
          })}
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
