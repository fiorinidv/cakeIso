var React     = require('react');
var ReactDOM  = require('react-dom');
var AppRoute  = require('./approute');
var Router    = require('react-router-dom').BrowserRouter;

ReactDOM.render(  
    <Router>
      <AppRoute />
    </Router>
  ,
  document.getElementById('container')
);