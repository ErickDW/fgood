import React from 'react'
import './CardTime.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export const CardTime = (props) =>{

    return(
        <div className="cardTime mx-auto Fitness-CardTime">
            <Container>
                <Row>
                    <Col className={"centre"}>
                        <h1 style={{fontSize:12, color:'#FFF' }}>Direccion lorem</h1>
                        <div className={"justT mt-4"}>
                            <FontAwesomeIcon icon={faClock} style={{ color:'#FFD644', height: 15, width:15, marginRight:10}}/>
                            <h1 style={{fontSize:12, color:'#FFF' }}>35 min</h1>
                        </div>
                        
                    </Col>
                    <Col className={"end"}>
                        <h1 style={{fontSize:12, color:'#FFD644'}}>Edit</h1>
                        <h1 style={{fontSize:12, color:'#FFD644'}} className={"mt-4"}>Choose time</h1>

                    </Col>
                </Row>
                        
            </Container>
        </div>
    )
}

export default CardTime;