// import React, { useState } from 'react';
// import {
//   SqlEditor,
//   copyToClipboard,
//   formatSql,
// } from 'react-sql-editor';

// function SqlTextArea() {
//   const [displaySql, setDisplaySql] = useState('');
//   const [copyTips, setCopyTips] = useState('');

//   return (
//     <div>
//       <SqlEditor
//         defaultValue={displaySql}
//         title="Sql Editor"
//         width="auto"
//         height="300px"
//         onChange={(data) => {
//           console.log('onChange', data);
//           setDisplaySql(data.value);
//         }}
//         onClickFormat={() => {
//           formatSql({
//             value: displaySql,
//             callback: (formatData) => {
//               setDisplaySql(formatData.value);
//             },
//           });
//         }}
//         onClickDelete={() => {
//           setDisplaySql('');
//         }}
//         onClickCopy={() => {
//           copyToClipboard({
//             value: displaySql,
//             callback: setCopyTips,
//           });
//         }}
//         // validatorConfig={{
//         //   maxSqlNum: 1,
//         //   // validators: READ_VALIDATORS,
//         // }}
//       />
//     </div>
//   );
// }

// export default SqlTextArea;
