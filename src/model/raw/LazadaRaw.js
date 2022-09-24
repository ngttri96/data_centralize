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
        super('Lazada');
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
        // date                             Ngày	
        // revenue                          Doanh thu	
        // access                           Khách truy cập	
        // buys                             Lượt mua	
        // order                            Đơn hàng	
        // view                             Lượt xem	
        // sold                             Sản phẩm bán được	
        // rateConversion                   Tỷ lệ chuyển đổi	
        // revernuePerBuy                   Doanh thu trên mỗi lượt mua	
        // accessValue                      Giá trị lượt truy cập	
        // cusAddToCart                     Khách thêm vào giỏ hàng	
        // addToCart                        Số lượng thêm vào giỏ hàng	
        // favList                          Danh sách yêu thích	
        // cusFav                           Khách hàng yêu thích	
        // avgOrder                         Giá trị đơn hàng trung bình	
        // avgArticle                       Số sản phẩm trung bình 	
        // cancelNo                         Số lượng hủy	
        // refund                           Khoản hoàn trả
        )
    }

    convertToModel() {
        return super.converToModel(this.shows, this.pplSaw, null, null, this.spent);
    }
}

module.exports.LazadaRaw = LazadaRaw;