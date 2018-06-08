import React, { PureComponent } from 'react';
import './Projects.css';
import reactIcon from '../assets/reactIcon.png';
import JsIcon from '../assets/nodeJs.png';
import reduxIcon from '../assets/reduxIcon.png';
import PWAIcon from '../assets/PWAIcon.png';
import NodeJsIcon from '../assets/nodeJsIcon.png';


export default class Tabs extends PureComponent {



  render(){
    const { handleSelect, selection } = this.props;
    console.log('selection in tabs', selection);
    return (
      <div className="tabs is-centered">
        <ul>
          <li className={`${selection === ''? 'is-active': ''}`}>
            <a onClick={()=>handleSelect('')}>
              <img alt='' src ={JsIcon} className="icon is-small" />
              <span>All</span>
            </a>
          </li>
          <li className={`${selection === 'React'? 'is-active': ''}`}>
            <a onClick={()=>handleSelect('React')}>
              <img alt='' src ={reactIcon} className="icon is-small" />
              <span>React</span>
            </a>
          </li>
          <li className={`${selection=== 'Node' && 'is-active'}`}>
            <a onClick={()=>handleSelect('Node')}>
              <img alt='' src ={NodeJsIcon} className="icon is-small" />
              <span>Node.js</span>
            </a>
          </li>
          <li className={`${selection=== 'Redux' && 'is-active'}`}>
            <a onClick={()=>handleSelect('Redux')}>
              <img alt='' src ={reduxIcon} className="icon is-small" />
              <span>Redux</span>
            </a>
          </li>
          <li className={`${selection=== 'PWA' && 'is-active'}`}>
            <a onClick={()=>handleSelect('PWA')}>
              <img alt='' src ={PWAIcon} className="icon is-small" /> 
              <span>PWA</span>
            </a>
          </li>
        </ul>
      </div>

    );
  }
}