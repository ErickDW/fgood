import React from 'react'
import './CardCategory.css'

export const CardCategory = ({props}) =>{
    const name = props.name;
    const icon = props.icon;


    return(
        <div className="cardTX mx-auto Fitness-CardX">
            <div className="center">
               
                    
                        <img src={icon} className="imgFX" alt={"Not found img"}/>
                    
                        <h1 style={{fontSize:15}}>{name}</h1>
                 
            </div>
        </div>
    )
}

export default CardCategory;