import React, { useCallback, useState, useEffect } from "react";
import {
  Box as MuiBox,
  Divider,
  Typography,
  Stack,
  Chip,
  Pagination,
  Button,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import {
  postUpdateQueryApi,
  postDeleteReportApi,
} from "../../../store/reportDashboardSlice";
import TablePro from "../../components/Table/TablePro";


/** sqlite db object */
let db: any;

function createData(column1: string, column2: string) {
  return { column1, column2 };
}

const rows = [
  createData("10", "159"),
  createData("20", "237"),
  createData("30", "262"),
];

function ViewDetails(props: any) {
  const [validate, setValidate] = useState(false);
  const [testQuery, setTestQuery] = useState(false);
  const [oldQuery, setOldQuery] = useState("");
  const [query, setQuery] = useState("");
  const [queryError, setQueryError] = useState("");
  const themes = useTheme();
  const dispatch = useDispatch();

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
  const [page, setPage] = React.useState(1);

  const handlePageChange = (event?: any, value?: any) => {
    setPage(value);
  };
  const history = useNavigate();

  const location: any = useLocation();

  const { row, index }: any = location.state;

  /** to initialize test sql database */
  useEffect(() => {
    try {
      db = (window as any).openDatabase(
        "testDB",
        "1.0",
        "Test DB",
        2 * 1024 * 1024
      );
    } catch (error) {
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    setQuery(row?.details?.query);
    setOldQuery(row?.details?.query);
  }, []);

  
  const StyledPagination = styled(MuiBox)(({ theme }) => ({
    display: "flex",
    bottom: "0px",
    justifyContent: "flex-end",
    width: "98%",
    height: "48px",
    alignItems: "center",

    "& .css-j5ntxn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
      backgroundColor: theme.palette.custom.tablePaginationBg,
    },
  }));

  const Box = useCallback(
    styled(MuiBox)(({ theme }) => ({
      ".box": {
        width: screenSize.dynamicWidth / 2,
        padding: "6px",
      },
      ".viewDetails": {
        width: screenSize.dynamicWidth,
        paddingTop: "10px",
        paddingLeft: "6px",
        paddingBottom: "10px",
      },
      ".title": {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: " 16px",
        lineHeight: "24px",
        color: theme.palette.custom.sideBarText2,
      },
      ".label": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: " 14px",
        lineHeight: "20px",
        color: theme.palette.custom.sideBarText1,
      },
      ".name": {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: " 16px",
        lineHeight: "20px",
        color: theme.palette.custom.sideBarText2,
      },
      ".chip": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: " 14px",
        lineHeight: "20px",
        color: theme.palette.custom.dropDownChip,
        borderColor: theme.palette.custom.dropDownChip,
      },
      ".definition": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: " 12px",
        lineHeight: "16px",
        color: theme.palette.custom.sideBarText1,
      },
      ".description": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: " 14px",
        lineHeight: "20px",
        color: theme.palette.custom.sideBarText2,
      },
      ".definitionBox": {
        width: screenSize.dynamicWidth,
        height: screenSize.dynamicHeight / 8,
        paddingTop: "10px",
        paddingLeft: "6px",
      },
      ".validate": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: " 12px",
        lineHeight: "16px",
        color: theme.palette.custom.tablePaginationBg,
        cursor: "pointer",
      },

      ".report_query_labels": {
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        position: "relative",
        width: "100%",
        ".report_validate_and_testQuery": {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          gap: "10px",
        },
      },

      ".sqlBox": {
        width: screenSize.dynamicWidth - 20,
        height: screenSize.dynamicHeight / 3,
        marginBottom: "10px",
      },
      ".sqlBoxLabel": {
        width: screenSize.dynamicWidth - 130,
        padding: "6px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: " 12px",
        lineHeight: "16px",
        color: theme.palette.custom.sideBarText1,
      },
      ".message": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: " 12px",
        lineHeight: "16px",
        color: theme.palette.custom.successMsg,
      },

      ".checkedIcon": {
        color: theme.palette.custom.successMsg,
        width: "13.33px",
        height: "13.33px",
        padding: "1px",
      },

      ".queryErrorMessage": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: " 12px",
        lineHeight: "16px",
        color: theme.palette.custom.errorMsg,
      },

      ".sqlEditorBottomPannel": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "49px",
      },

      ".queryTextBoxSaveCancel_button_pannel": {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "0px",
      },

      ".queryTextBoxSaveCancel_buttons": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "36px",
        height: "36px",
        margin: "0px 5px",
        padding: "10px",
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

      ".wrongStatementIcon": {
        color: theme.palette.custom.errorMsg,
        width: "13.33px",
        height: "13.33px",
        padding: "1px",
      },

      ".container": {
        width: screenSize.dynamicWidth - 20,
        height: screenSize.dynamicHeight / 2,
        marginTop: "50px",
      },
      ".table": {
        width: screenSize.dynamicWidth - 20,
      },
      ".sqlTitle": {
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
        height: "40px",
      },

      ".sqlTable_button_pannel": {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        height: "36px",
      },

      ".sqlTableTitle": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: " 22px",
        lineHeight: "32px",
        color: theme.palette.custom.sideBarText2,
      },

      ".sqlTableButtons": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "36px",
        height: "36px",
        margin: "0px 10px",
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

      ".card": {
        width: screenSize.dynamicWidth - 20,
        height: "100px",
      },
      ".avatar": {
        width: "20px",
        height: "20px",
      },
      ".createdByBox": {
        width: screenSize.dynamicWidth / 2,
        padding: "4px",
      },
      ".delete": {
        marging: "10px",
        width: "88px",
        height: "36px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: " 12px",
        lineHeight: "16px",
        color: theme.palette.custom.btnDeleteColor,
        background: theme.palette.custom.tablePaginationBg,
        borderRadius: "4px",
      },
    })),
    []
  );

  const handleTestQuery = () => {
    if (validate) {
      setTestQuery(true);
    } else {
      setQueryError("Please Validate Query First");
    }
  };

  const handleQuery = (queryText: any) => {
    if (oldQuery !== queryText) {
      setValidate(false);
      setTestQuery(false);
      setQueryError("");
    } 
  };

  const onValiteQuery = () => {
    db.transaction((tx: any) => {
      tx.executeSql("SET NOEXEC ON");
    });

    db.transaction((tx: any) => {
      tx.executeSql(
        `${query}`,
        [],
        (MSG: any) => {
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

  const handleSaveQuery = () => {
    if (validate && testQuery) {
      setOldQuery(query);
      dispatch(postUpdateQueryApi({ index, query }));
    } else {
      setQueryError("Please Validate & Test Query First");
    }
  };

  const handleCancelQuery = () => {
    setQuery(oldQuery);
  };

  const handleDeleteReport = () => {
    dispatch(postDeleteReportApi(index));
    history("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingBottom: "80px",
      }}
    >
      <Box className="viewDetails">
        <Stack direction="row" spacing={2}>
          <KeyboardBackspaceIcon
            cursor="pointer"
            onClick={() => history("/")}
          />
          <Typography className="title"> View Details</Typography>
        </Stack>
      </Box>
      <Divider />
      <Stack direction="row" spacing={1}>
        <Box className="box">
          <Stack direction="column" spacing={1}>
            <Typography className="label"> Report Name</Typography>
            <Typography className="name">{row?.details?.name}</Typography>
          </Stack>
        </Box>
        <Box className="box">
          <Stack direction="column" spacing={1}>
            <Typography className="label"> Schemas</Typography>
            <Stack direction="row" spacing={2}>
              {row?.details?.schema?.map?.((item: any) => {
                return (
                  <Chip
                    key={item}
                    className="chip"
                    label={item}
                    variant="outlined"
                  />
                );
              })}
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box className="definitionBox">
        <Typography className="definition"> Definition</Typography>
        <Typography className="description">
          {row?.details?.description}
        </Typography>
      </Box>
      <Box className="sqlBox">
        <Box className="report_query_labels">
          <Typography className="sqlBoxLabel"> SQL Query</Typography>
          <Box className="report_validate_and_testQuery">
            {!validate && oldQuery !== query && (
              <Typography className="validate" onClick={onValiteQuery}>
                Validate
              </Typography>
            )}
            {!testQuery && oldQuery !== query && (
              <Typography
                className="validate"
                onClick={() => handleTestQuery()}
              >
                Test Query
              </Typography>
            )}
          </Box>
        </Box>

        <Box className="sqlBox">
          <CodeMirror
            value={query}
            height="170px"
            indentWithTab={true}
            theme={themes.palette.mode}
            extensions={[sql()]}
            onChange={(
              __value: any,
              _viewUpdate: any /* TODO document why this arrow function is empty */
            ) => {
              setQuery(__value);
              handleQuery(__value);
            }}
          />
          <Box className="sqlEditorBottomPannel">
            <Box>
              {validate && oldQuery !== query && (
                <Stack className="messageContainer" direction="row">
                  <CheckCircleOutlinedIcon className="checkedIcon" />
                  <Typography className="message">No Error Found</Typography>
                </Stack>
              )}
              {!validate || !testQuery && queryError != "" &&  (
                <Stack className="messageContainer" direction="row">
                  <HighlightOffIcon className="wrongStatementIcon" />
                  <Typography className="queryErrorMessage">
                    {queryError}
                  </Typography>
                </Stack>
              )}
            </Box>
            {oldQuery !== query && (
              <Box className="queryTextBoxSaveCancel_button_pannel">
                <Box
                  className="queryTextBoxSaveCancel_buttons"
                  onClick={() => handleSaveQuery()}
                >
                  <CheckIcon />
                </Box>
                <Box
                  className="queryTextBoxSaveCancel_buttons"
                  onClick={() => handleCancelQuery()}
                >
                  <CloseIcon />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box className="container">
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
        </Box>
        <TablePro data={rows} />
        <StyledPagination>
          <Box>
            <Pagination
              count={4}
              page={page}
              size="small"
              shape="rounded"
              onChange={handlePageChange}
            />
          </Box>
        </StyledPagination>
        <Box className="card">
          <Stack direction="row" spacing={2}>
            <Stack className="createdByBox" direction="column">
              <Typography>Created By</Typography>
              <Stack direction="row" spacing={1}>
                <Avatar className="avatar" alt="Sdasd" />
                <Typography>Dasda</Typography>
              </Stack>
            </Stack>
            <Stack direction="column">
              <Typography>Created On</Typography>
              <Typography>Dasda</Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Box
        component="div"
        sx={{
          display: "flex",
          bottom: "0px",
          position: "fixed",
          width: "99.9%",
          background: themes.palette.background.default,
          justifyContent: "flex-end",
          height: "48px",
          alignItems: "center",
          borderTop: "1px solid #333333",
        }}
      >
        <Button
          color="info"
          className="delete"
          variant="contained"
          onClick={() => handleDeleteReport()}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}

export default ViewDetails;
