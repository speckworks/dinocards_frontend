import React, { Component } from 'react'
import './App.css';



export default class DinoButton extends Component {

    render() {
        // console.log("from the DinoButton", this.props.dinos)
        const dinosArray = this.props.dinos.map(
            (dino)=>{
            return <button  onClick={()=>this.props.handleDinoClick(dino.img)}
                            style={{backgroundImage: `url("${dino.img}")`}} 
                            key={dino.id}
                            className="dinobutton"></button>
                    })
        return (
            <div>
            <ul>
            {dinosArray}
              {/* <button className="button dinobutton2"></button>
              <button className="button dinobutton3"></button>
              <button className="button dinobutton4"></button>
              <button className="button dinobutton5"></button>
              <button className="button dinobutton6"></button>
              <button className="button dinobutton7"></button> */}
            </ul>
            </div>
        )
    }
}
