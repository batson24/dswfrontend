import React from'react'

import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Components/Messages/Message'
let MessageList=({messages, name})=>(

    
        <ScrollToBottom className="messages">
          {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
        </ScrollToBottom>
      );
      
     


export default MessageList
