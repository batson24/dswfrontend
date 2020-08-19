import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import Carousel from 'react-bootstrap/Carousel'  
import {SRLWrapper} from "simple-react-lightbox";
import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton, CommentField,CommentList, StatusUpdateForm, Dropdown, Link, ActivityFooter, CommentItem } from 'react-activity-feed';
import Grid from '@material-ui/core/Grid';

const Room = (props) => {
    const userVideo = useRef();
    const partnerVideo = useRef();
    const peerRef = useRef();
    const socketRef = useRef();
    const otherUser = useRef();
    const userStream = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
            userVideo.current.srcObject = stream;
            userStream.current = stream;

            socketRef.current = io.connect("/");
            socketRef.current.emit("join room", props.match.params.roomID);

            socketRef.current.on('other user', userID => {
                callUser(userID);
                otherUser.current = userID;
            });

            socketRef.current.on("user joined", userID => {
                otherUser.current = userID;
            });

            socketRef.current.on("offer", handleRecieveCall);

            socketRef.current.on("answer", handleAnswer);

            socketRef.current.on("ice-candidate", handleNewICECandidateMsg);
        });

    }, []);

    function callUser(userID) {
        peerRef.current = createPeer(userID);
        userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
    }

    function createPeer(userID) {
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                },
                {
                    urls: 'turn:numb.viagenie.ca',
                    credential: 'batson',
                    username: 'webrtc@live.com'
                },
            ]
        });

        peer.onicecandidate = handleICECandidateEvent;
        peer.ontrack = handleTrackEvent;
        peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

        return peer;
    }

    function handleNegotiationNeededEvent(userID) {
        peerRef.current.createOffer().then(offer => {
            return peerRef.current.setLocalDescription(offer);
        }).then(() => {
            const payload = {
                target: userID,
                caller: socketRef.current.id,
                sdp: peerRef.current.localDescription
            };
            socketRef.current.emit("offer", payload);
        }).catch(e => console.log(e));
    }

    function handleRecieveCall(incoming) {
        peerRef.current = createPeer();
        const desc = new RTCSessionDescription(incoming.sdp);
        peerRef.current.setRemoteDescription(desc).then(() => {
            userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
        }).then(() => {
            return peerRef.current.createAnswer();
        }).then(answer => {
            return peerRef.current.setLocalDescription(answer);
        }).then(() => {
            const payload = {
                target: incoming.caller,
                caller: socketRef.current.id,
                sdp: peerRef.current.localDescription
            }
            socketRef.current.emit("answer", payload);
        })
    }

    function handleAnswer(message) {
        const desc = new RTCSessionDescription(message.sdp);
        peerRef.current.setRemoteDescription(desc).catch(e => console.log(e));
    }

    function handleICECandidateEvent(e) {
        if (e.candidate) {
            const payload = {
                target: otherUser.current,
                candidate: e.candidate,
            }
            socketRef.current.emit("ice-candidate", payload);
        }
    }

    function handleNewICECandidateMsg(incoming) {
        const candidate = new RTCIceCandidate(incoming);

        peerRef.current.addIceCandidate(candidate)
            .catch(e => console.log(e));
    }

    function handleTrackEvent(e) {
        partnerVideo.current.srcObject = e.streams[0];
    };

    return (

        <div className="social-box">
                    <SRLWrapper>
                
                     <div className="row1">
                         
                            <div className="col-lg-4 col-xs-12 text-center" id='column1'>
                                <div className='view'>
                                    <i className="fa fa-behance fa-3x" aria-hidden="true"></i>
                                    <div className="box-title">
                                        <h3>Batson 24</h3>
                                    </div>
                                   
                                    <div className="box-text">
                                     <span> <video className='partner' width='300px' autoPlay ref={partnerVideo} /></span>  
                                    <span>  <video width='300px' autoPlay ref={userVideo} />
                                     
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
                           <h3></h3>
                       </div>
                       <div className="box-text">
                           <span>
                                <StreamApp
                                apiKey="du8he7epvp94"
                                appId="45206"
                                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNDE3YWNkNzYtOWNhZC00ZTFiLWI0ZTQtMTRiMmI4OGVmM2ZjIn0.9fYJ_FQrPqypH7cIWjgUEq-tPZsgVzVXOxg0eQ62b5A">
                                <StatusUpdateForm
          feedGroup="timeline"
          userId="f94c550a-4542-479b-857a-2e4b7dabd2c1" />
                               <NotificationDropdown className='timeline' notify />
                               
                               
                               </StreamApp> 
                               </span>
                       </div>
                       <div className="box-btn">
                       
                       </div>
                    </div>
               </div>	 
               </div>

               <div className="row2">
               <div className="col-lg-4 col-xs-12 text-center" >
                   <div className="holder"  >
                       <i className="fa fa-pinterest-p fa-3x" aria-hidden="true"></i>
                       <div className="box-title">
                       
                       </div>
                       <div className="box-text">
                       <div>
                 <div className='container-fluid'  >
                         <div className="row title" style={{marginBottom: "20px" }} >
                                 
                                 </div></div>  

                  <div className='container-fluid' >  
                          <div className="row title" style={{ marginBottom: "20px" }} >
                                 </div></div>  

                         <div className='container-fluid' >    
                         
                           <Carousel   style={{'width':'550px'}}>  
                        

                                 <Carousel.Item style={{'height':"350px"}}>  

                                 
      <StreamApp
        apiKey="du8he7epvp94"
        appId="45206"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNDE3YWNkNzYtOWNhZC00ZTFiLWI0ZTQtMTRiMmI4OGVmM2ZjIn0.9fYJ_FQrPqypH7cIWjgUEq-tPZsgVzVXOxg0eQ62b5A">
        
       

        <FlatFeed notify
        options={{reactions: {recent:true} }}
        Activity={(props) =>
              <Activity {...props}
                Footer={() => (
                  <div style={ {padding: '8px 16px'} }>
                    <LikeButton {...props} />
                    <CommentField
                      activity={props.activity}
                      onAddReaction={props.onAddReaction} />
                    <CommentList activityId={props.activity.id} />
                  </div>

                  
                )}
              />
            }
          />

      </StreamApp>

                                       <Carousel.Caption>  
                                         <h3>OverTime</h3>  
                                             </Carousel.Caption>  

                                         </Carousel.Item>  
                                        
                                         <Carousel.Item style={{'height':"350px"}}>  

                                      

      <Carousel.Caption>  
        <h3>OverTime</h3>  
            </Carousel.Caption>  

        </Carousel.Item>  
                                          


                                        </Carousel>   

                                </div>  

                        </div>  

                           
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
                           <span> <Grid container spacing={8}>
            <Grid item xs={8} sm={7}>
             
            </Grid>
            <Grid item xs={6} sm={5}>
             
            </Grid>
          </Grid></span> 
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
                        <StreamApp
  apiKey="fpwesm5u2evu"
  appId="64527"
  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZXhhbXBsZS11c2VyIn0.cM6zFlcQ68qP2LLz-Y6fPeNglfOuwB2aeBUaQild1wg"
>
  <StatusUpdateForm />
  <FlatFeed
    feedGroup="user"
    options={{ withRecentReactions: true, limit: 10, withOwnChildren: true }}
    notify
    Activity={(props) => {
      const hasSubActivity = Boolean(props.activity.object.object);
      const activity = hasSubActivity ? props.activity.object : props.activity;
      const activityProps = props;
      return (
        <Activity
          {...props}
          activity={activity}
          HeaderRight={() => (
            <Dropdown>
              <div>
                <Link
                  onClick={() => {
                    props.onRemoveActivity(props.activity.id);
                  }}
                >
                  Remove
                </Link>
              </div>
            </Dropdown>
          )}
          Footer={() => (
            <React.Fragment>
              <ActivityFooter {...props} activity={activity} />
              <CommentField
                activity={activity}
                onAddReaction={props.onAddReaction}
              />
              <CommentList
                activityId={activity.id}
                activityPath={
                  hasSubActivity ? [props.activity.id, 'object'] : null
                }
                CommentItem={(props) => (
                  <React.Fragment>
                    <CommentItem {...props} />
                    <LikeButton reaction={props.comment} {...activityProps} />
                  </React.Fragment>
                )}
              />
            </React.Fragment>
          )}
        />
      );
    }}
  />
</StreamApp> 
                       </div>
                       <div className="box-btn">
                          
                       </div>
                    </div>
               </div>
       
               
   </div> 
   </SRLWrapper>
</div>
   
            
        )
};

export default Room;