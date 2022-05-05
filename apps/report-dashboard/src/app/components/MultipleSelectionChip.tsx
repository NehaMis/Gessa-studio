import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CloseIcon from '@mui/icons-material/Close';
import _without from 'lodash/without';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(props:any) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );

    props?.onChange(value);
  };

  const handleDelete = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    setPersonName((current) => _without(current, value));
  };

  return (
    <Box sx={{height:41}}>
      <InputLabel sx={{fontFamily:'Roboto', fontSize: 12, fontWeight: 400, pb:0.8 }} className="report_input_labels">{props.labelName}</InputLabel>
      <FormControl sx={{height:41, width: props.width, border:0, maxWidth:`calc(100% - 0px)` }}>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput sx={{ background:props.background}} id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{height:41, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                // <Chip key={value} label={value} />
                <Chip
                  key={value}
                  label={value}
                  variant="outlined"
                  color='success'
                  clickable
                  deleteIcon={
                    <CloseIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                  // className={classes.chip}
                  onDelete={(e) => handleDelete(e, value)}
                  // onClick={() => console.log('clicked chip')}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
