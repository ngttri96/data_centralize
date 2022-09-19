class DataFacebook {

    /*
    @param
        date                 Ngày	
        campName             Tên chiến dịch	
        spent                Số tiền đã chi tiêu (VND)	
        shows                Lượt hiển thị
        pplSaw               Người tiếp cận	
        resType              Loại kết quả
        res                  Kết quả	
        costPerRes           Chi phí trên mỗi kết quả  
        freq                 Tần suất
        dateStartReport      Bắt đầu báo cáo
        datEndReport         Kết thúc báo cáo
    */
    constructor(
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
}

module.exports.DataFacebook = DataFacebook;