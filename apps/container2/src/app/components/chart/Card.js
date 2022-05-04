import React from 'react';
import { styled } from '@mui/system';
import Image from './dataflow_number.svg';

export const Card = (props) => {
  // const StyledCard = styled.div`
  //   padding: 0px;
  //   border-radius: 3px;
  //   min-width: 220px;
  //   display: flex;
  //   flex-direction: column;
  // `;

  const StyledCard = styled('div')(({ theme }) => {
    return {
      '&': {
        padding: '0px',
        borderRadius: '3px',
        minWidth: '220px',
        display: 'flex',
        flexDirection: 'column',
      },
    };
  });

  // const StyledCardTitle = styled.div`
  //   color: #333333;
  //   font-weight: 400;
  //   font-size: 16px;
  //   margin-left: 20px;
  //   margin-top: 5px;
  // `;

  const StyledCardTitle = styled('div')(({ theme }) => {
    return {
      '&': {
        color: '#333333',
        fontWeight: '400',
        fontSize: '16px',
        marginLeft: '20px',
        marginTop: '5px',
      },
    };
  });

  // const StyledHorizontalLine = styled.div`
  //   height: 1px;
  //   background-color: #e2e2e2;
  // `;

  const StyledHorizontalLine = styled('div')(({ theme }) => {
    return {
      '&': { height: '1px', backgroundColor: '#e2e2e2' },
    };
  });
  // const StyledTag = styled.div`
  //   min-width: 52px;
  //   max-width: 80px;
  //   text-align: center;
  //   margin: 12px;
  // `;

  const StyledTag = styled('div')(({ theme }) => {
    return {
      '&': {
        minWidth: '52px',
        maxWidth: '80px',
        textAlign: 'center',
        margin: '12px',
      },
    };
  });

  // const StyledText = styled.div`
  //   padding: 6px 12px;
  //   font-weight: 400;
  //   font-size: 12px;
  // `;

  const StyledText = styled('div')(({ theme }) => {
    return {
      '&': { padding: '6px 12px', fontWeight: '400', fontSize: '12px' },
    };
  });

  return (
    <StyledCard
      className="card flex flex-column rounded p-0"
      style={{ backgroundColor: props.backgroundColor, minWidth: '220px' }}
    >
      <div className="cardRow flex flex-row p-3">
        {props.image === 'Tree' && (
          <img src={Image} alt="" width="25px" height="25px" />
        )}
        <StyledCardTitle className="title font-normal text-base">
          {props.title}
        </StyledCardTitle>
      </div>
      <StyledHorizontalLine className="horizonatalLine"></StyledHorizontalLine>
      <StyledTag
        className="tags"
        style={{ backgroundColor: props.tagBackgroundColor }}
      >
        <StyledText className="tagText" style={{ color: props.tagColor }}>
          {props.tagName}
        </StyledText>
      </StyledTag>
    </StyledCard>
  );
};
