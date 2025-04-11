// import DataTable, { createTheme } from 'react-data-table-component';
// import { useSelector } from 'react-redux';
// import { FaAngleDown } from 'react-icons/fa';
// import { useEffect, useMemo, useState } from 'react';
// import { CheckCircleRounded, CopyAllRounded, DownloadRounded, PrintRounded, SearchOutlined, Tune } from '@mui/icons-material';
// import { useRef } from 'react';
// import ReactToPrint from 'react-to-print';
// import CustomDropRadioBtn from './CustomDropRadioBtn';
// import CustomInput from './CustomInput';
// import CustomMultiSelectDropDown from './CustomMultiSelectDropDown';
// import CustomDateRangePicker from './CustomDateRangePicker';
// import CustomDialogBox from './CustomDialogBox';
// import { FaRegCalendarAlt } from 'react-icons/fa';
// import { FormatSize } from '@mui/icons-material';
// import { FaColumns } from 'react-icons/fa';
// import { useCallback } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom/dist';
// import { handleQueryParamChange, handleQueryParamRemove } from '@/lib/utils';
// import CustomToolTip from './CustomToolTip';
// import { Skeleton } from '../ui/skeleton';
// import { IconButton } from '@mui/material';
// import { IoOptions } from 'react-icons/io5';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
// import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

// // Theming
// createTheme(
//   'solarized',
//   {
//     text: {
//       primary: '#ffffff'
//     },
//     background: {
//       default: '#020617'
//     }
//   },
//   'dark'
// );

// const CustomTable = ({
//   // Columns/Headers Array
//   columns,
//   onColumnChange,
//   // Data Array
//   loading, // is data is loading from the server
//   data,
//   // Expandable Row Component
//   expandableRowsComponent,
//   // Total rows possible
//   totalItems = 0,
//   // Conditional row styles based on row data
//   conditionalRowStyles,
//   // Filter handlers
//   filterComponent,
//   //download label
//   label,
//   // Indicators
//   indication
// }) => {
//   // font size state
//   const fontSizeFromLocalStorage = localStorage.getItem('table-fontSize') ?? '14';
//   const [fontSize, setFontSize] = useState(+fontSizeFromLocalStorage);
//   const handleFontSize = (value) => {
//     setFontSize(value);
//     localStorage.setItem('table-fontSize', value);
//   };

//   // Query/filter related
//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(location.search);
//   const pageFromQuery = searchParams.get('page');
//   const limitFromQuery = searchParams.get('limit');
//   const [date, setDate] = useState({
//     from: searchParams.get('startDate'),
//     to: searchParams.get('endDate')
//   });
//   const [page, setPage] = useState(pageFromQuery && !isNaN(pageFromQuery) ? +pageFromQuery : 1);
//   const [limit, setLimit] = useState(limitFromQuery && !isNaN(limitFromQuery) ? +limitFromQuery : 20);
//   const [searchValue, setSearchValue] = useState(searchParams.get('search') ?? '');

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const pageFromQuery = searchParams.get('page');
//     const page = pageFromQuery && !isNaN(pageFromQuery) ? +pageFromQuery : 1;
//     setPage(page);
//     const limitFromQuery = searchParams.get('limit');
//     const limit = limitFromQuery && !isNaN(limitFromQuery) ? +limitFromQuery : 20;
//     setLimit(limit);
//     setSearchValue(searchParams.get('search') ?? '');
//   }, [location]);

//   const onChangePage = (page) => {
//     handleQueryParamChange('page', page, location, navigate);
//   };
//   const onChangeRowsPerPage = (currentRowsPerPage, currentPage) => {
//     handleQueryParamChange(['limit', 'page'], [currentRowsPerPage, currentPage], location, navigate);
//   };
//   const onSort = (column, sortDirection) => {
//     handleQueryParamChange(['sortBy', 'desc'], [column.key, sortDirection === 'asc' ? true : false], location, navigate);
//   };

//   const onSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchValue(value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchValue) {
//       handleQueryParamChange('search', searchValue, location, navigate);
//     } else {
//       handleQueryParamRemove('search', location, navigate);
//     }
//   };

