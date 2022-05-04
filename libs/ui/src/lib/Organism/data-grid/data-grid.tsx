import { styled } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/system';

/* eslint-disable-next-line */
export interface DatagridProps {
  rows: Array<any>;
  columns: Array<any>;
}

const StyledDataGrid = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.background.paper,
    },
  };
});

export function Datagrid(props: DatagridProps) {
  const theme = useTheme();

  return (
    <StyledDataGrid>
      <div
        className="w-full h-full"
        style={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.getContrastText(theme.palette.background.paper),
        }}
      >
        <DataGrid
          style={{
            minHeight: 300,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.getContrastText(
              theme.palette.background.paper
            ),
            borderRadius: '0px',
          }}
          rows={props.rows}
          columns={props.columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </StyledDataGrid>
  );
}

export default Datagrid;
