import React, { PureComponent } from 'react';
import './Projects.css';
import Project from './Project';
import travelShare from '../assets/travel-share-tile.png';

export default class Projects extends PureComponent {

  render(){
    return (
      <div>
        <div className="tile is-ancestor projects-grid">
          <div className="tile is-5 is-vertical is-parent">
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>

          </div>

          <div className="tile is-parent is-5 is-vertical">
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
          </div>
        </div>
      </div>
    );
  }
} 