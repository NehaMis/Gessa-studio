import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { IconComponent, Datagrid, Tabs } from '@gessa/ui';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import {ViewDetailsHeader} from '../index'
const SchemaDefinition = () => {
  const schemaTheme = useTheme();
  const navigate = useNavigate()
  const [definitionData, setDefinitionData] = useState();
  
  useEffect(() => {
    axios.get('/SchemaDefinition').then(function (response) {
      setDefinitionData(response.data);
    });
  }, []);

  console.log(definitionData);
  
  return (
    <Box>
      SchemaDefinition
    </Box>
  );
};

export default SchemaDefinition;
