import JDREImg from '../assets/JDRE.png';
import JDREAdminImg from '../assets/JDRE2.png';
import spaceExpImg from '../assets/space-explorers.jpeg';
import travelImg from '../assets/travel2.png';
import weatherImg from '../assets/weather1.png';
import portfolioImg from '../assets/tower.jpg';
import miniGameImg from '../assets/miniGame.png';

export const projects = [
  {
    title: 'Portfolio',
    tech: 'React, Context Api, AWS, Cloud Services',
    url: 'http://martsyalis.com',
    img: portfolioImg
  },
  {
    title: 'Jimmy Dorsey Real Estate',
    tech: 'Node, React, Redux, Firebase, Mobile, FCM, Cloud Services',
    url: 'https://www.jimmydorseyrealestate.com',
    img: JDREImg
  },
  {
    title: 'Travel Share',
    tech: 'React, Redux, Node, Mobile, AWS, Sockets.io, Cloud Services',
    url: 'https://travelshareapp.herokuapp.com',
    img: travelImg
  },
  {
    title: 'Space Exporers',
    tech: 'Node, CLI, Express',
    url: 'https://github.com/Martsyalis/space-explorers',
    img: spaceExpImg
  },
  {
    title: 'JDRE Admin Website',
    tech: 'React, Redux, PWA, Node, Cloud Services',
    url: 'https://jdre-admin.herokuapp.com',
    img: JDREAdminImg
  },
  {
    title: 'Mini Game App',
    tech: 'Vanilla JS, Phaser 3',
    url: 'https://mini-game-app.netlify.com/',
    img: miniGameImg
  }
];
