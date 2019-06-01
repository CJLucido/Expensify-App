import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from "../../components/ExpenseListFilters";
import {filters, altFilters} from "../fixtures/filters";
import moment from 'moment';
import expenses from "../fixtures/expenses";

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn();
     sortByDate= jest.fn();
      sortByAmount= jest.fn();
       setStartDate= jest.fn();
        setEndDate= jest.fn();
        wrapper = shallow(
            <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            />
        );
});

test('should render expense list filters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})


test('should handle text change', () => {
    const value = "credit card";
    wrapper.find('input').simulate('change', {
        target: {value}
    });
    //wrapper.find('input').prop('onChange')(value); this didn't work because you are adding in the default value here, which is undefined
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled(); 
});

test('should handle sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled(); 
});

 test('should handle date changes', () => {
     const startDate = moment(0).add(4, 'years');
     const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate); 
    expect(setEndDate).toHaveBeenLastCalledWith(endDate); 
 });

test('should handle focus change', () => {

const calendarFocused = 'startDate'; 
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

//onFocusChange test will require simulate and e and a change to state(THIS WAS A BULLSHIT STATEMENT BY THE INSTRUCTOR)