//   const onDateChange = (newDate) => {
//     if (!newDate) {
//       setDate({
//         from: undefined,
//         to: undefined
//       });
//       handleQueryParamRemove(['startDate', 'endDate'], location, navigate);
//     } else if (newDate.from && !newDate.to) {
//       setDate({
//         from: newDate.from,
//         to: newDate.from
//       });
//       handleQueryParamChange(['startDate', 'endDate'], [newDate.from.toISOString(), newDate.from.toISOString()], location, navigate);
//     } else if (!newDate.from && newDate.to) {
//       setDate({
//         from: newDate.to,
//         to: newDate.to
//       });
//       handleQueryParamChange(['startDate', 'endDate'], [newDate.to.toISOString(), newDate.to.toISOString()], location, navigate);
//     } else {
//       setDate(newDate);
//       handleQueryParamChange(['startDate', 'endDate'], [newDate.from.toISOString(), newDate.to.toISOString()], location, navigate);
//     }
//   };
//   const clearDate = () => {
//     setDate({
//       from: undefined,
//       to: undefined
//     });
//     handleQueryParamRemove(['startDate', 'endDate'], location, navigate);
//   };

//   // Dark Mode Check
//   const isDarkMode = useSelector((state) => state.globalSetting.isDarkMode);

//   // Rows per page options
//   const limits = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//   // Print Table Ref
//   const componentRef = useRef();

//   const actionsMemo = useMemo(
//     () => (
//       <Actions
//         // Columns
//         columns={columns}
//         onColumnChange={onColumnChange}
//         // Data
//         data={data}
//         // Font size state
//         fontSize={fontSize}
//         handleFontSize={handleFontSize}
//         // Print component ref
//         componentRef={componentRef}
//         // Search handlers
//         searchValue={searchValue}
//         onSearchChange={onSearchChange}
//         handleSearchSubmit={handleSearchSubmit}
//         // Filter handlers
//         filterComponent={filterComponent}
//         // Date handlers
//         date={date}
//         onDateChange={onDateChange}
//         clearDate={clearDate}
//         //download label
//         label={label}
//         // indicators
//         indication={indication}
//       />
//     ),
//     [data, columns, fontSize, searchValue, date]
//   );

//   // Custom styles for dark and light mode
//   const customStyles = {
//     rows: {
//       highlightOnHoverStyle: {
//         backgroundColor: 'rgb(74, 155, 155)',
//         borderBottomColor: 'rgb(74, 155, 155)',
//         borderRadius: '25px',
//         fontWeight: 'bold'
//       }
//     },
//     headRow: {
//       style: {
//         fontSize: `${fontSize * 1.3}px`,
//         fontWeight: 'bold',
//         border: 'none',
//         backgroundColor: 'rgb(215, 227, 227)'
//       }
//     },
//     cells: {
//       style: {
//         fontSize: `${fontSize}px`
//       }
//     }
//   };
//   const customStylesDark = {
//     rows: {
//       highlightOnHoverStyle: {
//         backgroundColor: 'rgb(74, 155, 155)',
//         borderBottomColor: 'rgb(74, 155, 155)',
//         borderRadius: '25px',
//         fontWeight: 'bold'
//       }
//     },
//     headRow: {
//       style: {
//         fontSize: `${fontSize * 1.3}px`,
//         fontWeight: 'bold',
//         border: 'none',
//         backgroundColor: '#0a143f'
//       }
//     },
//     cells: {
//       style: {
//         fontSize: `${fontSize}px`
//       }
//     }
//   };

