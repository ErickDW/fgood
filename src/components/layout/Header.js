import styled from "styled-components";
import { useState} from "react";
import { breakpoints as bp } from "../../GlobalStyle";
import { useAuth } from "../../backend/utils/authContext";
import Tooltip from "../ui/Tooltip";
import { Avatar, IconButton } from "../ui/core";
import AccountInfo from "./header/AccountInfo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Navbar, FormControl, Container, Button} from 'react-bootstrap'
// import Navbarr from "../NavBar/Navbar";

import { Offcanvas } from "react-bootstrap";

const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  height: 48px;
  align-items: stretch;
  padding: 0 24px;
  > div {
    display: flex;
    align-items: center;
  }
  button {
    white-space: nowrap;
  }
  .nav-toggle {
    pointer-events: none;
    opacity: 0;
    @media (max-width: ${bp.desktop}) {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

const Gridi = styled.div`
  .nav-toggle {
    pointer-events: none;
    opacity: 0;
    @media (max-width: ${bp.desktop}) {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
const options = {
  scroll: false,
  backdrop: true,
};

function   Header({ toggle, stad }) {
  const auth = useAuth();

  const togglex = () => setShow(Number(!show));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [error, setError] = useState('');
 
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await auth.signOut();
    } catch (e) {
        console.error(e, error);
        setError(e.message);
    }
  }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...options}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Example</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button onClick={handleLogout}>Logout</Button>
        </Offcanvas.Body>
      </Offcanvas>
      <Grid>
        <IconButton
          onClick={() =>{
            const fun1 = toggle;
            if(!stad){
              fun1();
            }
            togglex();
          }}
          icon={faBars}
          style={{ marginLeft: "-11px" }}
        />
        <Container>
          <Navbar.Brand>Chukwudi</Navbar.Brand>
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2 "
            aria-label="Search"
            src={"H"}
            style={{borderRadius:55}}
          />
        </Container>
        <Container>
          <Tooltip text={<AccountInfo user={auth.user}/>}>
            <IconButton bg="primary" size={5}>
              <Avatar
                size={5}
                bg="primary"
                image={auth.user.profileImage}
                name={auth.user.displayName || auth.user.email}
              />
            </IconButton>
          </Tooltip>
        </Container>
      </Grid>
      <Gridi>
        <div style={{textAlign: "center", marginTop:8}}>
          <Button className="nav-toggle" style={{borderRadius: 50}}
          onClick={toggle}>Your order</Button>
        </div> 
      </Gridi>
    </>
  );
}

export default Header;
