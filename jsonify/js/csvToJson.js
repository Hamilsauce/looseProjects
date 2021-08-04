// log last updated: 12.26.19 - refactored some for each loops into a map and reduce

//* mapDelimiter: attempts to map parameter string input for delimiter to a character;
const mapDelimiter = del => {
  // const del = delimiter.toLowerCase();
  let delimOut;

  if (del == '\t') {
    delimOut = '\t';
  } else if (del == ' ') {
    delimOut = '\s';
  } else if (del == ',') {
    delimOut = ',';
  } else {
    delimOut == del;
  }
  return delimOut;
}

//* convertToObjects: does all the record-by-record row-to-obj work; output: array of records as objects
const convertToObjects = (splitNames, dataBody, delim) => {


  let recordsAsObjects = dataBody
    .map(row => {
      let i = 0
      const splitRow = row.split(delim)
      console.log(splitRow);
      console.log(delim);



      const recordObj = splitRow
        .reduce((record, recordFields) => {
          console.log('record', record);
          console.log('recordfields', recordFields);

          record[splitNames[i]] = recordFields;
          ++i;
          return record;
        }, {});
      return recordObj;
    });
  return recordsAsObjects;
}

//* csvToJson: the module, provides interface/API layer for external use
export const csvToJson = (input, delimiter) => {
  const csvToObjs = source => { //organizing function, maps API inputs with various function params
    let err = '';
    // const mappedDelim = mapDelimiter(delimiter);

    // if (mappedDelim === -1) {
    //   err = 'Error: invalid delimiter provided.';
    //   console.error(err);
    //   return err;
    // } else {
      let dataBody = source.split('\n');
      const colNames = dataBody.shift();

      let splitNames = colNames.split('\t')
    console.log(splitNames);
      return convertToObjects(splitNames, dataBody, delimiter);
    // }
  }
  return csvToObjs(input);
}

{
  csvToJson
}


console.log();