const ExcelJS = require('exceljs');
const basePath = process.cwd();

const reportDir = basePath + '/report/';
class ExcelReader {

    constructor() {
        this.reportDir = reportDir;
        this.workbook = new ExcelJS.Workbook();
    }

    async readFile() {
        this.wb = await this.workbook.xlsx.readFile(this.reportDir);
    }
}

module.exports.ExcelReader = ExcelReader
