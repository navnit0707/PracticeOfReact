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
const sortByDate = (date='')=>({
    type: 'SORT_BY_DATE',
    date
});
// sort by amount
const sortByAmount = (amount='')=>({
    type: 'SORT_BY_AMOUNT',
    amount
});

// set start date
const setStartDate = (startDate) =>({
    type: 'SET_START_DATE',
    startDate
});
// set end date
const setEndDate = (endDate) =>({
    type: 'SET_END_DATE',
    endDate
});


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
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate : action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate : action.endDate
            }
        default:
            return state;
    }     
};

//Get visible expense
/* 
    timeStamps {milliseconds}
    january 1st 1978 (unix  epoch)
    33400,10,-203

*/
const getVisibleExpenses = (expenses,{ text, sortBy, startDate,endDate}) =>{
    return expenses.filter((expense)=>{
        const startdateMatch = typeof startDate !== 'number' || expense.createdAt >= startdate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt  <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startdateMatch && endDateMatch && textMatch ;

    });
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
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

//dispatch
 const expenseOne = store.dispatch(addExpense({description: 'Rent',amount:1000, createdAt: 1000}));
 const expenseTwo = store.dispatch(addExpense({description: 'Coffee',amount:10}));


// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount(10));
// store.dispatch(sortByDate());

 store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250);

// const demoState = {
//     expenses: [{
//         id: 'eeee',
//         description: 'January Rent',
//         note: 'This was the final payment for that address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters:{
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// };
