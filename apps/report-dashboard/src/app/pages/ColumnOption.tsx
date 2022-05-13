import styled from "@emotion/styled";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Transfer, {
  TransferProps,
} from "../components/TransferComponent/Transfer";
import { useTheme } from "@mui/system";
import axios from "axios";
import { getColumnApi } from '../../store/columnOptionSlice'
import { useDispatch, useSelector } from 'react-redux';

function ColumnOption(props: any) {

  const themes = useTheme();
  const dispatch = useDispatch();

  const rootState = useSelector((state: any) => state?.columnOptionSlice?.entities?.undefined);

  const [columnOptions, setColumnOptions] = useState({
    leftList: [],
    rightList: [],
    leftListLabel: "",
    rightListLabel: "",
  });

  useEffect(() => {
    dispatch(getColumnApi("any"))
    // axios
    //   .get(process.env.NX_DATA_FLOW_BASE_URL + "/columnOption")
    //   .then(function (response) {
    //     setColumnOptions(response.data.result);
    //   });
  }, []);

  useEffect(()=>{
    if(rootState){
      setColumnOptions({...rootState[0]});
    }
  },[rootState])

  // console.log("Column Option", columnOptions)

  const StyledColumnMenu = useCallback(
    styled("div")(({ theme }) => {
      return {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        zIndex: "99",
        background: themes.palette.custom.sideBarBg,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "706px",
        height: "631px",

        ".popup-inner": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          padding: "0px 16px",
          height: "48px",
          top: "4px",

          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "20px",

          width: "100%",

          '& .MuiSvgIcon-root':{
            cursor:'pointer',
          }
        },

        ".columnOption__instruction": {
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          position: "relative",
          left: "7px",
          margin: "16px",
        },
      };
    }),
    [columnOptions]
  );

  return (
    <StyledColumnMenu>
      <Box className="popup-inner">
        <Typography className="popup-inner">Column Option</Typography>
        <Box onClick={props.onClose}>
          <CloseIcon />
        </Box>
      </Box>
      <Divider />

      <Box className="columnOption__instruction">
        <Typography>
          Add or remove column. To change the column order, drag and drop a
          field.
        </Typography>

        <Box>
          <Transfer setSnackBarArgs={props.setSnackBarArgs} setFilters={props.setFilters} onClose={props.onClose} {...columnOptions} />
        </Box>
      </Box>
    </StyledColumnMenu>
  );
}

export default ColumnOption;
