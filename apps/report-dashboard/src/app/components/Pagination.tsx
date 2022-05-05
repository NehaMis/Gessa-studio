import { SelectChangeEvent } from '@mui/material';
import React from 'react'

export interface PaginationProps {
    size?:string;
    shape?:string;
    onChange?: (event: SelectChangeEvent, rowPerPage: string) => void;
}

function Pagination() {
  return (
    <div>Pagination</div>
  )
}

export default Pagination