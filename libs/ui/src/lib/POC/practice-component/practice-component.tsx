import { styled } from '@mui/system';

/* eslint-disable-next-line */
export interface PracticeComponentProps {}

const StyledPracticeComponent = styled('div')(({ theme }) => {
  return {
    '&': { color: 'black' },
    div: {
      backgroundColor: '#dadce0',
      margin: '10px',
      border: '1px solid #0a0b0c',
    },
  };
});

export function PracticeComponent(props: PracticeComponentProps) {
  return (
    <StyledPracticeComponent>
      {/* <div className="flex flex-row ">
        <div className="w-1/12">1/12</div>
        <div className="w-2/12">2/12</div>
        <div className="w-3/12">3/12</div>
        <div className="w-4/12">4/12</div>
        <div className="w-5/12">5/12</div>
        <div className="w-6/12">6/12</div>
      </div>
      <div className="max-w-full">Max width Full</div>
      <div className="max-w-min">Max width min</div>
      <div className="max-w-max p-10 box-border">
        <div className="p-12"> ead sada sds d adsa sddas dads dsad ad</div>
        <div>Max width max</div>
      </div>
      <div className="max-w-auto">Max width auto</div> */}
      <div></div>
    </StyledPracticeComponent>
  );
}

export default PracticeComponent;
