import React from 'react';
import { styled } from '@mui/system';
import { useTheme } from '@mui/system';
import { Typography } from '@mui/material';
import { Chip, IChipProps } from '../../Atoms/chip/chip';
import generateRandomString from '../../../static/randomString'

export interface ICardWithTextProps {
  title: string;
  subtitle: string;
  actions: Array<IChipProps>;
}

const StyledCardWithText = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.background.paper,
    },
  };
});

const CardWithText = (props: ICardWithTextProps) => {
  const theme = useTheme();
  const selectedChip = () => {};
  return (
    <StyledCardWithText>
      <div className="flex flex-col justify-start items-start gap-3 w-full h-full p-2">
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="caption">{props.subtitle}</Typography>
        <div className="flex flex-col gap-3 w-full  ">
          <div className="flex flex-row justify-start items-center flex-wrap gap-3">
            {props.actions &&
              props.actions.map((chip: IChipProps) => {
                return (
                  <div key={generateRandomString()}>
                    <Chip
                      key={generateRandomString()}
                      text={chip.text}
                      leftIcon={chip.leftIcon}
                      rightIcon={chip.rightIcon}
                      style={chip.style}
                      actionClick={selectedChip}
                    ></Chip>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </StyledCardWithText>
  );
};

export default CardWithText;
