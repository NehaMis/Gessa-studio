import '../fake-db';
import store from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { createTheme, CssBaseline } from '@mui/material';
import { Router } from 'react-router';
// import { RouteProvider } from '../context/routes';
import history from '../utils/history';
import { ChartBox, IconBar } from '@gessa/ui';
import { StyledEngineProvider } from '@mui/material/styles';
import {
  RouteProvider,
  SettingProvider,
  ThemeProvider,
  AuthProvider,
  ReduxProvider,
  MicroFrontendProvider,
} from '../context';
import LayoutWrapper from './layout/layout';
import { HashRouter } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider>
      <SettingProvider>
        <AuthProvider>
          <MicroFrontendProvider>
            <ReduxProvider>
              <RouteProvider>
                <HashRouter>
                  <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    <LayoutWrapper />
                  </StyledEngineProvider>
                </HashRouter>
              </RouteProvider>
            </ReduxProvider>
          </MicroFrontendProvider>
        </AuthProvider>
      </SettingProvider>
    </ThemeProvider>
  );
}

export default App;
