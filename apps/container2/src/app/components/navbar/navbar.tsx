import { useContext, useState } from 'react';
import { styled } from '@mui/system';
import RoutesContext from '../../../context/routes';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import themes, { themesList } from '../../../theme';
import { setDefaultTheme } from '../../../store/themeStore';
import Typography from '@mui/material/Typography';

const ThemeSwitcher = styled('button')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.primary['main'],
      color: theme.palette.getContrastText(theme.palette.primary['main']),
    },
  };
});

const StyledNavbar = styled('div')(({ theme }) => {
  return {
    '&': {
      '.logo': {
        backgroundColor: theme.palette.primary['400'],
      },
      '.icon': {
        backgroundColor: theme.palette.primary['100'],
      },
      '.activeNav': {
        '.icon': {
          backgroundColor: theme.palette.primary['400'],
        },
        '.count-chip': {
          color: 'white',
          backgroundColor: 'rgb(59, 130, 246)',
        },
      },
    },
  };
});

const Navbar = (props: any) => {
  const { routes }: any = useContext(RoutesContext);
  const dispatch = useDispatch();
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);

  return (
    <StyledNavbar className="w-20 h-screen p-4 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="w-full h-12 mb-16 rounded logo"></div>

        <div className="w-full flex flex-col gap-2">
          {routes
            .filter((route: any) => route.showInNavbar)
            .map((route: any, index: number) => (
              <NavLink
                className="w-full h-10 rounded flex justify-between items-center p-2"
                activeClassName="font-bold activeNav"
                to={route.path}
                key={index}
              >
                <div className="flex justify-between w-full">
                  <div className="flex align-middle">
                    <div className="w-8 h-8 mb-auto mt-auto mr-4 icon rounded"></div>
                  </div>
                  {/* <div className="w-6 h-6 bg-gray-200 rounded-full count-chip flex justify-center items-center">
                  <p className="text-sm">{Math.round(Math.random() * 100)}</p>
                </div> */}
                </div>
              </NavLink>
            ))}
        </div>
      </div>

      <div className="">
        <ThemeSwitcher
          onClick={() => {
            setActiveThemeIndex(activeThemeIndex + 1);
            const theme = themesList[activeThemeIndex % themesList.length];
            dispatch(setDefaultTheme(themes[theme]));
          }}
          className="rounded-full w-10 h-10"
        >
          <Typography variant="body1">TH</Typography>
        </ThemeSwitcher>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
