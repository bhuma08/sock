import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../App.js"
import "../style.css"

class Nav extends Component {
    constructor() {
        super();


    }

    render() {
        return (
            <div>
                <ul className="navList"> 
                <Link to = "/">
                <li>Home</li>
                </Link>
                <Link to = "/about">
                <li>About</li>
                </Link>
                <Link to = "/shop">
                <li>Shop</li>
                </Link>
                </ul>
            </div>
        )
    }
}

export default Nav;
