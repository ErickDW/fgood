import { Link } from "react-router-dom";
import styled from "styled-components";
import {breakpoints as bp} from '../../../GlobalStyle';
// import { faReceipt} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardTime from "../../ui/card/CadrTime";
import {Container} from 'react-bootstrap'

const StyleLink = styled(Link)`
  font-size: var(--fsize-7);
  font-weight: 700;
  color: #000;
  
 
  &:hover {
    text-decoration: none;
  }


  @media(max-width: ${bp.desktop}) {
      span {
          opacity: 1;
      }
  }
`;

function Deta() {
  return (
    <StyleLink >
      <Container className="mt-3 mb-4">
        <div className={'emo'}>
          <h3 style={{marginLeft:40, marginRight:15}}>My</h3>
          <img  src={"https://emojigraph.org/media/joypixels/smiling-face-with-sunglasses_1f60e.png"} alt="Not Found" style={{width:25, height:25}}/>
          </div>
          
          <h3 style={{marginLeft:40}}>Order</h3>
          <Container>
            <CardTime/>
          </Container>
     
      </Container>

    </StyleLink>
  );
}

export default Deta;
