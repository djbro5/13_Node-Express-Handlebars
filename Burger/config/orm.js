var connection = require("../config/connection.js");
.
function printQuestionMarks(input) {
    var array = [];

    for (var i = 0; i < input; i++) {
        array.push("?");
    }

    return array.toString()
}

// Create a second helper function to convert key/value pairs to mySql syntax. This function accepts the object from pulled from the client-side.
function objToSql(obj) {
    var arr = [];

    for (var key in obj) {
        // set the value of respective key as variable value
        var value = obj[key];

        // if the object passed through has 
        if (Object.hasOwnProperty.call(obj, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);

        }
            // translate array of strings to a single comma-separated string
            return arr.toString();
    }
}

var orm = {
  
    //  select all
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, results) {
            if (err) {
                console.log(err);
                throw err
            }
            cb(results);
        });
    },

    // insert one
    createOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (" + cols.toString() + ") VALUES (";
        queryString += printQuestionMarks(vals.length) + ") ";
        console.log("insertOne queryString: ", queryString);

        connection.query(queryString, vals, function(err, results) {
            if (err) {
                console.log("insertOne err", err)
                throw err;
            }
            cb(results);
        })

    },

    // update one
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET ";
        queryString += objToSql(objColVals) + " WHERE " + condition;
        console.log("updateOne queryString", queryString);

        connection.query(queryString, function(err, results) {
            if (err) {
                console.log("updateOne err", err);
                throw err
            }

            cb(results);
        })
    }
}

// Export the orm object for the model (cat.js).
module.exports = orm;