const ExcelJS = require('exceljs');
const { parseDate, parseFloatComma, removeLastChar } = require('../../Utils/DataFormat');
const { Raw } = require('./Raw');

class TiktokRaw extends Raw {
    /* 
        date                   Thời gian	
        revenue                Doanh thu	
        revenueAss             Doanh thu Liên kết
        refund                 Hoàn tiền
        revenueSelfPromo       Doanh thu tự quảng bá
        access                 Khách truy cập
        buyer                  Người mua	
        order                  Đơn hàng
        view                   Lượt xem Sản phẩm
        prodAppro              Tiếp cận Sản phẩm	
        unitSale               Doanh số Đơn vị
        rateConver             Tỷ lệ chuyển đổi	
        neggaReview            Tỷ lệ Đánh giá Tiêu cực	
        rateBadQualityReturn   Tỷ lệ trả hàng vì lý do chất lượng	
        rateComplain           Tỷ lệ khiếu nại
    */
    constructor(
        file,
        date,
        revenue,
        revenueAss,
        refund,
        revenueSelfPromo,
        access,
        buyer,
        order,
        view,
        prodAppro,
        unitSale,
        rateConver,
        neggaReview,
        rateBadQualityReturn,
        rateComplain
    ) {
        super('Tiktok', file);

        this.date = date,
        this.revenue = revenue,
        this.revenueAss = revenueAss,
        this.refund = refund,
        this.revenueSelfPromo = revenueSelfPromo,
        this.access = access,
        this.buyer = buyer,
        this.order = order,
        this.view = view,
        this.prodAppro = prodAppro,
        this.unitSale = unitSale,
        this.rateConver = rateConver,
        this.neggaReview = neggaReview,
        this.rateBadQualityReturn = rateBadQualityReturn,
        this.rateComplain = rateComplain
    }

    static initData(cell) {
        return new TiktokRaw(
            '',
            // date                   Thời gian	
            parseDate(cell.getCell(1).value, 'mm-dd-yyyy'),
            // revenue                Doanh thu	
            parseFloat(removeLastChar(cell.getCell(2).value)) * 1000,
            // revenueAss             Doanh thu Liên kết
            parseFloat(removeLastChar(cell.getCell(3).value)),
            // refund                 Hoàn tiền
            parseFloat(removeLastChar(cell.getCell(4).value)),
            // revenueSelfPromo       Doanh thu tự quảng bá
            parseFloatComma(cell.getCell(5).value.replace('%', '')),
            // access                 Khách truy cập
            parseInt(cell.getCell(6).value),
            // buyer                  Người mua	
            parseInt(cell.getCell(7).value),
            // order                  Đơn hàng
            parseInt(cell.getCell(8).value),
            // view                   Lượt xem Sản phẩm
            parseInt(cell.getCell(9).value),
            // prodAppro              Tiếp cận Sản phẩm	
            parseInt(cell.getCell(10).value),
            // unitSale               Doanh số Đơn vị
            parseInt(cell.getCell(11).value),
            // rateConver             Tỷ lệ chuyển đổi	
            parseInt(cell.getCell(12).value),
            // neggaReview            Tỷ lệ Đánh giá Tiêu cực	
            parseInt(cell.getCell(13).value),
            // rateBadQualityReturn   Tỷ lệ trả hàng vì lý do chất lư       
            parseInt(cell.getCell(14).value),
            // rateComplain           Tỷ lệ khiếu nại
            parseInt(cell.getCell(15).value),
        )
    }

    convertToModel() {
        return super.converToModel(this.date, this.view, this.prodAppro, null, this.buyer, null);
    }
}

module.exports.TiktokRaw = TiktokRaw;