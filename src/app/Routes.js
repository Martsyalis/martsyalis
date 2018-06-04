import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from '../main/Main';
import Home from '../home/Home';

class Routes extends PureComponent{  
  render(){
    return(
      <Switch>
        <Route path='/splash' render={()=><Home />} />
        <Route path='/' render={Main} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
