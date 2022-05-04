import { useTheme } from '@mui/material/styles';
import themes, { themesList } from '../../../theme';
import { useSelector, useDispatch } from 'react-redux';
import { setDefaultTheme } from '../../../store/themeStore';
import { Button } from '@mui/material';

/* eslint-disable-next-line */
export interface ThemePreviewProps {}

export function ThemePreview(props: ThemePreviewProps) {
  const theme = useSelector((state: any) => state.theme);
  const _theme = useTheme();
  const dispatch = useDispatch();

  const primaryColor = theme.palette.primary[500]
    ? theme.palette.primary[500]
    : theme.palette.primary.main;
  const primaryColorContrast = _theme.palette.getContrastText(primaryColor);
  const secondaryColor = theme.palette.secondary[500]
    ? theme.palette.secondary[500]
    : theme.palette.secondary.main;
  const secondaryColorContrast = _theme.palette.getContrastText(secondaryColor);
  const backgroundColor = theme.palette.background.default;
  const backgroundColorContrast = _theme.palette.getContrastText(
    theme.palette.background.default
  );
  const paperColor = theme.palette.background.paper;
  const paperColorContrast = _theme.palette.getContrastText(
    theme.palette.background.paper
  );

  return (
    <>
      <div
        className="m-4 w-48 rounded-md text-sm relative"
        style={{
          backgroundColor,
          color: backgroundColorContrast,
        }}
      >
        <div
          className="w-full h-16 rounded-t-md"
          style={{
            backgroundColor: primaryColor,
            color: primaryColorContrast,
          }}
        >
          <p className="pl-3 pt-2 pb-2 opacity-75">Header</p>
        </div>
        <div
          className="w-9/12 h-32 ml-3 -mt-8 rounded-md shadow"
          style={{
            backgroundColor: paperColor,
            color: paperColorContrast,
          }}
        >
          <p className="p-2 opacity-75">Foreground</p>
        </div>
        <div
          className="w-6 h-6 rounded-full absolute right-1.5 top-12.4 flex justify-center items-center"
          style={{
            backgroundColor: secondaryColor,
            color: secondaryColorContrast,
          }}
        >
          <p className="opacity-75 cursor-pointer">+</p>
        </div>
        <p className="pl-3 pt-2 pb-2 opacity-75">Background</p>
      </div>
      {themesList.map((themeName) => (
        <span key={themeName} className="mr-2">
          <Button
            variant="contained"
            onClick={() => dispatch(setDefaultTheme(themes[themeName]))}
          >
            {themeName}
          </Button>
        </span>
      ))}
    </>
  );
}

export default ThemePreview;
