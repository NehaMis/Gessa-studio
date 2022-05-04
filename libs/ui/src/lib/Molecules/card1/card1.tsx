import { styled } from '@mui/system';
import { useTheme } from '@mui/system';
import { IconComponent, IconComponentProps } from '@gessa/ui';

/* eslint-disable-next-line */
export interface Card1Props {
  leftAccent?: string;
  icon: IconComponentProps;
  text?: string;
  otherData?: any;
}

const StyledCard1 = styled('div')(({ theme }) => {
  return {
    '&': {},
  };
});

export function Card1(props: Card1Props) {
  const theme = useTheme();

  return (
    <StyledCard1>
      <div>
        <div
          className={`flex flex-col box-border rounded justify-center border  ${
            props && !props.leftAccent
              ? ' h-12 w-12 items-center'
              : 'h-12 w-full items-start'
          }`}
          style={{
            backgroundColor: theme.palette.background.default,
            overflow: 'hidden',
            borderColor: '#1890FF',
          }}
        >
          <div
            className={`flex flex-row justify-between items-center overflow-hidden gap-1`}
          >
            {props && props.leftAccent && props.leftAccent !== '' && (
              <div
                className={`h-12 border-1  rounded-l-lg ${
                  props && props.text ? 'w-1' : 'w-0'
                }`}
                style={{ backgroundColor: props.leftAccent }}
              ></div>
            )}
            {props && props.icon && typeof props.icon !== undefined && (
              <div
                className="flex flex-row justify-center items-center "
                style={{
                  backgroundColor: theme.palette.background.default,
                }}
              >
                <IconComponent
                  name={props.icon.name}
                  size={props.icon.size}
                  color={props.icon.color}
                />
              </div>
            )}

            {props && props.text && props.text !== '' && (
              <div className="flex flex-row p-1 whitespace-nowrap w-20 overflow-hidden overflow-ellipsis">
                <p
                  className="whitespace-nowrap w-full overflow-hidden overflow-ellipsis"
                  style={{
                    color: theme.palette.text.primary,
                  }}
                >
                  {props.text}
                </p>
              </div>
            )}
          </div>
        </div>{' '}
      </div>
    </StyledCard1>
  );
}

export default Card1;
