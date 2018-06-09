import React, { PureComponent } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Main from '../main/Main';
import Home from '../home/Home';

class Routes extends PureComponent{  
  render(){
    console.log('Routes are rendered');
    return(
      <Switch>
        <Route exact path="/" render={() =>{
          return(<Redirect to="/home" />);
        }} />
        <Route path='/*' component={Main} />
        {/* <Redirect to="/" /> */}
      </Switch>
    );
  }
}

export default withRouter(Routes);
