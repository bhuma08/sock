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
        this.setState(prevState => ({ 
            review: prevState.review,
            review: " "
        }));
        console.log(this.state.review)
    }

    render() {
       
        return (
            <div>
                
                <textarea value={this.state.review} name="reviewInput" id="reviewInput" onChange={this.handleChange}></textarea><br></br>           
                <input type="submit" id="submit" onClick= {this.addReview} value="Add a review"></input>
                <p>{ this.state.review }</p>
            
            </div>
        )
    }
}




export default Review;