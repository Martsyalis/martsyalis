import React, { PureComponent } from 'react';
import './Contact.css';
import { withRouter } from 'react-router-dom';


class Contact extends PureComponent {

  render(){
    return (
      <div className="contact-parent">
        <div className="contact-container">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">I want to:</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
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
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">My email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input class="input" type="text" placeholder="Name"/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Subject</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="..."/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Message</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="..."></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-primary">
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