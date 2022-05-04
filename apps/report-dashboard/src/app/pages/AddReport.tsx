import {
  Box,
  Typography,
  Divider,
  InputBase,
  InputLabel,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import MultipleSelectChip from '../components/MultipleSelectionChip';
import React, { useCallback, useState } from 'react';

export interface AddReportType {
  width: string;
  snackbarShow:()=>void;
  shackbarClose:()=>void;
  onClose: () => void;
}

function AddReport(props: AddReportType) {

  const AddReportBootstrapInput = useCallback(
    styled(InputBase)(({ theme }) => ({
      'label + &': {
        marginTop: theme.spacing(1),
      },
      '& .MuiInputBase-input': {
        padding: '12px',
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '20px',
        //   padding: '10px 12px',
      },
      '& .MuiInputLabel-root': {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '120px',
        lineHeight: '16px',
        marginTop: '10px',
      },
    })),
    []
  );

  const AddReportSideMenu = useCallback(
    styled('div')(({ theme }) => {
      return {
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItem: 'flex-start',
        padding: '4px 0px 0px',
        width: `${props?.width}`,
        overflowY: 'hidden',

        '.report_model_header': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          padding: '0px 16px',
          height: '48px',
          top: '4px',
          '.report_heading': {
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '22px',
            lineHeight: '32px',
          },
        },

        '.report_input_panel': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px 16px',
          margin: '16px 0px',
          overflowY: 'scroll',
          top: '68px',
        },
        '.report_button_pannel': {
          display: 'flex',
          flexDirection: 'row',
          alignItem: 'flex-start',
          padding: '0px',
        },
        '.report_close_button': {
          width: '24px',
          height: '24px',
        },
        '.report_input_labels': {
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '16px',
          marginTop: '15px',
        },
        '.report_divider': {
          margin: '16px',
        },
        '.report_query_labels': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          position: 'relative',
          gap: '10px',
          width: '100%',
          '.validate': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            gap: '10px',
          },
        },
        '.report_footer': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'right',
          height: '64px',

          gap: '10px',
          '.btn_cancel': {
            width: '91px',
            height: '36px',
            borderRadius: '4px',
            padding: '10px 24px',
            margin: '0px 16px',
          },
          '.btn_save': {
            width: '78px',
            height: '36px',
            borderRadius: '4px',
            padding: '10px 24px',
            margin: '0px 16px',
            background: '#ffffff1f',
            color: '#FFFFFF',
            right: '20px',
          },
        },
      };
    }),
    []
  );

  interface addReportDataTypes{
    report_name:string,
    def:string,
    select_schema:Array<string>,
    sql:string
  }

  const [data, setData] = useState<addReportDataTypes>({
    report_name: '',
    def: '',
    select_schema: [],
    sql: '',
  });

  const handleSelectSchemaData=(schemaData:string)=>{
    setData({
      ...data,
      select_schema:[...schemaData]
    })
  }

  const isDataFilled = Object.entries(data)
    .map(([key, value]) => {
      if (value != '') {
        return true;
      } else {
        return false;
      }
    })
    .some((x) => x === true);

  

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.table(data);
    props.snackbarShow();
    props.onClose();
  };

  return (
      <AddReportSideMenu>
        <Box className="report_model_header">
          <Typography className="report_heading" variant="h5">
            Add Report
          </Typography>
          <Box className="report_close_Button" onClick={props.onClose}>
            <CloseIcon />
          </Box>
        </Box>
        <Divider />

        <Box className="report_input_panel">
          <InputLabel htmlFor="report-name" className="report_input_labels">
            Report Name
          </InputLabel>
          <AddReportBootstrapInput
            name="report_name"
            fullWidth={true}
            id="report-name"
            value={data.report_name}
            onChange={handleFormChange}
          />
          <Box className="report_divider"></Box>

          <InputLabel htmlFor="defination" className="report_input_labels">
            Definition
          </InputLabel>

          <AddReportBootstrapInput
            name="def"
            minRows={5}
            multiline={true}
            fullWidth={true}
            id="defination"
            value={data.def}
            onChange={handleFormChange}
          />
          <Box className="report_divider"></Box>

          <MultipleSelectChip onChange={handleSelectSchemaData} width={525} labelName={'Select Schema'}/>

          <Box className="report_divider"></Box>

          <Box className="report_query_labels">
            <InputLabel htmlFor="sql" className="report_input_labels">
              SQL Query
            </InputLabel>
            <Box className="validate">
              <Typography className="report_input_labels">Validate</Typography>
              <Typography className="report_input_labels">
                Test Query
              </Typography>
            </Box>
          </Box>

          <AddReportBootstrapInput
            name="sql"
            minRows={8}
            multiline={true}
            fullWidth={true}
            id="sql"
            value={data.sql}
            onChange={handleFormChange}
          />
          <Box className="report_divider"></Box>
        </Box>
        <Divider />
        <Box className="report_footer">
          <Button
            className="btn_cancel"
            variant="outlined"
            color="info"
            onClick={props.onClose}
          >
            Cancel
          </Button>
          <Button
            className="btn_save"
            variant="contained"
            onClick={() => handleSave()}
            disabled={isDataFilled || data.select_schema.length>0 ? false : true}
          >
            Save
          </Button>
        </Box>
      </AddReportSideMenu>
  );
}

export default AddReport;
