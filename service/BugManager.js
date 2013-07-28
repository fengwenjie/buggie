// The manager to get / create / modify / delete bugs
var mysql      = require('mysql'),
	db_config  = {
	    host     : '127.0.0.1',
	    port     : '3307',
	    user     : 'root',
	    password : 'admin888',
	    database : 'buggie'
	},
    connection = {};

function getBugById(params) {
	connection = mysql.createConnection(db_config);
	connection.connect();
	connection.query('SELECT * from bugs where bid=?', params.id , function(err, rows) {
        if (err) {
            console.log(err);                
            params.error && params.error('db error: '+err.code);
        }
        else if (rows.length<1) {
        	params.error && params.error('no such item');
        	connection.end();
        }
        else {                
            params.success && params.success(rows);
            connection.end();  
        }               
    });
}
function getBugList(params) {
	connection = mysql.createConnection(db_config);
	connection.connect();
	connection.query('SELECT * from bugs', function(err, rows, fields) {
        if (err) {
            console.log(err);                
            params.error && params.error('db error: '+err.code);
        }
        else {                
            params.success && params.success(rows);
            connection.end();  
        }
    });
}

exports.getBugById = getBugById;
exports.getBugList = getBugList;

