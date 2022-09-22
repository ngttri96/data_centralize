const { Model } = require("../transfer/Model");

module.exports.Raw = class Raw {

    constructor(dataSource){
        this.source = dataSource;
    };

    converToModel(impression,
        clicks,
        newUser,
        totalUser,
        cost){
        return new Model(impression, clicks, newUser, totalUser, cost);
    }
}