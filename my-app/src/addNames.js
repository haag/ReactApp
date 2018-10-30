import React from 'react'


class Names extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            names: ["John"]
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        console.log(e.target.value)
        this.setState({ name: e.target.value })
    }
    handleSubmit(e){
        console.log(e)
        // alert('A name was submitted: ' + this.state.value);
        this.setState({
            names: this.state.names.concat(this.state.name)
        })
        this.setState({
            name: ''
        })
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>
                        Name: 
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                    </label>
                    <input 
                        type="submit"
                        value="Submit"
                        />
                </form>
                {this.state.names.map(name => {
                    return(
                    <li>
                        {name}
                    </li>
                        )
                })}
                {/* {this.state.names} */}
            </div>
        )
    }
}




export default Names