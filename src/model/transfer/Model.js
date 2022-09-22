module.exports.Model = class Model {
    constructor(impression,
        clicks,
        newUser,
        totalUser,
        cost) {
        this.impression	= impression;
        this.clicks	= clicks;
        this.newUser = newUser;
        this.totalUser	= totalUser;
        this.cost = cost;
    }
}

