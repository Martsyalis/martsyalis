import React, { PureComponent } from 'react';
import './Contact.css';
import { withRouter } from 'react-router-dom';
import emailApi from '../services/emailApi';

class Contact extends PureComponent {

  state = {
    subject: '',
    message: '',
    wasSend: false,
    email: '',
    error: false,
    reply: 'Thank you for getting in touch, looking forward to talking to you!'
  }

  handlePost = async (data)=>{
    const { wasSend, error, reply, ...message } = this.state;
    const response = await emailApi.postMessage(message);
    if(response !== this.state.reply) this.setState({ reply: response, error: true });
    this.setState({ wasSend: true });
  }

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      ...prevState.data,
      [target.name]: target.value
    }));
  };

  render() {
    return (
      <div>
        { this.state.wasSend ? (
          <div className={`notification ${this.state.error? 'is-error' : 'is-success'}`}>
            <button
              className="delete"
              onClick={() => this.setState({ wasSend: false })}
            />
            {this.state.reply}
          </div>
        ) : (
          <div className="contact-parent">
            <div className="contact-container">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">My email</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input
                        name="email" value={this.state.email} onChange={this.handleChange}
                        className="input" type="text" placeholder="Name" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
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
                      <input className="input"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="..." />
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
                      <textarea
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        className="textarea" placeholder="..." />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label" />
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary" onClick={this.handlePost}>Send message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Contact);
