import {createStore} from 'redux';

const store = createStore((state ={count: 0}, action)=>{

    switch (action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy:1;
            return{
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy:1;
            return{
                count: state.count - decrementBy
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
});

//subscribe : every time state changes this will keep track and update
// point if we call unsuscribe this will be stop suscribing the changes
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

//Action - than an object that gets sent to the state
// increment 
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'DECREMENT',
    decrementBy : 10
});

store.dispatch({
    type:'SET',
    count : 10
});

//

