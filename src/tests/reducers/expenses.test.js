import expensesReducer from "../../reducers/expenses";
import testExpenses from "../fixtures/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set up default state", () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test("should add an expense", () => {
    const expense = {
        id: '4',
        description: "the new boss",
        note: "same as the old boss",
        amount: 346568,
        createdAt: moment(0).add(11, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(testExpenses, action);

    expect(state).toEqual([...expenses, expense])
});

test("should edit an expense", () => {
    const amount   = 122000;
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(testExpenses, action);
    expect(state[1].amount).toEqual(amount)
});

test("should not edit an expense if expense not found", () => {
    const amount = 122000;
    const action = {
        type: "EDIT_EXPENSE",
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual(testExpenses)
});

test("should remove an expense with valid expense /by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test("should not remove an expense with invalid expense", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: -1
    }
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual(testExpenses)
});