// import { Theme, ThemeOptions } from '@mui/material/styles';

// declare module '@mui/material/styles' {
//   interface ITheme extends Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface IThemeOptions extends ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
//   export function createTheme(options?: IThemeOptions): ITheme;
// }

type ThemeContextType = {
  theme: ITheme;
  changeTheme: (theme: ITheme) => void;
};