//   return (
//     <>
//       <div className='relative' ref={componentRef}>
//         <DataTable
//           // Columns/Headers Array
//           columns={columns}
//           // Data Array
//           data={data}
//           // Row key properties from Data
//           keyField={'_id'}
//           responsive
//           striped
//           highlightOnHover
//           pointerOnHover
//           // Progress handlers
//           progressPending={loading}
//           progressComponent={
//             <div className='w-full'>
//               <Skeleton className='h-14 w-full mb-1' />
//               <Skeleton className='h-14 w-full mb-1' />
//               <Skeleton className='h-14 w-full mb-1' />
//               <Skeleton className='h-14 w-full mb-1' />
//               <Skeleton className='h-14 w-full mb-1' />
//               <Skeleton className='h-14 w-full mb-1' />
//               <Skeleton className='h-14 w-full mb-1' />
//               <Skeleton className='h-14 w-full mb-1' />
//               <Skeleton className='h-14 w-full mb-1' />
//               <Skeleton className='h-14 w-full mb-1' />
//               <Skeleton className='h-14 w-full mb-1' />
//             </div>
//           }
//           // No Data Component
//           noDataComponent={<NoDataComponent />}
//           // Sort handlers
//           sortIcon={
//             <svg>
//               <FaAngleDown />
//             </svg>
//           }
//           sortServer
//           onSort={onSort}
//           // Expand row handlers
//           expandableRows={expandableRowsComponent ? true : false}
//           expandableRowsComponent={expandableRowsComponent}
//           expandOnRowClicked
//           // Pagination Handlers
//           pagination
//           paginationServer
//           paginationTotalRows={totalItems}
//           paginationDefaultPage={page}
//           paginationPerPage={limit}
//           paginationRowsPerPageOptions={limits}
//           onChangePage={onChangePage}
//           onChangeRowsPerPage={onChangeRowsPerPage}
//           // Theme/Look and Feel
//           theme={isDarkMode ? 'solarized' : 'light'}
//           customStyles={isDarkMode ? customStylesDark : customStyles}
//           fixedHeader
//           fixedHeaderScrollHeight='55vh'
//           onColumnOrderChange={onColumnChange}
//           conditionalRowStyles={conditionalRowStyles}
//           // Actions for searching, filters etc.
//           actions={actionsMemo}
//         />
//       </div>
//     </>
//   );
// };

// // All actions and their works
// const Actions = ({
//   // Columns
//   columns,
//   onColumnChange,
//   // Data
//   data,
//   // Font size handler
//   fontSize,
//   handleFontSize,
//   // Print component ref
//   componentRef,
//   // Search handlers
//   searchValue,
//   onSearchChange,
//   handleSearchSubmit,
//   // Filter handlers
//   filterComponent,
//   // Date handlers
//   date,
//   onDateChange,
//   clearDate,
//   //download label
//   label,
//   //indicator
//   indication
// }) => {
//   const fontColumns = [
//     { value: 8, name: 8 },
//     { value: 10, name: 10 },
//     { value: 12, name: 12 },
//     { value: 14, name: '14 (Best View)' },
//     { value: 16, name: 16 },
//     { value: 18, name: 18 },
//     { value: 20, name: 20 }
//   ];

//   // Convert data to CSV or TSV format based on delimiter
//   const convertArrayOfObjectsToCSV_TSV = useCallback(
//     (dataArray, delimiter) => {
//       let result = '';
//       const lineDelimiter = '\n';

//       const filteredColumn = columns.filter((column) => !column.omit && column.name);
//       const headerName = filteredColumn.map((column) => column.name);
//       result += headerName.join(delimiter);
//       result += lineDelimiter;

//       const selectorsFunctions = filteredColumn.map((column) => column.selector);

//       dataArray.forEach((oneData) => {
//         const rowValue = selectorsFunctions.map((selector) => selector(oneData) ?? 'null').join(delimiter);
//         result += rowValue;
//         result += lineDelimiter;
//       });

//       return result;
//     },
//     [columns]
//   );

//   // Download CSV from data
//   const downloadCSV = useCallback(() => {
//     const csv = convertArrayOfObjectsToCSV_TSV(data, ',');
//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     const link = document.createElement('a');
//     const url = URL.createObjectURL(blob);
//     link.setAttribute('href', url);
//     const date = new Date();
//     const fileName = label + '_' + date.toLocaleString() + '.csv';
//     link.setAttribute('download', fileName);
//     link.style.visibility = 'hidden';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }, [data, columns]);

//   // Copy Data in TSV
//   const handleCopy = useCallback(() => {
//     const copyText = convertArrayOfObjectsToCSV_TSV(data, '\t');
//     navigator.clipboard.writeText(copyText);
//   }, [data, columns]);

//   return (
//     <>
//       <div className='w-full hidden sm:flex justify-between items-center  sm:flex-row my-2 sm:my-0 gap-2 select-none'>
//         <div className='flex items-center justify-start gap-4 mr-0 sm:mr-4'>
//           <CustomDropRadioBtn trigger={dropRadioTrigger} columns={fontColumns} label={'Font Size'} value={fontSize} onChange={handleFontSize} />

//           <CustomMultiSelectDropDown trigger={multiSelectTrigger} label={'Columns'} columns={columns} onChanges={onColumnChange} />

//           {filterComponent && <CustomDialogBox trigger={dialogBoxTrigger} />}

