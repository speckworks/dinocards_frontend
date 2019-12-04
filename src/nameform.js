import React, { Component } from 'react'

export default class Nameform extends Component {
    state={
        value:""
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.value)
        this.setState({value:""})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                            Name:
                        <input onChange={this.handleChange} type="text" name="value" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
