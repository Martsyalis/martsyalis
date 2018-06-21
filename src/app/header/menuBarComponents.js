import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';


export const Brand = ({ active, toggle })=>{
  return(
    <div className="navbar-brand">
      <a role="button" 
        className={`navbar-burger ${active && 'is-active'}`}
        onClick={toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
};

class NavMenu extends PureComponent {

  componentDidUpdate(prevProps){
    if(this.props.isBurgerMenu !== prevProps.isBurgerMenu && this.props.isBurgerMenu === true){
      console.log('adding event listener');
      document.addEventListener('click', this.props.close);
    }
    if(this.props.isBurgerMenu !== prevProps.isBurgerMenu && this.props.isBurgerMenu === false){
      console.log('removing event listener');
      document.removeEventListener('click', this.props.close);
    }
  }
    
  componentWillUnmount(){
    this.props.isBurgerMenu && document.removeEventListener('click', this.props.close);
  }
  
  render(){
    const { isBurgerMenu } = this.props;
    return(
      <div id="burgerMenu" 
        className={`navbar-menu ${isBurgerMenu && 'is-active'}`}
        style={{ opacity: 0.9 }}
      >
        <div className="navbar-end mobile-navbar">   
          <MenuLink to="/home" text="About Me" />
          <MenuLink to="/home/projects" text="Projects" />
          <MenuLink to="/home/blogs" text="Blogs" />
          <MenuLink to="/home/contact" text="Get in Touch!" /> 
        </div>
      </div>
    );
  }
}

export default withRouter(NavMenu);

const MenuLink = ({ to, text }) => {
  return(
    <NavLink exact to={to} 
      className="navbar-item" 
      // activeClassName="is-active" 
    >
      {text}
    </NavLink> 
  );
};