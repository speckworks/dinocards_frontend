import React, { Component } from 'react'
import './App.css';
import DinoButton from './dinoButton.js'
import Nameform from './nameform.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>1. Choose a Dino.</ul>
            <DinoButton />
            <div>
        <ul>2. Choose a Color.</ul>
            <ul className="color button">
              <button className="button button1"></button>
              <button className="button button2"></button>
              <button className="button button3"></button>
              <button className="button button4"></button>
              <button className="button button5"></button>
              <button className="button button6"></button>
              <button className="button button7"></button>
            </ul>
            </div>
          <ul>3.Enter Your Name</ul>
          <Nameform />
    
                <div className="card">
                </div>
                <div className="container center">
                  <p>New Dino Card Here</p>
                </div>
      </div>
    )
  }
}

