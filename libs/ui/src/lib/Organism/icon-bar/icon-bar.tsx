import { Card1, Card1Props, IconComponent } from '@gessa/ui';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material';
import { DragEvent } from 'react';
import generateRandomString from '../../../static/randomString';
/* eslint-disable-next-line */
export interface IconBarProps {
  data: Array<any>;
}

const StyledIconBar = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.background.paper,
      innerWidth: '44px',
    },
  };
});

export function IconBar(props: IconBarProps) {
  const theme = useTheme();

  const onDragStart = (event: DragEvent, nodeType: any) => {
    event.dataTransfer.setData('application/dataflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <StyledIconBar>
      <div
        className=" flex flex-col justify-start items-center h-12  top-4 p-1  absolute left-4 w-12 rounded bottom-1"
        style={{
          backgroundColor: theme.palette.background.default,
          height: 'auto',
          width: '44px',
        }}
      >
        {props &&
          props.data &&
          props.data.length &&
          props.data.map((card1: any) => {
            return (
              <div
                key={generateRandomString()}
                onDragStart={(event: DragEvent) => {
                  onDragStart(
                    event,
                    JSON.stringify({ ...card1, id: generateRandomString() })
                  );
                }}
                draggable
                style={{
                  color: 'white',
                  minWidth: '44px',
                }}
              >
                <div
                  className={`flex flex-col box-border rounded justify-center items-center border ${
                    card1 &&
                    card1.data &&
                    card1.data.props &&
                    !card1.data.props.icon
                      ? ' h-12 w-12 items-center'
                      : 'h-12 w-12 items-start'
                  }`}
                  style={{
                    backgroundColor: theme.palette.background.default,
                    overflow: 'hidden',
                    borderColor: '#333333',
                  }}
                >
                  <div
                    className={`flex flex-row justify-between items-center overflow-hidden gap-1`}
                  >
                    {card1 &&
                      card1.data &&
                      card1.data.props &&
                      card1.data.props.icon &&
                      typeof card1.data.props.icon !== undefined && (
                        <div
                          className="flex flex-row justify-center items-center "
                          style={{
                            backgroundColor: theme.palette.background.default,
                          }}
                        >
                          <IconComponent
                            name={card1.data.props.icon.name}
                            size={card1.data.props.icon.size}
                            color={card1.data.props.icon.color}
                          />
                        </div>
                      )}
                  </div>
                </div>{' '}
              </div>
            );
          })}
      </div>
    </StyledIconBar>
  );
}

export default IconBar;
