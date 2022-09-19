const ExcelJS = require('exceljs');
const { ShopeeRaw } = require('../model/raw/ShopeeRaw');
const { ExcelReader } = require('./ExcelReader');

class ShopeeReader extends ExcelReader {

    constructor() {
        super();
        this.reportDir = this.reportDir + 'shopee/Shopee_sep.xlsx';
    }

    async readFile() {
        await super.setWorkbook();
        const wb = await this.workbook.xlsx.readFile(this.reportDir);
        const sheet = wb.getWorksheet(1);

        // skip header
        const datas = [];
        for (let rowNo = 5; rowNo <= sheet.rowCount; rowNo++) {
            const data = ShopeeRaw.initData(sheet.getRow(rowNo));
            datas.push(data);
        }
        console.log(datas)
    }
}

module.exports.ShopeeReader = ShopeeReader;
