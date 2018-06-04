import React, { PureComponent } from 'react';
import './Projects.css';
import Project from './Project';
import travelShare from '../assets/travel-share.png';
import JDRE2 from '../assets/JDRE2.png';
import spaceExp from '../assets/space-explorers.png';
import fights from '../assets/fights.png';
import travel2 from '../assets/travel2.png';
import weather1 from '../assets/weather1.png';


export default class Projects extends PureComponent {

  render(){
    return (
      <div>
        <div className="tile is-ancestor projects-grid">
          <div className="tile is-5 is-vertical is-parent project-column">
            <Project img={JDRE2} alt='travel share' url='/travel-share'/>
            <Project img={travelShare} alt='travel share' url='/travel-share'/>
            <Project img={travel2} alt='travel share' url='/travel-share'/>
          </div>

          <div className="tile is-parent is-5 is-vertical project-column">
            <Project img={spaceExp} alt='travel share' url='/travel-share'/>
            <Project img={fights} alt='travel share' url='/travel-share'/>
            <Project img={weather1} alt='travel share' url='/travel-share'/>
          </div>
        </div>
      </div>
    );
  }
} 