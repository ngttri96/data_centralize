const { Model } = require("../transfer/Model");

module.exports.Raw = class Raw {

    constructor(dataSource, file){
        this.source = dataSource;
        this.file = file;
    };

    converToModel(
        date,
        impression,
        clicks,
        newUser,
        totalUser,
        cost) {
            date = date || '-';
            impression = impression || '-';
            clicks = clicks || '-';
            newUser = newUser || '-';
            totalUser = totalUser || '-';
            cost = cost || '-';
        return new Model(this.source, this.file, date, impression, clicks, newUser, totalUser, cost);
    }
}