import React, {Component} from "react";
import { connect } from "react-redux";

class About extends Component {
    constructor() {
        super();

        this.state = { userInput: " " }
        }
        
        handleChange = e => this.setState({ userInput: e.target.value })

        updateSockSaying = e =>  {
            e.preventDefault();
            this.props.addNewSock(this.state.userInput);
            this.setState({ userInput: "" })
        }

        removeSockSaying = e => {
            e.preventDefault();
            this.props.deleteNewSock(); 
        }

    render() {
        const renderThese = this.props.socksayings.map((th, i) => <li key={i}>{th}</li>)

        return (
            <div>

                <h1>This is the About Page!</h1>
                <ul>
                { renderThese }
                </ul>

                <form>
                <input type="text" id="saying" value={this.state.userInput} onChange={this.handleChange}></input>
                <input type="submit" value="Sock it" id="submit" onClick={this.updateSockSaying}></input>
                <input type="submit" id="deleteSaying" value="Un-Sock it" onClick={this.removeSockSaying}></input>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    socksayings:state.sock
})

const mapsDispatchToProps = dispatch =>({
    addNewSock: newSock => dispatch({ type: "ADD_NEW_SOCK", payload: newSock}),
    deleteNewSock: () => dispatch({ type: "REMOVE_NEW_SOCK"})
})

export default connect (mapStateToProps, mapsDispatchToProps)(About);
