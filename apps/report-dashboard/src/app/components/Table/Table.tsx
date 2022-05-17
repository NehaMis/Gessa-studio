import React, { useCallback, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, Pagination, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";
import axios from "axios";

export interface TableProps {
  filters: any;
}

function createData(
  name: string,
  createdBy: any,
  createdOn: any,
  description: any,
  query: any
) {
  return { name, createdBy, createdOn, description, query };
}

const columnHeader = ["Name", "Created By", "Created On"];

interface HeaderProps {
  label: string;
  value: string;
}

export default function BasicTable(props: TableProps) {
  const [tableData, setTableData] = useState([]);
  const [isGettingData, setIsGettingData] = useState(true);
  const [tableHeaders, setTableHeaders] = useState<Array<HeaderProps>>([]);

  useEffect(() => {
    axios
      .get(process.env.NX_DATA_FLOW_BASE_URL + "/tableHeaders")
      .then(function (response) {
        setTableHeaders([...response.data.result]);
      })
      .finally(() => {
        setIsGettingData(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(process.env.NX_DATA_FLOW_BASE_URL + "/reportData")
      .then(function (response) {
        let tableData = response.data.result.data[0].rowData;
        if (Object.keys(props.filters).length !== 0) {
          if (props.filters.name != "") {
            tableData = tableData.filter(
              (item: any) =>
                item.name.toLowerCase() == props.filters.name.toLowerCase()
            );
          }
          if (props.filters.select_schema.length > 0) {
            tableData = tableData.filter(
              (item: any) =>
                item.details.schema.join() == props.filters.select_schema.join()
            );
          }
          if (props.filters.created_by.length > 0) {
            tableData = tableData.filter(
              (item: any) => item.createdBy == props.filters.created_by.join()
            );
          }
          if (props.filters.created_on.from != "") {
            tableData = tableData.filter((item: any) => {
              let date = new Date(item.createdOn);
              let fromDate = new Date(props.filters.created_on.from);
              let toDate = new Date(props.filters.created_on.to);
              return date >= fromDate && date <= toDate;
            });
          }
        }
        setTableData(tableData);
      })
      .finally(() => {
        setIsGettingData(false);
      });
  }, []);
  const [page, setPage] = React.useState(1);

  const handlePageChange = (event?: any, value?: any) => {
    setPage(value);
  };
  const rows =
    tableData &&
    tableData.map((row: any) => {
      return (
        createData(
          row?.details?.name,
          row.createdBy,
          row.cretaedOn,
          row?.details.description,
          row?.details.query
        ),
        row
      );
    });

  const history = useNavigate();

  const StyledErrorMessage = styled(Typography)(({ theme }) => {
    return {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "0px 16px",
      fontFamily: "Roboto",
      fontWeight: "400",
      justifyContent:'center'
    };
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => {
    return {
      [`&.${tableCellClasses.head}`]: {
        fontStyle: "normal",
        fontFamily: "Roboto",
        backgroundColor: theme.palette.custom.dashboardTableHeadBg,
        color: theme.palette.primary[900],
        fontWeight: 700,
        fontSize: "12px",
      },
      [`&.${tableCellClasses.body}`]: {
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 12,
        cursor: "pointer",
      },

      "& .MuiTypography-root": {
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 12,
        cursor: "pointer",
      },
    };
  });

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.custom.dashboardTableHeadBg,
    },
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.custom.dashboardTableRowBg,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledPagination = styled(Box)(({ theme }) => ({
    display: "flex",
    position: "fixed",
    bottom: "0px",
    justifyContent: "flex-end",
    width: "100%",
    height: "48px",
    alignItems: "center",

    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: theme.palette.custom.tablePaginationBg,
    },
  }));
  return (
    <>
      {isGettingData ? (
        <p className="loading"></p>
      ) : rows.length != 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  {tableHeaders.map((cell: any) => {
                    return (
                      <StyledTableCell key={cell.label}>
                        {cell.value}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {rows &&
                  rows.map((row) => (
                    <StyledTableRow
                      onClick={() =>
                        history("/details", { state: row?.details })
                      }
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell>
                        <Stack direction="row" spacing={2}>
                          <Avatar alt={row.createdBy} />
                          <Typography>{row.createdBy}</Typography>
                        </Stack>
                      </StyledTableCell>
                      <StyledTableCell>
                        {format(parseISO(row.createdOn), "MMM dd h:m a")}
                      </StyledTableCell>
                      {tableHeaders.length > 3 && (
                        <StyledTableCell component="th" scope="row">
                          {row.details[`${tableHeaders[3]?.label}`]}
                        </StyledTableCell>
                      )}
                      {tableHeaders.length > 4 && (
                        <StyledTableCell component="th" scope="row">
                          {row.details[`${tableHeaders[3]?.label}`]}
                        </StyledTableCell>
                      )}
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
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
        </>
      ) : (
        <StyledErrorMessage>No Result Found</StyledErrorMessage>
      )}
    </>
  );
}
