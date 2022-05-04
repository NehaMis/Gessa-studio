import styled from '@emotion/styled';
import { Menu, MenuItem, Typography } from '@mui/material';
import IconComponent from '../../POC/icon-component/icon-component';
import SearchInput, { ISearchProps } from './searchInput';
import './table-header-cell.css';
import * as React from 'react';
import { useTheme } from '@mui/system';

export interface IOptions {
  label: string;
  value: string;
}
/* eslint-disable-next-line */
export interface ITableHeaderCellProps {
  title: string;
  searchData?: ISearchProps;
  actions?: IOptions[];
  onSearchInput: (data: any) => any;
  menuClicked: (data: any) => any;
}



export function TableHeaderCell(props: ITableHeaderCellProps) {
  const tableTheme: any = useTheme();
  const StyledTablecell = styled('div')(({ theme }) => {
    return {
      '&': {
        backgroundColor: tableTheme.palette.background.default ,
      },
      '.css-51elaj-MuiInputBase-root': {
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        fontSize: '1rem',
        lineHeight: '0',
        letterSpacing: '0',
        fontWeight: '400',
        color: 'rgb(17, 24, 39)',
        boxSizing: 'border-box',
        position: 'relative',
        cursor: 'text',
        display: 'inline-flex',
        WebkitAlignItems: 'center',
        WebkitBoxAlign: 'center',
        MsFlexAlign: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30px',
        marginLeft: '8px',
      },
    };
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: any, menu: string) => {
    setAnchorEl(null);
    props.menuClicked(menu);
  };
  const onSearchText = (text: string) => {
    props.onSearchInput(text);
  };

  return (
    <StyledTablecell>
      <div className="title-container">
        <div style={{ marginLeft: '5px', color: '#231f1f' }}>
          <Typography
            color={
              tableTheme.palette.mode === 'light'
                ? '#231f1f'
                : tableTheme.palette.text.primary
            }
            sx={{ fontSize: '12px', fontWeight: 600 }}
          >
            {props.title}
          </Typography>
        </div>
        {props.actions && props.actions.length && <div style={{ marginRight: '5px' }}>
          <IconComponent
            name={'more_vert_black_24dp'}
            size={20}
            color={'#877878'}
            handleClick={(e) => {
              handleClick(e);
            }}
          />
        </div>}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {props.actions &&
            props.actions.length &&
            props.actions.map((action, index) => {
              return (
                <MenuItem
                  key={index}
                  onClick={(e) => {
                    handleClose(e, action.value);
                  }}
                >
                  {action.label}
                </MenuItem>
              );
            })}
        </Menu>
      </div>
      {props && props.searchData && (
        <div>
          <SearchInput
            searchText={props.searchData.searchText || ''}
            searchIcon={props.searchData.searchIcon}
            placeholder={props.searchData.placeholder || 'Search Text'}
            onSearchInput={onSearchText}
          />
        </div>
      )}
    </StyledTablecell>
  );
}

export default TableHeaderCell;
