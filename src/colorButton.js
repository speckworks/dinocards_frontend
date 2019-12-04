import React, { Component } from 'react'

export default class colorButton extends Component {
    render() {
        // console.log(this.props.colors)
        const colorArray = this.props.colors.map(
            (color)=>{
            return <button  onClick={()=>this.props.handleColorClick(color.color)}
                            style={{backgroundColor:`${color.color}`}}
                            key={color.id} 
                            className="colorbutton"></button>
                    })
        return (
            <div>
                {colorArray}
            </div>
        )
    }
}
