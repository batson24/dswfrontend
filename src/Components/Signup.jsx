import React, { Component } from "react";
import {Link} from 'react-router-dom'
import logo from '../image/logodate.png'

export default class Signup extends Component {
    state = {
        LoginUsername: '',
        LoginPassword: '',
        NewUsername: '',
        NewPassword: '',
        email: '',
        NewLastname:'',
        NewFirstname:''
    }        

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    render() {
        return (
            <div className='background' >
            <div className='newnav'></div>
           <div className='nav'></div>
                <div className='App'>
         <div className="auth-wrapper">
         <div className="auth-inner"> 
                 <form onSubmit={ (evt) => this.props.handleSignUp(evt) }>
                <h3><img src={logo} alt='link broken'/></h3>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input value={this.props.NewFirstname} onChange={this.props.handleChange} type="text" className="form-control" id='NewFirstname' placeholder="First name"  />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input onChange={this.props.handleChange} value={this.props.NewLastname} type="text" className="form-control" id='NewLastname' placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input onChange={this.props.handleChange} value={this.props.NewUsername} type="text" className="form-control"id='NewUsername' placeholder="Enter Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.props.handleChange} value={this.props.NewPassword} type="password" className="form-control" id='NewPassword' placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p>
                      <Link className="forgot-password text-right" to={"/"}>Already Signed Up sign in?</Link>
                </p>
            </form> 
                  
            </div>
            </div>
            </div>

            </div>
        );
    }

}



        
      


 