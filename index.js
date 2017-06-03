const express = require('express');
const app = express();
const routes = require('./routes/index');
const bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));
app.use('/system', routes);
app.get('/', function (req, res, next) {
	req.sendFile("index.html");
});
app.listen(app.get('port'), function() {
	console.log('Rodando na porta ', app.get('port'));
});