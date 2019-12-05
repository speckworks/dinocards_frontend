import React, { Component } from 'react'

export default class dinoCard extends Component {
    render() {

        return (
            <div    className="card" 
                    style={{background:this.props.color}}>
            <div>  {this.props.name}</div>
            <img    src={this.props.dinoImg} alt="dinosaur" className="card"></img> 
            </div>
        )
    }
}
