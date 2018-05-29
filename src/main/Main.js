import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import Pager from '../pager/Pager';
import About from '../about/About';
import Projects from '../projects/Projects';
import Blogs from '../blogs/Blogs';
import Contact from '../contact/Contact';
import styles from './Main.css';

export default class MainPager extends PureComponent {
  constructor() {
    super();
    this.state = {
      position: 0
    };
    this.handleLeft = ()=> {
      console.log(this.state);
      this.setState({ position: this.state.position-1 });
    };
    this.handleRight = ()=>{
      this.setState({ position: this.state.position+1 });
    };
  }
  
  render(){
    console.log('we got to mainPager at', this.state.position);
    return (
      <div className={styles.main}>
        <button onClick={this.handleLeft}>Left</button>
        <button onClick={this.handleRight}>Right</button>
        <Pager
          position={this.state.position}
          master={<About/>} 
          detailOne={
            <Projects/>
          }
          detailTwo={
            <Blogs/>
          }
          detailTree={
            <Contact/>
          }
        />
      </div>
    );
  }

}