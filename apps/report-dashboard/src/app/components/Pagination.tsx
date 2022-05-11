import { Box, Pagination } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

export interface PaginationsProps{
  page:number;
  handlePageChange:(event?:any, value?:any)=>void;
  size:"small" | "medium" | "large" | undefined;
  shape:"circular" | "rounded" | undefined;
  count:number;
}

function Paginations({page, handlePageChange, size="small", shape="rounded", count=4}:PaginationsProps) {

  // const [page, setPage] = React.useState(1);

  // const handlePageChange = (event?: any, value?: any) => {
  //   setPage(value);
  // };

  const StyledPagination = styled(Box)(({ theme }) => ({
    display: "flex",
    position: "fixed",
    bottom: "0px",
    justifyContent: "flex-end",
    width: "100%",
    height: "48px",
    alignItems: "center",

    "& .css-j5ntxn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
      backgroundColor: theme.palette.custom.tablePaginationBg,
    },
  }));

  return (
    <StyledPagination>
      <Box>
        <Pagination
          count={count}
          page={page}
          size={size}
          shape={shape}
          onChange={handlePageChange}
        />
      </Box>
    </StyledPagination>
  );
}

export default Paginations;
