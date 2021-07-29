import React from 'react'
import perCel from '../../../images/d.png'
import './Card.css'

export const Card = (props) =>{
    const imgR = props.imgR ? props.imgR : perCel;

    return(
        <div className="cardT mx-auto Fitness-Card">
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img src={imgR} className="float-right imgF" alt={"Not found img"}/>
                    </div> 
                    <div className="col-6 Fitness-Card-Info">
                        <div className={"carde"}>
                            <h1>$0 delivery for 30 days!</h1>
                            <img src={perCel} alt={"Not found img"} style={{width: 30, height: 30, marginLeft: 15}}/>
                        </div>
                        <p>$0 delivery fee for orders over $10 for 30 days</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;