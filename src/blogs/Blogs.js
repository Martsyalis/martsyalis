import React, { PureComponent } from 'react';
import ModalProject from './ModalBlog';
import comingSoon from '../assets/comingSoon.png';
import './Blogs.css';

export default class Blogs extends PureComponent {

  render(){
    return (
      <div>
        <ModalProject isActive={true} img={comingSoon} text='Page is in the works!' />
      </div>
    );
  }
} 