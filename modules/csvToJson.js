//const fs = require('fs');
/*

*/
export const csvToJson = (input, delimiter) => {

 const csvToObjs = source => {
  let records = [];
  let colNames;
  let csv = source.split('\n');
  let delim = '';

  if (delimiter === 'tab') {
   delim = '\t';
  }
  else if (delimiter === 'space') {
   delim = ' ';
  } else {
   delim = ',';
  }
  colNames = csv.shift().trim().split(delim);
  csv.forEach(row => {
   let newRecord = {};
   records.push(setData(colNames, row.split(delim), newRecord));
  });
  console.log('records: ')
  console.log(records)
  return records;
 }

 const setData = (names, data, newRec) => {
  let i = 0;
  data.forEach(d => {
   newRec[names[i]] = d;
   i++;
  });
  return newRec;
 }
 return csvToObjs(input, delimiter)
}



{ csvToJson }