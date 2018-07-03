import { createStore } from 'redux';

//We set it a default argument as an empty object so that it does not throw an error if 
//no arguments are passed
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducer
// 1. Reducers are pure functions
// 2. Never change state or action(don't change them directly and only return the new state)

const countReducer = (state = { count: 0 }, action) => {
    const { incrementBy, decrementBy, count } = action;
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - decrementBy
            } 
        case 'SET':
            return {
                count: count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    };
};

//Supplying default value of state
const store = createStore(countReducer);

//Gets called whenever the state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Allows us to send an action to the store
//Type must be provided
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
// unsubscribe();












//Returns the current state object
// console.log(store.getState());