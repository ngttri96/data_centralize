const { ExcelReader } = require('./ExcelReader');
var XLSX = require("xlsx");
const { LazadaRaw } = require('../model/raw/LazadaRaw');

class LazadaReader extends ExcelReader {

    constructor() {
        super();
        this.reportDir = this.reportDir + 'lazada/Lazada_sep.xls';
    }

    async readFile() {
        this.wb = XLSX.readFile(this.reportDir);
        const sheetNames = this.wb.SheetNames;
        const sheet1 = this.wb.Sheets[sheetNames[0]];
        const sheetIndices = Object.keys(sheet1);
        let cellIds = [];
        let row = [];
        for (let i = 1; i < sheetIndices.length; i++) {
            let cellId = sheetIndices[i];
            if(cellId.includes('A')){
                if(row.length) {
                    cellIds.push(row);
                }
                row = [];
                row.push(cellId);
            } else {
                row.push(cellId);
            }
            if(i === sheetIndices.length - 1) {
                cellIds.push(row);
            }
        }
        const datas = [];
        // start at row 9
        for (let rowNo = 6; rowNo < cellIds.length; rowNo++) {
            const cols = cellIds[rowNo];
            const rowData = cols.map(el => sheet1[el].v);
            const data = LazadaRaw.initData(rowData);
            datas.push(data);
        }
        return datas;

        // console.log(sheet1)
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
