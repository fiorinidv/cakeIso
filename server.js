require('babel-core/register')({
    presets: ["react", "es2015"]
});

var React           = require('react');
var ReactDOMServer  = require('react-dom/server');
var App             = React.createFactory(require('./public/js/appbackend'));
 
var express     = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  var AppHtml         = ReactDOMServer.renderToString(App({url:'/'})); 
  res.render("index", {result: AppHtml});
});

app.get('/menu', function(req, res) {
  var AppHtml         = ReactDOMServer.renderToString(App({url:'/menu'}));   
  res.render("index", {result: AppHtml});
});




app.listen(80, function () {
  console.log("Server listening on port 80");
});