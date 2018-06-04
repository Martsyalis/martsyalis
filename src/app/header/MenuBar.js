import React, { PureComponent } from 'react';
import NavMenu, { Brand } from './menuBarComponents';
import { withRouter } from 'react-router-dom';

import './MenuBar.css';

class MenuBar extends PureComponent{
  
  state = { open: false }

  state = {
    pagesArray:['/', '/projects', '/blogs', '/contact']
  };

  position = ()=> {
    return this.state.pagesArray.indexOf(this.props.history.location.pathname);
  }

  toggle = (event) =>this.setState(state => ({ open: !state.open }));
  
  close = () => this.setState({ open: false });

  render(){
    console.log(this.position());

    return(
      <div>
        <nav className="navbar">
          <Brand toggle={this.toggle} close={this.close} active={this.state.open}/>
          {this.state.open
            ?<NavMenu location={this.props.location} isBurgerMenu={true} active ={this.state.open} close={this.close}/>
            :<NavMenu/>
          }
        </nav>
        <div className='navbar-pager'
          style={{ transform: `translate( ${this.position() * 7}vw, 0vw )` }}>
        </div>
      </div>
    );
  }
}
export default withRouter(MenuBar);
