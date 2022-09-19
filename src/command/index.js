const {ExcelReader} = require('../reader/ExcelReader');

const reader = new ExcelReader();
console.log(reader.readFile());