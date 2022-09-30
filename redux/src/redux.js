import {createStore} from 'redux';

// Action generator - functions that return action objects

// note : here passing payload ={} means if we are passing any 
//thing then it will be passed below else and blank object will be passed i.e default value
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
    //incrementBy: incrementBy if the variable and value is same we can use it as one
    // return{  //  returning an object since we can directlyretunr it 
    //under the paranthesis
    //     type: 'INCREMENT'
    // }
});

const decrementCount = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) =>({
    type: 'SET',
    count
});

const resetCount = ({} = {}) =>({
    type: 'RESET',

});

// Reducer 
// 1. reducer are pure function i.e it entirely depend on the input it recieved and it dpesnt affect anything
// 2 never change state or action : i.e inside that we dont mutate them or change them
// if we have to we just create new object and assign to it 

const countReducer = (state ={count: 0}, action)=>{

    switch (action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count : action.count
            };
        case 'RESET':
            return{
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

//subscribe : every time state changes this will keep track and update
// point if we call unsuscribe this will be stop suscribing the changes
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

//Action - than an object that gets sent to the state
// increment 
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy:1}));
store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({count:100}));



//