//           <CustomDateRangePicker trigger={datePickerTrigger} date={date} onDateChange={onDateChange} clearDate={clearDate} />

//           {indication}
//         </div>
//         <div className='flex gap-4 items-center mr-0 sm:mr-4'>
//           <CustomToolTip tooltip={'Download'}>
//             <div onClick={downloadCSV} className='cursor-pointer'>
//               <DownloadRounded className='h-6 w-6' />
//             </div>
//           </CustomToolTip>
//           <CustomToolTip tooltip={'Copy'}>
//             <span>
//               <CopyComponent copyCSV={handleCopy} />
//             </span>
//           </CustomToolTip>
//           <CustomToolTip tooltip={'Print'}>
//             <ReactToPrint
//               trigger={() => (
//                 <div>
//                   <PrintRounded className=' dark:text-white cursor-pointer' />
//                 </div>
//               )}
//               documentTitle='print table'
//               content={() => componentRef.current}
//             />
//           </CustomToolTip>
//           <div className='relative dark:text-white gap-2 group outline-0'>
//             <form onSubmit={handleSearchSubmit}>
//               <CustomInput
//                 type='text'
//                 placeholder='Search'
//                 className='border border-gray-300 rounded px-2 py-0 text-base opacity-0 group-hover:opacity-100 max-w-4 group-hover:max-w-32 sm:group-hover:max-w-52 focus:max-w-32 sm:focus:max-w-52 focus:opacity-100 transition-all duration-300 pr-9'
//                 value={searchValue}
//                 onChange={onSearchChange}
//               />
//               <div className='absolute top-1/2 group-hover:top-[1/2] right-2 -translate-y-1/2 cursor-pointer text-black dark:text-white font-light text-2xl' onClick={handleSearchSubmit}>
//                 <SearchOutlined />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className='sm:hidden flex justify-between items-center'>
//         <div className='relative dark:text-white gap-4 group outline-0'>
//           <form onSubmit={handleSearchSubmit}>
//             <CustomInput
//               type='text'
//               placeholder='Search'
//               className='border border-gray-300 rounded px-2 py-0 text-base opacity-0 group-hover:opacity-100 max-w-4 group-hover:max-w-52 focus:max-w-32 sm:focus:max-w-52 focus:opacity-100 transition-all duration-300 pr-9'
//               value={searchValue}
//               onChange={onSearchChange}
//             />
//             <div className='absolute top-1/2 group-hover:top-[1/2] right-2 -translate-y-1/2 cursor-pointer text-black dark:text-white font-light text-2xl' onClick={handleSearchSubmit}>
//               <SearchOutlined />
//             </div>
//           </form>
//         </div>

//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <IconButton aria-label='more' aria-controls='actions-menu' aria-haspopup='true'>
//               <IoOptions className='dark:text-white' />
//             </IconButton>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className='w-44' side='left' align='center'>
//             <DropdownMenuLabel>
//               <div className='flex items-center justify-between'>
//                 <div>Menu</div>
//                 <div>{indication}</div>
//               </div>
//             </DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <DropdownMenuGroup>
//               <DropdownMenuGroup>
//                 <DropdownMenuItem>
//                   <CustomDropRadioBtn trigger={dropRadioSmallTrigger} columns={fontColumns} label={'Font Size'} value={fontSize} onChange={handleFontSize} />
//                 </DropdownMenuItem>
//               </DropdownMenuGroup>
//               <DropdownMenuItem>
//                 <CustomMultiSelectDropDown trigger={multiSelectSmallTrigger} label={'Columns'} columns={columns} onChanges={onColumnChange} />
//               </DropdownMenuItem>
//               {filterComponent && (
//                 <DropdownMenuItem>
//                   <CustomDialogBox trigger={dialogBoxSmallTrigger} />
//                 </DropdownMenuItem>
//               )}
//               <DropdownMenuItem>
//                 <CustomDateRangePicker trigger={datePickerSmallTrigger} date={date} onDateChange={onDateChange} clearDate={clearDate} />
//               </DropdownMenuItem>
//             </DropdownMenuGroup>
//             <DropdownMenuSeparator />
//             <DropdownMenuGroup>
//               <DropdownMenuItem>
//                 <div onClick={downloadCSV} className='flex items-center cursor-pointer'>
//                   <DownloadRounded />
//                   <span className='text-sm font-semibold text-gray-700 ml-3 w-auto py-2 rounded-md focus:border-collapse outline-none'>Download</span>
//                 </div>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <CopyComponent copyCSV={handleCopy} />
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <ReactToPrint
//                   trigger={() => (
//                     <div className='flex items-center cursor-pointer h-10'>
//                       <PrintRounded className=' dark:text-white cursor-pointer' />
//                       <span className='text-sm font-semibold text-gray-700 ml-3 w-auto py-2 rounded-md focus:border-collapse outline-none'>Print</span>
//                     </div>
//                   )}
//                   documentTitle='print table'
//                   content={() => componentRef.current}
//                 />
//               </DropdownMenuItem>
//             </DropdownMenuGroup>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </>
//   );
// };

