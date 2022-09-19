const ExcelJS = require('exceljs');
const { DataFacebook } = require('../model/raw/FacebookRaw');
const { ExcelReader } = require('./ExcelReader');

class LazadaReader extends ExcelReader {

    constructor() {
        super();
        this.reportDir = this.reportDir + 'lazada/Lazada_sep.xls';
    }

    async readFile() {
        await super.setWorkbook();
        const wb = await this.workbook.xlsx.readFile(this.reportDir);
        const sheet = wb.getWorksheet(1);

        // skip header
        const fbDatas = [];
        for (let rowNo = 1; rowNo <= sheet.rowCount; rowNo++) {
            const fbData = DataFacebook.initData(sheet.getRow(rowNo));
            fbDatas.push(fbData);
        }
        console.log(fbDatas.length);
    }
}

module.exports.LazadaReader = LazadaReader;
