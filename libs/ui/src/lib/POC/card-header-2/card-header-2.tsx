import { styled } from '@mui/system';

/* eslint-disable-next-line */
export interface CardHeader2Props {}

const StyledCardHeader2 = styled('div')(({ theme }) => {
  return {
    'card-header-2': { minHeight: '80px' },
  };
});

export function CardHeader2(props: CardHeader2Props) {
  return (
    <StyledCardHeader2>
      <div className="card-header-2"></div>
    </StyledCardHeader2>
  );
}

export default CardHeader2;
