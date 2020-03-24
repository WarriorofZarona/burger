const orm = require('../config/orm.js');

const burger = {
    selectAll: callback => {
        orm.selectAll("burgers", res => {
            callback(res);
        });
    },
    createOne: (cols, vals, callback) => {
        orm.createOne("burgers", cols, vals, res => {
            callback(res);
        });
    },
    updateOne: (objColVals, condition, callback) => {
        orm.updateOne("burgers", objColVals, condition, res => {
            callback(res);
        });
    },
    delete: function (condition, callback) {
        orm.delete("burgers", condition, res => {
            callback(res);
        });
    }
};

module.exports = burger;