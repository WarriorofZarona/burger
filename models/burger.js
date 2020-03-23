const orm = require('../config/orm.js');

const burger = {
    selectAll: callback => {
        orm.selectAll("burgers", res => {
            callback(res);
        });
    },
    createOne: (cols, vals, callback) => {
        orm.create("burgers", cols, vals, res => {
            callback(res);
        });
    },
    updateOne: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, res => {
            cb(res);
        });
    }
};

module.exports = burger;