import '../fake-api';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from './layout/layout';
import RoutesContext from '../context/routes';
import routes from '../routing/routesConfig';
import { useSelector, useDispatch } from 'react-redux';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Router } from 'react-router';
import history from '../utils/history';
import axios from 'axios';

// const RemoteTest = React.lazy(() => import('microFrontendDemo/Test'));

// const getProjects = async () => {
//   const response = await axios.get('/api/project', {
//     params: { id: 1 },
//   });
//   const data = await response.data;
// };

const AppTheme = (props: any) => {
  const customTheme = useSelector((state: any) => state.theme);
  const theme = createTheme(customTheme);
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export function App() {
  // getProjects();

  return (
    <Provider store={store}>
      <RoutesContext.Provider
        value={{
          routes,
        }}
      >
        <Router history={history}>
          <StyledEngineProvider injectFirst>
            <AppTheme>
              <CssBaseline />

              <Layout></Layout>
              {/* <React.Suspense fallback="Loading Projects">
                <RemoteTest></RemoteTest>
              </React.Suspense> */}
            </AppTheme>
          </StyledEngineProvider>
        </Router>
      </RoutesContext.Provider>
    </Provider>
  );
}

export default App;
