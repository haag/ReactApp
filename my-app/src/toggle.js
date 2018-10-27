import React, {Component} from 'react'
import logo from './logo.svg';

class Toggle extends Component{
    constructor(props){
        super()

        this.state = {
            toggle: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    logo = <img src={logo} className="App-logo" alt="logo" />
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                {/* ~Press Here~ */}
                {this.state.toggle ? 'ON' : 'OFF'}
                </button>
                {this.logo}
                
            </div>
        )
    }
    handleClick(){
        this.setState(state => ({
            toggle: !state.toggle
        }))
    }
    
}



export default Toggle