// // Trigger components for left
// const datePickerTrigger = (
//   <button
//     id='date'
//     className={'w-[1.40rem] group-hover:w-14 group-hover:m-2 bg-transparent transition-all duration-300 border-none outline-none flex items-center justify-between text-black dark:text-white'}
//   >
//     <CustomToolTip tooltip={'Date Filter'}>
//       <span>
//         <FaRegCalendarAlt />
//       </span>
//     </CustomToolTip>
//   </button>
// );
// const dropRadioTrigger = (
//   <button className='bg-transparent border-none outline-none flex items-center justify-between'>
//     <div className='flex items-center'>
//       <CustomToolTip tooltip={'Font Size'}>
//         <span>
//           <FormatSize />
//         </span>
//       </CustomToolTip>
//     </div>
//   </button>
// );
// const multiSelectTrigger = (
//   <button className='bg-transparent border-none outline-none flex items-center justify-between'>
//     <CustomToolTip tooltip={'Column Visibility'}>
//       <span>
//         <FaColumns />
//       </span>
//     </CustomToolTip>
//   </button>
// );
// const dialogBoxTrigger = (
//   <button className='bg-transparent border-none outline-none flex items-center justify-between'>
//     <CustomToolTip tooltip={'Filter'}>
//       <span>
//         <Tune />
//       </span>
//     </CustomToolTip>
//   </button>
// );

// const datePickerSmallTrigger = (
//   <div className='flex items-center cursor-pointer'>
//     <FaRegCalendarAlt className='w-6' />
//     <span className='text-sm font-semibold text-gray-700 ml-3 w-auto py-2 rounded-md focus:border-collapse outline-none'>Date Range</span>
//   </div>
// );

// const dropRadioSmallTrigger = (
//   <div className='flex items-center cursor-pointer'>
//     <FormatSize />
//     <span className='text-sm font-semibold text-gray-700 ml-3 w-auto py-2 rounded-md focus:border-collapse outline-none'>Font Size</span>
//   </div>
// );

// const multiSelectSmallTrigger = (
//   <div className='flex items-center cursor-pointer'>
//     <FaColumns className='w-6' />
//     <span className='text-sm font-semibold text-gray-700 ml-3 w-auto py-2 rounded-md focus:border-collapse outline-none'>Column Visibility</span>
//   </div>
// );

// const dialogBoxSmallTrigger = (
//   <div className='flex items-center cursor-pointer'>
//     <Tune />
//     <span className='text-sm font-semibold text-gray-700 ml-3 w-auto py-2 rounded-md focus:border-collapse outline-none'>Filter</span>
//   </div>
// );

// // Copy button
// const CopyComponent = ({ copyCSV }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     setCopied(true);
//     copyCSV();
//     setTimeout(() => {
//       setCopied(false);
//     }, 700);
//   };
//   return (
//     <div className='cursor-pointer sm:h-auto h-10 sm:block flex items-center' onClick={handleCopy}>
//       {!copied ? <CopyAllRounded /> : <CheckCircleRounded />}
//       <span className='text-sm font-semibold text-gray-700 ml-3 w-auto py-2 rounded-md focus:border-collapse outline-none sm:hidden'>Copy</span>
//     </div>
//   );
// };

// // When data not present then this will show
// const NoDataComponent = () => {
//   return (
//     <div className='h-[55vh] flex items-center justify-center'>
//       <div className='flex items-center justify-center h-full p-2'>
//         <div className='text-center'>
//           <h2 className='text-sm md:text-xl font-semibold text-gray-700 mb-2'>No data available</h2>
//           <p className='text-gray-500 text-xs md:text-lg'>There is no data to display at the moment.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomTable;
