import { styled } from '@mui/system';

/* eslint-disable-next-line */
export interface UserAvatarProps {
  name?: string;
  color: string;
  size: number;
  image?: string;
}

const StyledUserAvatar = styled('div')(({ theme }) => {
  return {
    'user-avatar-component': {
      display: 'flex',
      flexDirection: 'row',
      gap: '10',
      'user-avatar-wrapper': {
        display: 'flex',
        gap: '10',
        flexDirection: 'column',
        'user-image': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        },
        'user-name': {
          position: 'relative',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          '.text-wrapper': {
            postion: 'relative',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
      },
    },
  };
});

export function UserAvatar(props: UserAvatarProps) {
  let initials: any = '';
  if (props.name === '') {
    initials = null;
  } else {
    if (props.name) {
      const name = props.name
        .trim()
        .split(' ')
        .slice(0, 2)
        .forEach((e) => {
          initials += e[0] + '';
        });
    }
  }
  return (
    <StyledUserAvatar>
      <div className="user-avatar-component">
        {props.image && (
          <div className="user-avatar-wrapper">
            <div
              className="user-image"
              style={{
                background: 'url(' + props.image + ') no-repeat center/cover',
                width: props.size + 'px',
                height: props.size + 'px',
              }}
            ></div>
          </div>
        )}
        {props.name && (
          <div
            className="user-name flex flex-row justify-center items-center"
            style={{
              backgroundColor: props.color + '90' || '#459ff2',
              width: props.size + 'px',
              height: props.size + 'px',
              borderRadius: '50%',
              color: 'white',
            }}
          >
            <div className="text-wrapper">{initials}</div>
          </div>
        )}
      </div>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
