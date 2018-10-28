import React, {Component} from 'react'
import Logo from "./logo"

class Toggle extends Component{
    constructor(){
        super()
        this.state = {
            toggle: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render(){
        return(
            <div className="LOGO" onClick={this.handleClick}>
                {!this.state.toggle && <Logo />}
                {this.state.toggle && "Turn Logo On"}
            </div>
        )
    }
    
}



export default Toggle
