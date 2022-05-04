import React from 'react';
import {
  Autocomplete,
  Button,
  Typography,
  InputBase,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material';
import { alpha, styled, useTheme } from '@mui/system';

function InputBox({
  defaultValue = '',
  onBlur,
  placeholder = '',
  register,
  val,
  val2,
  id = undefined,
}: any) {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      // marginTop: theme.spacing(3),
      // fontSize: '17px',
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      // border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      // transition: theme.transitions.create([
      //   'border-color',
      //   'background-color',
      //   'box-shadow',
      // ]),
      // Use the system font instead of the default Roboto font.

      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiInputBase': {
      margin: 'none',
    },
  }));

  return (
    <BootstrapInput
      {...register(val, val2)}
      defaultValue={defaultValue}
      onBlur={onBlur}
      placeholder={placeholder}
      id={id}
    />
  );
}

export default InputBox;
