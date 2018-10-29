import React, { Component } from 'react'

class Hobby extends Component {
    constructor(){
        super()
        this.state = {
            hobby: '',
            hobbies: []
        }
    }

    componentDidMount(){
        this.hydrateStateWithLocalStorage()

        window.addEventListener(
            "beforeunload", 
            this.saveStateToLocalStorage.bind(this)
        )
    }
    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
            )
            this.saveStateToLocalStorage()
        }
        

    hydrateStateWithLocalStorage(){
        for(let key in this.state) {
            if (localStorage.hasOwnProperty(key)) {
                let value = localStorage.getItem(key)

                try{
                    value = JSON.parse(value)
                    this.setState({ [key]: value})
                } 
                catch (e) {
                    this.setState({ [key]: value})
                }
            }
        }
    }
        updateInput(key,value){
            this.setState({ [key]: value })
        // localStorage.setItem(key, value)
    }

    saveStateToLocalStorage(){
        for(let key in this.state) {
            localStorage.setItem(key, JSON.stringify(this.state[key]))
        }
    }
    addHobby(){
        //NEW Hobby
        const hobby = {
            id: 1 + Math.random(),
            value: this.state.hobby.slice()
        }
        //copy current arr of hobbies
        const hobbies = [...this.state.hobbies]

        hobbies.push(hobby)

        this.setState({
            hobbies,
            hobby: ""
        })
        // localStorage.setItem("hobbies", JSON.stringify(hobbies))
        // localStorage.setItem("hobby", '')
    }
    
    deleteHobby(id){
        const hobbies = [...this.state.hobbies]
        const updatedList = hobbies.filter(hobby => hobby.id !== id)
        this.setState({
            hobbies: updatedList
        })
        // localStorage.setItem("hobbies", JSON.stringify(hobbies))
    } 

    render() {
        return(
            <div>
                <div>
                    <input 
                        type="text"
                        placeholder="Write hobby here"
                        value={this.state.hobby}
                        onChange={e => this.updateInput("hobby", e.target.value)}
                    />
                    <button
                        onClick={() => this.addHobby()}
                    >
                    ADD
                    </button>
                    <br /> <br />
                    <ul>
                        {this.state.hobbies.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.value}
                                    <button onClick={() => this.deleteHobby(item.id)}>
                                        Remove
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}


export default Hobby