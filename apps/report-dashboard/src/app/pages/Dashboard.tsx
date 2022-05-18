import { styled } from "@mui/system";
import { Box, Divider, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { useCallback, useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";
import Snackbar, { SnackbarProps } from "../components/Snackbar/snackbar";
import ColumnOption from "./ColumnOption";
import TablePro from "../components/Table/TablePro";
import { useNavigate } from "react-router";
import { getReportsApi } from "../../store/reportDashboardSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../context/redux";
import Paginations from "../components/Pagination";

interface FilterProps{
  [key:string]:string | any;
}

function Dashboard() {
  const dispatch = useAppDispatch();

  const [isColumnOptionOpen, setIsColumnOptionOpen] = useState(false);
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<FilterProps>({
    // name: "",
    // select_schema: [],
    // created_by: [],
    // created_on: {
    //   from: "",
    //   to: "",
    // },
  });

  useEffect(() => {
    dispatch(getReportsApi("any"))
      .unwrap()
      .then()
      .catch((reason) => {
        setSnackBarArgs({
          ...snackBarArgs,
          open:true,
          type:"error",
          message:reason.message
        })
      });
  }, []);

  const rootState = useSelector(
    (state: any) => state.reportDashboardSlice?.entities?.Report?.rowData
  );
  // Table Pro Code

  const [tableData, setTableData] = useState([]);
  const history = useNavigate();

  const onClick = (data: any) => {
    history("/details", { state: data });
  };

  const handlePageChange = (event?: any, value?: any) => {
    setPage(value);
  };

  useEffect(() => {
    if (rootState) {
      let tableData = rootState;
      if (Object.keys(filters).length !== 0) {
        if(filters.Name){
          if (filters.Name != "") {
            tableData = tableData.filter(
              (item: any) => item.name.toLowerCase() == filters.Name.toLowerCase()
            );
          }
        }

        if(filters.SelectSchema){
          if (filters.SelectSchema !=='undefined' && filters.SelectSchema.length > 0) {
            tableData = tableData.filter(
              (item: any) =>
                item.details.schema.join() == filters.SelectSchema.join()
            );
          }
        }
        if(filters.CreatedBy){
          if (filters.CreatedBy.length > 0) {
            tableData = tableData.filter(
              (item: any) => item.createdBy == filters.CreatedBy.join()
            );
          }
        }
        if(filters.CreatedOn){
          if (filters.CreatedOn.from != "") {
            tableData = tableData.filter((item: any) => {
              let date = new Date(item.createdOn);
              let fromDate = new Date(filters.CreatedOn.from);
              let toDate = new Date(filters.CreatedOn.to);
              return date >= fromDate && date <= toDate;
            });
          }
        }
      }
      setTableData(tableData);
    }
  }, [filters, rootState]);

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
          position: "fixed",
          bottom: "0px",
          justifyContent: "flex-end",
          width: "100%",
          height: "48px",
          alignItems: "center",
        },
      };
    }),
    [filters, rootState, tableData]
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
          {tableData && <TablePro data={tableData} onClicks={onClick} />}
        </Box>
        <Box className="pagination">
          <Paginations page={page} handlePageChange={handlePageChange} />
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
