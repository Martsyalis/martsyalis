import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';


export default class Project extends PureComponent{
 
  render(){
    return(
      <div className={`modal ${this.props.isActive && 'is-active'}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
          hello there I like this a lot
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
  
}
