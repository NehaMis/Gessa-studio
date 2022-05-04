import { UserAvatar, UserAvatarProps } from '@gessa/ui';
import { styled } from '@mui/system';

/* eslint-disable-next-line */
export interface MultilineTextUserProps {
  text1: string;
  text2: string;
  userData: UserAvatarProps;
}

const StyledMultilineTextUser = styled('div')(({ theme }) => {
  return {
    'multiline-text-user': {
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
      backgroundColor: '#f2f4f8',
      '.row-wrapper': {
        position: 'relative',
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '.icon-wrapper': {
          minHeight: '56px',
          minWidth: '56px',
          height: '56px',
          width: '56px',
          borderRadius: '50%',
          marginLeft: '15px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          '.img': { width: '52px', height: '52px' },
        },
        'text-wrapper': {
          height: '56px',
          width: '95%',
          marginLeft: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '10px',
          '.title': {
            width: 'inherit',
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

export function MultilineTextUser(props: MultilineTextUserProps) {
  return (
    <StyledMultilineTextUser>
      <div className="multiline-text-user">
        <div className="row-wrapper">
          <div className="icon-wrapper">
            <UserAvatar
              name={props.userData.name}
              image={props.userData.image}
              color={props.userData.color}
              size={props.userData.size}
            />
          </div>
          <div className="text-wrapper">
            <div className="title">{props.text1}</div>
            <div className="sub-title">{props.text2}</div>
          </div>
        </div>
      </div>
    </StyledMultilineTextUser>
  );
}

export default MultilineTextUser;
