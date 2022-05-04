import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';

function createData(name: string, createdBy: any, createdOn: any) {
  return { name, createdBy, createdOn };
}

const rows = [
  createData(
    'Report 1',
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Typography> Remy Sharp</Typography>
    </Stack>,
    6.0
  ),
  createData(
    'Report 2',
    <Stack direction="row" spacing={2}>
      <Avatar alt="Travis Howard" src="/static/images/avatar/1.jpg" />
      <Typography>Travis Howard</Typography>
    </Stack>,
    9.0
  ),
  createData(
    'Report 3',
    <Stack direction="row" spacing={2}>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/1.jpg" />
      <Typography> Cindy Baker</Typography>
    </Stack>,
    16.0
  ),
];
const columnHeader = ['Name', 'Created By', 'Created On'];

export default function BasicTable() {
  const history = useNavigate();
  const themes=useTheme();
  console.log(themes);
  const StyledDashboard = styled('div')(({ theme }) => {
    return {
      '.dashboard_model_header': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 16px',
        height: '49px',
      },
      '.dashboard_report_heading': {
        position: 'relative',
        fontWeight: '700',
        fontSize: '14px',
        fontHeight: '20px',
      },
      '.dashboard_button_pannel': {
        display: 'flex',
        flexDirection: 'row',
        alignItem: 'flex-start',
        padding: '0px',
      },
      '.dashboard_buttons': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '36px',
        height: '36px',
        margin: '0px 10px',
        padding: '16px',
        background: '#272727',
        borderRadius: '4px',
      },
    };
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: themes.palette.mode==='dark'?'#121212':'' }}>
          <TableRow>
            {columnHeader.map((cell) => {
              return <TableCell>{cell}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              onClick={() => history('/details')}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.createdBy}</TableCell>
              <TableCell>{row.createdOn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
