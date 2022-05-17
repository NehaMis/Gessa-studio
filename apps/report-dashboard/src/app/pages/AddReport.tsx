import {
  Box,
  Typography,
  Divider,
  InputBase,
  InputLabel,
  Button,
  Stack,
  Box as MuiBox,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import MultipleSelectChip from "../components/MultipleSelectionChip";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import React, { useCallback, useEffect, useState } from "react";
import TablePro from "../components/Table/TablePro";
import { postReportApi } from "../../store/reportDashboardSlice";
import { useAppDispatch } from "../../context/redux";
import SqlEditor from "../components/SqlEditor";

export interface AddReportType {
  width: string;
  snackBarArgs: any;
  setSnackBarArgs: (data: any) => void;
  setFilters: (filter: any) => void;
  onClose: () => void;
}

let db: any;

function AddReport(props: AddReportType) {
  const themes = useTheme();
  const [data, setData] = useState<addReportDataTypes>({
    report_name: "",
    def: "",
    select_schema: [],
    sql: "",
  });

  const [errors, setErrors] = useState(false);
  const [queryError, setQueryError] = useState("");
  const [validate, setValidate] = useState(false);
  const [testQuery, setTestQuery] = useState(false);
  const [page, setPage] = React.useState(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      db = (window as any).openDatabase(
        "testDB",
        "1.0",
        "Test DB",
        2 * 1024 * 1024
      );
    } catch (error) {}
  }, []);

  interface addReportDataTypes {
    report_name: string;
    def: string;
    select_schema: Array<string>;
    sql: string;
  }

  const AddReportBootstrapInput = useCallback(
    styled(InputBase)(({ theme }) => ({
      "label + &": {
        marginTop: theme.spacing(1),
      },
      "& .MuiInputBase-input": {
        fontFamily: "Roboto",
        paddingLeft: "12px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.custom.inputComponentBg,
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
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
        width: `${props?.width}`,
        maxWidth: `calc(100% - 0px)`,

        "& .Mui-error": {
          border: "1px solid red",
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

          "& .MuiSvgIcon-root": {
            cursor: "pointer",
          },
        },

        ".report_input_panel": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px 16px",
          margin: "16px 0px",
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
          cursor: "pointer",
        },
        ".report_input_labels": {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "16px",
          color: theme.palette.custom.sideBarText1,
        },
        ".report_validate_and_testQuery": {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "16px",
          fontSize: "14px",
          cursor: "pointer",
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
        },

        ".report_input_frame": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "90px",
          left: "16px",
          "& .MuiInputBase-root": {
            height: "41px",
          },
        },

        ".message": {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: " 12px",
          lineHeight: "16px",
          color: theme.palette.custom.successMsg,
        },

        ".queryErrorMessage": {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: " 12px",
          lineHeight: "16px",
          color: theme.palette.custom.errorMsg,
        },

        ".checkedIcon": {
          color: theme.palette.custom.successMsg,
          width: "13.33px",
          height: "13.33px",
          padding: "1px",
        },

        ".wrongStatementIcon": {
          color: theme.palette.custom.errorMsg,
          width: "13.33px",
          height: "13.33px",
          padding: "1px",
        },

        ".error_notification": {
          fontFamily: "Roboto",
          fontSize: "12px",
          color: theme.palette.custom.errorMsg,
        },

        ".sqlTableTitle": {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: " 22px",
          lineHeight: "32px",
          color: theme.palette.custom.sideBarText2,
        },

        ".sqlTablePannel": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 0px 16px 16px",
          height: "40px",
        },

        ".sqlTable_button_pannel": {
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "0px 16px 0px 0px",
          height: "36px",
        },

        ".sqlTableButtons": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "36px",
          height: "36px",
          margin: "0px 10px",
          padding: "16px",
          background: theme.palette.custom.dashboardButtonBg,
          borderRadius: "4px",
          cursor: "pointer",

          "&:hover": {
            background: theme.palette.custom.dashboardButtonHover,
          },
          "& .MuiSvgIcon-root": {
            color:
              theme.palette.mode == "light" ? theme.palette.custom.form3 : null,
          },
        },

        ".pagination": {
          display: "flex",
          bottom: "0px",
          justifyContent: "flex-end",
          width: "98%",
          height: "48px",
          alignItems: "center",
        },
      };
    }),
    []
  );

  const ButtonBox = styled("div")(({ theme }) => ({
    ".btn_save": {
      width: "78px",
      height: "36px",
      borderRadius: "4px",
      padding: "10px 24px",
      margin: "0px 16px",
      background:
        testQuery && checkAllDataFilled()
          ? theme.palette.custom.tablePaginationBg
          : theme.palette.custom.btnDisabled,
      color: theme.palette.custom.sideBarText2,
      right: "20px",

      "&:hover": {
        background: theme.palette.custom.dashboardButtonHover,
      },
    },
  }));

  function createData(column1: string, column2: string) {
    return { column1, column2 };
  }

  const rows = [
    createData("10", "159"),
    createData("20", "237"),
    createData("30", "262"),
  ];

  const handlePageChange = (event?: any, value?: any) => {
    setPage(value);
  };

  const onValiteQuery = () => {
    db.transaction((tx: any) => {
      tx.executeSql("SET NOEXEC ON");
    });
    db.transaction((tx: any) => {
      tx.executeSql(
        `${data.sql}`,
        [],
        (MSG: any) => {
          alert("executed success!");
          setValidate(true);
        },
        (ERROR: any, test: any) => {
          if (test.message.includes("syntax")) {
            setQueryError("Syntax error");
          } else if (test.message.includes("incomplete")) {
            setQueryError("Incomplete syntax");
          } else {
            setValidate(true);
          }
        }
      );
    });
  };

  const handleTestQuery = () => {
    if (validate) {
      setTestQuery(true);
    } else {
      setQueryError("Please Validate Query First");
    }
    // window.scrollBy(0, 2000);
  };

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
    .every((x) => x === true);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSqlChange = (value: any) => {
    setData({
      ...data,
      sql: value,
    });

    setValidate(false);
    setQueryError("");
  };

  const checkAllDataFilled = () => {
    if (isDataFilled && data.select_schema.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleSave = () => {
    if (checkAllDataFilled()) {
      dispatch(postReportApi(data))
        .unwrap()
        .then((response) => {
          props.setFilters({
            name: "",
            select_schema: [],
            created_by: [],
            created_on: {
              from: "",
              to: "",
            },
          });
          props.setSnackBarArgs({
            ...props.snackBarArgs,
            open: true,
            message: "Report Added Successfully",
          });
          props.onClose();
        })
        .catch((reason)=>{
          props.setSnackBarArgs({
            ...props.snackBarArgs,
            open: true,
            type:"error",
            message: reason.message,
          });
        })
      
    } else {
      setErrors(true);
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
          placeholder="Enter Report Name"
          name="report_name"
          fullWidth={true}
          id="report-name"
          value={data.report_name}
          onChange={handleFormChange}
        />
        {errors && data.report_name == "" ? (
          <Typography className="error_notification">
            Please Add Report Name
          </Typography>
        ) : null}
        <Box className="report_divider"></Box>

        <InputLabel htmlFor="defination" className="report_input_labels">
          Definition
        </InputLabel>

        <AddReportBootstrapInput
          name="def"
          placeholder="Enter Definition"
          minRows={4}
          multiline={true}
          fullWidth={true}
          id="defination"
          value={data.def}
          onChange={handleFormChange}
        />
        {errors && data.def == "" ? (
          <Typography className="error_notification">
            Please Add Definition
          </Typography>
        ) : null}
        <Box className="report_divider"></Box>

        <Box className="report_input_frame">
          <MultipleSelectChip
            onChange={handleSelectSchemaData}
            width={527}
            labelName={"Select Schema"}
            background={themes.palette.custom.inputComponentBg}
          />
          {errors && data.select_schema.length == 0 ? (
            <Typography className="error_notification">
              Please Select Schema
            </Typography>
          ) : null}
        </Box>

        <Box className="report_divider"></Box>

        <Box className="report_query_labels">
          <InputLabel htmlFor="sql" className="report_input_labels">
            SQL Query
          </InputLabel>
          <Box className="validate">
            {!validate && (
              <Typography
                className="report_validate_and_testQuery"
                sx={{
                  color:
                    data.sql == ""
                      ? themes.palette.custom.sideBarText2
                      : themes.palette.custom.tablePaginationBg,
                }}
                onClick={onValiteQuery}
              >
                Validate
              </Typography>
            )}

            {!testQuery && (
              <Typography
                className="report_validate_and_testQuery"
                sx={{
                  color:
                    data.sql == ""
                      ? themes.palette.custom.sideBarText2
                      : themes.palette.custom.tablePaginationBg,
                }}
                onClick={() => handleTestQuery()}
              >
                Test Query
              </Typography>
            )}
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <SqlEditor value={data.sql} onChange={handleSqlChange} />
          {errors && data.sql == "" ? (
            <Typography className="error_notification">
              Please Enter Query
            </Typography>
          ) : null}

          {validate && (
            <Stack className="messageContainer" direction="row">
              <CheckCircleOutlinedIcon className="checkedIcon" />
              <Typography className="message">No Error Found</Typography>
            </Stack>
          )}
          {!validate && queryError != "" && (
            <Stack className="messageContainer" direction="row">
              <HighlightOffIcon className="wrongStatementIcon" />
              <Typography className="queryErrorMessage">
                {queryError}
              </Typography>
            </Stack>
          )}
        </Box>

        <Box className="report_divider"></Box>

        {testQuery && (
          <Box sx={{ width: "100%" }}>
            <Box className="table">
              <Box className="sqlTablePannel">
                <Typography className="sqlTableTitle">
                  SQL Query Table Name
                </Typography>
                <Box className="sqlTable_button_pannel">
                  <Box
                    className="sqlTableButtons"
                    // onClick={() => handleShowFilter()}
                  >
                    <FilterAltOutlinedIcon />
                  </Box>
                  <Box
                    className="sqlTableButtons"
                    // onClick={() => handleToggleColumnOption()}
                  >
                    <TuneOutlinedIcon />
                  </Box>
                </Box>
              </Box>
              <TablePro showPagination={true} data={rows} />
            </Box>
          </Box>
        )}

        <Box className="report_divider"></Box>
      </Box>
      <Divider />
      <ButtonBox className="report_footer">
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
        >
          Save
        </Button>
      </ButtonBox>
    </AddReportSideMenu>
  );
}

export default AddReport;
