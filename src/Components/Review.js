import React, { Component } from 'react'

class Review extends Component {
    constructor(){
        super()
        this.state = { 
            review : " ",
        }
    }

    handleChange = e => this.setState({ review: e.target.value })

    addReview = e => {
        e.preventDefault()
        const data = this.state
        console.log("Review data is: ", data)
        // this.setState({ review: " " })
    }

    render() {
       
        return (
            <div>
                
                <textarea value={this.state.review} onChange={this.handleChange}></textarea><br></br>           
                <input type="submit" onClick= {this.addReview} value="Add a review"></input>
                <p>{ this.state.review }</p>
            
            </div>
        )
    }
}




export default Review;