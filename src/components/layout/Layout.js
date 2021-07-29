import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";
import { useAuth } from "../../backend/utils/authContext";
import Home from '../../pages/home/Home'
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


// class Layout extends Component{

// }({ children, ...rest }) {
//   const auth = useAuth();
//   const [showNav, setShowNav] = useState(0);
//   const toggle = () => setShowNav(Number(!showNav));

//   const [data, setData] = useState([]);
//   const cardDetails = (props) => {setData([...props.data]); console.log(data)};

//   return (
//     <Grid {...rest}>
//       {auth.user && (
//         <>
//           <GridHeader>
//             <Header toggle={toggle} stad={showNav} />
//           </GridHeader>
//           <GridNav>
//             <Navbar visible={showNav} close={toggle} cardDetails={cardDetails}/>
//           </GridNav>
          
//         </>
//       )}
//       <GridMain><Home cardDetails={cardDetails}/></GridMain>
//     </Grid>
//   );
// }


function Layout({ children, ...rest }) {
  const auth = useAuth();
  const [showNav, setShowNav] = useState(0);
  const toggle = () => setShowNav(Number(!showNav));

  const [data, setDataR] = useState(1);
  const cardDetails = () => setDataR(Number(!data));

  return (
    <Grid {...rest}>
      {auth.user && (
        <>
          <GridHeader>
            <Header toggle={toggle} stad={showNav} />
          </GridHeader>
          <GridNav>
            <Navbar visible={showNav} close={toggle} carddt={cardDetails} stado={data}/>
          </GridNav>
          
        </>
      )}
      <GridMain>
        {/* <Home cardDetax={cardDetails}/> */}
        <Home carddata={cardDetails} sta={data} toggleX={toggle} stadX={showNav}/>

      </GridMain>
    </Grid>
  );
}


export default Layout;
