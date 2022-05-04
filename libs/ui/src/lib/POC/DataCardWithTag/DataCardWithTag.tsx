import { Tag, TagProps } from '@gessa/ui';
import { styled } from '@mui/system';

export interface DataCardWithTagProps {
  headingText: string;
  bodyText: string;
  Tag: TagProps;
}
const CardStyle = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: 'white',
      borderRadius: '4px',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '182px',
    },
  };
});

export function DataCardWithTag(props: DataCardWithTagProps) {
  return (
    <CardStyle>
      <div>
        <div
          style={{
            color: '#333333',
            fontWeight: 700,
            fontSize: '20px',
            marginBottom: '12px',
          }}
        >
          {props.headingText}
        </div>
        <div
          style={{
            color: '#6d6d6d',
            fontWeight: 400,
            fontSize: '16px',
            marginBottom: '12px',
          }}
        >
          {props.bodyText}
        </div>
        <Tag
          backgroundColor={props.Tag.backgroundColor}
          color={props.Tag.color}
          text={props.Tag.text}
          borderColor={props.Tag.borderColor}
        />
      </div>
    </CardStyle>
  );
}

export default DataCardWithTag;
