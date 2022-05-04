import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Paper, TextField, InputLabel, useTheme, Box } from '@mui/material';
import './Transfer.css';
import themes from '../../../theme';
import { styled } from '@mui/system';

export interface TransferProps {
  leftList: Array<{
    label: string;
    value: string;
  }>;
  rightList: Array<{
    label: string;
    value: string;
  }>;
  leftListLabel: string;
  rightListLabel: string;
  onUpdateList?: (
    selectedValues: Array<{
      label: string;
      value: string;
    }>[]
  ) => void;
  onClose?: () => void;
}

function not(a: any[], b: any[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: any[], b: any[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function Transfer(props: TransferProps) {
  const [checked, setChecked] = React.useState<any[]>([]);
  const [left, setLeft] = React.useState<any[]>(props.leftList);
  const [right, setRight] = React.useState<any[]>(props.rightList);
  const [leftFiltered, setLeftFiltered] = React.useState<any[]>([]);
  const [rightFiltered, setRightFiltered] = React.useState<any[]>([]);
  const [leftSearchValue, setLeftSearchValue] = React.useState<any>();
  const [rightSearchValue, setRightSearchValue] = React.useState<any>();
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);
  const dslTheme = useTheme();
  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleRestoreDefault = () => {
    clearFilteredArrays();
    setRight(props.rightList);
    setLeft(props.leftList);
    setChecked(not(checked, leftChecked));
    setChecked(not(checked, rightChecked));
    clearSearchedData();
  };

  const handleAllRight = () => {
    clearFilteredArrays();
    setRight(right.concat(left));
    props.onUpdateList?.(right.concat(left));
    setLeft([]);
    clearSearchedData();
  };

  const handleCheckedRight = () => {
    clearFilteredArrays();
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
    props.onUpdateList?.(right.concat(leftChecked));
    clearSearchedData();
  };

  const handleCheckedLeft = () => {
    clearFilteredArrays();
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
    props.onUpdateList?.(left.concat(rightChecked));
    clearSearchedData();
  };

  const handleAllLeft = () => {
    clearFilteredArrays();
    setLeft(left.concat(right));
    props.onUpdateList?.(left.concat(right));
    setRight([]);
    clearSearchedData();
  };

  const clearFilteredArrays = () => {
    setLeftFiltered([]);
    setRightFiltered([]);
  };
  const clearSearchedData = () => {
    setLeftSearchValue('');
    setRightSearchValue('');
  };
  const StyledBreadcrumb = React.useCallback(
    styled('div')(({ theme }) => {
      return {
        '& .MuiInputBase-inputAdornedEnd': {
          padding: '0px 14px ',
        },
        '.columnOption__mainButtonPannel': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop:'10px',

          '.columnOption__saveButtonGp': {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
          },
        },
      };
    }),
    []
  );
  /*  */
  const customList = (items: any[], sideArray: Array<any>) => (
    <Paper sx={{ width: 280, height: 350, overflow: 'auto' }}>
      <List dense component="div" role="list">
        {items.map((value: any, index: any) => {
          return (
            <ListItem
              key={value.value}
              role="listitem"
              button
              onClick={handleToggle(value)}
              sx={{
                backgroundColor: sideArray.map((tempVar) => {
                  if (tempVar.value.includes(value.value))
                    if (dslTheme.palette.mode === 'dark')
                      return dslTheme.palette.grey?.[600];
                    else return dslTheme.palette.grey?.[200];
                  else return '';
                }),
              }}
            >
              <ListItemText id={index} primary={value.value} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  const leftGridDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeftSearchValue(e.target.value);
    setLeftFiltered(
      left.filter((items) => items?.value?.toString().includes(e.target.value))
    );
  };
  const rightGridDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRightSearchValue(e.target.value);
    setRightFiltered(
      right.filter((items) => items?.value?.toString().includes(e.target.value))
    );
  };

  return (
    <>
      <StyledBreadcrumb>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <div className="list-grid">
            <InputLabel sx={{ pl: 2.1 }} shrink>
              {props.leftListLabel}
            </InputLabel>
            <TextField
              variant="outlined"
              value={leftSearchValue}
              placeholder="Search"
              onChange={leftGridDataHandler}
              sx={{ mb: 2.5, mt: '-5px' }}
              InputProps={{
                endAdornment: (
                  <SearchIcon sx={{ color: dslTheme.palette.grey?.[500] }} />
                ),
                className: 'assign-height',
              }}
            />
            <Grid
              item
              sx={{ backgroundColor: dslTheme.palette.background.default }}
            >
              {leftFiltered.length > 0
                ? customList(leftFiltered, leftChecked)
                : customList(left, leftChecked)}
            </Grid>
          </div>
          <Grid item className="btns-grid">
            <Grid container direction="column" alignItems="center">
              <Button
                className="btn-size"
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleCheckedRight}
                disabled={leftChecked.length === 0}
                aria-label="move selected right"
              >
                &gt;
              </Button>
              <Button
                className="btn-size"
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleCheckedLeft}
                disabled={rightChecked.length === 0}
                aria-label="move selected left"
              >
                &lt;
              </Button>
              <Button
                className="btn-size"
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllLeft}
                disabled={right.length === 0}
                aria-label="move all left"
              >
                &lt;&lt;
              </Button>
              <Button
                className="btn-size"
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllRight}
                disabled={left.length === 0}
                aria-label="move all right"
              >
                &gt;&gt;
              </Button>
            </Grid>
          </Grid>
          <div className="list-grid">
            <InputLabel sx={{ pl: 2.1 }} shrink>
              {props.rightListLabel}
            </InputLabel>
            <TextField
              variant="outlined"
              placeholder="Search"
              value={rightSearchValue}
              onChange={rightGridDataHandler}
              sx={{ mb: 2.5, mt: '-5px' }}
              InputProps={{
                endAdornment: (
                  <SearchIcon sx={{ color: dslTheme.palette.grey?.[500] }} />
                ),
                className: 'assign-height',
              }}
            />
            <Grid
              item
              sx={{ backgroundColor: dslTheme.palette.background.default }}
            >
              {rightFiltered.length > 0
                ? customList(rightFiltered, rightChecked)
                : customList(right, rightChecked)}
            </Grid>
          </div>
        </Grid>
        <Box className="columnOption__mainButtonPannel">
          <Box>
            <Button
              className="btn_cancel"
              variant="outlined"
              color="info"
              onClick={props.onClose}
            >
              Cancel
            </Button>
          </Box>

          <Box className="columnOption__saveButtonGp">
            <Button
              className="btn_cancel"
              variant="outlined"
              color="info"
              onClick={handleRestoreDefault}
            >
              Restore Default
            </Button>

            <Button
              className="btn_save"
              variant="contained"
              color="info"
              // onClick={() => handleSave()}
              // disabled={isDataFilled ? false : true}
            >
              Save
            </Button>
          </Box>
        </Box>
      </StyledBreadcrumb>
    </>
  );
}

export default Transfer;
