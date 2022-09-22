const reportDir = basePath + '/data/';
const ExcelJS = require('exceljs');

module.exports.ExcelWriter = class ExcelWriter {
    constructor() {
        this.workbook = new ExcelJS.Workbook();
    }

    writeFile() {
        this.sheet = this.workbook.addWorksheet('translation');
        this.workbook.addWorksheet('data');
    }
}
