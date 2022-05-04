// import React from 'react';
// import {
//   useTable,
//   useFilters,
//   useGlobalFilter,
//   usePagination,
// } from 'react-table';
// import Chip from '../chip/chip';

// import { useTheme } from '@mui/material/styles';
// import { useSelector, useDispatch } from 'react-redux';
// import { Paper } from '@mui/material';
// // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
// import { IconComponent } from '@gessa/ui';

// /* eslint-disable-next-line */
export interface DataTableProps {
  columns: Array<any>;
  data: Array<any>;
}

// function fuzzyTextFilterFn(rows: any, id: any, filterValue: any) {
//   return matchSorter(rows, filterValue, {
//     keys: [(row: any) => row.values[id].value],
//   });
// }
// // Let the table remove the filter if the string is empty
// fuzzyTextFilterFn.autoRemove = (val: any) => !val;

// // Our table component
// function Table({ columns, data, color, pageCount: controlledPageCount }: any) {
//   function DefaultColumnFilter({
//     column: { filterValue, preFilteredRows, setFilter },
//   }: any) {
//     const count = preFilteredRows.length;

//     return (
//       <div className="th-searchfilter relative box-border flex flex-row h-7 mr-5 p-1.5 ">
//         {/* width: '100%', fontSize: '12px', lineHeight: '16px', display: 'flex',
//       flexDirection: 'column', border: 'none', */}
//         <input
//           className="w-full text-sm flex flex-col border-0 focus:visible focus:outline-none "
//           style={{
//             background: color.backgroundColor,
//           }}
//           onChange={(e) => {
//             setFilter(e.target.value); // Set undefined to remove the filter entirely
//           }}
//           placeholder={`Search`}
//         />
//         <div className="h-4 w-4">
//           <IconComponent name="Search" size={18} color="#459ff2" />
//         </div>
//       </div>
//     );
//   }

//   const filterTypes = React.useMemo(
//     () => ({
//       // Add a new fuzzyTextFilterFn filter type.
//       fuzzyText: fuzzyTextFilterFn,
//       // Or, override the default text filter to use
//       // "startWith"
//       text: (rows: any, id: any, filterValue: any) => {
//         return rows.filter((row: any) => {
//           const rowValue = row.values[id];
//           return rowValue !== undefined
//             ? String(rowValue)
//                 .toLowerCase()
//                 .startsWith(String(filterValue).toLowerCase())
//             : true;
//         });
//       },
//     }),
//     []
//   );

//   const defaultColumn = React.useMemo(
//     () => ({
//       // Let's set up our default Filter UI
//       Filter: DefaultColumnFilter,
//     }),
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     rows,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     // Get the state from the instance
//     state: { pageIndex, pageSize },
//   } = useTable(
//     {
//       columns,
//       data,
//       defaultColumn, // Be sure to pass the defaultColumn option
//       filterTypes,
//       initialState: { pageIndex: 0 }, // Pass our hoisted table state
//     },
//     useFilters, // useFilters!
//     useGlobalFilter, // useGlobalFilter!
//     usePagination
//   );

//   // We don't want to render all of the rows for this example, so cap
//   // it for this use case
//   // React.useEffect(() => {
//   //   fetchData({ pageIndex, pageSize });
//   // }, [fetchData, pageIndex, pageSize]);
//   const firstPageRows = rows.slice(0, 10);

//   const getPageSizes = (props: any) => {
//     return <button onClick={() => gotoPage(props)}>{props}</button>;
//   };
//   const getRowHandler = (props: any) => {
//     return <Chip value={props.value} color={props.color} />;
//
//   };

