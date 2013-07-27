// The manager to get / create / modify / delete bugs
var mysql      = require('mysql'),
    connection = mysql.createConnection({
                  host     : '127.0.0.1',
                  port     : '3307',
                  user     : 'root',
                  password : 'admin888',
                  database : 'buggie'
                });

function getBugList(sucCallback, errCallback) {
	connection.connect();
	connection.query('SELECT * from bugss', function(err, rows, fields) {
        if (err) {
            console.log(err);                
            errCallback(err);
        }
        else {                
            sucCallback(rows);
        }
        connection.end();         
    });
}

exports.getBugList = getBugList;

