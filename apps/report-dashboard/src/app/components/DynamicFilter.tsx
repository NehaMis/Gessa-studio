import { styled, useTheme } from "@mui/system";
import {
  Box,
  Typography,
  Divider,
  Paper,
  InputBase,
  IconButton,
  InputLabel,
  Button,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro/DesktopDateRangePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React, { useCallback, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import MultipleSelectChip from "../components/MultipleSelectionChip";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import DateRangePicker from "./DateRangePicker";

export interface FilterType {
  width: string;
  snackBarArgs: any;
  setSnackBarArgs: (data: any) => void;
  setFilters: (filter: any) => void;
  onClose: () => void;
}

function DynamicFilter(props: FilterType) {
  const themes = useTheme();
  let th: any;

  const ReportBootInput = useCallback(
    styled(InputBase)(({ theme }) => ({
      "label + &": {
        marginTop: theme.spacing(1),
      },
      "& .MuiInputBase-input": {
        fontFamily: "Roboto",
        paddingLeft: "12px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.custom.inputComponentBg,
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
      },
    })),
    []
  );

  const StyledFilterMenu = useCallback(
    styled("div")(({ theme }) => {
      return {
        height: "100%",

        display: "flex",
        flexDirection: "column",
        width: `${props?.width}`,
        maxWidth: `calc(100% - 0px)`,

        ".filter_model_header": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          padding: "0px 16px",
          height: "48px",
          top: "4px",
          ".filter_heading": {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "20px",
          },

          "& .MuiSvgIcon-root": {
            cursor: "pointer",
          },
        },
        ".search_frame": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          position: "relative",
          width: "360px",
          height: "91px",
          left: "0px",
          top: "0px",
          ".inner_search": {
            position: "relative",
            width: "360px",
            padding: "0px 16px",
            top: "25px",
            bottom: "25px",
          },
        },
        ".filter_input_frame": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "16px 16px 0px",
          height: "106px",
        },

        ".filter_SelectAndDate_frame": {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px 16px",
          minHeight: "91px",

          "& .MuiInputBase-root": {
            height: "41px",
          },
        },

        ".filter_input_labels": {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "16px",
          color: theme.palette.custom.sideBarText1,
        },

        ".report_input_labels": {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "16px",
          color: theme.palette.custom.sideBarText1,
        },

        ".error_notification": {
          fontFamily: "Roboto",
          fontSize: "12px",
          color: theme.palette.custom.errorMsg,
          lineHeight: "1rem",
        },

        ".filter_footer": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "right",
          height: "64px",
          bottom: "0px",
          gap: "10px",
          width: "100%",

          ".btn_cancel": {
            width: "91px",
            height: "36px",
            borderRadius: "4px",
            padding: "10px 24px",
            margin: "0px 16px",
          },
          ".btn_save": {
            width: "83px",
            height: "36px",
            borderRadius: "4px",
            padding: "10px 24px",
            right: "20px",
          },
        },
      };
    }),
    []
  );

  const [dateValue, setDateValue] = React.useState<DateRange<Date>>([
    null,
    null,
  ]);

  const [value, setValue] = React.useState<Date | null>(null);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  interface ItemProps {
    innerText: string;
  }
  const filterData2: { [key: string]: string | any } = {};

  //TODO: Integrate with redux (later)

  th = Array.from(document.getElementsByTagName("th"));
  if (th) {
    th.map((item: any) => {
      if (item.innerText == "CreatedBy") {
        filterData2[item.innerText] = [];
      } else if (item.innerText == "CreatedOn") {
        filterData2[item.innerText] = {
          from: "",
          to: "",
        };
      } else {
        filterData2[item.innerText] = "";
      }
    });
  }

  const [filterData, setFilterData] = useState<any>({ ...filterData2 });

  const filterFields = () => {
    return (
      th &&
      th.map((item: ItemProps, index: number) => {
        if (item.innerText == "CreatedBy") {
          return (
            <Box className="filter_SelectAndDate_frame" key={index}>
              <MultipleSelectChip
                onChange={handleFilterCreatedByData}
                width={328}
                labelName={"CreatedBy"}
                background={themes.palette.custom.inputComponentBg}
              />
              {errors && filterData[item.innerText].length == 0 ? (
                <Typography className="error_notification">
                  Please Select Created By
                </Typography>
              ) : null}
            </Box>
          );
        } else if (item.innerText == "CreatedOn") {
          return (
            <Box
              className="filter_SelectAndDate_frame"
              sx={{ justifyContent: "space-evenly" }}
              key={index}
            >
              <InputLabel
                htmlFor="date-picker"
                sx={{
                  color: themes.palette.custom.sideBarText2,
                  fontFamily: "Roboto",
                  fontSize: 14,
                  fontWeight: 600,
                  bottom: 10,
                }}
              >
                Created On
              </InputLabel>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={0}>
                  {/* <DesktopDateRangePicker
                    startText="From"
                    endText="To"
                    value={dateValue}
                    onChange={(newValue: any) => {
                      setDateValue(newValue);
                    }}
                    renderInput={(startProps: any, endProps: any) => (
                      <React.Fragment>
                        <TextField
                          size="small"
                          sx={{
                            background: themes.palette.custom.inputComponentBg,
                          }}
                          {...startProps}
                        />
                        <Box sx={{ mx: 0.5 }}> </Box>
                        <TextField
                          size="small"
                          sx={{
                            right: 6,
                            background: themes.palette.custom.inputComponentBg,
                          }}
                          {...endProps}
                        />
                      </React.Fragment>
                    )}
                  /> */}
                </Stack>
                <DateRangePicker/>
              </LocalizationProvider>
              {errors && filterData.created_on.from == "" ? (
                <Typography className="error_notification">
                  Please Select Date Range
                </Typography>
              ) : null}
            </Box>
          );
        } else {
          return (
            <Box className="filter_input_frame" key={index}>
              <InputLabel
                htmlFor="filter-report-name"
                className="filter_input_labels"
              >
                {item.innerText}
              </InputLabel>
              <ReportBootInput
                placeholder={item.innerText}
                sx={{ width: 328 }}
                name={item.innerText}
                value={filterData[item.innerText]}
                onChange={handleFilterInputData}
              />
              {errors && filterData[item.innerText] == "" ? (
                <Typography className="error_notification">
                  Please Add {item.innerText}
                </Typography>
              ) : null}
            </Box>
          );
        }
      })
    );
  };

  const [errors, setErrors] = useState(false);

  const isDataFilled = Object.entries(filterData)
    .map(([key, value]) => {
      if (value != "") {
        return true;
      } else {
        return false;
      }
    })
    .some((x) => x === true);

  const handleFilterInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilterCreatedByData = (selectData: string) => {
    setFilterData({
      ...filterData,
      CreatedBy: [...selectData],
    });
  };

  const handleSave = () => {
    if (isDataFilled) {
      props.setSnackBarArgs({
        ...props.snackBarArgs,
        open: true,
        message: "Filter Applied Successfully",
      });
      props.setFilters(filterData);
      props.onClose();
    } else {
      setErrors(true);
    }
  };

  useEffect(() => {
    if (dateValue[0] !== null && dateValue[1] !== null) {
      setFilterData({
        ...filterData,
        CreatedOn: {
          from: dateValue[0]?.toDateString(),
          to: dateValue[1]?.toDateString(),
        },
      });
    }
  }, [dateValue]);

  return (
    <StyledFilterMenu>
      <Box className="filter_model_header">
        <Typography className="filter_heading" variant="body2">
          Filter
        </Typography>
        <Box className="report_close_Button" onClick={props.onClose}>
          <CloseIcon />
        </Box>
      </Box>
      <Divider />

      {filterFields()}

      <Box className="filter_footer">
        <Button
          className="btn_cancel"
          variant="outlined"
          color="info"
          onClick={props.onClose}
        >
          Cancel
        </Button>

        <Button
          className="btn_save"
          variant="contained"
          color="info"
          onClick={() => handleSave()}
        >
          Apply
        </Button>
      </Box>
    </StyledFilterMenu>
  );
}

export default DynamicFilter;
