import React, { Component } from 'react'
import './App.css';
import DinoButton from './dinoButton.js'
import Nameform from './nameform.js'
import DinoCard from './dinoCard.js';
import ColorButton from './colorButton.js'

export default class App extends Component {
    state = { dinos:[],
             colors:[],
             usercard:""
    }
  componentDidMount(){
    fetch("http://localhost:3000/dinos")
    .then(res=>res.json())
    .then(dinoObj =>{
      this.setState({
        dinos:dinoObj
      })
    }) 

    fetch("http://localhost:3000/colors")
    .then(res=>res.json())
    .then(colorObj =>{
      this.setState({
        colors:colorObj
      })
    }) 
  }

  render() {
    return (
      <div>
        <ul className="App">1. Choose a Dino.</ul>
          <DinoButton className="App" dinos={this.state.dinos}/>
          <div>
        <ul>2. Choose a Color.</ul>
            <ul className="color button">
            < ColorButton colors={this.state.colors}/>
              {/* <button className="button button1"></button>
              <button className="button button2"></button>
              <button className="button button3"></button>
              <button className="button button4"></button>
              <button className="button button5"></button>
              <button className="button button6"></button>
              <button className="button button7"></button> */}
            </ul>
            </div>
          <ul>3.Enter Your Name.</ul>
          <Nameform />
          <div className="card">
          </div>
          <div className="container center">
            <p className="App">New Dino Card Here</p>
          <DinoCard /> 
          </div>
      </div>
    )
  }
}

