import '../fake-db';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';
import Layout from './layout/layout';
import { useSelector, useDispatch } from 'react-redux';
import { createTheme, CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { Router } from 'react-router';
import { RouteProvider, ThemeProvider } from '../context';
import history from '../utils/history';

// const AppTheme = (props: any) => {
//   const customTheme = useSelector((state: any) => state.theme);
//   const theme = createTheme(customTheme);
//   return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
// };

export function App() {
  return (
    <ReduxProvider store={store}>
      <RouteProvider>
        <ThemeProvider>
          <Router history={history}>
            <StyledEngineProvider injectFirst>
              <CssBaseline />
              <Layout></Layout>
            </StyledEngineProvider>
          </Router>
        </ThemeProvider>
      </RouteProvider>
    </ReduxProvider>
  );
}

export default App;
