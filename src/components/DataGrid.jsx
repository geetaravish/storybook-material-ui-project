import React from 'react';
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid';

export const DataGrid = ({ rows, columns, ...rest }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <MuiDataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        {...rest}
      />
    </div>
  );
};

export default DataGrid;