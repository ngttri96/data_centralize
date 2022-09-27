const ExcelJS = require('exceljs');
const { Model } = require('../transfer/Model');
const { Raw } = require('./Raw');

/*
    date                             Ngày	
    revenue                          Doanh thu	
    access                           Khách truy cập	
    buys                             Lượt mua	
    order                            Đơn hàng	
    view                             Lượt xem	
    sold                             Sản phẩm bán được	
    rateConversion                   Tỷ lệ chuyển đổi	
    revernuePerBuy                   Doanh thu trên mỗi lượt mua	
    accessValue                      Giá trị lượt truy cập	
    cusAddToCart                     Khách thêm vào giỏ hàng	
    addToCart                        Số lượng thêm vào giỏ hàng	
    favList                          Danh sách yêu thích	
    cusFav                           Khách hàng yêu thích	
    avgOrder                         Giá trị đơn hàng trung bình	
    avgArticle                       Số sản phẩm trung bình 	
    cancelNo                         Số lượng hủy	
    refund                           Khoản hoàn trả
*/

class LazadaRaw extends Raw {
    constructor(
        file,
        date,
        revenue,
        access,
        buys,
        order,
        view,
        sold,
        rateConversion,
        revernuePerBuy,
        accessValue,
        cusAddToCart,
        addToCart,
        favList,
        cusFav,
        avgOrder,
        avgArticle,
        cancelNo,
        refund,
    ) {
        super('Lazada', file);
        this.date = date
        this.revenue = revenue
        this.access = access
        this.buys = buys
        this.order = order
        this.view = view
        this.sold = sold
        this.rateConversion = rateConversion
        this.revernuePerBuy = revernuePerBuy
        this.accessValue = accessValue
        this.cusAddToCart = cusAddToCart
        this.addToCart = addToCart
        this.favList = favList
        this.cusFav = cusFav
        this.avgOrder = avgOrder
        this.avgArticle = avgArticle
        this.cancelNo = cancelNo
        this.refund  = refund 
    }

    static initData(cell){
        return new LazadaRaw(
        '',
        // date                             Ngày	
        new Date(cell[0]),
        // revenue                          Doanh thu	
        parseFloat(cell[1].replace(' ', '')),
        // access                           Khách truy cập	
        parseInt(cell[2]),
        // buys                             Lượt mua	
        parseInt(cell[3]),
        // order                            Đơn hàng	
        parseInt(cell[4]),
        // view                             Lượt xem	
        parseInt(cell[5]),
        // sold                             Sản phẩm bán 
        parseInt(cell[6]),
        // rateConversion                   Tỷ lệ chuyển đổi	
        parseFloat(cell[7].replace('%', '')),
        // revernuePerBuy                   Doanh thu trên mỗi lượt mua	
        parseFloat(cell[8].replace(' ', '')),
        // accessValue                      Giá trị lượt truy cập	
        parseFloat(cell[9].replace(' ', '')),
        // cusAddToCart                     Khách thêm vào giỏ hàng	
        parseInt(cell[10]),
        // addToCart                        Số lượng thêm vào giỏ hàng	
        parseInt(cell[11]),
        // favList                          Danh sách yêu thích	
        parseInt(cell[12]),
        // cusFav                           Khách hàng yêu thích	
        parseInt(cell[13]),
        // avgOrder                         Giá trị đơn hàng trung bình	
        parseFloat(cell[14].replace(' ', '')),
        // avgArticle                       Số sản phẩm trung bình 	
        parseFloat(cell[15].replace(' ', '')),
        // cancelNo                         Số lượng hủy	
        parseInt(cell[16]),
        // refund                           Khoản hoàn trả
        parseFloat(cell[17].replace(' ', '')),
        )
    }

    convertToModel() {
        return super.converToModel(this.date, this.view, this.addToCart, null, this.buys, null);
    }
}

module.exports.LazadaRaw = LazadaRaw;