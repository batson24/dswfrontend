import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import Card from 'react-bootstrap/Card'

import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton, CommentField,CommentList, StatusUpdateForm } from 'react-activity-feed';
// import 'react-activity-feed/dist/index.css';
 import './timeline.css'

export default class Timeline extends React.Component {
  render() {
    return(
      <div className='timeline'>
      <StreamApp
        apiKey="du8he7epvp94"
        appId="45206"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNDE3YWNkNzYtOWNhZC00ZTFiLWI0ZTQtMTRiMmI4OGVmM2ZjIn0.9fYJ_FQrPqypH7cIWjgUEq-tPZsgVzVXOxg0eQ62b5A">
        <NotificationDropdown className='timeline' notify />
        <StatusUpdateForm
          feedGroup="timeline"
          userId="f94c550a-4542-479b-857a-2e4b7dabd2c1" />

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
      </div>
    );
  }
}



// export default class Profile extends Component {
//     render() {
//         return (
            

                
//                 <div className="social-box">
                
//                      <div className="row1">
                         
//                             <div className="col-lg-4 col-xs-12 text-center">
//                                 <div className='view'>
//                                     <i className="fa fa-behance fa-3x" aria-hidden="true"></i>
//                                     <div className="box-title">
//                                         <h3>Behance</h3>
//                                     </div>
//                                     <div className="box-text">
//                                         <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
//                                     </div>
//                                     <div className="box-btn">
                                        
//                                     </div>
//                                  </div>
//                             </div>	 
                            
//                              <div className="col-lg-15 col-xs-4  text-center">
//                                 <div className="box">
//                                     <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
//                                     <div className="box-title">
//                                         <h3>Twitter</h3>
//                                     </div>
//                                     <div className="box-text">
//                                         <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
//                                     </div>
//                                     <div className="box-btn">
                                      
//                                     </div>
//                                  </div>
//                             </div>	 
//                             </div>

//                             <div className="row2">
//                             <div className="col-lg-4 col-xs-12 text-center" style={{bacgroundColor:'black'}}>
//                                 <div className="holder" style={{bacgroundColor:'black'}} >
//                                     <i className="fa fa-pinterest-p fa-3x" aria-hidden="true"></i>
//                                     <div className="box-title">
//                                         <h3>Pinterest</h3>
//                                     </div>
//                                     <div className="box-text">
//                                         <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
//                                     </div>
//                                     <div className="box-btn">
                                        
//                                     </div>
//                                  </div>
//                             </div>	 
//                             </div>

//                             <div className="row3">
                            
//                              <div className="col-lg-4 col-xs-12 text-center">
//                                 <div className="box">
//                                     <i className="fa fa-facebook fa-3x" aria-hidden="true"></i>
//                                     <div className="box-title">
//                                         <h3>Facebook</h3>
//                                     </div>
//                                     <div className="box-text">
//                                         <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
//                                     </div>
//                                     <div className="box-btn">
                                       
//                                     </div>
//                                  </div>
//                             </div>	 <br/> <br/> <br/><br/>
                           
                            
                             
                            
//                              <div className="col-lg-4 col-xs-12 text-center">
//                                 <div className="box">
//                                     <i className="fa fa-github fa-3x" aria-hidden="true"></i>
//                                     <div className="box-title">
//                                         <h3>Github</h3>
//                                     </div>
//                                     <div className="box-text">
//                                         <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
//                                     </div>
//                                     <div className="box-btn">
                                       
//                                     </div>
//                                  </div>
//                             </div>
                    
                    		
//                 </div>
//             </div>
   
            
//         )
//     }
// }
