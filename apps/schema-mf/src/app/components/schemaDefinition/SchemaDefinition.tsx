import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { IconComponent, Datagrid, Tabs, Button } from '@gessa/ui';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import { ViewDetailsHeader, SchemaCard } from '../index';
import DeleteSchema from '../deleteSchema/DeleteSchema';

interface ISchemaDefinitionProps {
  schemaHeader: any;
  schemaName: any;
  fieldsData: Array<{
    id: any;
    value: any;
  }>;
  footerH1: any;
  createdByValue: any;
  footerH2: any;
  createdOnValue: any;
  imgPath:any
}
const SchemaDefinition = () => {
  const schemaTheme = useTheme();
  const navigate = useNavigate();
  const [displayDeleteSchema,setDisplayDeleteSchema] = useState<boolean>(false)
  const [definitionData, setDefinitionData] =
    useState<ISchemaDefinitionProps>();

  useEffect(() => {
    axios
      .get(process.env.NX_DATA_FLOW_BASE_URL + '/schemadefinition')
      .then(function (response) {
        console.log(response.data.schemaDefinition.schemaDataDefinition)
        setDefinitionData(response.data.schemaDefinition.schemaDataDefinition);
      });
  }, []);

  const createdOnFragments =
    definitionData?.createdOnValue?.split('T') || new Date();
  const deleteSchemaHandler = () => {
    setDisplayDeleteSchema(true)
  };
  return (
    <Box component="div" sx={{ p: 2 }}>
      {displayDeleteSchema?<DeleteSchema displayDeleteSchema={displayDeleteSchema} setDisplayDeleteSchema={setDisplayDeleteSchema}/>:null}
      <Box component="div" sx={{ mb: 2 }}>
        <Box component="div">
          {definitionData && definitionData.schemaHeader}
        </Box>
        <Box
          component="div"
          sx={{
            fontWeight: 'bold',
            color: schemaTheme.palette.primary.main,
            mb: 3,
          }}
        >
          {definitionData && definitionData.schemaName}
        </Box>
        {definitionData && (
          <SchemaCard displayArray={definitionData.fieldsData} />
        )}
      </Box>
      <Box component="div" sx={{ display: 'flex', px: 2, gap: '10%' }}>
        <Box
          component="div"
          sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}
        >
          <Box component="div">{definitionData?.footerH1}</Box>
          <Box component="div" sx={{ color: schemaTheme.palette.primary.main, display:"flex", flexDirection:"row", alignItems:"center" }}>
            <img alt="created by" src={definitionData?.imgPath} height="5%" width="5%" style={{borderRadius:"50%", marginRight:"4px"}}/>{definitionData?.createdByValue}
          </Box>
        </Box>
        <Box
          component="div"
          sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}
        >
          <Box component="div">{definitionData?.footerH2}</Box>
          <Box component="div" sx={{ color: schemaTheme.palette.primary.main }}>
            {createdOnFragments[0] + ' ' + createdOnFragments[1]?.split('.')[0]}
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'fixed',
          bottom: 0,
          pr: 3,
          pb: 1,
        }}
      >
        <Button
          text="Delete"
          variant="contained"
          color="info"
          handleClick={(e) => {
            deleteSchemaHandler()
          }}
        />
      </Box>
    </Box>
  );
};

export default SchemaDefinition;
