import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from '../main/Main';
 
class Routes extends PureComponent{  
  render(){
    return(
      <Switch>
        <Route path='/' render={Main}/>
      </Switch>
    );
  }
}

export default withRouter(Routes);
