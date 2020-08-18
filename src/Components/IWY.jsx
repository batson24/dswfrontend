import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import Card from 'react-bootstrap/Card'


export default class Profile extends Component {
    render() {
        return (
            

                
                <div className="social-box">
                <div className="container">
                     <div className="row11">
                         
                            <div className="col-lg-4 col-xs-20 text-center">
                                <div className='box'>
                                    <i className="fa fa-behance fa-3x" aria-hidden="true"></i>
                                    <div className="box-title" id='boximage'>
                                        <h3>Behance</h3>
                                    </div>
                                    <div className="box-text">
                                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                    </div>
                                    <div className="box-btn">
                                        
                                    </div>
                                 </div>
                            </div>	 
                            
                             <div className="col-lg-4 col-xs-20  text-center">
                                <div className="box" >
                                    <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
                                    <div className="box-title" id='boximage'>
                                        <h3>Twitter</h3>
                                    </div>
                                    <div className="box-text">
                                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                    </div>
                                    <div className="box-btn">
                                    <button >Call </button>
                                    </div>
                                 </div>
                            </div>	 
                            </div>

                           
                    
                    	
                </div>
            </div>
   
            
        )
    }
}
