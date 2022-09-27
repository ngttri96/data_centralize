module.exports.Model = class Model {
    constructor(
        src,
        file,
        date,
        impression,
        clicks,
        newUser,
        totalUser,
        cost) {
        this.src = src,
        this.filename = file,
        this.date = date,
        this.impression	= impression;
        this.clicks	= clicks;
        this.newUser = newUser;
        this.totalUser	= totalUser;
        this.cost = cost;
    }
}