//   return (
//     <>
//       <table {...getTableProps()} className="relative w-full p-10 max-h-96 ">
//         <thead>
//           {headerGroups.map((headerGroup: any) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column: any) => (
//                 <th
//                   {...column.getHeaderProps({
//                     style: { minWidth: column.minWidth, width: column.width },
//                   })}
//                   className="h-16 z-50 sticky top-0 opacity-100"
//                   style={{
//                     backgroundColor: color.backgroundColor,
//                   }}
//                 >
//                   <div className="w-full flex flex-col justify-between items-stretch gap-2.5">
//                     <div className="w-full flex flex-row justify-between items-center gap-2.5 ">
//                       {column.render('Header')}
//                       <div className="flex flex-col justify-start mr-6 h-4 w-4 more-icon "></div>
//                     </div>
//                     <div>
//                       {column.canFilter ? column.render('Filter') : null}
//                     </div>
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className="tbody-head">
//           {page.map((row: any, index: number) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className="tr-hover "
//                 key={Math.random()}
//                 style={
//                   index % 2
//                     ? {
//                         background: color.primaryColor,
//                       }
//                     : {
//                         background: color.backgroundColor,
//                       }
//                 }
//               >
//                 {/* {row.cells.map(({ key, value }) => { */}
//                 {row.cells.map((value: any) => {
//                   return value.value.key === 'string' ? (
//                     <td
//                       style={
//                         index % 2
//                           ? {
//                               color: color.primaryColorContrast,
//                             }
//                           : {
//                               color: color.backgroundColorContrast,
//                             }
//                       }
//                     >
//                       {value.value.value}
//                     </td>
//                   ) : value.value.key === 'chiplist' ? (
//                     <td
//                       style={
//                         index % 2
//                           ? {
//                               color: color.primaryColorContrast,
//                             }
//                           : {
//                               color: color.backgroundColorContrast,
//                             }
//                       }
//                     >
//                       <div className="w-full relative  box-border flex flex-col justify-start items-start">
//                         <div className="flex flex-row justify-center items-center h-8">
//                           {value.value.value.slice(0, 2).map((chip: any) => {
//                             return getRowHandler(chip);
//                           })}
//                           {value.value.value.length > 2 &&
//                             getRowHandler({
//                               value:
//                                 '+' + (value.value.value.length - 2).toString(),
//                               color: '#459ff2',
//                             })}
//                         </div>
//                       </div>
//                     </td>
//                   ) : (
//                     <td>-</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div
//         className="flex flex-row items-center justify-end box-border sticky h-16 w-full p-2.5 text-sm bottom-0 "
//         style={{
//           backgroundColor: color.backgroundColor,
//           color: color.backgroundColorContrast,
//         }}
//       >
//         <span>
//           ({pageIndex + 1} - {pageSize} of {rows.length})
//         </span>
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {'<<'}
//         </button>{' '}
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           {'<'}
//         </button>{' '}
//         {[1, 2, 3].map((page) => {
//           return getPageSizes(page);
//         })}
//         <button
//           className="text-sm w-10 h-10 py-2.5 px-3 m-5 "
//           onClick={() => nextPage()}
//           disabled={!canNextPage}
//         >
//           {'>'}
//         </button>{' '}
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {'>>'}
//         </button>{' '}
//         <span>
//           | Go to page:{' '}
//           <input
//             className=" box-border relative border-2 h-8 w-24 py-2.5 px-3 text-sm m-5 focus:visible focus:outline-none "
//             type="number"
//             style={{
//               backgroundColor: color.backgroundColor,
//               color: color.backgroundColorContrast,
//             }}
//             defaultValue={pageIndex + 1}
//             onChange={(e) => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               gotoPage(page);
//             }}
//           />
//         </span>
//         <span>
//           Show
//           <select
//             className="w-16 py-2.5 px-3 text-sm m-5 focus:visible focus:outline-none"
//             style={{
//               backgroundColor: color.backgroundColor,
//               color: color.backgroundColorContrast,
//             }}
//             value={pageSize}
//             onChange={(e) => {
//               setPageSize(Number(e.target.value));
//             }}
//           >
//             {[10, 20, 30, 40, 50].map((pageSize) => (
//               <option key={pageSize} value={pageSize} className="text-sm">
//                 {pageSize}
//               </option>
//             ))}
//           </select>
//           Entries
//         </span>
//       </div>
//     </>
//   );
// }

// // Define a custom filter filter function!
// function filterGreaterThan(rows: any, id: any, filterValue: any) {
//   return rows.filter((row: any) => {
//     const rowValue = row.values[id];
//     return rowValue >= filterValue;
//   });
// }

// // This is an autoRemove method on the filter function that
// // when given the new filter value and returns true, the filter
// // will be automatically removed. Normally this is just an undefined
// // check, but here, we want to remove the filter if it's not a number
// filterGreaterThan.autoRemove = (val: any) => typeof val !== 'number';

// export function DataTable(props: DataTableProps) {
//   const columns = React.useMemo(() => [...props.columns], []);
//   const rows = props.data;

//   const theme = useSelector((state: any) => state.theme);
//   const _theme = useTheme();
//   const dispatch = useDispatch();
//   const primaryColor = theme.palette.primary[500]
//     ? theme.palette.primary[500]
//     : theme.palette.primary.main;
//   const primaryColorContrast = _theme.palette.getContrastText(primaryColor);
//   const secondaryColor = theme.palette.secondary[500]
//     ? theme.palette.secondary[500]
//     : theme.palette.secondary.main;
//   const secondaryColorContrast = _theme.palette.getContrastText(secondaryColor);
//   const backgroundColor = theme.palette.background.default;
//   const backgroundColorContrast = _theme.palette.getContrastText(
//     theme.palette.background.default
//   );
//   const paperColor = theme.palette.background.paper;
//   const paperColorContrast = _theme.palette.getContrastText(
//     theme.palette.background.paper
//   );
//   const colorObj = {
//     primaryColor,
//     primaryColorContrast,
//     secondaryColor,
//     secondaryColorContrast,
//     backgroundColor,
//     backgroundColorContrast,
//     paperColor,
//     paperColorContrast,
//   };

//   // const data = React.useMemo(() => makeData(100000), []);

//   const StyledDataTable2 = styled('div')(({ theme }) => {
//     return {
//       tr: { height: '58px', width: 'auto', backgroundColor: 'primaryColor' },
//       td: { borderBottom: '0' },

//       '.tbody_head': { backgroundColor: 'red' },
//       '.more-icon': {
//         background: "url('../../Assets/Kebab-Menu.svg') no-repeat center",
//         backgroundSize: 'contain',
//         color: 'black',
//       },
//       '.th-searchfilter': {
//         border: '1px solid #e2e2e2',
//       },
//     };
//   });

//   return (
//     <Paper>
//       <StyledDataTable2>
//         <div className="overflow-y-auto max-h-96">
//           <Table columns={columns} data={rows} color={colorObj} />
//         </div>{' '}
//       </StyledDataTable2>
//     </Paper>
//   );
// }
export function DataTable(props: DataTableProps) {
  return <div></div>;
}
export default DataTable;
