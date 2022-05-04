import { Box } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { IconComponent, Tabs } from '@gessa/ui';
import { Navigate, useNavigate } from 'react-router';
const ViewDetailsHeader = (props: any) => {
  const navigate = useNavigate()
  const schemaTheme = useTheme();
  const tabsList = [
    { label: 'Definition', value: 'definition' },
    { label: 'Data Table', value: 'dataTable' },
  ];
  const tabsOrientation = 'horizontal';
  const selectedTabColor = 'primary';
  const handleChange = (e: any) => {
    props.setselectedTab((e.target as HTMLInputElement).innerText);
  };
  return (
    <div>
      <Box
        sx={{
          py: '12.5px',
          pr: 2,
          pl: '19px',
          borderTop: '1px solid ' + schemaTheme.palette.text.primary,
          borderBottom: '1px solid ' + schemaTheme.palette.text.primary,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <IconComponent
          name={'Search' /* 'west_black_24dp' */}
          size={20}
          label={'Search' /* 'west_black_24dp' */}
          handleClick = {()=>{navigate("/schema")}}
        />
        <Box component="div" sx={{color:schemaTheme.palette.primary.main, marginLeft: '27px'}}>View Details</Box>
      </Box>
      <div
        style={{
          borderBottom: '1px solid ' + schemaTheme.palette.text.primary,
        }}
      >
        <Tabs
          tabsList={tabsList}
          tabsOrientation={tabsOrientation}
          selectedTabColor={selectedTabColor}
          onChangeFunc={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default ViewDetailsHeader;
