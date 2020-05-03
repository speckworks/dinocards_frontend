import React from 'react';
import Flickity from "react-flickity-component";
import DinoCard from "./dinoCard.js"
import background from "./parchment.jpg"

import "./flickity.css";

export default function Carousel(props){

    let carouselcard;
    if (props.dinocards.length > 0) {
        carouselcard = props.dinocards.map((card) => {
        return <DinoCard 
        className="card carousel-cell"
        key={card.id} 
        deleteDino={props.deleteDino}
        dinocard={card}/>
        })
    }
    return (
        <div className="carousel"
        style={{'backgroundImage': `${'url(background)'}`}}>
        <Flickity>{carouselcard}</Flickity>
        </div>
    )
}  
