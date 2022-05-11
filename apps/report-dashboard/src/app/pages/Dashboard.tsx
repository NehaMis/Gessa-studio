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

function Dashboard() {
  const [isColumnOptionOpen, setIsColumnOptionOpen] = useState(false);
  const [filters, setFilters] = useState({});

  // Table Pro Code

  // const [tableData, setTableData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(process.env.NX_DATA_FLOW_BASE_URL + "/reportData")
  //     .then(function (response) {
  //       let tableData = response.data.result.data[0].rowData;
  //       setTableData(tableData);
  //     })
  // }, [filters]);

  const StyledDashboard = useCallback(
    styled("div")(({ theme }) => {
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
          cursor:'pointer',
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
    [filters]
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
          <Table filters={filters} />
          {/* {tableData.length!=0 && <TablePro data={tableData}/>} */}
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
