import React from 'react';

//El ccs de las cards 
import './CardProduct.css';

//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

//La data de las cards
import dataFood from '../../../backend/json/products.json'

//Las funciones para añadir a firestore
import Peticiones from '../../../backend/firebase/Peticiones';

//imagen por defecto en caso de perdida 
const imgX = "https://blogging-techies.com/wp-content/uploads/2020/06/best404pluginswp.jpg"; 

const CardProduct = () =>{
    const food = dataFood; //Data de las cards
    const pdb = new Peticiones(); //Peticiones a firestore
   
    const imgNotFound = e =>{ //fun para la img en caso de perdida
        e.target.src = imgX;
    }

    const addCart = data =>{ //agregarr a la db
        pdb.addCart(data);
    }

    return(
        <div className="row" style={{ justifyContent:'center'}}>
            {food.map(data =>{ return (
                <div className="col-md-3 col-sm-6" key={data.id}>
                    <div className="product-grid new">
                        <div className="product-image">
                            <a href="/" className="image"> 
                                {/* imagen del producto */}
                                <img className="pic-1" src={data.image} alt={"img not found"} onError={imgNotFound}/> 
                            </a>
                            {/* si el produco es nuevo */}
                            <span className="product-new-label">New</span>
                            <ul className="product-links">
                                {/* boton del carro */}
                                <li onClick={e =>{ e.preventDefault();
                                    addCart(data)}}> 
                                    <a href="/" data-tip="Add to Cart"><FontAwesomeIcon icon={faShoppingCart}/></a>
                                </li>
                            </ul>
                            {/* tiempo de llegada */}
                            <div className="price">{data.time}</div>
                        </div>
                        <div className="product-content">
                            {/* nombre del producto */}
                            <h3 className="title"><a href="/">{data.name}</a></h3>
                            <ul className="rating">
                                <div className={"descri"}>
                                    {/* descripcion del producto, estrella, calificacion y precio */}
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