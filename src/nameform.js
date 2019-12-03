import React, { Component } from 'react'

export default class Nameform extends Component {
    state={
        value:""
    }

    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({[event.target.name]:event.target.value})
    }

    render() {
        return (
            <div>
                <form>
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
