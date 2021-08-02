import React from 'react';

//Cards, Seccion principal
import { Card } from '../../components/ui/card/Card'
//Seccion de las categorias
import CardX from '../../components/ui/slider/SliderObject';
//Cards de los productos
import CardProduct from '../../components/ui/cardProduct/CardProduct';

//Estilos
import './Home.css'
import { Col, Container, Row, Dropdown } from 'react-bootstrap';

//imgs
import imgR from '../../images/headerimage.png'

//Iconos
import hambur from '../../images/icons/1046784.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const Home = () =>{
    
    return(
        <>      
            <Container>
                <Row>
                    <Container>
                        {/* Seccion principal */}
                        <Card imgR={imgR}/>
                    </Container>
                </Row>
                <Row>
                    <Container className={"mt-3"}>
                        <Row>
                            {/* Divisor entre la seccionprincipal y las categorias junto al cuerpo de cards */}
                            <Col className={"hambur"}>
                                <h1>Restaurants</h1>
                                <img src={hambur} alt={"img not found"} className={"hamburImg"}/>
                            </Col>
                            <Col className={"buttonDr"}>
                                {/* Boton de opciones */}
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
                        {/* Seccion de categorias */}
                        <CardX/>
                    </Container>
                </Row>
                <Row>
                    {/* Cards de los productos */}
                    <CardProduct/>
                </Row>
            </Container>
        </>
    )
}

export default Home;