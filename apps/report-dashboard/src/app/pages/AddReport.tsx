import {
  Box,
  Typography,
  Divider,
  InputBase,
  InputLabel,
  Button,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import MultipleSelectChip from "../components/MultipleSelectionChip";
import React, { useCallback, useState } from "react";

export interface AddReportType {
  width: string;
  snackBarArgs: any;
  setSnackBarArgs: (data: any) => void;
  onClose: () => void;
}

function AddReport(props: AddReportType) {
  const themes = useTheme();

  const AddReportBootstrapInput = useCallback(
    styled(InputBase)(({ theme }) => ({
      "label + &": {
        marginTop: theme.spacing(1),
      },
      "& .MuiInputBase-input": {
        padding: "12px",
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.custom.inputComponentBg,
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
        //   padding: '10px 12px',
      },
      "& .MuiInputLabel-root": {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "120px",
        lineHeight: "16px",
        marginTop: "10px",
      },
    })),
    []
  );

  const AddReportSideMenu = useCallback(
    styled("div")(({ theme }) => {
      return {
        height: "100%",

        display: "flex",
        flexDirection: "column",
        // alignItem: 'flex-start',
        // padding: '4px 0px 0px',
        width: `${props?.width}`,
        maxWidth: `calc(100% - 0px)`,
        // overflowY: 'hidden',
        // overflowX: 'hidden',

        '& .Mui-error':{
          border: '1px solid red',
        },

        ".report_model_header": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          padding: "0px 16px",
          height: "48px",
          top: "4px",
          ".report_heading": {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "22px",
            lineHeight: "32px",
            color: theme.palette.custom.sideBarText2,
          },
        },

        ".report_input_panel": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px 16px",
          margin: "16px 0px",
          // overflowY: 'scroll',
          // top: '68px',
        },
        ".report_button_pannel": {
          display: "flex",
          flexDirection: "row",
          alignItem: "flex-start",
          padding: "0px",
        },
        ".report_close_button": {
          width: "24px",
          height: "24px",
        },
        ".report_input_labels": {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "16px",
          color: theme.palette.custom.sideBarText1,
          // marginTop: '15px',
        },
        ".report_validate_and_testQuery": {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "16px",
          fontSize: "14px",
          color: theme.palette.custom.sideBarText2,
        },
        ".report_divider": {
          margin: "16px",
        },
        ".report_query_labels": {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
          position: "relative",
          gap: "10px",
          width: "100%",
          ".validate": {
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: "10px",
          },
        },
        ".report_footer": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "right",
          height: "64px",

          gap: "10px",
          ".btn_cancel": {
            width: "91px",
            height: "36px",
            borderRadius: "4px",
            padding: "10px 24px",
            margin: "0px 16px",
          },
          ".btn_save": {
            width: "78px",
            height: "36px",
            borderRadius: "4px",
            padding: "10px 24px",
            margin: "0px 16px",
            background: "#ffffff1f",
            color: theme.palette.custom.sideBarText2,
            right: "20px",
          },
        },

        ".report_input_frame": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "90px",
          left: "16px",
        },
      };
    }),
    []
  );

  interface addReportDataTypes {
    report_name: string;
    def: string;
    select_schema: Array<string>;
    sql: string;
  }

  const [data, setData] = useState<addReportDataTypes>({
    report_name: "",
    def: "",
    select_schema: [],
    sql: "",
  });

  const [errors, setErrors] = useState(false);

  const handleSelectSchemaData = (schemaData: string) => {
    setData({
      ...data,
      select_schema: [...schemaData],
    });
  };

  const isDataFilled = Object.entries(data)
    .map(([key, value]) => {
      if (value != "") {
        return true;
      } else {
        return false;
      }
    })
    .some((x) => x === true);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const checkAllDataFilled =()=>{
    if(isDataFilled && data.select_schema.length > 0){
      return true;
    }else{
      return false
    }
  }
  
  const handleSave = () => {
    if (checkAllDataFilled()) {
      props.setSnackBarArgs({
        open: true,
      });
      props.onClose();
    } else {
      setErrors(true)
    }
  };

  return (
    <AddReportSideMenu>
      <Box className="report_model_header">
        <Typography variant="h5" className="report_heading">
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
          // error={errors && data.report_name==""?true:false}
          placeholder="Enter Report Name"
          name="report_name"
          fullWidth={true}
          id="report-name"
          value={data.report_name}
          onChange={handleFormChange}
        />
        {errors && data.report_name==""?<Typography sx={{color:'red'}}>Please Add Report Name</Typography>:null}
        <Box className="report_divider"></Box>

        <InputLabel htmlFor="defination" className="report_input_labels">
          Definition
        </InputLabel>

        <AddReportBootstrapInput
          name="def"
          // error={errors && data.def==""?true:false}
          placeholder="Enter Definition"
          minRows={5}
          multiline={true}
          fullWidth={true}
          id="defination"
          value={data.def}
          onChange={handleFormChange}
        />
        {errors && data.def==""?<Typography sx={{color:'red'}}>Please Add Definition</Typography>:null}
        <Box className="report_divider"></Box>

        <Box className="report_input_frame">
          <MultipleSelectChip
            onChange={handleSelectSchemaData}
            width={527}
            labelName={"Select Schema"}
            background={themes.palette.custom.inputComponentBg}
          />
        </Box>
        {errors && data.select_schema.length==0?<Typography sx={{color:'red'}}>Please Select Schema</Typography>:null}
        <Box className="report_divider"></Box>

        <Box className="report_query_labels">
          <InputLabel htmlFor="sql" className="report_input_labels">
            SQL Query
          </InputLabel>
          <Box className="validate">
            <Typography className="report_validate_and_testQuery">
              Validate
            </Typography>
            <Typography className="report_validate_and_testQuery">
              Test Query
            </Typography>
          </Box>
        </Box>

        <AddReportBootstrapInput
          name="sql"
          placeholder="Add SQL Query"
          minRows={6}
          multiline={true}
          fullWidth={true}
          id="sql"
          value={data.sql}
          onChange={handleFormChange}
        />
        {errors && data.sql==""?<Typography sx={{color:'red'}}>Please Add Sql Query</Typography>:null}
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
          // disabled={
          //   isDataFilled || data.select_schema.length > 0 ? false : true
          // }
        >
          Save
        </Button>
      </Box>
    </AddReportSideMenu>
  );
}

export default AddReport;
