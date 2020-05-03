import React from 'react';
import Flickity from "react-flickity-component";
import DinoCard from "./dinoCard.js"

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
        <div className="carousel">
        <Flickity>{carouselcard}</Flickity>
        </div>
    )
}  
