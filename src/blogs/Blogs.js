import React, { PureComponent } from 'react';
import ModalProject from '../projects/ModalProject';


export default class Blogs extends PureComponent {

  render(){
    return (
      <div>
        <ModalProject isActive={true}/>
      </div>
    );
  }
} 