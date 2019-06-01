import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test('should render Expense form correctly', () =>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

//jest manual mocks docs so that you can make a mock of moment library- which will allow for an unchanging date to test

test('should render Expense form with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should show error message if no description or amount', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault:() => {} //made a fake preventDefault to get past the fact that we arent giving an actual event (e) to ExpenseForm
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = "New Description";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target:{ value }//made a fake e object with prop target and a value
    }); //finding the first input, which is input .AT index 0
    expect(wrapper.state('description')).toBe(value);
});

test("should set note on textarea change", () => {
    const value = "New Note";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test("should set amount if valid input", () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        //match: () => {}, //this also worked, added it to get rid of error saying match didn't exist
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test("should NOT set amount if invalid input", () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        //match: () => {},
        target: {value}
    });
    expect(wrapper.state('amount')).toBe("");
    expect(wrapper).toMatchSnapshot();//didn't show up in test.js file, why?
});

test('should call onsubmit prop for valid case submission', () => {
    const onSubmitSpy = jest.fn(); //read more about jest.fn
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=> {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({ //lesson 123
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);//lesson 123. why can i set the prop to now here (since createdAt is also an object property like focused)? 
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
   //why does focused need to match here when I was able to rename moment as 'now' above? it's because of focused:focused, the first and last focused is the one you set in the test, the second focused is both the property designation in the object and the value you set
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
   expect(wrapper.state('calendarFocused')).toBe(focused);

});