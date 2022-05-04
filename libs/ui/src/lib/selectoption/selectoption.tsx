import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';

/* eslint-disable-next-line */
export interface SelectoptionProps {
  data: Array<IOptions>;
  label: string;
}

export interface IOptions {
  id: string;
  value: string;
}

const StyledSelectoption = styled('div')(({ theme }) => {
  return {
    '&': {},
  };
});

export function Selectoption(props: SelectoptionProps) {
  const [options, setOptions] = useState<any>(props.data || []);
  const [currentSelected, setCurrentSelected] = useState({ id: '' });

  const handleProjectChange = (event: any) => {
    setCurrentSelected(
      options[
        options.findIndex(
          (e: IOptions) => e.id === event.target.value.toString()
        )
      ]
    );
  };

  return (
    <StyledSelectoption>
      <div className="top-2 w-full p-2 pt-4">
        {options.length > 0 && (
          <FormControl fullWidth className="mb-8">
            <InputLabel>{props.label}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentSelected.id}
              label="options"
              onChange={handleProjectChange}
            >
              {options.map((option: any) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
    </StyledSelectoption>
  );
}

export default Selectoption;
