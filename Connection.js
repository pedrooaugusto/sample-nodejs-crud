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
	host			: "localhost",
	user			: "root",
	password		: "",
	database		: "entregador",
	debug 			: false,
});
module.exports = poolConnection;
