// import React,{useState, useEffect} from 'react'
// import {v1 as uuid} from 'uuid'
// import Carousel from 'react-bootstrap/Carousel'  
// import {SRLWrapper} from "simple-react-lightbox";
// import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton, CommentField,CommentList, StatusUpdateForm, Dropdown, Link, ActivityFooter, CommentItem } from 'react-activity-feed';
// import Grid from '@material-ui/core/Grid';
// import '../Components/Timeline/timeline.css'
// import SpeedDate from '../Routes/SpeedDate'
// // import PropTypes from 'prop-types';

// // import Scream from '../components/scream/Scream';
// // import Profile from '../components/profile/Profile';
// // import ScreamSkeleton from '../util/ScreamSkeleton';

// // import { connect } from 'react-redux';
// // import { getScreams } from '../redux/actions/dataActions';

// import { makeStyles } from '@material-ui/core/styles'







// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//       margin: 30,
//     },
//     card: {
//       maxWidth: 600,
//       margin: 'auto',
//       marginTop: theme.spacing(5),
//       marginBottom: theme.spacing(5)
//     },
//     title: {
//       padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
//       color: theme.palette.text.secondary
//     },
//     media: {
//       minHeight: 400
//     },
//     credit: {
//       padding: 10,
//       textAlign: 'right',
//       backgroundColor: '#ededed',
//       borderBottom: '1px solid #d0d0d0',
//       '& a':{
//         color: '#3f4771'
//       } 
//     }
//   }))



// let Profile= (props)=>{
//     function create() {
//         const id = uuid();
//         props.history.push(`/room/${id}`);
//     }

//     return(
//         <div className="social-box">
           
                
//          <div className="row1">
            
//                <div className="col-lg-4 col-xs-12 text-center">
//                    <div className='view'>
//                        <i className="fa fa-behance fa-3x" aria-hidden="true"></i>
//                        <div className="box-title">
//                            <h3>Batson 24</h3>
//                        </div>
//                        <div className="box-text">
//                        <span><button onClick={create}>Online</button></span>
//                        </div>
//                        <div className="box-btn">
                         
//                        </div>
//                     </div>
//                </div>	 
               
//                 <div className="col-lg-15 col-xs-4  text-center">
//                    <div className="box">
//                        <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
//                        <div className="box-title">
//                            <h3></h3>
//                        </div>
//                        <div className="box-text">
//                            <span>
//                                 <StreamApp
//                                 apiKey="du8he7epvp94"
//                                 appId="45206"
//                                 token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNDE3YWNkNzYtOWNhZC00ZTFiLWI0ZTQtMTRiMmI4OGVmM2ZjIn0.9fYJ_FQrPqypH7cIWjgUEq-tPZsgVzVXOxg0eQ62b5A">
//                                   <NotificationDropdown className='timeline' notify />
//                                 <StatusUpdateForm
//           feedGroup="timeline"
//           userId="batson24" />
                               
                               
                               
//                                </StreamApp> 
//                                </span>
//                        </div>
//                        <div className="box-btn">
                       
//                        </div>
//                     </div>
//                </div>	 
//                </div>

               
               
//                    <div className="timline">
                       
                       
                   
               
              
               
                
               
//                 <div className="timeline">
//                    <div className="timeline">
                      
                      
//                        <div className="timeline">
//                        <StreamApp
//   apiKey="fpwesm5u2evu"
//   appId="64527"
//   token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZXhhbXBsZS11c2VyIn0.cM6zFlcQ68qP2LLz-Y6fPeNglfOuwB2aeBUaQild1wg"
// >
  
//   <FlatFeed
//     feedGroup="user"
//     options={{ withRecentReactions: true, limit: 10, withOwnChildren: true }}
//     notify
//     Activity={(props) => {
//       const hasSubActivity = Boolean(props.activity.object.object);
//       const activity = hasSubActivity ? props.activity.object : props.activity;
//       const activityProps = props;
//       return (
//         <Activity
//           {...props}
//           activity={activity}
//           HeaderRight={() => (
//             <Dropdown>
//               <div>
//                 <Link
//                   onClick={() => {
//                     props.onRemoveActivity(props.activity.id);
//                   }}
//                 >
//                   Remove
//                 </Link>
//               </div>
//             </Dropdown>
//           )}
//           Footer={() => (
//             <React.Fragment>
//               <ActivityFooter {...props} activity={activity} />
//               <CommentField
//                 activity={activity}
//                 onAddReaction={props.onAddReaction}
//               />
//               <CommentList
//                 activityId={activity.id}
//                 activityPath={
//                   hasSubActivity ? [props.activity.id, 'object'] : null
//                 }
//                 CommentItem={(props) => (
//                   <React.Fragment>
//                     <CommentItem {...props} />
//                     <LikeButton reaction={props.comment} {...activityProps} />
//                   </React.Fragment>
//                 )}
//               />
//             </React.Fragment>
//           )}
//         />
//       );
//     }}
//   />
// </StreamApp>
//                        </div>
//                        <div className="box-btn">
                          
//                        </div>
//                     </div>
//                </div>
       
               
//    </div> 
   
// </div>
        
//     )
// }

// export default Profile