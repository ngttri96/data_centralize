const ExcelJS = require('exceljs');
const basePath = process.cwd();
const { DataFacebook } = require('../model/DataFacebook')
const reportDir = basePath + '/report/facebook/Facebook_sep.xlsx';
class ExcelReader {

    constructor() {
        this.workbook = new ExcelJS.Workbook()
    }

    async readFile() {
        const options = {
            map(value, index) {
                switch (index) {
                    case 0:
                        // column 1 is string
                        return new Date(value);
                    case 1:
                        // column 2 is a string
                        return value;
                    case 2:
                        // column 3 is number
                        return parseFloat(value);
                    default:
                        // the rest are string
                        return value;
                }
            },
            // // https://c2fo.io/fast-csv/docs/parsing/options
            // parserOptions: {
            //   delimiter: '\t',
            //   quote: false,
            // },
        };

        const wb = await this.workbook.xlsx.readFile(reportDir, options);
        const sheet = wb.getWorksheet('Raw Data Report');
        const headers = sheet.getRow(1);
        const totalCols = headers.actualCellCount;

        //skip header
        const fbDatas = [];
        for (let rowNo = 1; rowNo <= sheet.rowCount; rowNo++) {
            const fbData = new DataFacebook();
            for (let colNo = 1; colNo < totalCols; colNo++) {
                const value = sheet.getCell(rowNo, colNo).value;
                switch (colNo) {
                    case 1:
                        fbData.date = new Date(value);
                    case 2:
                        fbData.campName = value;
                    case 3:
                        fbData.spent = parseFloat(value);
                    case 4:
                        fbData.shows = parseInt(value);
                    case 5:
                        fbData.pplSaw = parseInt(value);
                    case 6:
                        fbData.resType = value;
                    case 7:
                        fbData.res = parseInt(value);
                    case 8:
                        fbData.costPerRes = parseFloat(value);
                    case 9:
                        fbData.freq = parseFloat(value);
                    case 10:
                        fbData.dateStartReport = new Date(value);
                    case 11:
                        fbData.datEndReport = new Date(value);
                }
            }
            fbDatas.push(fbData);
        }
        console.log(fbDatas.length);
    }
}

module.exports.ExcelReader = ExcelReader
