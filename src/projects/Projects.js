import React, { PureComponent } from 'react';
import './Projects.css';
import Project from './Project';
import travelShare from '../assets/travel-share.png';
import JDREImg from '../assets/JDRE.png';
import spaceExpImg from '../assets/space-explorers.jpeg';
import fightsImg from '../assets/fights.png';
import travelImg from '../assets/travel2.png';
import weatherImg from '../assets/weather1.png';
import JDRE2Img from '../assets/JDRE2.png';


export default class Projects extends PureComponent {

  render(){
    return (
      <div>
        <div className="tile is-ancestor projects-grid">
          <div className="tile is-5 is-vertical is-parent project-column">
            <Project project={jdre} />
            <Project project={travel} />
            <Project project={weather} />
          </div>

          <div className="tile is-parent is-5 is-vertical project-column">
            <Project project={backOffice} />
            <Project project={fights} />
            <Project project={space} />
          </div>
        </div>
      </div>
    );
  }
} 


const jdre= {
  title: 'Jimmy Dorsey Real Estate',
  tech: 'Node, React, Redux, Firebase, Mobile, FCM, Chat',
  url: 'https://jdre-app.herokuapp.com/search',
  img: JDREImg
};
const travel={
  title: 'Travel Share',
  tech:'React, Redux, Node, AWS, Sockets.io',
  url:'https://travelshareapp.herokuapp.com/search',
  img: travelImg
};
const space={
  title: 'Space Exporers',
  tech:'Node, CLI, Express',
  url:'https://github.com/Martsyalis/space-explorers',
  img: spaceExpImg
};

const fights={
  title: 'Parking Fights',
  tech: 'React, Redux',
  url:'https://parking-fights.herokuapp.com',
  img: fightsImg
};

const weather={
  title:'Weather PWA',
  tech: 'Vanilla JS, Service Workers, Shelling',
  url:'https://pwatesttest.herokuapp.com',
  img: weatherImg
};

const backOffice={
  title:'Back office for JDRE',
  tech: 'React, Redux, Service Workers, Web Notifications, Firebase, Chat',
  url:'https://jdre-admin.herokuapp.com/',
  img: JDRE2Img
};