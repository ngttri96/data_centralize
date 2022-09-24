const basePath = process.cwd();
const reportDir = basePath + '/data/';
const ExcelJS = require('exceljs');

module.exports.ExcelWriter = class ExcelWriter {
    constructor() {
        this.workbook = new ExcelJS.Workbook();
    }

    writeFile(data) {
        this.sheet = this.workbook.addWorksheet('data');
        console.log( data);
        const modelProps = Object.keys(data[0]) ;
        const rowHeader = 1;
        for (let colNo = 0; colNo < modelProps.length; colNo++) {
            const propName = modelProps[colNo];
            this.sheet.getCell(rowHeader, colNo+1).value = propName;
        }

        for (let rowNo = 2; rowNo < data.length; rowNo++) {
            for (let colNo = 0; colNo < modelProps.length; colNo++) {
                const propName = modelProps[colNo];
                this.sheet.getCell(rowNo, colNo+1).value = data[rowNo][propName];
            }
        }
        const fileName = reportDir + 'data.xlsx';
        this.workbook.xlsx.writeFile(fileName)
        .then(() => {
            console.log('file created: ' + fileName);
        })
        .catch(err => {
            console.log(err.message);
        });
    }
}
