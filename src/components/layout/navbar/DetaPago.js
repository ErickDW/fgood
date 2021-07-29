import './DetaPago.css'
import {Col, Container, Row, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faArrowRight } from '@fortawesome/free-solid-svg-icons'



function DetaPago() {
  return (
    
      <Container className={"carS "}>
          <Row className={"justT"}>
              <Col className={""}>
                <h4>Total:</h4>
              </Col>
              <Col className={"justT"}>
                <h3>25.34</h3>
              </Col>
          </Row>
          <Row style={{justifyContent: 'flex-end'}}>__________________________________________</Row>
          <Row className={"justT"}>
              <Col className={".justT"}>
              <p>Persons</p>
              <div class="btn-group" role="group" style={{alignItems:'center' }}>
  <button type="button" class="btn " style={{justifyContent: 'center', borderTopLeftRadius:8, borderBottomLeftRadius:8, display:'flex', alignItems:'center', background:'rgba(204, 204, 204, 0.548)', marginRight:10}}><FontAwesomeIcon icon={faMinus} style={{width:10, height:10}}/></button>
  <h4>1</h4>
  <button type="button" class="btn " style={{justifyContent: 'center', borderTopRightRadius:8, borderBottomRightRadius:8, display:'flex', alignItems:'center', background:'rgba(204, 204, 204, 0.548)', marginLeft:10}}><FontAwesomeIcon icon={faPlus} style={{width:10, height:10}}/></button>
</div>
              </Col>
              <Col style={{paddingTop:10, marginTop:15}}>
                <Button style={{height:65, borderTopLeftRadius:20, borderBottomLeftRadius:20, background:'#FFD644', border:'none'}}>Checkout <FontAwesomeIcon icon={faArrowRight}/></Button>
              </Col>
          </Row>
        
     
      </Container>

  );
}

export default DetaPago;
