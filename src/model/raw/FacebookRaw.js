const ExcelJS = require('exceljs');
const { Model } = require('../transfer/Model');
const { Raw } = require('./Raw');

class FacebookRaw extends Raw {
    constructor(
        file,
        date,
        campName,
        spent,
        shows,
        pplSaw,
        resType,
        res,
        costPerRes,
        freq,
        dateStartReport,
        datEndReport,
    ) {
        super('Facebook', file);
        
        this.date = date;
        this.campName = campName;
        this.spent = spent;
        this.shows = shows;
        this.pplSaw = pplSaw;
        this.resType = resType;
        this.res = res;
        this.costPerRes = costPerRes;
        this.freq = freq;
        this.dateStartReport = dateStartReport;
        this.datEndReport = datEndReport;
    }

    static initData(cell){
        return new FacebookRaw(
            '',
            //date                 Ngày	
            new Date(cell.getCell(1).value),
            //campName             Tên chiến dịch	
            cell.getCell(2).value,
            //spent                Số tiền đã chi tiêu (VND)	
            parseFloat(cell.getCell(3).value),
            //shows                Lượt hiển thị
            parseInt(cell.getCell(4).value),
            //pplSaw               Người tiếp cận	
            parseInt(cell.getCell(5).value),
            //resType              Loại kết quả
            cell.getCell(6).value,
            //res                  Kết quả	
            parseInt(cell.getCell(7).value),
            //costPerRes           Chi phí trên mỗi kết quả  
            parseFloat(cell.getCell(8).value),
            //freq                 Tần suất
            parseFloat(cell.getCell(9).value),
            //dateStartReport      Bắt đầu báo cáo
            new Date(cell.getCell(10).value),
            //datEndReport         Kết thúc báo cáo
            new Date(cell.getCell(11).value),
        )
    }

    convertToModel() {
        return super.converToModel(this.date, this.shows, this.pplSaw, null, null, this.spent);
    }
}

module.exports.FacebookRaw = FacebookRaw;