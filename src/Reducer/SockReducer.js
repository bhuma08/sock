const initialState = {
    sock: [
        "Socks= The orugin of the word",
        "Rock those socks",
        "Clocking on",
        "The divorce rate among my sock is astonishing!",
        "90% of my socks are single but I don't see them crying"
    ]
}

function SockReducer (state = initialState, action) {

    switch (action.type) {
        case "ADD_NEW_SOCK":
            const newSock = action.payload
            return{
                ...state, sock:[...state.sock, newSock]
            }
        case "REMOVE_NEW_SOCK":
            const sockCopy = [...state.sock]
            
            sockCopy.pop()
           
            return {...state, sock: sockCopy}
        
           
                // ...state, sock:[...state.sock.splice(4, action.payload), ...state.sock.splice(1)]
            
        default:
            return state;
    }
}

export default SockReducer