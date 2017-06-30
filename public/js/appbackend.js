var React     = require('react');
var ReactDOM  = require('react-dom');
var AppRoute  = require('./approute');
var Router    = require('react-router-dom').StaticRouter;

class App extends React.Component {
 
  constructor() {
    super();
  }

  render() {
    var context = {};
    return (
    <Router location={this.props.url} context={context}>
      <AppRoute />
    </Router> 
    );

  }

}

module.exports = App;