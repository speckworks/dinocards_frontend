import React, { Component } from 'react'
import './App.css';



export default class DinoButton extends Component {

    render() {
        // console.log("from the DinoButton", this.props.dinos)
        const dinosArray = this.props.dinos.map(
            (dino)=>{
            return <button  onClick={
                            ()=>this.props.handleDinoClick(dino.img)
                                    }
                            style={{backgroundImage: `url("${dino.img}")`}} 
                            key={dino.id}
                            className="dinobutton"></button>
                    })
        return (
            <div>
            <ul>
            {dinosArray}
            </ul>
            </div>
        )
    }
}
