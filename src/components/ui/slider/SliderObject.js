import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import CardCategory from "./CardCategory";


// Import Swiper styles
import 'swiper/swiper-bundle.css';
import dataCategory from '../../../backend/json/categories.json'
import './SliderObject.css'

const categories = dataCategory;

const CardSli = () => {
 
    
    return (
      <>
            <div className="mx-auto Fitness-Card ">
                <div className="card-body cardTXE">
                
                    <div className="row center">
                        <div style={{width: '350px'}}>
                            
                            <Swiper
                                
                                spaceBetween={10}
                                slidesPerView={4}
                                onSlideChange={() => console.log('slide change, holsofoas')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {categories.map(data =>{
                                    return(<SwiperSlide key={data.id}>
                                        <CardCategory props={data}/>
                                    </SwiperSlide>)
                                })}
                            </Swiper>
                            
                        </div> 
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
  
}

export default CardSli;