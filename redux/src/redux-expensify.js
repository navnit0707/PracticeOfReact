import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// add expense
const addExpense = ({
    description ='',
    note='',
    amount=0,
    createdAt= 0}  = {}) => ({
    type : 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// remove expenses
const removeExpense = ({id}={}) => ({
    type : 'REMOVE_EXPENSE',
    id
});
//edit expenses

const editExpense = ({id,update}) =>({
    type: 'EDIT_EXPENSE',
    id,
    update

});

// set text filter
const setTextFilter = (text = '') =>({
    type: 'SET_TEXT_FILTER',
    text
});
// sort by date
// sort by amount
// set start date
// set end date


//expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                   return{
                    ...expense,
                    ...action.update
                   }
                }
                else{
                    return expense;
                };
            });
        
        default:
            return state;
    }
};

//filter reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state =filtersReducerDefaultState,action)=>{
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text: action.text
            }

        default:
            return state;
    }     
};

// Store creation

const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filters: filtersReducer
    })
);

// subscribe
store.subscribe(()=>{
    console.log(store.getState());
});

//dispatch
const expenseOne = store.dispatch(addExpense({description: 'Rent',amount:1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee',amount:10}));


store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

const demoState = {
    expenses: [{
        id: 'eeee',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'jan',
    age:24
};

console.log({...user});