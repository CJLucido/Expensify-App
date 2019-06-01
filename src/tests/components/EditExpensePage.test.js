import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";
import ExpenseForm from '../../components/ExpenseForm';

let editExpense, removeExpense, history, wrapper;

beforeEach(() =>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(
        <EditExpensePage
         editExpense={editExpense}
          history={history}
           removeExpense={removeExpense}
           expense={expenses[2]}/>)
}) 

test('should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle remove expense', () => {
    wrapper.find('button').prop('onClick')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});

//Challenge missteps: passing the button into wrapper find instead of expenseform, making an expense within shallow for beforeEach, setting up the wrapper with EditExpenseForm and not ExpenseForm, not adding removeExpense to let, not calling an object property {id: ...} in the last expect statement, importing remove expense when declaring a new mock removeExpense