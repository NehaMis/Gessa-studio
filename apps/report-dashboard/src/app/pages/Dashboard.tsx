import { styled } from "@mui/system";
import { IconButton, Icon, Box, Divider, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import React, { useCallback, useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";
import Snackbar, { SnackbarProps } from "../components/Snackbar/snackbar";
import ColumnOption from "./ColumnOption";
import Table from "../components/Table/Table";
import TablePro from "../components/Table/TablePro";
import axios from "axios";
import { useNavigate } from "react-router";
import { getReportsApi } from '../../store/reportDashboardSlice'
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {

  const dispatch = useDispatch();

  const [isColumnOptionOpen, setIsColumnOptionOpen] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    select_schema: [],
    created_by: [],
    created_on: {
      from: "",
      to: "",
    }
  });

  useEffect(() => {
    dispatch(getReportsApi("any"))
  },[])

  const rootState = useSelector((state: any) => state.reportDashboardSlice?.entities?.Report?.rowData);
  // Table Pro Code

  const [tableData, setTableData] = useState([]);
  const history = useNavigate();

  const onClick = (data: any) => {
    history("/details", { state: data?.details })
  }

  useEffect(() => {
    // axios
    //   .get(process.env.NX_DATA_FLOW_BASE_URL + "/reportData")
    //   .then(function (response) {
    //     let tableData = response.data.result.data[0].rowData;
    //     if (Object.keys(filters).length !== 0) {
    //       if (filters.name != "") {
    //         tableData = tableData.filter(
    //           (item: any) =>
    //             item.name.toLowerCase() == filters.name.toLowerCase()
    //         );
    //       }
    //       if (filters.select_schema.length > 0) {
    //         tableData = tableData.filter(
    //           (item: any) =>
    //             item.details.schema.join() == filters.select_schema.join()
    //         );
    //       }
    //       if (filters.created_by.length > 0) {
    //         tableData = tableData.filter(
    //           (item: any) => item.createdBy == filters.created_by.join()
    //         );
    //       }
    //       if (filters.created_on.from != "") {
    //         tableData = tableData.filter((item: any) => {
    //           let date = new Date(item.createdOn);
    //           let fromDate = new Date(filters.created_on.from);
    //           let toDate = new Date(filters.created_on.to);
    //           return date >= fromDate && date <= toDate;
    //         });
    //       }
    //       setTableData(tableData);
    //     }
    //   })

    if(rootState){
      let tableData = rootState;
        if (Object.keys(filters).length !== 0) {
          if (filters.name != "") {
            tableData = tableData.filter(
              (item: any) =>
                item.name.toLowerCase() == filters.name.toLowerCase()
            );
          }
          if (filters.select_schema.length > 0) {
            tableData = tableData.filter(
              (item: any) =>
                item.details.schema.join() == filters.select_schema.join()
            );
          }
          if (filters.created_by.length > 0) {
            tableData = tableData.filter(
              (item: any) => item.createdBy == filters.created_by.join()
            );
          }
          if (filters.created_on.from != "") {
            tableData = tableData.filter((item: any) => {
              let date = new Date(item.createdOn);
              let fromDate = new Date(filters.created_on.from);
              let toDate = new Date(filters.created_on.to);
              return date >= fromDate && date <= toDate;
            });
          }
          setTableData(tableData);
          // console.log("Dashboard Root State useEffect =", rootState, "Table Data =", tableData);
        }
    }
  }, [filters,rootState]);

  const StyledDashboard = useCallback(
    styled("div")(({ theme }) => {
      // console.log("Dashboard Root State styledDashboard =", rootState, "Table Data =", tableData);
      return {
        ".dashboard_model_header": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 16px",
          height: "49px",
        },
        ".dashboard_report_heading": {
          fontFamily: "Roboto",
          position: "relative",
          fontWeight: "700",
          fontSize: "14px",
          fontHeight: "20px",
          color: theme.palette.custom.sideBarText2,
        },
        ".dashboard_button_pannel": {
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "0px",
        },
        ".dashboard_buttons": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "36px",
          height: "36px",
          margin: "0px 10px",
          padding: "16px",
          background: theme.palette.custom.dashboardButtonBg,
          borderRadius: "4px",
          cursor: 'pointer',
          "&:hover": {
            background: theme.palette.custom.dashboardButtonHover,
          },
          "& .MuiSvgIcon-root": {
            color:
              theme.palette.mode == "light" ? theme.palette.custom.form3 : null,
          },
        },
      };
    }),
    [filters,rootState, tableData]
  );

  const handleSnackbarClose = () => {
    setSnackBarArgs({
      ...snackBarArgs,
      open: false,
    });
  };

  const [snackBarArgs, setSnackBarArgs] = useState<SnackbarProps>({
    open: false,
    autoHideDuraton: 6000,
    type: "success",
    anchorOrigin: { vertical: "top", horizontal: "right" },
    message: "",
    onCloseFunc: handleSnackbarClose,
    actions: [
      {
        name: "close_black_24dp",
        size: 25,
        label: "close",
        style: "regular",
        handleClick: handleSnackbarClose,
      },
    ],
  });

  const [width, setWidth] = useState("0");
  const [component, setComponent] = useState("");

  //Table
  const columnHeader = ["Name", "Created By", "Created On"];

  const handleShowAddReport = () => {
    if (!isColumnOptionOpen) {
      setWidth("574px");
      setComponent("report");
    }
  };

  const handleHideAddReport = () => {
    setWidth("0px");
  };

  const handleShowFilter = () => {
    if (!isColumnOptionOpen) {
      setWidth("370px");
      setComponent("filter");
    }
  };

  const setSnackBar = (data: any) => {
    setSnackBarArgs({
      ...snackBarArgs,
      ...data,
    });
  };

  const handleFilters = (filters: any) => {
    setFilters({ ...filters });
  };

  const handleToggleColumnOption = () => {
    setIsColumnOptionOpen(!isColumnOptionOpen);
  };

  return (
    <>
      <StyledDashboard>
        <Box className="dashboard_model_header">
          <Box className="dashboard_report_heading">
            <Typography className="dashboard_report_heading" variant="body2">
              Reports
            </Typography>
          </Box>
          <Box className="dashboard_button_pannel">
            <Box
              className="dashboard_buttons"
              onClick={() => handleShowAddReport()}
            >
              <Add />
            </Box>
            <Box
              className="dashboard_buttons"
              onClick={() => handleShowFilter()}
            >
              <FilterAltOutlinedIcon />
            </Box>
            <Box
              className="dashboard_buttons"
              onClick={() => handleToggleColumnOption()}
            >
              <TuneOutlinedIcon />
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box>
          {/* <Table filters={filters} /> */}
          {/* {console.log("Table Data =",tableData)} */}
          {tableData && <TablePro data={tableData} onClicks={onClick} />}
        </Box>
      </StyledDashboard>
      <SideMenu
        menuComponent={component}
        width={width}
        onClose={handleHideAddReport}
        snackBarArgs={snackBarArgs}
        setSnackBarArgs={setSnackBar}
        setFilters={handleFilters}
      />
      {isColumnOptionOpen && (
        <ColumnOption
          snackBarArgs={snackBarArgs}
          setSnackBarArgs={setSnackBar}
          onClose={handleToggleColumnOption}
          setFilters={handleFilters}
        />
      )}
      <Snackbar {...snackBarArgs} />
    </>
  );
}

export default Dashboard;
