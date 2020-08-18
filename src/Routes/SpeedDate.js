import React,{useState, useEffect} from 'react'
import {v1 as uuid} from 'uuid'
import Carousel from 'react-bootstrap/Carousel'  
import {SRLWrapper} from "simple-react-lightbox";
import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton, CommentField,CommentList, StatusUpdateForm } from 'react-activity-feed';
import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';

// import Scream from '../components/scream/Scream';
// import Profile from '../components/profile/Profile';
// import ScreamSkeleton from '../util/ScreamSkeleton';

// import { connect } from 'react-redux';
// import { getScreams } from '../redux/actions/dataActions';

import { makeStyles } from '@material-ui/core/styles'







const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: 30,
    },
    card: {
      maxWidth: 600,
      margin: 'auto',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
    title: {
      padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
      color: theme.palette.text.secondary
    },
    media: {
      minHeight: 400
    },
    credit: {
      padding: 10,
      textAlign: 'right',
      backgroundColor: '#ededed',
      borderBottom: '1px solid #d0d0d0',
      '& a':{
        color: '#3f4771'
      } 
    }
  }))



let SpeedDate= (props)=>{
    function create(){
        let id = uuid()
        props.history.push(`/room/${id}`)
    }
    return(
        <div className="social-box">
           <SRLWrapper>
                
         <div className="row1">
            
               <div className="col-lg-4 col-xs-12 text-center">
                   <div className='view'>
                       <i className="fa fa-behance fa-3x" aria-hidden="true"></i>
                       <div className="box-title">
                           <h3>Profile</h3>
                       </div>
                       <div className="box-text">
                       <span><button onClick={create}>Speed Date</button></span>
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

                         <div className='container-fluid' >     <Carousel   style={{'width':'550px'}}>  
                        

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
                           <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                       </div>
                       <div className="box-btn">
                          
                       </div>
                    </div>
               </div>
       
               
   </div> 
   </SRLWrapper>
</div>
        
    )
}

export default SpeedDate