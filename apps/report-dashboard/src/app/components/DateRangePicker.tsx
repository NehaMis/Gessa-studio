import { Box, Stack, TextField } from "@mui/material";
import {
  LocalizationProvider,
  DesktopDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";

function DateRangePicker() {

  const [value1, setValue1] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue1(newValue);
  };
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={0}>
          <DesktopDatePicker
            // label="Date desktop"
            // inputFormat="MM/dd/yyyy"

            value={value1}
            onChange={handleChange}
            renderInput={(params: any) => {
              const params2 = {
                ...params,
                inputProps: { ...params.inputProps, placeholder: "From" },
              };
              return <TextField {...params2} />;
            }}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
}

export default DateRangePicker;
