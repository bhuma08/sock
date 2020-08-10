import React, { Component } from 'react'

class Basket extends Component {
    constructor(){
        super()
        this.state = { 
            likeOrDislike: false,
        }
    }
    Basket = e => {
        e.stopPropagation()
        this.setState(prevState => ({ likeOrDislike: !prevState.likeOrDislike }))
    }
 

    render() {
        return (
            <div>
                <span id="heartBtn" onClick={this.Basket} style={{ color: this.state.likeOrDislike ? 'pink' : 'grey' }} > 🛒	#128722 </span>
           
            </div>
        )
    }
}

export default Basket;