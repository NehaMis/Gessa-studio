import { styled } from '@mui/system';

export interface TagProps {
  backgroundColor: string;
  color: string;
  text: string;
  borderColor: string;
}

export function Tag(props: TagProps) {
  const TagStyle = styled('div')(({ theme }) => {
    return {
      '&': {
        backgroundColor: `${props.backgroundColor}`,
        color: `${props.color}`,
        border: `1px solid ${props.borderColor}`,
        borderRadius: '4px',
        padding: '8px',
        textAlign: 'center',
        width: 'fit-content',
        cursor: 'pointer',
      },
    };
  });

  return (
    <TagStyle>
      <div>{props.text}</div>
    </TagStyle>
  );
}

export default Tag;
