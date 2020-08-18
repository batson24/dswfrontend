import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../image/logodate.png'

export default class Login extends Component{
    state = {
        LoginUsername: '',
        LoginPassword: '',
        NewUsername: '',
        NewPassword: '',
        email: '',
        lastname:'',
        firstname:''
    }        

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }
    render(){
        
    
        return(
            <div className='background' >
        <div className='newnav'></div>
       <div className='nav'></div>
                  <div className='App'>
         <div className="auth-wrapper">
         <div className="auth-inner"> 
                <form onSubmit={ (evt) => this.props.handleLogin(evt) }>
                    <h3><img src={logo} alt='link broken'/></h3>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id='LoginUsername' placeholder="Username" value={this.props.LoginUsername} onChange={this.props.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value={this.props.LoginPassword} id='LoginPassword' onChange={this.props.handleChange} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p>
                <Link className="nav-link text-right" to={"/forgotpassword"}>Forgot Password</Link>
                </p>
                <p>
                      <Link className="nav-link text-center" to={"/signup"}>Sign up</Link>
                </p>
            </form><br/><br/>

             
            </div>
            </div>
            </div>

         
        
            </div>
        )
    }
}