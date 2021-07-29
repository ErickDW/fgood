import { Col, Container, Row } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import Tooltip from "../../ui/Tooltip";


const StyledLink = styled(Link)`

  
 
  color: #000;
  font-weight: bold;
  box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);
 
  
  &:hover {
    text-decoration: none;
    background-color: rgba(255 255 255 / 5%);
  }
 
 
`;

function NavLink({ children, image, plato, precio, ...rest }) {
  
  const imgX = "https://blogging-techies.com/wp-content/uploads/2020/06/best404pluginswp.jpg";

   const imgNotFound = e =>{
        e.target.src = imgX;
   }

  return (
    <Tooltip text={plato} disabled={!rest.compact} placement="right">
      <StyledLink to="/products" {...rest}>
        {children || (
          <>
            <Container >
              <Row className={"align-items-center"}>
                <Col>
                  <img src={image} alt={"Not found"} onError={imgNotFound} style={{height:'40px', borderRadius:'15%'}}/>
                </Col>
                <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  {/* <p>{label}</p> */}
                  <p style={{marginRight:8}}>1</p>
                  <p style={{marginRight:8}}>x</p>
                  <p>{plato}</p>
                </Col>
                <Col>
                  <p>{precio}</p>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </StyledLink>
    </Tooltip>
  );
}

export default NavLink;
