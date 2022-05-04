import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, Pagination, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { useNavigate } from "react-router-dom";

function createData(name: string, createdBy: any, createdOn: any) {
  return { name, createdBy, createdOn };
}

const rows = [
  createData(
    "Report 1",
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Typography> Remy Sharp</Typography>
    </Stack>,
    6.0
  ),
  createData(
    "Report 2",
    <Stack direction="row" spacing={2}>
      <Avatar alt="Travis Howard" src="/static/images/avatar/1.jpg" />
      <Typography>Travis Howard</Typography>
    </Stack>,
    9.0
  ),
  createData(
    "Report 3",
    <Stack direction="row" spacing={2}>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/1.jpg" />
      <Typography> Cindy Baker</Typography>
    </Stack>,
    16.0
  ),
];
const columnHeader = ["Name", "Created By", "Created On"];

export default function BasicTable() {
  const history = useNavigate();
  const themes = useTheme();

  const [page, setPage] = React.useState(1);

  const handlePageChange = (event?:any) => {
    console.log(event)
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.custom.dashboardTableRowBg,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      // border: 0,
    },
  }));

  const StyledPagination = styled(Box)(({ theme }) => ({
    display:'flex',
    position:'fixed',
    bottom:'0px',
    justifyContent:'flex-end',
    width:'100%',
    height:'48px',
  }));

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            style={{
              backgroundColor: themes.palette.mode === "dark" ? "#121212" : "",
            }}
          >
            <TableRow>
              {columnHeader.map((cell) => {
                return <TableCell key={cell}>{cell}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                onClick={() => history("/details")}
                key={row.name}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.createdBy}</TableCell>
                <TableCell>{row.createdOn}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledPagination>
        <Box>
          <Pagination count={10} size="small" shape="rounded" onClick={(e)=>handlePageChange(e)}/>
        </Box>
      </StyledPagination>
    </>
  );
}
