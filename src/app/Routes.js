import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
 
class Routes extends PureComponent{  
  render(){
    
    return(
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Redirect to="about" />
  </Switch>
    );
  }
}
