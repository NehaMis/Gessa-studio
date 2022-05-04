import styled from '@emotion/styled';
import { makeStyles, Rating } from '@mui/material';
import { DataGrid, GridColDef, GridFilterModel } from '@mui/x-data-grid';
import { escapeRegExp } from '@mui/x-data-grid/utils/utils';
import React, { useEffect, useState } from 'react';
import TableHeaderCell from '../../Molecules/table-header-cell/table-header-cell';
import './data-grid-v1.css';
import { useTheme } from '@mui/system';

export interface IDataGridV1Props {
  rowData: any;
  columnData: any;
  columnResizable: boolean;
  pagination: boolean;
  onSearchInput?: (data: any) => any;
  menuClicked?: (data: any) => any;
  rowSelected?: (data: any) => any;
}

// const StyledDataGridV1 = styled('div')({
//   // display: 'none',
//   root: {
//     display: 'inline-flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: 48,
//     paddingLeft: 20,
//   },
// });

export const DataGridV1 = (props: IDataGridV1Props) => {
  const tableTheme = useTheme();
  const StyledDataGridV1 = styled('div')(({ theme }) => {
    return {
      '&': {
        backgroundColor: tableTheme.palette.background.default,
      },
      root: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingLeft: 20,
      },
    };
  });
  const [searchText, setSearchText] = useState('');

  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [rows, setRows] = useState<GridColDef[]>(props.rowData);
  const [pageSize, setPageSize] = useState(5);
  const [filterValue, setFilterValue] = useState();
  const [filterButtonEl, setFilterButtonEl] = useState(null);
  const [columnToSearch, setColumnToSearch] = useState('');
  const [rowsPerPageOptions, setrowsPerPageOptions] = useState([
    5, 10, 25, 50, 100,
  ]);

  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [
      { columnField: 'Status', value: 'Active', operatorValue: 'contains' },
    ],
  });

  useEffect(() => {
    setColumns(getColumnsRender());
  }, [props.columnData]);

  useEffect(() => {
    if (columnToSearch) {
      requestSearch(searchText);
    }
  }, [searchText]);

  useEffect(() => {}, [columns]);

  const getColumnsRender = (): any => {
    if (props.columnData && props.columnData.length) {
      const colObj: GridColDef[] = [];
      for (let i = 0; i < props.columnData.length; i += 1) {
        colObj.push({
          ...props.columnData[i],
          pinnable: i === 2,
          renderHeader: (values: any) => {
            const onSearchInput = (data: any) => {};
            return (
              <TableHeaderCell
                title={values.colDef.headerName}
                /* searchData={{
                  searchText: '',
                  placeholder: 'Search',
                  searchIcon: {
                    name: 'Search',
                    size: 15,
                    color: '#797878',
                    label: 'Search',
                  },
                  onSearchInput: (e: any) => {
                    onSearchInput(e);
                  },
                }} 
                 actions={[
                  {
                    label: 'Menu1',
                    value: 'menu1',
                  },
                  {
                    label: 'Menu2',
                    value: 'menu2',
                  },
                  {
                    label: 'Menu3',
                    value: 'menu3',
                  },
                  {
                    label: 'Menu4',
                    value: 'menu4',
                  },
                ]} */
                onSearchInput={function (data: any) {
                  setSearchText(data);
                  props.onSearchInput && props.onSearchInput(data);
                }}
                menuClicked={function (data: any) {
                  props.menuClicked && props.menuClicked({ menu: data });
                }}
              ></TableHeaderCell>
            );
          },
        });
      }
      return colObj;
    }
  };
  const requestSearch = (searchValue: string) => {
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = props.rowData.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        if (row && row[columnToSearch] && row[columnToSearch].status) {
          return searchRegex.test(row[columnToSearch].status.value.toString());
        }
        if (row && row[columnToSearch] && row[columnToSearch].text) {
          const result = searchRegex.test(
            row[columnToSearch].text.value.toString()
          );
          if (result) {
            return result;
          }
        }
        if (row && row[columnToSearch] && row[columnToSearch].tags) {
          const result = row[columnToSearch].tags.find(
            (o: any) => o.label === searchText
          );
          if (result) {
            return result;
          }
        }

        if (
          row &&
          row[columnToSearch] &&
          row[columnToSearch].primaryAvatar &&
          row[columnToSearch].primaryAvatar.label
        ) {
          if (row[columnToSearch].primaryAvatar.label) {
            return searchRegex.test(
              row[columnToSearch].primaryAvatar.label.value.toString()
            );
          }
          if (row[columnToSearch].leftAvatar) {
            return searchRegex.test(
              row[columnToSearch].leftAvatar.label.value.toString()
            );
          }
          if (row[columnToSearch].rightAvatar) {
            return searchRegex.test(
              row[columnToSearch].rightAvatar.label.value.toString()
            );
          }
        }

        if (row && row[columnToSearch] && row[columnToSearch].value) {
          if (row[columnToSearch].value) {
            return searchRegex.test(row[columnToSearch].value.toString());
          }
        }
        if (row[columnToSearch]) {
          return searchRegex.test(row[columnToSearch].toString());
        } 
      });
    });
    setRows(filteredRows);
  };

  return (
    <StyledDataGridV1>
      <div style={{ height: '90vh', width: '100%' }}>
        <DataGrid
        onCellClick={(params, event, details)=>{props.rowSelected && props.rowSelected(params)}}
          style={{
            backgroundColor: tableTheme.palette.background.default,
          }}
          pageSize={pageSize}
          rowsPerPageOptions={rowsPerPageOptions}
          hideFooterPagination={props.pagination}
          rows={rows}
          columns={columns}
          /* headerHeight={40} */
          filterModel={filterModel}
          onFilterModelChange={(model) => setFilterModel(model)}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          onColumnHeaderClick={(event: any) => {
            console.log(event);
            setColumnToSearch(event.field);
          }}
          pagination
          disableColumnMenu
          disableColumnFilter
          componentsProps={{
            pagination: {
              labelRowsPerPage: 'Show Entries',
            },
          }}
        />
      </div>
    </StyledDataGridV1>
  );
};

export default DataGridV1;
