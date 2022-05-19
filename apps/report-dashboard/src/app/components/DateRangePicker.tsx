import { Box, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";

interface DateRangePickerProps {
  onDateChange: (value: any) => void;
}

function DateRangePicker({ onDateChange }: DateRangePickerProps) {
  const themes = useTheme();
  const [error, setError] = React.useState("");
  const [value1, setValue1] = React.useState<Date | any>(null);
  const [value2, setValue2] = React.useState<Date | any>(null);

  const handleChange1 = (newValue: Date | null) => {
    setValue1(newValue);
    onDateChange({
      from: newValue?.toDateString(),
      to: value2?.toDateString(),
    });
    setError("")
  };

  const handleChange2 = (newValue: Date | any) => {
    setError("")
    
    if (value1) {
      const frmDate = new Date(value1?.toDateString());
      const toDate = new Date(newValue?.toDateString());
      if(frmDate<=toDate){
        setValue2(newValue);
  
        onDateChange({
          from: value1?.toDateString(),
          to: newValue?.toDateString(),
        });
      }else{
        setError("Please Enter Correct To Date")
      }
    } else {
      setError("Please Select From Date First");
    }
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={0} direction="row">
          <DesktopDatePicker
            value={value1}
            onChange={handleChange1}
            renderInput={(params: any) => {
              const params2 = {
                ...params,
                inputProps: { ...params.inputProps, placeholder: "From" },
              };
              return (
                <TextField
                  sx={{
                    background: themes.palette.custom.inputComponentBg,
                  }}
                  size="small"
                  {...params2}
                />
              );
            }}
          />
          <Box sx={{ mx: 0.5 }}> </Box>
          <DesktopDatePicker
            value={value2}
            onChange={handleChange2}
            renderInput={(params: any) => {
              const params2 = {
                ...params,
                inputProps: { ...params.inputProps, placeholder: "To" },
              };
              return (
                <TextField
                  sx={{
                    background: themes.palette.custom.inputComponentBg,
                    right: 6,
                  }}
                  size="small"
                  {...params2}
                />
              );
            }}
          />
        </Stack>
      </LocalizationProvider>
      {error != "" ? (
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "12px",
            color: themes.palette.custom.errorMsg,
            lineHeight: "1rem",
          }}
        >
          {error}
        </Typography>
      ) : null}
    </Box>
  );
}

export default DateRangePicker;
