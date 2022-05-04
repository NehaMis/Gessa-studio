import { useTheme } from '@mui/system';
import { setDefaultTheme } from '../../../store/themeStore';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import themes, { themesList } from '../../../theme';
import { styled } from '@mui/system';

const StyledButton = styled('button')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.secondary['main'],
    },
  };
});

const Toolbar = (props: any) => {
  const dispatch = useDispatch();
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  return (
    <div className="w-full h-16  flex flex-row justify-between items-center pl-4 pr-4">
      <div>Title</div>
      <StyledButton
        onClick={() => {
          setActiveThemeIndex(activeThemeIndex + 1);
          const theme = themesList[activeThemeIndex % themesList.length];
          dispatch(setDefaultTheme(themes[theme]));
        }}
        className="rounded-full w-10 h-10"
      >
        TH
      </StyledButton>
    </div>
  );
};

export default Toolbar;
