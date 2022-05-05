import { styled, useTheme } from '@mui/system';
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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import React, { useCallback, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import MultipleSelectChip from '../components/MultipleSelectionChip';
import { DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';

export interface FilterType {
  width: string;
  snackBarArgs: any;
  setSnackBarArgs: (data: any) => void;
  onClose: () => void;
}

function Filter(props: FilterType) {
  const themes=useTheme();

  const ReportBootInput = useCallback(
    styled(InputBase)(({ theme }) => ({
      'label + &': {
        marginTop: theme.spacing(1),
      },
      '& .MuiInputBase-input': {
        fontFamily:'Roboto',
        padding: '12px',
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.custom.inputComponentBg,
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '20px',
        height:'28px',
        //   padding: '10px 12px',
      },
    })),
    []
  );

  const StyledFilterMenu = useCallback(
    styled('div')(({ theme }) => {
      return {
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        width: `${props?.width}`,
        maxWidth: `calc(100% - 0px)`,

        '.filter_model_header': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          padding: '0px 16px',
          height: '48px',
          top: '4px',
          '.filter_heading': {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '20px',
          },
        },
        '.search_frame': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          position: 'relative',
          width: '360px',
          height: '91px',
          left: '0px',
          top: '0px',
          '.inner_search': {
            position: 'relative',
            width: '360px',
            padding: '0px 16px',
            top: '25px',
            bottom: '25px',
          },
        },
        '.filter_input_frame': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '16px 16px 0px',
          height: '106px',
        },

        '.filter_input_labels': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '16px',
          color:theme.palette.custom.sideBarText1,
          // marginTop: '15px',
        },

        '.report_input_labels': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '16px',
          color:theme.palette.custom.sideBarText1,
          // marginTop: '15px',
        },

        '.filter_footer': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'right',
          height: '64px',
          bottom: '0px',
          gap: '10px',

          '.btn_cancel': {
            width: '91px',
            height: '36px',
            borderRadius: '4px',
            padding: '10px 24px',
            margin: '0px 16px',
          },
          '.btn_save': {
            width: '83px',
            height: '36px',
            borderRadius: '4px',
            padding: '10px 24px',
            // margin: '0px 16px',
            // background: '#ffffff1f',
            // color: '#FFFFFF',
            right: '20px',
          },
        },
      };
    }),
    []
  );

  interface filterDataType {
    search: string;
    report_name: string;
    select_schema: Array<string>;
    created_by: Array<string>;
    created_on: {
      from: string | null | undefined;
      to: string | null | undefined;
    };
  }

  const [dateValue, setDateValue] = React.useState<DateRange<Date>>([
    null,
    null,
  ]);

  const [filterData, setFilterData] = useState<filterDataType>({
    search: '',
    report_name: '',
    select_schema: [],
    created_by: [],
    created_on: {
      from: '',
      to: '',
    },
  });

  const [errors, setErrors]= useState(false);

  const isDataFilled = () => {
    if (
      filterData.select_schema.length > 0 ||
      filterData.created_by.length > 0 ||
      filterData.report_name != '' ||
      filterData.created_on.from != '' ||
      filterData.created_on.to != ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleFilterInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilterSchemaData = (selectData: string) => {
    setFilterData({
      ...filterData,
      select_schema: [...selectData],
    });
  };

  const handleFilterCreatedByData = (selectData: string) => {
    setFilterData({
      ...filterData,
      created_by: [...selectData],
    });
  };

  const handleSave = () => {
    if (isDataFilled()) {
      props.setSnackBarArgs({
        open: true,
      });
      props.onClose();
      // console.log(filterData);
    } else {
      setErrors(true)
    }
  };

  useEffect(() => {
    if(dateValue[0]!==null && dateValue[1]!==null){
      console.log("In Use Effect", dateValue[0])
      setFilterData({
        ...filterData,
        created_on: {
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

      <Box className="search_frame">
        <Box className="inner_search">
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 328,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, y: 25 }}
              placeholder="Search"
              name="search"
              value={filterData.search}
              onChange={handleFilterInputData}
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </Box>
      <Divider />

      <Box className="filter_input_frame">
        <InputLabel
          htmlFor="filter-report-name"
          className='filter_input_labels'
        >
          Report Name
        </InputLabel>
        <ReportBootInput
          placeholder='Report Name'
          sx={{width:328}}
          name="report_name"
          id="report-name"
          value={filterData.report_name}
          onChange={handleFilterInputData}
        />
        {errors && filterData.report_name==""?<Typography sx={{color:'red', lineHeight:'1rem'}}>Please Add Report Name</Typography>:null}
      </Box>

      <Box className="filter_input_frame">
        <MultipleSelectChip
          onChange={handleFilterSchemaData}
          width={328}
          labelName={'Select Schema'}
          background={themes.palette.custom.inputComponentBg}
        />
        {errors && filterData.select_schema.length==0?<Typography sx={{color:'red'}}>Please Select Schema</Typography>:null}
      </Box>

      <Box className="filter_input_frame">
        <MultipleSelectChip
          onChange={handleFilterCreatedByData}
          width={328}
          labelName={'Created By'}
          background={themes.palette.custom.inputComponentBg}
        />
        {errors && filterData.created_by.length==0?<Typography sx={{color:'red'}}>Please Select Created By</Typography>:null}
      </Box>

      <Box className="filter_input_frame">
        <InputLabel
          htmlFor="date-picker"
          sx={{ color:themes.palette.custom.sideBarText2, fontFamily:'Roboto', fontSize: 14, fontWeight: 600, bottom: 10 }}
        >
          Created On
        </InputLabel>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={0}>
            <DesktopDateRangePicker
              startText="From"
              endText="To"
              value={dateValue}
              onChange={(newValue: any) => {
                setDateValue(newValue);
              }}
              renderInput={(startProps :any, endProps:any) => (
                <React.Fragment>
                  <TextField size="small" sx={{background:themes.palette.custom.inputComponentBg}} {...startProps} />
                  <Box sx={{ mx: 0.5 }}> </Box>
                  <TextField size="small" sx={{ right: 6,background:themes.palette.custom.inputComponentBg }} {...endProps} />
                </React.Fragment>
              )}
            />
          </Stack>
        </LocalizationProvider>
        {errors && filterData.created_on.from==''?<Typography sx={{color:'red'}}>Please Select Date Range</Typography>:null}
      </Box>

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
          // disabled={isDataFilled() ? false : true}
        >
          Save
        </Button>
      </Box>
    </StyledFilterMenu>
  );
}

export default Filter;
