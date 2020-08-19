import React, { useEffect, useState, useRef } from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import {SRLWrapper} from "simple-react-lightbox";

// const Container = styled.div`
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  border: 1px solid blue;
  width: 50%;
  height: 50%;
`;

function Socketpeer() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  


  useEffect(() => {
    socket.current = io.connect("/");
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    })

    socket.current.on("yourID", (id) => {
      setYourID(id);
    })
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    })

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })
  }, []);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      config: {

        iceServers: [
            {
                urls: "stun:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            },
            {
                urls: "turn:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683"
            }
        ]
    },
      stream: stream,
    });

    peer.on("signal", data => {
      socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    })

    peer.on("stream", stream => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", signal => {
      setCallAccepted(true);
      peer.signal(signal);
    })

  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video playsInline ref={partnerVideo} autoPlay />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>
    )
  }
  return (
<div>
    <div className="row1">
      
                         
    <div className="col-lg-4 col-xs-12 text-center">
        <div className='view'>
            <i className="fa fa-behance fa-3x" aria-hidden="true"></i>
            <div className="box-title">
                <h3>Behance</h3>
            </div>
            <div className="box-text">
                <span> 
                {PartnerVideo}
                
</span>
            </div>
            <div className="box-btn">
              
            </div>
         </div>
    </div>	 
    
     <div className="col-lg-15 col-xs-4  text-center">
        <div className="box">
            <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
            <div className="box-title">
                
            </div>
            <div className="box-text">
                <span>{PartnerVideo}</span>
            </div>
            <div className="box-btn">
            
            </div>
         </div>
    </div>	 
    </div>
     
           
   
    <div className="row2">
    <div className="col-lg-4 col-xs-12 text-center" style={{bacgroundColor:'black'}}>
        <div className="holder" style={{bacgroundColor:'black'}} >
            <i className="fa fa-pinterest-p fa-3x" aria-hidden="true"></i>
            <div className="box-title">
                
            </div>
            <div className="box-text">
                <span>  </span>

          
            </div>
            <div className="box-btn">
              
            </div>
         </div>
    </div>	 
    </div>

    <div className="row3">
    
     <div className="col-lg-4 col-xs-12 text-center">
        <div className="box">
            <i className="fa fa-facebook fa-3x" aria-hidden="true"></i>
            <div className="box-title">
                <h3>Facebook</h3>
            </div>
            <div className="box-text">
                <span><Row>
        {UserVideo}
        
      </Row>
      <Row>
        {Object.keys(users).map(key => {
          if (key === yourID) {
            return null;
          }
          return (
            <button  onClick={() => callPeer(key)}>Call {key}</button>
          );
        })}
      </Row>
      <Row>
        {incomingCall}
      </Row></span>
            </div>
            <div className="box-btn">
              
            </div>
         </div>
    </div>	 <br/> <br/> <br/><br/>
   
    
     
    
     <div className="col-lg-4 col-xs-12 text-center">
        <div className="box">
            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
            <div className="box-title">
                <h3>Github</h3>
            </div>
            <div className="box-text">
                <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
            </div>
            <div className="box-btn">
               
            </div>
         </div>
    </div>

    
</div>
   
    </div>
  )
}

export default Socketpeer