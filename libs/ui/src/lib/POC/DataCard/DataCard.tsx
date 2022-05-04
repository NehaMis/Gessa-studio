import { Tag, TagProps } from '@gessa/ui';
import { styled } from '@mui/system';

export interface DataCardProps {
  heading: string;
  body: string;
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

export function DataCard(props: DataCardProps) {
  return (
    <CardStyle>
      <div>
        <div
          style={{
            color: '#333333',
            fontWeight: 700,
            fontSize: '32px',
            marginBottom: '16px',
          }}
        >
          {props.heading}
        </div>
        <div style={{ color: '#6d6d6d', fontWeight: 400, fontSize: '16px' }}>
          {props.body.length > 40 ? (
            <div>
              {`${props.body.slice(0, 200)}...`}
              <span style={{ color: '#1979d2', cursor: 'pointer' }}>
                Read More
              </span>
            </div>
          ) : (
            <div>{props.body}</div>
          )}
        </div>
      </div>
    </CardStyle>
  );
}

export default DataCard;
