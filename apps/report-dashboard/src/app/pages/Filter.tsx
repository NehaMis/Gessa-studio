// import { styled } from '@mui/system';
// import {
//   Box,
//   Typography,
//   Divider,
//   Paper,
//   InputBase,
//   IconButton,
//   InputLabel,
//   Button,
//   TextField,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import SearchIcon from '@mui/icons-material/Search';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
// import React, { useCallback, useEffect, useState } from 'react';
// import Stack from '@mui/material/Stack';
// import MultipleSelectChip from '../components/MultipleSelectionChip';
// import { DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';

// export interface FilterType {
//   width: string;
//   onClose: () => void;
// }

// function Filter(props: FilterType) {
//   const ReportBootInput = useCallback(
//     styled(InputBase)(({ theme }) => ({
//       'label + &': {
//         marginTop: theme.spacing(1),
//       },
//       '& .MuiInputBase-input': {
//         padding: '12px',
//         borderRadius: 4,
//         position: 'relative',
//         backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
//         fontWeight: '400',
//         fontSize: '14px',
//         lineHeight: '20px',
//         //   padding: '10px 12px',
//       },
//       '& .MuiInputLabel-root': {
//         fontStyle: 'normal',
//         fontWeight: '400',
//         fontSize: '120px',
//         lineHeight: '16px',
//         marginTop: '10px',
//       },
//     })),
//     []
//   );

//   const StyledFilterMenu = useCallback(
//     styled('div')(({ theme }) => {
//       return {
//         height: '100%',

//         display: 'flex',
//         flexDirection: 'column',
//         width: `${props?.width}`,
//         overflowY: 'hidden',

//         '.filter_model_header': {
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           position: 'relative',
//           padding: '0px 16px',
//           height: '48px',
//           top: '4px',
//           '.filter_heading': {
//             fontFamily: 'Inter',
//             fontStyle: 'normal',
//             fontWeight: '600',
//             fontSize: '14px',
//             lineHeight: '20px',
//           },
//         },
//         '.search_frame': {
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           position: 'relative',
//           width: '360px',
//           height: '91px',
//           left: '0px',
//           top: '0px',
//           '.inner_search': {
//             position: 'relative',
//             width: '360px',
//             padding: '0px 16px',
//             top: '25px',
//             bottom: '25px',
//           },
//         },
//         '.report_input_frame': {
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           padding: '16px 16px 0px',
//           height: '106px',
//         },

//         '.filter_footer': {
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'right',
//           height: '64px',
//           bottom: '0px',
//           gap: '10px',

//           '.btn_cancel': {
//             width: '91px',
//             height: '36px',
//             borderRadius: '4px',
//             padding: '10px 24px',
//             margin: '0px 16px',
//           },
//           '.btn_save': {
//             width: '83px',
//             height: '36px',
//             borderRadius: '4px',
//             padding: '10px 24px',
//             // margin: '0px 16px',
//             // background: '#ffffff1f',
//             // color: '#FFFFFF',
//             right: '20px',
//           },
//         },
//       };
//     }),
//     []
//   );

//   interface filterDataType {
//     search: string;
//     report_name: string;
//     select_schema: Array<string>;
//     created_by: Array<string>;
//     created_on: {
//       from: string | null | undefined;
//       to: string | null | undefined;
//     };
//   }

//   const [dateValue, setDateValue] = React.useState<DateRange<Date>>([
//     null,
//     null,
//   ]);

//   const [filterData, setFilterData] = useState<filterDataType>({
//     search: '',
//     report_name: '',
//     select_schema: [],
//     created_by: [],
//     created_on: {
//       from: '',
//       to: '',
//     },
//   });

