import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';



export const Brand = ({ active, toggle })=>{
  return(
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </a>
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
    const { active, onClick, isBurgerMenu, location } = this.props;
    return(
      <div id="burgerMenu" 
        className={`navbar-menu ${active && 'is-active'}`}
        style={{ opacity: 0.9 }}
        onClick={()=> isBurgerMenu? onClick : null}
      >
        <div className="navbar-end">   
          <MenuLink location={location} to="/" text="Home" />
          <MenuLink to="/projects" text="Projects" />
          <MenuLink to="/blogs" text="Blogs" />
          <MenuLink to="/contact" text="Get in Touch!" /> 
        </div>
      </div>
    );
  }
}

export default withRouter(NavMenu);

const MenuLink = ({ children, to, text, location }) => {
  return(
    <NavLink exact to={to} 
      className="navbar-item" 
      // activeClassName="is-active" 
    >
      {text}
    </NavLink> 
  );
};

const ProjectsNav = ()=> {
  return(
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link" href="/documentation/overview/start/">
        Projects
      </a>
      <div className="navbar-dropdown is-boxed">
        <a className="navbar-item" href="/documentation/overview/start/">
        Overview
        </a>
        <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
        Modifiers
        </a>
        <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
        Columns
        </a>
        <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
        Layout
        </a>
        <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
        Form
        </a>
        <hr className="navbar-divider"/>
        <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
        Elements
        </a>
        <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
        Components
        </a>
      </div>
    </div>
  );
};