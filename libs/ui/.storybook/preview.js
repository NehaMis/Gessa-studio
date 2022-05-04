import '../src/static/assets/icons/icomoon/style.css';
import './tailwind-imports.css';
import themes from '../src/theme';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material';

// const lightTheme = {
//   themeName: 'Light',
//   ...themes.defaultLight,
// };
// const darkTheme = {
//   themeName: 'Dark',
//   ...themes.defaultLight,
// };
// const solarizedTheme = {
//   themeName: 'Solarized',
//   ...themes.dark3,
// };

// export const decorators = [muiTheme()];

export const decorators = [
  (Story) => {
    const currentTheme = createTheme(themes.defaultLight);

    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />

          <Story />
        </ThemeProvider>
      </StyledEngineProvider>
    );
  },
];

// export const parameters = {
//   exportedParameter: 'exportedParameter',
//   darkMode: {
//     current: 'light',
//     light: createTheme({ theme: themes.defaultLight, asStorybookTheme: false }),
//     dark: createTheme({ theme: themes.defaultDark, asStorybookTheme: false }),
//   },
// };
