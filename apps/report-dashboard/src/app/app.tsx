import '../fake-db';
import themes from '../theme';

import { createTheme, CssBaseline } from '@mui/material';
import { Router } from 'react-router';
// import { RouteProvider } from '../context/routes';
import history from '../utils/history';
import { ChartBox, IconBar } from '@gessa/ui';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import {
  SettingProvider,
  ThemeProvider,
  AuthProvider,
  MicroFrontendProvider,
} from '../context';
import { HashRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SideMenu from './components/SideMenu';
import ViewDetail from './pages/viewDetails/ViewDetails';

const currentTheme = createTheme(themes.light);

export function App() {
  return (
    <ThemeProvider>
      <SettingProvider>
        <AuthProvider>
          <MicroFrontendProvider>
            {/* <HashRouter> */}
            <StyledEngineProvider injectFirst>
              <CssBaseline />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/details" element={<ViewDetail />} />
                </Routes>
                {/* <Dashboard /> */}
              </BrowserRouter>
            </StyledEngineProvider>
            {/* </HashRouter> */}
          </MicroFrontendProvider>
        </AuthProvider>
      </SettingProvider>
    </ThemeProvider>
  );
}

export default App;
