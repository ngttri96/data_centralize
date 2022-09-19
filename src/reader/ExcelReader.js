const ExcelJS = require('exceljs');
const basePath = process.cwd();

const reportDir = basePath + '/report/';
class ExcelReader {

    constructor() {
        this.reportDir = reportDir;
        this.workbook = new ExcelJS.Workbook();
    }

    async setWorkbook() {
        this.wb = await this.workbook.xlsx.readFile(this.reportDir);
    }

    async readFile() {
        await this.setWorkbook();
    }
}

module.exports.ExcelReader = ExcelReader
