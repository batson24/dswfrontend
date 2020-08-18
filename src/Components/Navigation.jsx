import React from 'react'
import {Link} from 'react-router-dom'
import {Nav, Navbar, Form, Button} from 'react-bootstrap'
// import NavbarOffcanvas from 'react-bootstrap-navbar-offcanvas'
export default function Navigation(props) {
    return (
      
       
        <div   bg='light' variant='light'>
            <Navbar bg="light" variant="light">
            <Nav className="navbar">  
            <Link className='nav-link' to='/'>Profile</Link>
            <Link className='nav-link' to='/timeline'>Timeline</Link>
            <Link  className='nav-link' to='/IWY'>I want You</Link>
            <Link className='nav-link' to='/speed'>Speed Date</Link>
            <Link className='nav-link' to='/middleman'>Middle Man</Link>
            <Link className='nav-link' to='/inbox'>Inbox</Link>
            
            </Nav>
            <Form className='logoutButton' inline>
             <Button onClick={()=> props.handleLogout()} className="mr-sm-2" to='/'>Log-Out</Button>   
            <button  className="mr-sm-2" onClick={()=> props.delete()} >Delete User></button>   
            </Form>
            </Navbar>
            
        </div>






    )
}




            
     
        
            
   