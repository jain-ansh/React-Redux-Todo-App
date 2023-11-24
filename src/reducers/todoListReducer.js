const intialState = ["Learn Js", "Learn Node"];

export default function (state = intialState, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            // Mutating data
            state.unshift(action.payload);
            return state;

            // Not mutating data
            // return [...state, action.payload];
        }
        case 'DELETE_TODO': {
            // Mutating the data
            state.splice(action.payload, 1);
            console.log("State after deletion with Mutation", state);
            return state;

            // Not mutating the data
            // const newState = state.filter((list, index) => index !== action.payload);
            // return newState;
        }
        default:
            return state;
    }
}
