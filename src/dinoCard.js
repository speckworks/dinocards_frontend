import React, { Component } from 'react'

export default class dinoCard extends Component {
    render() {

        return (
            <div    className="card" 
                    style={{background:this.props.color}}>
            <img src={this.props.dinoImg}></img>
                {/* <div style={{backgroundImage: `url("${this.props.dinoImg}")`}}>yer dino</div> */}
            </div>
        )
    }
}
