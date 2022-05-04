import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
// import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { DataGridV1 } from '@gessa/ui';
import { TableCellComponent } from '@gessa/ui';
import {useTheme} from '@mui/material'
import SchemaSettings from './Schema_settings';
interface ITableProps {
  id: any;
  name: any;
  date: any;
}
export const Schema = (props: any) => {
  const schemaTheme = useTheme()
  const [rowsData, setRowsData] = useState<Array<ITableProps>>([]);
  useEffect(() => {
    axios
      .get(process.env.NX_DATA_FLOW_BASE_URL + '/schema')
      .then(function (response) {
        console.log(response.data);
        response.data.schemaTableData.schemaTableRows.length > 0 &&
          setRowsData(response.data.schemaTableData.schemaTableRows);
      });
  }, []);

  const datacolumnData = [
    {
      field: 'id',
      headerName: 'ID',
      width: 420,
      sortable: false,
      renderCell: (values: any) => {
        return (
          <TableCellComponent
            text={values}
            cellClicked={() => {
              console.log('demo');
            }}
          ></TableCellComponent>
        );
      },
    },
    {
      headerName: 'Name',
      field: 'name',
      width: 420,
      editable: false,
      sortable: false,

      renderCell: (values: any) => {
        return (
          <TableCellComponent
            text={values.value.text}
            status={values.value.status}
            primaryAvatar={values.value.primaryAvatar}
            leftAvatar={values.value.leftAvatar}
            rightAvatar={values.value.rightAvatar}
            tags={values.value.tags}
            cellClicked={() => {
              console.log('demo');
            }}
          ></TableCellComponent>
        );
      },
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 420,
      sortable: false,
      renderCell: (values: any) => {
        return (
          <TableCellComponent
            text={values}
            cellClicked={() => {
              console.log('demo');
            }}
          ></TableCellComponent>
        );
      },
    },
  ];

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/schemadefinition');
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
        <Box component="div" sx={{ width: '100%', color:schemaTheme.palette.primary.main }}>
          Schema
        </Box>
        {/* Add Actions for the table */}
        <Box component="div" sx={{ display: 'flex', flexDirection: 'row' }}>
          <SchemaSettings />
        </Box>
      </Box>
      {rowsData.length>0 && <DataGridV1
        columnResizable={true}
        pagination={false}
        rowData={rowsData}
        columnData={datacolumnData}
        onSearchInput={(e) => {
          console.log(e);
        }}
        menuClicked={(e) => {
          console.log(e);
        }}
        rowSelected={(params: any) => {
          navigate('/SchemaDefinition');
        }}
      />}
    </Box>
  );
};

export default Schema;
