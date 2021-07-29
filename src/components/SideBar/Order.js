import React, {useState} from 'react';
// import {Button} from 'react-bootstrap'
import {Offcanvas} from 'react-bootstrap'

const options = {
    scroll: false,
    backdrop: true,
};
  
export const Order = ({too}) => {
    const [show, setShow] = useState(too);
  
    const handleClose = () => setShow(false);
  
  
    return (
      <>
          <Offcanvas show={show} onHide={handleClose} {...options}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  export default Order;