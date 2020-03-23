const connection = require('./connection.js');

const orm = {

    selectAll: (table, callback) => {

        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, res) => {
            if (err) {
                return res.status(500).end();
            }
            callback(res);
        });
    },

    insertOne: (table, column, value, callback) => {

        const queryString = "INSERT INTO ?? SET ??=?";
        connection.query(queryString, [table, column, value], (err, res) => {
            if (err) {
                return res.status(500).end();
            }
            callback(res);
        });
    },

    updateOne = (table, column1, value, column2, id) => {

        const queryString = "UPDATE ?? SET ??=? WHERE id=?";
        connection.query(queryString, [table, column1, value, column2, id], (err, res) => {
            if (err) {
                return res.status(500).end();
            }
            callback(res);
        });
    }
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.updateOne = updateOne;