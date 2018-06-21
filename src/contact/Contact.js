import React, { PureComponent } from 'react';
import './Contact.css';
import { withRouter } from 'react-router-dom';


class Contact extends PureComponent {

  render(){
    return (
      <div className="contact-parent">
        <div className="contact-container">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">I want to:</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <div className="select is-fullwidth">
                    <select>
                      <option>Collaborate</option>
                      <option>Ask a Question</option>
                      <option>Recruit</option>
                      <option>Chat</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">My email</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <input className="input" type="text" placeholder="Name"/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Subject</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" type="text" placeholder="..."/>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Message</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <textarea className="textarea" placeholder="..."></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button className="button is-primary">
          Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>

    );
  }
} 

export default withRouter(Contact);