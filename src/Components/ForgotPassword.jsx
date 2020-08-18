import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../image/logodate.png'

export default class ForgotPassword extends Component{
    render(){
        return(
            <div className='background' >
            <div className='newnav'></div>
           <div className='nav'></div>

                     <div className='App'>
         <div className="auth-wrapper">
         <div className="auth-inner"> 
                <form>
                <h3><img src={logo} alt='link broken'/></h3>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
               
                <p>
                      <Link className="nav-link text-center" to={"/"}>Login</Link>
                </p>
            </form>
              
            </div>
            </div>
            </div>

            </div>
        )
    }
}