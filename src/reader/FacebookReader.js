const ExcelJS = require('exceljs');
const { FacebookRaw } = require('../model/raw/FacebookRaw');
const { ExcelReader } = require('./ExcelReader');

class FacebookReader extends ExcelReader {

    constructor() {
        super();
        this.reportDir = this.reportDir + 'facebook/Facebook_sep.xlsx';
    }

    async readFile() {
        await super.readFile();
        
        const sheet = this.wb.getWorksheet(1);

        // skip header
        const datas = [];
        for (let rowNo = 1; rowNo <= sheet.rowCount; rowNo++) {
            const data = FacebookRaw.initData(sheet.getRow(rowNo));
            datas.push(data);
        }
        return datas;
    }
}

module.exports.FacebookReader = FacebookReader
