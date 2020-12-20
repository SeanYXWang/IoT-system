var mysql = require("mysql");
// const client = mqtt.connect('mqtt://46.101.58.83' );

// client.on('connect', () => {  
// 	client.subscribe('seanCharger/message_up');

// })

var con = mysql.createConnection({
	host: "127.0.0.1",
	user: "aaaa",
	password: "abcdefghijkl",
	database: "aaaa",
	multipleStatements: true
});

con.connect();
console.log('Connection established'); 
// con.connect(function(err){
// 	if(err){
// 		console.log('Error connecting to Db');
// 		return;
// 	}
// 	console.log('Connection established');  
// });	