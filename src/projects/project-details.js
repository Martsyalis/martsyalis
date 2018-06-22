import JDREImg from '../assets/JDRE.png';
import spaceExpImg from '../assets/space-explorers.jpeg';
import fightsImg from '../assets/fights.png';
import travelImg from '../assets/travel2.png';
import weatherImg from '../assets/weather1.png';
import JDRE2Img from '../assets/JDRE2.png';
import portfolioImg from '../assets/tower.jpg';


export const projects=[
  {
    title: 'Portfolio',
    tech:'React, Context Api, AWS, Cloud Services',
    url:'http://martsyalis.com',
    img: portfolioImg
  },
  {
    title: 'Jimmy Dorsey Real Estate',
    tech: 'Node, React, Redux, Firebase, Mobile, FCM, Cloud Services',
    url: 'https://jdre-app.herokuapp.com',
    img: JDREImg
  },
  {
    title: 'Travel Share',
    tech:'React, Redux, Node, AWS, Sockets.io, Cloud Services',
    url:'https://travelshareapp.herokuapp.com',
    img: travelImg
  },
  {
    title: 'Space Exporers',
    tech:'Node, CLI, Express',
    url:'https://github.com/Martsyalis/space-explorers',
    img: spaceExpImg
  },
  {
    title: 'Parking Fights',
    tech: 'React, Redux',
    url:'https://parking-fights.herokuapp.com',
    img: fightsImg
  },
  {
    title:'Weather PWA',
    tech: 'Vanilla JS, PWA, Shelling',
    url:'https://pwatesttest.herokuapp.com',
    img: weatherImg
  }
];