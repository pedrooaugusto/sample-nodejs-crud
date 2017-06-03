const express = require('express');
const router = express.Router();
const Funcionario = require("../models/Funcionario");

//Listar
router.get("/", function(req, res, next){
	Funcionario.list(function(err, rows){
		if(err)
			res.send(err);
		else
			res.render('index', {funcionarios: rows});
		next();
	});
});

//Página de index e buscar
router.get("/search/:id", function (req, res, next) {
	if(req.params.id)
		Funcionario.searchById(req.params.id, function(err, rows){
			if(err)
				res.send(err);
			else
				res.render('view', {func: rows});
			next();
		});
	else
		return res.redirect("./");
});

//before create
router.get("/add", function(req, res, next) {
	Funcionario.list(function(err, rows){
		if(err)
			res.send(err);
		else
			res.render('add', {nextID: (rows.length+1)});
		next();
	});
});
//add
router.post("/create", function(req, res, next) {
	Funcionario.save(req.body, function(err, rows){
		if(err)
			res.send(err);
		else
			return res.redirect("./");
		next();
	});
});

//before update
router.get("/edit/:id", function (req, res, next) {
	if(req.params.id)
		Funcionario.searchById(req.params.id, function(err, rows){
			if(err)
				res.send(err);
			else
				res.render('edit', {func: rows[0]});
			next();
		});
	else
		return res.redirect("./");
});

//update
router.post("/update", function(req, res, next){
	Funcionario.update(req.body.funcID, req.body, function(err, rows){
		if(err)
			res.send(err);
		else
			return res.redirect("./");
		next();
	});
});

//delete
router.get("/delete/:id", function(req, res, next){
	Funcionario.delete(req.params.id, function(err, rows){
		if(err)
			res.send(err);
		else
			return res.redirect("../");
		next();
	});
});
module.exports = router;