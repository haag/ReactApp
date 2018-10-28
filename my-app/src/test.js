import React, { Component } from 'react'


class Test extends Component{
    constructor(props){
        super()

        this.state = {
            username: 'Me',
            isToggleOn: true,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    render() {
        return (
            <div>
                Hello {this.state.username}
                <div>
                    Toggle: {this.state.toggle}
                </div>
                <div>
                    Change Name:
                <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                </div>
                
                <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
    handleChange(e) {
        this.setState({username: e.target.value})
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }
}

export default Test