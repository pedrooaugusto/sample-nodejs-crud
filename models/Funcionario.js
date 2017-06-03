const connection = require("../Connection");
const Entregador = {
	list: function (callback) {
		return connection.query("select * from entregador order by ID_ent", callback);
	},
	save: function(Funcionario, callback){
		let values = [Funcionario.funcId,
			Funcionario.funcName, Funcionario.funcVechile, 
			Funcionario.funcCPF, Funcionario.funcPay,
			Funcionario.funcBirth, "no-photo"];
		return connection.query("insert into entregador values(?, ?, ?, ?, ?, ?, ?)", values, callback);
	},
	searchById: function(id, callback)
	{
		return connection.query("select * from entregador where ID_ent = ?", [id], callback);
	},
	update: function(id, Funcionario, callback){
		let values = [
			Funcionario.funcName, Funcionario.funcVechile, 
			Funcionario.funcCPF, Funcionario.funcPay, Funcionario.funcBirth, id];
		let query = "update entregador set Nome_ent = ?, Veiculo_ent = ?,"+
			" CPF_ent = ?, Salario_ent = ?, DataNasc_ent = ? where ID_ent = ?";
		return connection.query(query, values, callback);
	},
	delete: function(id, callback){
		return connection.query("delete from Entregador where ID_ent = ?", [id], callback);
	}
};
module.exports = Entregador;
