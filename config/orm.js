// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {

    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";

        // returns all burgers, devoured or not devoured
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (burger_name, cb) {
        var queryString = "INSERT INTO burgers SET ?;";

        // A new burger is automatically not devoured
        // so name of the burger is the only user entry
        connection.query(queryString, {
            "burger_name": burger_name,
            "devoured": false
        }, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET ? WHERE ?;";

        // Changing "devoured" key from False to True is the only required update
        connection.query(queryString, [{
            "devoured": true,
        }, {
            "id": id
        }], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }

};

// Export the orm object for the model
module.exports = orm;