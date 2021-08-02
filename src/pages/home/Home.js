import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import {Card} from '../../components/ui/card/Card'
import imgR from '../../images/headerimage.png'
import { Col, Container, Row, Dropdown } from 'react-bootstrap';
import CardX from '../../components/ui/slider/SliderObject';
import hambur from '../../images/icons/1046784.svg'
import './Home.css'
import CardProduct from '../../components/ui/cardProduct/CardProduct';

const Home = () =>{
    
    
    return(
        <>      
            <Container>
                <Row>
                    <Container>
                        <Card imgR={imgR}/>
                    </Container>
                </Row>
                <Row>
                    <Container className={"mt-3"}>
                        <Row>
                            <Col className={"hambur"}>
                                <h1>Restaurants</h1>
                                <img src={hambur} alt={"img not found"} className={"hamburImg"}/>
                            </Col>
                            <Col className={"buttonDr"}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{borderRadius: '20px', background: '#F25922', border: 0}}>
                                        <FontAwesomeIcon icon={faClock} style={{marginRight:5}}/>
                                        Delivery Now
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>           
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <CardX/>
                    </Container>
                </Row>
                <Row>
                    <CardProduct/>
                </Row>
            </Container>
        </>
    )
}

export default Home;