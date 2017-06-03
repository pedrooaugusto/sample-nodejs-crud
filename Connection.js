/*
	Usando o module exports eu estou basicamente
	dizendo o que deve ser visto, ou seja, o que
	esta detro dele é publico o resto é privado
	Isso só funciona em modo json
*/
let mysql = require("mysql");
let poolConnection = mysql.createPool(
{
	connectionLimit : 100,
	host			: "us-cdbr-iron-east-03.cleardb.net",
	user			: "b5581a735da0ab",
	password		: "307efb8b",
	database		: "heroku_63b1b1f4abf2dc2",
	debug 			: false,
});
module.exports = poolConnection;