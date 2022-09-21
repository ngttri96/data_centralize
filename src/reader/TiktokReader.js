const ExcelJS = require('exceljs');
const { FacebookRaw } = require('../model/raw/FacebookRaw');
const { TiktokRaw } = require('../model/raw/TikTokRaw');
const { ExcelReader } = require('./ExcelReader');

class TiktokReader extends ExcelReader {

    constructor() {
        super();
        this.reportDir = this.reportDir + 'tiktok/Tiktok_sep.xlsx';
    }

    async readFile() {
        await super.readFile();
        const sheet = this.wb.getWorksheet(1);

        // skip header
        const datas = [];
        for (let rowNo = 4; rowNo <= sheet.rowCount; rowNo++) {
            const data = TiktokRaw.initData(sheet.getRow(rowNo));
            datas.push(data);
        }
        return datas;
    }
}

module.exports.TiktokReader = TiktokReader
