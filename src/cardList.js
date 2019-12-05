import React, { Component } from 'react'
import DinoCard from './dinoCard.js';
import Nameform from './nameform.js';
import './App.css';

export default class cardList extends Component {
    state = {
        dinocard:[]
                }
        
    handleSubmit = (newCardName) => {
        this.setState({ dinocard:{name:newCardName,
                        id:`${this.props.id}`,
                        color:`${this.props.color}`,
                        dino_img:`${this.props.dinoImg}`}
                    },()=>this.props.handleSubmitApp(this.state.dinocard))
        this.setState({value:""})
                    }

    render() {
        console.log("cardlist state dinocards", this.state.dinocards)
        const dinocard = this.props.dinocards.map(
            (card) => {
            return <DinoCard 
            key={card.id} 
            name={card.name} 
            dinoImg={card.dino_img} 
            color={card.color}/>
            }
        )
        return (
            <div>
                <ul>3.Enter Your Name.</ul>
                <Nameform handleSubmit={this.handleSubmit}/>
                <div>
                {dinocard}
                </div>
                {/* <DinoCard   name={this.state.dinocard.name}
                            dinoImg={this.props.dinoImg} 
                            color={this.props.color}/> */}
            </div>
        )
    }
}
