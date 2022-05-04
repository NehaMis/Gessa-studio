import React from 'react';
import { ShowChart } from './components/chart/ShowChart';
import {
  useTheme,
  createTheme,
  Paper,
  Typography,
  Button,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { ReactComponent as Logo } from './logo.svg';
import Navbar from './components/navbar/navbar';
import star from './star.svg';
import { Ui, DataTable } from '@gessa/ui';
import Tree from './components/tree/tree';
import ThemePreview from './components/theme-preview/theme-preview';
import { Provider, useSelector } from 'react-redux';
import store from '../store';
import { green, red } from '@mui/material/colors';

// const RemoteButton = React.lazy(() => import('app2/Button'));

// const customTheme = createTheme({
//   palette: {
//     mode: 'dark'
//     // primary: {
//     //   main: '#1976d2',
//     //   contrastText: 'white',
//     // },
//   },
// });

// const StyledApp = styled('div')((_) => ({
//   "fontFamily": "sans-serif",
//   "minWidth": "300px"
// }));

const tableProps = {
  data: [
    {
      id: { key: 'string', value: '01' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1 asddadd adsdd d', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '02' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '03' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '04' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '05' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '06' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '07' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '08' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '09' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '10' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '11' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '12' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '13' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '14' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '15' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '16' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '17' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '18' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '19' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '20' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '21' },
      name: { key: 'string', value: 'Prod.MySQL' },
      type: { key: 'string', value: 'MySql' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
    {
      id: { key: 'string', value: '22' },
      name: { key: 'string', value: 'Prod.Attendance' },
      type: { key: 'string', value: 'Mongo DB' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '23' },
      name: { key: 'string', value: 'Prod.Student' },
      type: { key: 'string', value: 'Oracle' },
      public: { key: 'string', value: 'Yes' },
      referred: {
        key: 'chiplist',
        value: [
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
          { value: 'Data Flow1', color: '#459ff2' },
        ],
      },
    },
    {
      id: { key: 'string', value: '24' },
      name: { key: 'string', value: 'Prod.Class' },
      type: { key: 'string', value: 'PostgreSql' },
      public: { key: 'string', value: 'No' },
      referred: {
        key: 'chiplist',
        value: [{ value: 'Data Flow1', color: '#459ff2' }],
      },
    },
  ],
  columns: [
    {
      Header: 'Id',
      accessor: 'id',
      filter: 'fuzzyText',
      width: 100,
    },
    {
      Header: 'Name',
      accessor: (d: any) => d.name,
      filter: 'fuzzyText',
      width: 400,
    },
    {
      Header: 'Type',
      accessor: 'type',
      filter: 'fuzzyText',
      width: 400,
    },
    {
      Header: 'Public',
      accessor: 'public',
      filter: 'fuzzyText',
      width: 150,
    },
    {
      Header: 'Referred',
      accessor: 'referred',
      filter: 'fuzzyText',
      width: 200,
    },
  ],
};

function AppTheme(props: any) {
  const customTheme = useSelector((state: any) => state.theme);
  const theme = createTheme(customTheme);
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export function App() {
  // const myTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //     primary: red,
  //   },
  // });

  // return (
  //   <ThemeProvider theme={myTheme}>
  //     <Paper>
  //       <Typography variant="h1">This is type</Typography>
  //       <h1>Hello CodeSandbox</h1>
  //       <h2>Start editing to see some magic happen!</h2>
  //       <Button variant="contained">Hello World</Button>
  //     </Paper>
  //   </ThemeProvider>
  // )
  return (
    <Provider store={store}>
      <AppTheme>
        <Paper>
          <Typography variant="h1">This is type</Typography>
          <Button variant="contained" color="secondary">
            This is button
          </Button>
        </Paper>
        <h1 className="p-6 mr-28">I am container2</h1>
        <Ui />
        <Tree />
        <ThemePreview />
        {/* <React.Suspense fallback="Loading Projects">
            <RemoteButton params={[1, 2, 3]} />
          </React.Suspense> */}
        <div className="p-4">
          <DataTable data={tableProps.data} columns={tableProps.columns} />
        </div>
      </AppTheme>
    </Provider>
  );
}

export default App;
