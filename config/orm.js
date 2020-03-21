const connection = require('connection');

selectAll = () => {

    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM burgers", (err, res) => {
            if (err) {
                return res.status(500).end();
            }
            return err ? reject(err) : resolve(res);
        });
    });
};

insertOne = (query) => {

    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO burgers SET burgers=?", [query], (err, res) => {
            if (err) {
                return res.status(500).end();
            }
            return err ? reject(err) : resolve(res);
        });
    });

};

updateOne = (query, id) => {

    return new Promise((resolve, reject) => {
        connection.query("UPDATE burger SET burgers=? WHERE id=?", [query, id], (err, res) => {
            if (err) {
                return res.status(500).end();
            }
            return err ? reject(err) : resolve(res);
        });
    });

};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.updateOne = updateOne;