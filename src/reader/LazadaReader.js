const { ExcelReader } = require('./ExcelReader');
var XLSX = require("xlsx");

class LazadaReader extends ExcelReader {

    constructor() {
        super();
        this.reportDir = this.reportDir + 'lazada/Lazada_sep.xls';
    }

    async readFile() {
        this.wb = XLSX.readFile(this.reportDir);
        const sheetNames = this.wb.SheetNames;
        sheet1 = this.wb.Sheets[sheetNames[0]];
        // console.log(this.wb.SheetNames);

        // const sheet = this.wb.getWorksheet(1);

        // // skip header
        // const datas = [];
        // for (let rowNo = 1; rowNo <= sheet.rowCount; rowNo++) {
        //     const data = DataFacebook.initData(sheet.getRow(rowNo));
        //     datas.push(data);
        // }
        // return datas;
    }
}

module.exports.LazadaReader = LazadaReader;
