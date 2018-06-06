import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import smallFace from '../../assets/smalFace.jpg';


export const Brand = ({ active, toggle })=>{
  return(
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <div className="brand-image" alt=""/>
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