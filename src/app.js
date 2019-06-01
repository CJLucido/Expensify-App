import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css"; //this resets the base for the browser, this way your css will appear the same regardless of the browser
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 250, createdAt: 5000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 5000, createdAt: -900 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1000 }));

//  store.dispatch(setTextFilter("water"));

//  setTimeout(() => {
//      store.dispatch(setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

