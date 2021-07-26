// import React, {useState} from 'react';
import React from 'react';
//import {authFb} from '../../backend/firebase/config'
// import { useHistory } from 'react-router-dom';
import Navbarr from '../../components/NavBar/Navbar';

import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const Home = () =>{
    // const [error, setError] = useState('');
    // const history = useHistory();
    //const [user] = useState(authFb.currentUser);



    /*const handleLogout = async ()  =>{
        try {
           await authFb.signOut();
           history.push('/loginandregister');
        } catch (e) {
            
            setError('Ocurrio un error: ', e, error);
        }
    }*/
    return(
        <>  
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">
                Navbar scroll
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
            
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
            <Navbarr/>
            
        </>
    )
}

export default Home;