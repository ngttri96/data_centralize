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
            date = date !== null || date != undefined ? date : '-';
            impression = impression !== null || impression != undefined ? impression : '-';
            clicks = clicks !== null || clicks != undefined ? clicks : '-';
            newUser = newUser !== null || newUser != undefined ? newUser : '-';
            totalUser = totalUser !== null || totalUser != undefined ? totalUser : '-';
            cost = cost !== null || cost != undefined ? cost : '-';
        return new Model(this.source, this.file, date, impression, clicks, newUser, totalUser, cost);
    }
}