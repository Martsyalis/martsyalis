import React, { PureComponent } from 'react';
import './Projects.css';
import reactIcon from '../assets/reactIcon.png';
import JsIcon from '../assets/nodeJs.png';
import ServerlessIcon from '../assets/serverless.png';
import PWAIcon from '../assets/PWAIcon.png';
import NodeJsIcon from '../assets/nodeJsIcon.png';


export default class Tabs extends PureComponent {



  render(){
    const { handleSelect, selection } = this.props;
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
          <li className={`${selection=== 'Cloud Services' && 'is-active'}`}>
            <a onClick={()=>handleSelect('Cloud Services')}>
              <img alt='' src ={ServerlessIcon} className="icon is-small" />
              <span>Cloud Services</span>
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