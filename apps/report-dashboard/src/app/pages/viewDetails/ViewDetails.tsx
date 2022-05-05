import React, { useCallback, useState, useEffect } from 'react';
import {
  IconButton,
  Icon,
  Box as MuiBox,
  Divider,
  Typography,
  Stack,
  Chip,
} from '@mui/material';
import { styled } from '@mui/system';
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
// import { format } from 'sql-formatter';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

function ViewDetails() {
  const [validate, setValidate] = useState(true);
  const [tableData, setTableData] = useState({});
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  const history = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(process.env.NX_DATA_FLOW_BASE_URL + '/reportData')
      .then(function (response) {
        setTableData(response.data.result.data[0].rowData);
      });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);

  const Box = useCallback(
    styled(MuiBox)(({ theme }) => ({
      '.box': {
        width: screenSize.dynamicWidth / 2,
        padding: '6px',
      },
      '.viewDetails': {
        width: screenSize.dynamicWidth,
        paddingTop: '10px',
        paddingLeft: '6px',
        paddingBottom: '10px',
      },
      '.definitionBox': {
        width: screenSize.dynamicWidth,
        height: screenSize.dynamicHeight / 8,
        // border: '1px solid green',
        paddingTop: '10px',
        paddingLeft: '6px',
      },
      '.sqlBox': {
        width: screenSize.dynamicWidth,
        height: screenSize.dynamicHeight / 4,
        padding: '6px',
        border: '1px solid green',
      },
      '.sqlBoxLabel': {
        width: screenSize.dynamicWidth - 100,
        padding: '6px',
        border: '1px solid green',
      },
    })),
    []
  );

  return (
    <Box>
      <Box className="viewDetails">
        <Stack direction="row" spacing={2}>
          <KeyboardBackspaceIcon
            cursor="pointer"
            onClick={() => history('/')}
          />
          <Typography> View Details</Typography>
        </Stack>
      </Box>
      <Divider />
      <Stack direction="row" spacing={1}>
        <Box className="box">
          <Stack direction="column" spacing={1}>
            <Typography> Report Name</Typography>
            <Typography> Report 1</Typography>
          </Stack>
        </Box>
        <Box className="box">
          <Stack direction="column" spacing={1}>
            <Typography> Schemas</Typography>
            <Stack direction="row" spacing={2}>
              <Chip label="Schema 1" variant="outlined" />
              <Chip label="Schema 2" variant="outlined" />
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box className="definitionBox">
        <Typography> Definition</Typography>
        <Typography> Schemas</Typography>
      </Box>
      <Box className="">
        <Stack direction="row" spacing={1}>
          <Typography className="sqlBoxLabel"> SQL Query</Typography>
          <Stack direction="row" spacing={1}>
            <Typography>Validate</Typography>
            <Typography>Test Query</Typography>
          </Stack>
        </Stack>

        <Box className="sqlBox">
          <CodeMirror
            value={"SUBSTRING(`Column`, ' ', 2)"}
            height="170px"
            indentWithTab={true}
            theme={'dark'}
            extensions={[sql()]}
            onChange={(
              __value: any,
              _viewUpdate: any /* TODO document why this arrow function is empty */
            ) => {}}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ViewDetails;
