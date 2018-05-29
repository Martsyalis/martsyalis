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
      position: 0,
      pagesArray:['about', 'projects', 'blogs', 'contact']
    };
    this.handleLeft = ()=>{
      this.setState(
        { position: this.state.position-1 },
        this.props.history.push(`/${this.state.pagesArray[this.state.position-1]}`)
      );
    };
    this.handleRight = ()=>{
      this.setState(
        { position: this.state.position+1 },
        this.props.history.push(`/${this.state.pagesArray[this.state.position+1]}`)
      );
    };
  }
  
  render(){
    console.log('possition in main is', this.state.position);
    return (
      <div className={styles.main}>
        {this.state.position>0 && 
          <button onClick={this.handleLeft}>Left</button>
        }
        {this.state.position<3 && 
          <button onClick={this.handleRight}>Right</button>
        }
        <Pager
          position={this.state.position}
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