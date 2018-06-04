import React, { PureComponent } from 'react';
import NavMenu, { Brand } from './menuBarComponents';
import { withRouter } from 'react-router-dom';

import './MenuBar.css';

class MenuBar extends PureComponent{
  
  state = { open: false }

  toggle = (event) =>this.setState(state => ({ open: !state.open }));
  
  close = () => this.setState({ open: false });

  render(){
    return(
      <nav className="navbar" aria-label="main navigation">
        <Brand toggle={this.toggle} close={this.close} active={this.state.open}/>
        {this.state.open
          ?<NavMenu location={this.props.location} isBurgerMenu={true} active ={this.state.open} close={this.close}/>
          :<NavMenu/>
        }
      </nav>
    );
  }
}
export default withRouter(MenuBar);
