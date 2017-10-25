var connection = require("../config/connection.js");

var orm = {
  // TODO - delete this one
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      return result;
    });
  }

  selectAll: function(tableInput) {
  	var queryString = "SELECT * FROM ??";
  	connection.query(queryString, [tableInput], function(err, result) {
      return result;
    });
  },

  insertOne: function() {
  	var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  	connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      return result;
    });
  },

  // TODO - delete this one
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
        queryString += " (" + cols.toString();
        queryString += ") " + "VALUES (" + printQuestionMarks(vals.length);
        queryString += ") ";
    console.log(queryString);
    
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE "  + table;
        queryString += " SET "   + objToSql(objColVals);
        queryString += " WHERE " + condition;
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;