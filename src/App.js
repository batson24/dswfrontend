import React from 'react';
 import Navigation from './Components/Navigation'
import { Switch , Route} from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import ForgotPassword from './Components/ForgotPassword'
import Timeline from './Components/Timeline/Timeline'
import IWY from './Components/IWY'
 import Speed from './Components/Speed'
import Inbox from './Components/inbox/Inbox'
import SpeedDate from './Routes/SpeedDate'
import Room from './Routes/Room'
 import Chat from './Routes/Chat/Chat'

 


//  let baseUrl= process.env.NODE_ENV || 'https://shrouded-crag-81344.herokuapp.com/'
let baseURL= ''
 if (process.env.NODE_ENV === 'development') {
   baseURL = 'http://localhost:3003';
 } else {
   baseURL = 'https://shrouded-crag-81344.herokuapp.com/';
 }
 console.log('current base URL:', baseURL);

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      LoginUsername: '',
      LoginPassword: '',
      NewUsername: '',
      NewPassword: '',
      email: '', 
      NewFirstname:'',
      NewLastname:'',

    }
    this.handleLogin=this.handleLogin.bind(this)
    this.handleSignUp=this.handleSignUp.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  addUser = (newUser) => {
    const copyUser = [...this.state.users];
    copyUser.push(newUser);
    this.setState({
      users: copyUser,
    });
  }
  
  handleChange = (event) => {
    this.setState({
        [event.target.id]: event.target.value,
    });
  }

  handleSignUp = (event) => {
    event.preventDefault();
    fetch(baseURL + '/user/signup', {
        method: 'POST',
        body: JSON.stringify({
            username: this.state.NewUsername,
            password: this.state.NewPassword,
            firstname: this.state.NewFirstname,
            lastname:this.state.NewLastname
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data)
        this.setState({
            username: data.username
        });
        fetch(baseURL + '/datematch', {
            method: 'POST',
            body: JSON.stringify({
                username: data.username,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            return res.json();
        }).then(data => {
          this.setState({
          LoginUsername: '',
          LoginPassword: '',
          NewUsername: '',
          NewPassword: '',
          email: '', 
          NewFirstname:'',
          NewLastname:''
        });
      });
    })
  }
  
  handleLogin = (event) => {
    event.preventDefault();
    console.log("hello")
    fetch(baseURL + '/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: this.state.LoginUsername,
            password: this.state.LoginPassword
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        return res.json();
    }).then(data => {
        // this.props.addUser(data);
        this.setState({
            username: data.username,
            LoginUsername: '',
            LoginPassword: ''
        });
    }).catch(err => {
      console.log(err);
  });
  }

  handleLogout = () => {
    this.setState({
        username:null
    });
  }
  delete = (event) => {
    event.preventDefault();
  
    fetch(baseURL + '/user/delete', {
        method: 'DELETE',
        body: JSON.stringify({
            username: this.state.username,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        return res.json();
    }).then(data => {
      console.log(data)
        this.setState({
            username: null,
        });
    }).catch(err => {
      console.log(err);
  });
  }
  
  render(){
   
  
    return(
      
      <div  >
       
     <> 
       {
          this.state.username ?  <>
           
          <Navigation handleLogout={this.handleLogout} 
          delete={this.delete}/>
       
       
         <Switch>  
        
          
          {/* <Route exact path='/' 
          render={ () =>
          <Profile  username = {this.state.username}
            />
             } /> */}

<Route exact path='/timeline' 
          render={ () =>
          <Timeline  username = {this.state.username}
            />
             } />

<Route exact path='/IWY' 
          render={ () =>
          <IWY  username = {this.state.username}
            />
             } />

 <Route exact path='/speed' 
          render={ () =>
          <SpeedDate  username = {this.state.username}
            />
             } /> 
              <Route path='/inbox' exact component={Inbox}
      
      />
       
           <Route exact path='/chat' component={Chat} 
     />


          
          
             
                <Route path='/' exact component={SpeedDate}
      
            />
             
                 <Route exact path='/room/:roomID' component={Room} 
           />
          
        

             </Switch></>
             

           :
      
   <Switch>
           
       
            <Route exact path='/' render={()=><Login
            handleLogin={this.handleLogin}
            LoginUsername = {this.state.LoginUsername}
            LoginPassword = {this.state.LoginPassword}
            handleChange={this.handleChange}
            username = {this.state.username}
            NewUsername = {this.state.NewUsername}
            NewPassword = {this.state.NewPassword}

            />}/>
           
          
            <Route path="/signup" render={()=><Signup
                 LoginUsername = {this.state.LoginUsername}
                 LoginPassword = {this.state.LoginPassword}
                 handleChange={this.handleChange}
                 username = {this.state.username}
                 handleSignUp={this.handleSignUp}
                 NewUsername = {this.state.NewUsername}
                 NewPassword = {this.state.NewPassword}
          
          />}/> 
              
         
            
          <Route path="/forgotpassword" component={ForgotPassword} />
          
          
              
        
        
        
            <Login  handleLogin={this.handleLogin}
            LoginUsername = {this.state.LoginUsername}
            LoginPassword = {this.state.LoginPassword}
            handleChange={this.handleChange}
            username = {this.state.username}
            NewUsername = {this.state.NewUsername}
            NewPassword = {this.state.NewPassword}
          
            />
            </Switch>
            
            }
        </>  
          
         </div>
        
      
    )
  }
}
export default App;
