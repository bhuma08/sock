import React, {Component} from "react";
import "../style.css";
import Like from "../Components/Like"
import Basket from "../Components/Basket"
import Review from "../Components/Review"

class Shop extends Component {
    constructor() {
        super();
        this.state ={
            loading: true,
            picture: " "
        }
    }
    async componentDidMount(){
        const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({picture: data, loading : false})
        console.log(data);
    }

    render() {
        return (
            <div>
                <h1>This is the Shop Page!</h1>
        
                { this.state.loading || !this.state.picture ? (
                <div>loading...</div>
                ) : (
                <div id="container"> 

                <div>
                <img src = {this.state.picture[0].image_link}/>
                <div>{this.state.picture[0].price}</div>
                <Like></Like>
                <Review></Review>
                </div>

                <div>
                <img src = {this.state.picture[1].image_link}/>
                <div>{this.state.picture[1].price}</div>
                <Like></Like>
                <Review></Review>
                </div>

                <div>
                <img src = {this.state.picture[2].image_link}/>
                <div>{this.state.picture[2].price}</div>
                <Like></Like>
                <Review></Review>
                </div>

                </div>   
                )}

            </div>
        )  
    }
}



//redux: recommended stuff- Netflix
//redux: stuff to recommend me

export default Shop;