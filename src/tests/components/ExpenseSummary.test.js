import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from "../../components/ExpenseSummary";
//import expenses from "../fixtures/expenses";

test('should render how many expenses and their total', ()=> {
    const wrapper = shallow(<ExpenseSummary 
        expenseCount={2} //dont need to pass in fixtures to the test cases, just pass in values you are testing!!
        expensesTotal={1245624244}
        />)
    expect(wrapper).toMatchSnapshot();
}); 

test('should render 1 expense and its total', ()=> {
    const wrapper = shallow(<ExpenseSummary 
        expenseCount={1}
        expensesTotal={2352244}
        />)
    expect(wrapper).toMatchSnapshot();
});

