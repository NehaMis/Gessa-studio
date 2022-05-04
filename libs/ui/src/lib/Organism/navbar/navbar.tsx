import { PanToolSharp } from '@mui/icons-material';
import { useTheme } from '@mui/system';
import { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import {
  IconComponent,
  IconComponentProps,
} from '../../Atoms/icon-component/icon-component';
import './navbar.scss';
import generateRandomString from 'libs/ui/src/static/randomString';
import { Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface NavbarProps {
  data: any;
  logo: IconComponentProps;
  topActions: Array<IconComponentProps>;
  topActionActive: number;
  bottomActions: Array<IconComponentProps>;
  bottomActionActive: number;
  actionEventHandler: (data: any) => void;
}

const StyledNavbar = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.background.main,
    },
  };
});

export function Navbar(props: NavbarProps) {
  const theme = useTheme();
  const [topActive, setTopActive] = useState(props.topActionActive);
  const [bottomActive, setBottomActive] = useState(props.bottomActionActive);

  const [topActions, setTopActions] = useState<any>([]);
  const [bottomActions, setBottomActions] = useState(props.bottomActionActive);

  const changeActiveMenu = (index: number, iconType: string) => {
    if (iconType) {
      let payload: any;
      switch (iconType.toLowerCase()) {
        case 'top':
          setTopActive(index);
          payload = {
            path: topActions[index].path,
          };
          props.actionEventHandler(payload);
          break;
        case 'bottom':
          payload = {
            path: topActions[index].path,
          };
          props.actionEventHandler(payload);
          setBottomActive(index);
          break;
      }
    }
  };

  const serilizeIcons = (data: any): any => {
    const topActionsArray = [];
    if (data && data.length) {
      for (let i = 0; i < data.length; i += 1) {
        let icon = '';
        let path = '';
        switch (data[i].type.toLowerCase()) {
          case 'data-ops':
            icon = 'Menu-Dataops';
            break;
          case 'dev-ops':
            icon = 'Menu-Devops';
            break;
          case 'dashboard':
            icon = 'Menu-Dashboard';
            break;
          case 'backend':
            icon = 'Menu-Backend';
            break;
          case 'microapps':
            icon = 'Menu-Microapps';
            break;
          case 'connectors':
            icon = 'Menu-Dataops';
            path = 'connector';
            break;
          case 'pipelines':
            icon = 'Menu-Devops2';
            path = 'pipeline';
            break;
          default:
            icon = 'Menu-MiscSetting';
            path = 'misc-settings';
            break;
        }
        const payload = {
          path: path,
          props: {
            name: icon,
            size: 30,
            color: '#8a8a98',
            label: icon,
          },
        };
        topActionsArray.push(payload);
      }
      return topActionsArray;
    }

    return [];
  };
  useEffect(() => {
    setTopActions(serilizeIcons(props.data));
    setTopActive(0);
  }, [props]);

  return (
    <StyledNavbar>
      <div
        className="flex flex-col flex-grow justify-start items-center "
        style={{
          width: '76px',
          height: `calc(100vh - 0px)`,
          overflowY: 'auto',
        }}
      >
        <div className="flex flex-col">
          {/* <IconComponent
            name={props.logo.name}
            size={props.logo.size}
            label={props.logo.label}
            color={'white'}
          /> */}
          <div
            className="h-11 w-full flex flex-col items-center justify-center"
            style={{
              color: theme.palette.getContrastText(
                theme.palette.background.paper
              ),
            }}
          >
            <Typography variant="body1">Gessa</Typography>
          </div>
        </div>
        <div className="box-border flex flex-col flex-grow justify-between items-center gap-5 mt-2 ">
          {props && props.topActions && props.topActions.length && (
            <div
              className="flex flex-col justify-start items-start gap-2  h-2/3"
              style={{
                overflowY: topActions.length > 7 ? 'scroll' : 'hidden',
                height: topActions.length > 7 ? '350px' : '',
              }}
            >
              {topActions.map((action: any, index: any) => {
                return (
                  <div
                    key={generateRandomString()}
                    className={`p-2 clickable ${
                      index === topActive
                        ? 'bg-blue-500 rounded-md'
                        : 'transparent'
                    } `}
                    onClick={() => {
                      changeActiveMenu(index, 'top');
                    }}
                  >
                    <IconComponent
                      name={
                        index === topActive
                          ? action.props.name + '-Solid'
                          : action.props.name + '-Outlined'
                      }
                      size={action.props.size}
                      label={action.props.label}
                      color={
                        index === topActive ? '#ffffff' : action.props.color
                      }
                    />
                  </div>
                );
              })}
            </div>
          )}
          <div className="flex flex-col justify-end items-center mb-2 h-1/3">
            {props && props.bottomActions && props.bottomActions.length && (
              <div
                className="flex flex-col justify-between items-start gap-2"
                style={{
                  overflowY:
                    props.bottomActions.length > 4 ? 'scroll' : 'hidden',
                  height: props.bottomActions.length > 4 ? '350px' : '',
                }}
              >
                {props.bottomActions.map(
                  (action: IconComponentProps, index: any) => {
                    return (
                      <div
                        key={generateRandomString()}
                        className={`p-2 clickable ${
                          index === bottomActive
                            ? 'bg-blue-500 rounded-md'
                            : 'transparent'
                        } `}
                        onClick={() => {
                          changeActiveMenu(index, 'bottom');
                        }}
                      >
                        <IconComponent
                          name={
                            index === bottomActive
                              ? action.name + '-Solid'
                              : action.name + '-Outlined'
                          }
                          size={action.size}
                          label={action.label}
                          color={
                            index === bottomActive ? '#ffffff' : action.color
                          }
                        />
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
