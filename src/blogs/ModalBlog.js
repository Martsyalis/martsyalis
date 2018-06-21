import React, { PureComponent } from 'react';


export default class Project extends PureComponent{
 
  render(){
    return(
      <div className={`modal blogs-parent ${this.props.isActive && 'is-active'}`}>
        <div className="modal-background"></div>
        <div className="modal-card blogs-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.text}</p>
          </header>
          <section className="modal-card-body">
            <img className='modal-image' src={this.props.img} alt=''/>
            <div> </div>
          </section>
        </div>
      </div>
    );
  }
  
}
