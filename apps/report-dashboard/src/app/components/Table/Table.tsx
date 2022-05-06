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
import axios from "axios";

function createData(name: string, createdBy: any, createdOn: any) {
  return { name, createdBy, createdOn };
}

const columnHeader = ["Name", "Created By", "Created On"];

export default function BasicTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.NX_DATA_FLOW_BASE_URL + "/reportData")
      .then(function (response) {
        setTableData(response.data.result.data[0].rowData);
      });
  }, []);
  const [page, setPage] = React.useState(1);

  const handlePageChange = (event?: any, value?: any) => {
    setPage(value);
  };
  const rows =
    tableData &&
    tableData.map((row: any) => {
      return createData(row?.details?.name, row.createdBy, row.cretaedOn);
    });

  const history = useNavigate();
  const StyledTableCell = styled(TableCell)(({ theme }) => {
    return{
      [`&.${tableCellClasses.head}`]: {
        fontStyle:'normal',
        fontFamily:'Roboto',
        backgroundColor: theme.palette.custom.dashboardTableRowBg,
        color: theme.palette.primary[900],
        fontWeight:700,
        fontSize:'12px'
      },
      [`&.${tableCellClasses.body}`]: {
        fontFamily:'Roboto',
        fontWeight:400,
        fontSize: 12,
        cursor: "pointer",
      },

      '& .MuiTypography-root':{
        fontFamily:'Roboto',
        fontWeight:400,
        fontSize: 12,
        cursor: "pointer",
      }
    }
  });

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // "&:nth-of-type(odd)": {
    //   backgroundColor: theme.palette.action.hover,
    // },
    "&:nth-of-type(even)": {
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

    "& .css-j5ntxn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
      backgroundColor: theme.palette.custom.tablePaginationBg,
    },
  }));

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              {columnHeader.map((cell) => {
                return <StyledTableCell key={cell}>{cell}</StyledTableCell>;
              })}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row) => (
                <StyledTableRow
                  onClick={() => history("/details",/*{ state: row?.details }*/)}
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
                  <StyledTableCell>{row.createdOn}</StyledTableCell>
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
  );
}
