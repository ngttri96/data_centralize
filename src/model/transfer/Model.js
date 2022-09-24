module.exports.Model = class Model {
    constructor(
        src,
        impression,
        clicks,
        newUser,
        totalUser,
        cost) {
        this.src = src,
        this.impression	= impression;
        this.clicks	= clicks;
        this.newUser = newUser;
        this.totalUser	= totalUser;
        this.cost = cost;
    }
}

