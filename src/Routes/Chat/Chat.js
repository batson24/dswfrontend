import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'
import InfoBar from '../../Components/InfoBar/InfoBar.jsx'
import Input from '../../Components/Input/Input.jsx'
import MessageList from '../../Components/MessageList.jsx'
import TextContainer from '../../Components/Textcontainer/TextContainer'
import {SRLWrapper} from "simple-react-lightbox";

let socket;
let Chat=({location})=>{
    let [name, setName]= useState('')
    let [room, setRoom]= useState('')
    let [users, setUsers] = useState('');
    let [message, setMessage]=useState('')
    let [messages, setMessages]=useState([])
    let ENDPOINT='localhost:3003'
    useEffect(()=>{
        let {name,room} = queryString.parse(location.search)

        socket=io(ENDPOINT)
        setName(name)
        setRoom(room)
        socket.emit('join', {name, room}, ()=>{
          
        })

        return ()=> {
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(()=>{
        socket.on('message',message=>{
            setMessages([...setMessages, message])

        })
    }, [])

    let sendMessage=(event)=>{
        event.preventDefault()
        if(message){
            socket.emit('sendMessage', message, ()=>setMessage(''))
        }
    }
   
    return(
   <div className='outerContainer'>

      <SRLWrapper>
       <div className='container'>

       <InfoBar room={room}/>
       <MessageList messages={messages} name={name}/>
       <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      

           {/* <input value={message} onChange={(event)=> setMessage(event.target.value)}
           onKeyPress={event=> event.key === 'Enter'? sendMessage(event): null}/> */}

       </div> 
           <TextContainer users={users}/>
           </SRLWrapper>
   </div>
    )
}

export default Chat