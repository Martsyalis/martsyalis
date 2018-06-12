import React, { PureComponent } from 'react';
import './About.css';
import { withRouter } from 'react-router-dom';
import awsLexApi from '../services/awsLexApi';

export class Lex extends PureComponent {
  state = {
    chat:[
      {
        client: true,
        message:'whats your name'
      },
      {
        client: false,
        message:'my name is Lex'
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

    this.refs.form.reset();  
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ block: 'end', inline: 'end', behavior:'smooth' });
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.chat || prevProps.chat.length !== this.props.chat.chat.length)this.scrollToBottom();
  }

  render(){
    const { chat } = this.state;
    console.log('chat is', chat);
    return ( 
      <div className="columns transition-item lex-parent">

        <div className="column lex-column">
            
          <div className='lex-div'> 
            {chat.length
              ?chat.map((chat, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: `${!chat.client? 'flex-end': 'flex-start'}` }}>
                  <div className ={`speechBubble ${!chat.client? 'speechBubble' : 'speechBubbleBroker'}`} >
                    <div className={'is-large'} key={i}>{chat.message}</div>
                  </div>
                </div>
              )
              )
              : <div>no chat is loaded yet</div>
            }
            <div style={{ float:'left', clear: 'both' }} ref={(el) => { this.messagesEnd = el; }}></div>
          </div>
          <form ref='form' className="lex-form" onSubmit={this.handlePost}>
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

