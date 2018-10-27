import React, { Component } from 'react'


class Test extends Component{
    constructor(props){
        super()

        this.state = {
            username: 'Me'
        }
        
    }
    
    render() {
        return (
            <div>
                Hello {this.state.username}
                Change Name:
                <input 
                type="text"
                value={this.state.username}
                onChange={e => this.handleChange(e.target.value)}
                />
                </div>
        )
    }
    handleChange(e) {
        this.setState({e})
    }
}

export default Test