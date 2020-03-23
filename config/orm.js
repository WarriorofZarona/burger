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

    createOne: (table, columns, values, callback) => {

        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        connection.query(queryString, values, (err, res) => {
            if (err) {
                return res.status(500).end();
            }
            callback(res);
        });
    },

    updateOne = (table, objColVals, condition, callback) => {

        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, res) => {
            if (err) {
                return res.status(500).end();
            }
            callback(res);
        });
    }
};

printQuestionMarks = num => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    };

    return arr.toString();
};

objToSql = obj => {
    const arr = [];

    for (let key in obj) {
        let value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        };
    };

    return arr.toString();
};


module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.updateOne = updateOne;