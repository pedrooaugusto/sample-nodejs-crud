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
	host			: "127.0.0.1",
	user			: "root",
	password		: "",
	database		: "august",
	debug 			: false,
});
module.exports = poolConnection;