const ExcelJS = require('exceljs');
const {parseDate, parseFloatComma, parseDuration} = require('../../Utils/DataFormat');
const { Raw } = require('./Raw');

class ShopeeRaw extends Raw {
    /*
        date                Ngày	
        view                Lượt xem	
        avgView             Số lượt xem trung bình	
        avgViewDuration     Thời gian xem trung bình	
        perClose            Tỉ lệ thoát trang	
        access              Lượt truy cập	
        newAccess           Số khách truy cập mới	
        curAccess           Số khách truy cập hiện tại	
        newFollower         Người theo dõi mới
    */
    constructor(
        file,
        date,
        view,
        avgView,
        avgViewDuration,
        perClose,
        access,
        newAccess,
        curAccess,
        newFollower,
    ) {
        super('Shopee', file);
        
        this.date = date;
        this.view = view;
        this.avgView = avgView;
        this.avgViewDuration = avgViewDuration;
        this.perClose = perClose;
        this.access = access;
        this.newAccess = newAccess;
        this.curAccess = curAccess;
        this.newFollower = newFollower;
    }

    static initData(cell){
        return new ShopeeRaw(
            '',
            // date                 Ngày	
            parseDate(cell.getCell(1).value, 'dd-mm-yyyy'),
            // view                Lượt xem	
            cell.getCell(2).value,
            // avgView             Số lượt xem trung bình	
            parseFloatComma(cell.getCell(3).value),
            // avgViewDuration     Thời gian xem trung bình	    in seconds
            parseDuration(cell.getCell(4).value),
            // perClose            Tỉ lệ thoát trang	
            parseFloatComma(cell.getCell(5).value.replace('%', '')),
            // access              Lượt truy cập	
            parseInt(cell.getCell(6).value),
            // newAccess           Số khách truy cập mới	
            parseInt(cell.getCell(7).value),
            // curAccess           Số khách truy cập hiện tại	
            parseInt(cell.getCell(8).value),
            // newFollower         Người theo dõi mới
            parseInt(cell.getCell(9).value),
        )
    }

    convertToModel() {
        return super.converToModel(this.date, this.view, this.access, this.newAccess, this.curAccess, null);
    }
}

module.exports.ShopeeRaw = ShopeeRaw;