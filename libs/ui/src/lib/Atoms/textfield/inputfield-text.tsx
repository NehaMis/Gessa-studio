import React from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import themes from '../../../theme';
import { useTheme } from '@mui/material';
export interface TextfieldProps {
  variant?: 'filled' | 'outlined' | 'standard';
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  placeholder?: string;
  onChangeFunc?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
  size?: 'small' | 'medium';
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  label?: string;
  helperText?: string;
  name?: string;
  InputProps?: any;
  sx?: any;
  isDisabled?:boolean;
}

export function TextInputField(props: TextfieldProps) {
  const dslTheme = useTheme();

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: '10px',
    },
    '& .MuiInputBase-input': {
      height: 'auto',
      borderRadius: props.variant !== 'standard' && 4,
      position: 'relative',
      backgroundColor:
        props.variant === 'filled'
          ? dslTheme.palette.background?.default
          : dslTheme.palette.background?.default,
      border:
        props.variant !== 'standard' &&
        `1px solid ${dslTheme.palette?.[props.color].main}`,
      borderBottom:
        props.variant === 'standard' &&
        `1px solid ${dslTheme.palette?.[props.color].main}`,
      padding: props.size === 'medium' ? '10px 12px' : '6px 12px',
      '&:focus': {
        borderColor: '#0458AE',
      },
    },
  }));

  return (
    <FormControl sx={{width:"40%"}} >
      <InputLabel shrink>{props.label}</InputLabel>
      <BootstrapInput

        disabled={props.isDisabled}
        placeholder={props.placeholder}
        defaultValue={props.value}
        name={props.name}
        multiline={props.multiline}
        minRows={props.minRows}
        maxRows={props.maxRows}
        inputProps={props.InputProps}
        onChange={(e)=>props.onChangeFunc && props.onChangeFunc(e)}
        sx={{...props.sx,
          fontSize:
            props.size === 'medium'
              ? dslTheme.typography?.['body1'].fontSize
              : dslTheme.typography?.['body2'].fontSize,
        }}
      />
      <label
        style={{
          fontSize: dslTheme.typography?.['caption'].fontSize,
          marginLeft: '14px',
          color: dslTheme.palette?.[props.color].main,
        }}
      >
        {props.helperText}
      </label>
    </FormControl>
  );
}

export default TextInputField;
