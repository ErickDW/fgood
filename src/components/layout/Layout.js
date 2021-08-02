import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";
import { useAuth } from "../../backend/utils/authContext";

const Grid = styled.div`
  display: grid;
  grid:
    "header nav" 
    "main nav" 1fr / 1fr;
    
  min-height: 100vh;
`;

const GridNav = styled.div`
  grid-area: nav;
  z-index: 2000;
`;

const GridHeader = styled.header`
  grid-area: header;
`;

const GridMain = styled.main`
  grid-area: main;
`;


function Layout({ children, ...rest }) {

  const auth = useAuth(); //Usuario
  const [showNav, setShowNav] = useState(0); //Estado del slaider derecho
  const toggle = () => setShowNav(Number(!showNav)); //Funcion del slaider derecho

  return (
    <Grid {...rest}>
      {auth.user && (
        <>
          <GridHeader>
            <Header toggle={toggle} stad={showNav} />
          </GridHeader>
          <GridNav>
            <Navbar visible={showNav} close={toggle}/>
          </GridNav>
        </>
      )}
      <GridMain>{children}</GridMain>
    </Grid>
  );
}


export default Layout;
