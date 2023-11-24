const intialState = [];

export default function (state = intialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            // Not mutating data
            // return [...state, action.payload];

            // Mutating data
            state.unshift(action.payload);
            return state;
        case 'DELETE_TODO': {
            // Mutating the data
            state.splice(action.payload, 1);
            return state;

            //Not mutating the data
            // const newState = state.filter((list, index) => index !== action.payload);
            // return newState;
        }
        default:
            return state;
    }
}
