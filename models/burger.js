const orm = require('../config/orm.js');

const cat = {
    selectAll: function (callback) {
        orm.selectAll("cats", "*" function (res) {
            callback(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (col, vals, callback) {
        orm.create("cats", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


module.exports = burger;