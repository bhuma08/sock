import React, { Component } from 'react'

class Like extends Component {
    constructor(){
        super()
        this.state = { 
            likeOrDislike: false,
        }
    }
    Heart = e => {
        e.stopPropagation()
        this.setState(prevState => ({ likeOrDislike: !prevState.likeOrDislike }))
    }
 

    render() {
        return (
            <div>
                <span id="heartBtn" onClick={this.Heart} style={{ color: this.state.likeOrDislike ? 'pink' : 'grey' }}>  ❤  </span>
           
            </div>
        )
    }
}




export default Like;