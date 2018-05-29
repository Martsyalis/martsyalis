import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Pager from '../pager/Pager';
import About from '../about/About';
import Projects from '../projects/Projects';
import Blogs from '../blogs/Blogs';
import Contact from '../contact/Contact';
import styles from './Main.css';

class MainPager extends PureComponent {
  constructor() {
    super();
    this.state = {
      pagesArray:['/about', '/projects', '/blogs', '/contact']
    };
    this.position = ()=> this.state.pagesArray.indexOf(this.props.history.location.pathname);

    this.handleLeft = ()=>{
      this.setState(
        this.props.history.push(`${this.state.pagesArray[this.position()-1]}`)
      );
    };
    this.handleRight = ()=>{
      this.setState(
        this.props.history.push(`${this.state.pagesArray[this.position()+1]}`)
      );
    };
  }
  
  render(){
    
    console.log('possition in main is',this.position());

    return (
      <div className={styles.main}>
        {this.position()>0 && 
          <button onClick={this.handleLeft}>Left</button>
        }
        {this.position()<3 && 
          <button onClick={this.handleRight}>Right</button>
        }
        <Pager 
          position={this.position()}
          master={<About/>} 
          detailOne={
            <Route path="/projects" component={Projects}/>
          }
          detailTwo={
            <Route path="/blogs" component={Blogs}/>

          }
          detailTree={
            <Route path="/contact" component={Contact}/>
          }
        />
      </div>
    );
  }
}

export default withRouter(MainPager);