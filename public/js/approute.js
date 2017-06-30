var React     = require('react');
var Link      = require('react-router-dom').Link;
var Route     = require('react-router-dom').Route;
var Home      = require('./apphome');
var Menu      = require('./appmenu');


class AppRoute extends React.Component {
 
  constructor() {
    super();
  }

  render() {

    return (
      <div> 
        <Route exact path="/" component={Home}/>        
        <Route path="/menu" component={Menu}/> 
      </div>  
    );

  }

}

module.exports = AppRoute;