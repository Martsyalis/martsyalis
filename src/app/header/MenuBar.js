import React, { PureComponent } from 'react';
import NavMenu, { Brand } from './menuBarComponents';
import { withRouter } from 'react-router-dom';

import './MenuBar.css';

class MenuBar extends PureComponent{
  

  state = {
    pagesArray:['/home', '/home/projects', '/home/blogs', '/home/contact'],
    open: false,
  };

  position = ()=> {
    return this.state.pagesArray.indexOf(this.props.history.location.pathname);
  }


  toggle = (event) =>this.setState(state => ({ open: !state.open }));
  
  close = () => this.setState({ open: false });

  render(){
    console.log('in header', this.props.showNav);
    const atHome = this.props.history.location.pathname==='/home';
    return(
      <div id={`${this.props.showNav || !atHome? 'show-nav':'hide-nav'}`}>
        <nav className="navbar">
          <Brand toggle={this.toggle} close={this.close} active={this.state.open}/>
          {this.state.open
            ?<NavMenu location={this.props.location} isBurgerMenu={true} active ={this.state.open} close={this.close}/>
            :<NavMenu/>
          }
        </nav>
        {this.position() !== -1 &&
        <div className='navbar-pager'
          style={{ transform: `translate( ${this.position() * 8}rem, 0rem )` }}>
        </div>
        }
      </div>
    );
  }
}
export default withRouter(MenuBar);