//   const isDataFilled = () => {
//     if (
//       filterData.select_schema.length > 0 ||
//       filterData.created_by.length > 0 ||
//       filterData.search != '' ||
//       filterData.report_name != '' ||
//       filterData.created_on.from != '' ||
//       filterData.created_on.to != ''
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   const handleFilterInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFilterData({
//       ...filterData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFilterSchemaData = (selectData: string) => {
//     setFilterData({
//       ...filterData,
//       select_schema: [...selectData],
//     });
//   };

//   const handleFilterCreatedByData = (selectData: string) => {
//     setFilterData({
//       ...filterData,
//       created_by: [...selectData],
//     });
//   };

//   const handleSave = () => {
//     console.log(filterData);
//   };

//   useEffect(() => {
//     if(dateValue[0]!==null && dateValue[1]!==null){
//       console.log("In Use Effect", dateValue[0])
//       setFilterData({
//         ...filterData,
//         created_on: {
//           from: dateValue[0]?.toDateString(),
//           to: dateValue[1]?.toDateString(),
//         },
//       });
//     }

//   }, [dateValue]);

//   return (
//     <StyledFilterMenu>
//       <Box className="filter_model_header">
//         <Typography className="filter_heading" variant="body2">
//           Filter
//         </Typography>
//         <Box className="report_close_Button" onClick={props.onClose}>
//           <CloseIcon />
//         </Box>
//       </Box>
//       <Divider />

//       <Box className="search_frame">
//         <Box className="inner_search">
//           <Paper
//             component="form"
//             sx={{
//               p: '2px 4px',
//               display: 'flex',
//               alignItems: 'center',
//               width: 328,
//             }}
//           >
//             <InputBase
//               sx={{ ml: 1, flex: 1, y: 25 }}
//               placeholder="Search"
//               name="search"
//               value={filterData.search}
//               onChange={handleFilterInputData}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//             <IconButton sx={{ p: '10px' }} aria-label="search">
//               <SearchIcon />
//             </IconButton>
//           </Paper>
//         </Box>
//       </Box>
//       <Divider />

//       <Box className="report_input_frame">
//         <InputLabel
//           htmlFor="filter-report-name"
//           sx={{ fontSize: 12, fontWeight: 400 }}
//         >
//           Report Name
//         </InputLabel>
//         <ReportBootInput
//           name="report_name"
//           fullWidth={true}
//           id="report-name"
//           value={filterData.report_name}
//           onChange={handleFilterInputData}
//         />
//       </Box>

//       <Box className="report_input_frame">
//         <MultipleSelectChip
//           onChange={handleFilterSchemaData}
//           width={328}
//           labelName={'Select Schema'}
//         />
//       </Box>

//       <Box className="report_input_frame">
//         <MultipleSelectChip
//           onChange={handleFilterCreatedByData}
//           width={328}
//           labelName={'Created By'}
//         />
//       </Box>

//       <Box className="report_input_frame">
//         <InputLabel
//           htmlFor="date-picker"
//           sx={{ fontSize: 14, fontWeight: 600, bottom: 10 }}
//         >
//           Created On
//         </InputLabel>

//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <Stack spacing={0}>
//             <DesktopDateRangePicker
//               startText="From"
//               endText="To"
//               value={dateValue}
//               onChange={(newValue: any) => {
//                 setDateValue(newValue);
//               }}
//               renderInput={(startProps :any, endProps:any) => (
//                 <React.Fragment>
//                   <TextField size="small" sx={{}} {...startProps} />
//                   <Box sx={{ mx: 0.5 }}> </Box>
//                   <TextField size="small" sx={{ right: 4 }} {...endProps} />
//                 </React.Fragment>
//               )}
//             />
//           </Stack>
//         </LocalizationProvider>
//       </Box>

//       <Box className="filter_footer">
//         <Button
//           className="btn_cancel"
//           variant="outlined"
//           color="info"
//           onClick={props.onClose}
//         >
//           Cancel
//         </Button>

//         <Button
//           className="btn_save"
//           variant="contained"
//           color="info"
//           onClick={() => handleSave()}
//           disabled={isDataFilled() ? false : true}
//         >
//           Save
//         </Button>
//       </Box>
//     </StyledFilterMenu>
//   );
// }

// export default Filter;
