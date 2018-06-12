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

  componentDidMount(){
    this.props.isBurgerMenu && document.addEventListener('click', this.props.close);
  }
    
  componentWillUnmount(){
    this.props.isBurgerMenu && document.removeEventListener('click', this.props.close);
  }
  
  render(){
    const { active, onClick, isBurgerMenu } = this.props;
    return(
      <div id="burgerMenu" 
        className={`navbar-menu ${active && 'is-active'}`}
        style={{ opacity: 0.9 }}
        onClick={()=> isBurgerMenu? onClick : null}
      >
        <div className="navbar-end">   
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