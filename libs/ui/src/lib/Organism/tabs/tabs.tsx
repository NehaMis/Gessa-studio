import React from 'react';
import { Tabs as MuiTabs, useTheme } from '@mui/material';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import themes from '../../../theme';
import { styled } from '@mui/system';

export interface TabsProps {
  tabsList: Array<{
    label: string;
    value: string;
  }>;
  tabsOrientation: 'vertical' | 'horizontal';
  verticalHeight?: string | number;
  horizontalWidth?: string | number;
  tabDisabled?: boolean;
  selectedTabColor?: 'primary' | 'secondary';
  onChangeFunc?: (e: React.SyntheticEvent<Element, Event>) => void;
}

export function Tabs(props: TabsProps) {
  const StyledRangePicker = styled('div')(({ theme }) => {
    return {
      '& .MuiTabs-scrollButtons': {
        color: dslTheme.palette.text.primary,
      },
      tabsWrapper:{
        borderBottom:
            props.tabsOrientation === 'horizontal' && '1px solid #cecbcb',
          borderRight:
            props.tabsOrientation === 'vertical' && '1px solid #cecbcb'
      }
    };
  });
  const [value, setValue] = React.useState(0);
  const dslTheme = useTheme();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    props.onChangeFunc?.(event);
  };

  return (
    <StyledRangePicker>
      <Box className="tabs-wrapper"
        sx={{
          /* borderBottom:
            props.tabsOrientation === 'horizontal' && '1px solid #cecbcb',
          borderRight:
            props.tabsOrientation === 'vertical' && '1px solid #cecbcb', */
          bgcolor: dslTheme.palette.background.default,
          display: 'flex',
          height:
            props.tabsOrientation === 'vertical'
              ? props.verticalHeight
              : 'fit-content',
          width:
            props.tabsOrientation === 'vertical'
              ? 'fit-content'
              : props.horizontalWidth,
        }}
      >
        <MuiTabs
          orientation={props.tabsOrientation}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ backgroundColor: dslTheme.palette.background.default }}
          scrollButtons="auto"
          indicatorColor={props.selectedTabColor}
          textColor={props.selectedTabColor}
        >
          {props.tabsList.map((listItem, index) => {
            return (
              <Tab
                sx={{ color: dslTheme.palette.text.primary, textTransform:"Capitalize" }}
                label={listItem.label}
                key={index}
                disabled={props.tabDisabled}
              />
            );
          })}
        </MuiTabs>
      </Box>
    </StyledRangePicker>
  );
}

export default Tabs;
