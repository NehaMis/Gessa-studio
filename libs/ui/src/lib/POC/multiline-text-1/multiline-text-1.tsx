import { styled } from '@mui/system';
import IconComponent, {
  IconComponentProps,
} from '../../Atoms/icon-component/icon-component';

/* eslint-disable-next-line */
export interface MultilineText1Props {
  text1: string;
  text2: string;
  icon: IconComponentProps;
}

const StyledMultilineText1 = styled('div')(({ theme }) => {
  return {
    'multiline-text-1': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '88px',
      width: '100%',
      border: '1px solid #dadce0',
      borderRadius: '4px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      'row-wrapper': {
        position: 'relative',
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        'icon-wrapper': {
          minHeight: '56px',
          minWidth: '56px',
          height: '56px',
          width: '56px',
          border: '1px solid #dadce0',
          borderRadius: '4px',
          marginLeft: '15px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        'text-wrapper': {
          height: '56px',
          width: 'calc(100% - 56px)',
          marginLeft: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '10px',
          '.title': {
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: '400',
            color: '#6d6d6d',
          },
          '.sub-title': {
            width: 'inherit',
            fontSize: '18px',
            lineHeight: '22px',
            fontWeight: '500',
            color: '#333333',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          },
        },
      },
    },
  };
});

export function MultilineText1(props: MultilineText1Props) {
  return (
    <StyledMultilineText1>
      <div className="multiline-text-1">
        <div className="row-wrapper">
          <div
            className="icon-wrapper"
            style={{ backgroundColor: props.icon.color + '10' || '#ffffff' }}
          >
            <IconComponent
              name={props.icon.name}
              size={props.icon.size}
              color={props.icon.color}
            />
          </div>
          <div className="text-wrapper">
            <div className="title">{props.text1}</div>
            <div className="sub-title">{props.text2}</div>
          </div>
        </div>
      </div>
    </StyledMultilineText1>
  );
}

export default MultilineText1;
