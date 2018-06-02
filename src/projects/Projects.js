import React, { PureComponent } from 'react';
import styles from './Projects.css';

export default class Projects extends PureComponent {

  render(){
    console.log('projects');
    return (
      <div>
        <div class="tile is-ancestor projects-grid">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box">
              <p class="title">One</p>
            </div>
            <div class="tile is-child box">
              <p class="title">Two</p>
            </div>
            <div class="tile is-child box">
              <p class="title">Three</p>
            </div>
          </div>
          <div class="tile is-parent is-4 is-vertical">
            <div class="tile is-child box">
              <p class="title">Four</p>
            </div>
            <div class="tile is-child box">
              <p class="title">Five</p>
            </div>
            <div class="tile is-child box">
              <p class="title">Six</p>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
} 