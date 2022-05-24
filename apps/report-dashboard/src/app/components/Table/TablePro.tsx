import { Avatar, Box, Pagination, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Paginations from "../Pagination";

export interface TableProps {
  filters?: any;
  data?: any;
  onClicks?: (data: any) => void;
  showPagination?: boolean;
  columnHeaders?: any;
}

export default function TablePro(props: TableProps) {
  const history = useNavigate();
  const [page, setPage] = React.useState(1);

  const handlePageChange = (event?: any, value?: any) => {
    setPage(value);
  };

  const StyledErrorMessage = styled(Typography)(({ theme }) => {
    return {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "0px 16px",
      fontFamily: "Roboto",
      fontWeight: "400",
      justifyContent: "center",
    };
  });

  const StyledPagination = styled(Box)(({ theme }) => ({
    display: "flex",
    bottom: "0px",
    justifyContent: "flex-end",
    width: "98%",
    height: "48px",
    alignItems: "center",

    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: theme.palette.custom.tablePaginationBg,
    },
  }));

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

  const capitalize = (s: any) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  let headings: Array<string>;

  if (props.columnHeaders) {
    headings = props.columnHeaders[0].rightList.map((a: any) => a.value);
  } else {
    headings = [];
  }

  const column =
    headings.length != 0
      ? headings
      : props.data.length != 0
      ? Object.keys(props.data[0])
      : [];

  const thData = () => {
    return (
      column.length != 0 &&
      column
        .filter((data) => data != "_id" && data != "details")
        .map((data, index) => {
          return (
            <StyledTableCell key={index}>
              <Typography>{capitalize(data).replace(/([A-Z])/g, ' $1').trim()}</Typography>
            </StyledTableCell>
          );
        })
    );
  };

  const tdData = () => {
    return (
      props.data.length != 0 &&
      props.data.map((row: any, index: any) => {
        return (
          <StyledTableRow
            key={index}
            onClick={() => props.onClicks?.({ row, index })}
          >
            {column
              .filter((data) => data != "_id" && data != "details")
              .map((v, index) => {
                if (v == "createdBy") {
                  return (
                    <StyledTableCell key={index}>
                      <Stack direction="row" spacing={2}>
                        <Avatar alt={row[v]} />
                        <Typography>
                          {" "}
                          {typeof row[v] != "object"
                            ? row[v]
                              ? row[v]
                              : "NA"
                            : "NA"}
                        </Typography>
                      </Stack>
                    </StyledTableCell>
                  );
                } else {
                  return (
                    <StyledTableCell key={index}>
                      <Typography>
                        {typeof row[v] != "object"
                          ? row[v]
                            ? row[v]
                            : "NA"
                          : "NA"}
                      </Typography>
                    </StyledTableCell>
                  );
                }
              })}
          </StyledTableRow>
        );
      })
    );
  };

  return (
    <>
      {props.data.length != 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableHead>
                <StyledTableRow>{thData()}</StyledTableRow>
              </TableHead>
              <TableBody>{tdData()}</TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <StyledErrorMessage>No Result Found</StyledErrorMessage>
      )}
      {props.showPagination && (
        <StyledPagination>
          <Paginations page={page} handlePageChange={handlePageChange} />
        </StyledPagination>
      )}
    </>
  );
}
