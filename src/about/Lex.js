import React, { PureComponent } from 'react';
import './About.css';
import { withRouter } from 'react-router-dom';
import awsLexApi from '../services/awsLexApi';

export class Lex extends PureComponent {
  state = {
    chat:[
      {
        client: false,
        message:'Hey There! Chat with me to find out more about Maryus'
      }
    ]
  };

  handleLoadChat=()=>{
    this.props.loadChat(this.props.id);
  }

  handlePost = async (event)=> {
    event.preventDefault();
    const { elements } = event.target;
    const message = { message: elements.message.value, client:true };
    let newChat = this.state.chat.slice();
    newChat.push(message);
    this.setState({ chat: newChat });
    console.log('chat after setState is', this.state.chat);
    const reply = await awsLexApi.postToLex(message.message);
    console.log('reply is', reply.response);
    newChat = this.state.chat.slice();
    newChat.push({ message:reply.message, client:false });
    this.setState({ chat: newChat });
    this.form.reset();  
  }

  scrollToBottom = () => {
    console.log('scrolling', this.messagesEnd);
    this.messagesEnd.scrollIntoView();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('happening with preState of', prevState);
    if (prevState.chat.length !== this.state.chat.length) this.scrollToBottom();
  }

  render(){
    const { chat } = this.state;
    console.log('chat is', chat);
    return ( 
      <div className="columns transition-item lex-parent">

        <div className="column lex-column">
            
          <div className='lex-div'> 
            {chat.length && chat.map((chat, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: `${!chat.client? 'flex-end': 'flex-start'}` }}>
                <div className ={`speechBubble ${!chat.client? 'speechBubble' : 'speechBubbleBroker'}`} >
                  <div className={'is-large'} key={i}>{chat.message}</div>
                </div>
              </div>
            ))}
            <div style={{ float:'left', clear: 'both' }} ref={(el) => { this.messagesEnd = el; }}></div>
          </div>
          <form   ref={node => this.form=node} className="lex-form" onSubmit={this.handlePost}>
            <textarea name='message' className="textarea" rows="2"
              style ={{ padding: '0', minWidth: '' }} 
              placeholder='reply here'/>
            <input style={{  marginLeft:'0.5rem' }} value={'post'} className="button is-link" type='submit'/>
          </form>
        </div>
      </div>
    );   
  }
}

export default withRouter(Lex);

