import React from 'react';
import {shallow} from 'enzyme';
import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from "../fixtures/expenses";

test('should return 0 if empty array', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
 });

 test('should return single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
 });

test('should add up all the amounts of expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
 });

