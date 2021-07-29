import React from 'react';
import './CardProduct.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import dataFood from '../../../backend/json/products.json'
import Peticiones from '../../../backend/firebase/Peticiones';

const CardProduct = (props) =>{
    const food = dataFood;
    const imgX = "https://blogging-techies.com/wp-content/uploads/2020/06/best404pluginswp.jpg";
    const pdb = new Peticiones();

    const imgNotFound = e =>{
        e.target.src = imgX;
    }

    const addCart = data =>{
        props.toggle(Number(props.stad)) 
        
        pdb.addCart(data);
        props.card(Number(!props.st));
    }

    return(
        <div class="row" style={{ justifyContent:'center'}}>
            {food.map(data =>{ return (
                <div class="col-md-3 col-sm-6" key={data.id}>
                    <div class="product-grid new">
                        <div class="product-image">
                            <a href="/" class="image">
                                <img class="pic-1" src={data.image} alt={"img not found"} onError={imgNotFound}/> 
                            </a>
                            <span class="product-new-label">New</span>
                            <ul class="product-links">
                                <li onClick={e =>{ e.preventDefault();
                                    addCart(data)}}> 
                                    <a href="/" data-tip="Add to Cart"><FontAwesomeIcon icon={faShoppingCart}/></a></li>
                            </ul>
                            <div class="price">{data.time}</div>
                        </div>
                    <div class="product-content">
                        <h3 class="title"><a href="/">{data.name}</a></h3>
                        <ul class="rating">
                            <div className={"descri"}>
                                <FontAwesomeIcon icon={faStar} color={"#FFD200"} />
                                <p style={{margin:5}}>{data.qualification}</p>
                                <p style={{margin:5}}> - ${data.price}</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            )})}
        </div>        
    );
}

export default CardProduct;