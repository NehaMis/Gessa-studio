import React, { useCallback, useState, useEffect, useRef } from 'react';
import {
  IconButton,
  Icon,
  Box as MuiBox,
  Divider,
  Typography,
  Stack,
  Chip,
  Pagination,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
// import { format } from 'sql-formatter';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
// import { Button } from '@gessa/ui';

/** sqlite db object */
let db: any;

function createData(column1: string, column2: string) {
  return { column1, column2 };
}

const rows = [
  createData('10', '159'),
  createData('20', '237'),
  createData('30', '262'),
];

function ViewDetails(props: any) {
  const [validate, setValidate] = useState(false);
  const [testQuery, setTestQuery] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [query, setQuery] = useState('');
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
  console.log('location', location);

  /** to initialize test sql database */
  useEffect(() => {
    try {
      db = (window as any).openDatabase(
        'testDB',
        '1.0',
        'Test DB',
        2 * 1024 * 1024
      );
    } catch (error) {
      console.error('Error in initializing database', error);
    }
  }, []);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      fontStyle: 'normal',
      fontFamily: 'Roboto',
      backgroundColor: theme.palette.custom.dashboardTableRowBg,
      color: theme.palette.primary[900],
      fontWeight: 700,
      fontSize: '12px',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      cursor: 'pointer',
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const StyledPagination = styled(MuiBox)(({ theme }) => ({
    display: 'flex',
    bottom: '0px',
    justifyContent: 'flex-end',
    width: '98%',
    height: '48px',
    alignItems: 'center',

    '& .css-j5ntxn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
      backgroundColor: '#1890FF',
    },
  }));

  const Box = useCallback(
    styled(MuiBox)(({ theme }) => ({
      '.box': {
        width: screenSize.dynamicWidth / 2,
        padding: '6px',
      },
      '.viewDetails': {
        width: screenSize.dynamicWidth,
        paddingTop: '10px',
        paddingLeft: '6px',
        paddingBottom: '10px',
      },
      '.title': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: ' 16px',
        lineHeight: '24px',
      },
      '.label': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: ' 14px',
        lineHeight: '20px',
        color: '#BDBDBD',
      },
      '.name': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: ' 16px',
        lineHeight: '20px',
        color: ' #FFFFFF',
      },
      '.chip': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: ' 14px',
        lineHeight: '20px',
        color: '#57B4AA',
        borderColor: '#57B4AA',
      },
      '.definition': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: ' 12px',
        lineHeight: '16px',
        color: '#BDBDBD',
      },
      '.description': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: ' 14px',
        lineHeight: '20px',
        color: '#FFFFFF',
      },
      '.definitionBox': {
        width: screenSize.dynamicWidth,
        height: screenSize.dynamicHeight / 8,
        paddingTop: '10px',
        paddingLeft: '6px',
      },
      '.validate': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: ' 12px',
        lineHeight: '16px',
        color: '#1890FF',
        cursor: 'pointer',
      },
      '.sqlBox': {
        width: screenSize.dynamicWidth - 20,
        height: screenSize.dynamicHeight / 3,
        marginBottom: '10px',
        // border: '1px solid green',
      },
      '.sqlBoxLabel': {
        width: screenSize.dynamicWidth - 130,
        padding: '6px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: ' 12px',
        lineHeight: '16px',
        color: '#BDBDBD',
      },
      '.message': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: ' 12px',
        lineHeight: '16px',
        color: '#52C41A',
      },

      '.checkedIcon': {
        color: '#52C41A',
        width: '13.33px',
        height: '13.33px',
        padding: '1px',
      },
      '.container': {
        // width: screenSize.dynamicWidth - 20,
        height: screenSize.dynamicHeight / 2,
      },
      '.table': {
        width: screenSize.dynamicWidth - 20,
      },
      '.sqlTitle': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: ' 22px',
        lineHeight: '32px',
        color: '#FFFFFF',
      },
      '.card': {
        width: screenSize.dynamicWidth - 20,
      },
      '.avatar': {
        width: '20px',
        height: '20px',
      },
      '.createdByBox': {
        width: screenSize.dynamicWidth / 2,
        padding: '4px',
      },
      '.delete': {
        marging: '10px',
        width: '88px',
        height: '36px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: ' 12px',
        lineHeight: '16px',
        color: '#FFFFFF',
        background: ' #1890FF',
        borderRadius: '4px',
      },
    })),
    []
  );

  const deleteTableDetail = () => {};

  const handleTestQuery = () => {
    setTestQuery(true);
    // window.scrollBy(0, 2000);
  };

  const onValiteQuery = () => {
    db.transaction((tx: any) => {
      tx.executeSql('SET NOEXEC ON');
    });

    db.transaction((tx: any) => {
      tx.executeSql(
        `${query}`,
        [],
        (MSG: any) => {
          console.log(2, MSG);
          alert('executed success!');
          setValidate(true);
        },
        (ERROR: any, test: any) => {
          console.log(3, ERROR, test);

          if (test.message.includes('syntax')) {
            alert('Syntax error');
          } else if (test.message.includes('incomplete')) {
            alert('Incomplete syntax');
          } else {
            setValidate(true);
          }
        }
      );
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        paddingBottom: '80px',
      }}
    >
      <Box className="viewDetails">
        <Stack direction="row" spacing={2}>
          <KeyboardBackspaceIcon
            cursor="pointer"
            onClick={() => history('/')}
          />
          <Typography className="title"> View Details</Typography>
        </Stack>
      </Box>
      <Divider />
      <Stack direction="row" spacing={1}>
        <Box className="box">
          <Stack direction="column" spacing={1}>
            <Typography className="label"> Report Name</Typography>
            <Typography className="name">{location?.state?.name}</Typography>
          </Stack>
        </Box>
        <Box className="box">
          <Stack direction="column" spacing={1}>
            <Typography className="label"> Schemas</Typography>
            <Stack direction="row" spacing={2}>
              {location?.state?.schema?.map?.((item: any) => {
                return (
                  <Chip className="chip" label={item} variant="outlined" />
                );
              })}
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box className="definitionBox">
        <Typography className="definition"> Definition</Typography>
        <Typography className="description"></Typography>
      </Box>
      <Box className="sqlBox">
        <Stack direction="row" spacing={1}>
          <Typography className="sqlBoxLabel"> SQL Query</Typography>
          <Stack direction="row" spacing={1}>
            <Typography className="validate" onClick={onValiteQuery}>
              Validate
            </Typography>
            <Typography className="validate" onClick={() => handleTestQuery()}>
              Test Query
            </Typography>
          </Stack>
        </Stack>

        <Box className="sqlBox">
          <CodeMirror
            value={"SUBSTRING(`Column`, ' ', 2)"}
            height="170px"
            indentWithTab={true}
            theme={'dark'}
            extensions={[sql()]}
            onChange={(
              __value: any,
              _viewUpdate: any /* TODO document why this arrow function is empty */
            ) => {
              setQuery(__value);
            }}
          />
          {validate && (
            <Stack className="messageContainer" direction="row">
              <CheckCircleOutlinedIcon className="checkedIcon" />
              <Typography className="message">No Error Found</Typography>
            </Stack>
          )}
        </Box>
      </Box>
      {testQuery && (
        <Box className="container">
          <Box className="table">
            <Typography className="title">SQL Query Table Name</Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Column 1</StyledTableCell>
                    <StyledTableCell> Column 2</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow
                      key={row.column1}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.column1}
                      </StyledTableCell>
                      <StyledTableCell>{row.column2}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
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
      )}

      <Box
        component="div"
        sx={{
          display: 'flex',
          bottom: '0px',
          position: 'fixed',
          width: '99.9%',
          background: 'black',
          justifyContent: 'flex-end',
          height: '48px',
          alignItems: 'center',
          borderTop: '1px solid #333333',
        }}
      >
        <Button className="delete" variant="contained">
          Delete
        </Button>
      </Box>
    </Box>
  );
}

export default ViewDetails;
