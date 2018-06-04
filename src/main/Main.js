import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Pager from '../pager/Pager';
import About from '../about/About';
import Projects from '../projects/Projects';
import Blogs from '../blogs/Blogs';
import Contact from '../contact/Contact';
import './Main.css';
import IonicSkinnyLeft from 'react-icons/lib/io/ios-arrow-left';
import IonicSkinnyRight from 'react-icons/lib/io/ios-arrow-right';

class MainPager extends PureComponent {

  state = {
    pagesArray:['/', '/projects', '/blogs', '/contact']
  };

  position = ()=> this.state.pagesArray.indexOf(this.props.history.location.pathname);

  handleLeft = ()=>{
    this.setState(
      this.props.history.push(`${this.state.pagesArray[this.position()-1]}`)
    );
  };
  handleRight = ()=>{
    this.setState(
      this.props.history.push(`${this.state.pagesArray[this.position()+1]}`)
    );
  };
  
  render(){
    return (
      <div className="main-pager">
        {this.position()>0 && 
          <div className='left arrow-div' onClick={this.handleLeft}><IonicSkinnyLeft size={90}/></div>
        }
        {this.position()<3 && 
          <div  className='right arrow-div' onClick={this.handleRight}><IonicSkinnyRight size={90}/></div>
        }
        <Pager 
          position={this.position()}
          pageOne={
            <Route path="/" component={About}/>
          }         
          pageTwo={
            <Route path="/projects" component={Projects}/>
          }
          pageThree={
            <Route path="/blogs" component={Blogs}/>

          }
          pageFour={
            <Route path="/contact" component={Contact}/>
          }
        />
      </div>
    );
  }
}

export default withRouter(MainPager);