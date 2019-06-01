import {createStore} from "redux";

//action generators are functions that return action objects

const incrementCount = ( {incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy 
});

const decrementCount = (payload = {}) => ({
        type: 'DECREMENT',
        decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
});

const resetCount = () => ({
        type: 'RESET',
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})

//reducers 1. are pure functions  (dont change anything outside of scope or use anything outside of it) that should only change the state but not directly
//they JUST return the new state, not change the state directly!!! 

const countReducer = (state = {count: 0}, action) =>{
    switch (action.type) {
        case 'INCREMENT': 
            return {
             count: state.count + action.incrementBy
        };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };
        
        case 'SET': 
            return{
                count: action.count
            }
        
        case 'RESET': 
            return {
                count: 0
            }
        
        default: 
            return state;
    }
    
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});





//Actions
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(setCount({count: 101}))
