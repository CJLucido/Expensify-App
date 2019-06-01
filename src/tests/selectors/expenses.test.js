import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import testExpenses from "../fixtures/expenses";

test("should filter by text value", () => {
    const filters = {
        text: "e",
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(testExpenses, filters)
    expect(result).toEqual([testExpenses[2], testExpenses[1]])
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([testExpenses[2], testExpenses[0]])
});

test("should filter by endDate", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days') //why don't we use valueOf here, if I do it throws an error referencing isSameOrAfter? "It's because the DateRangePicker component requires startDate and endDate to be moment objects and .valueOf() only gives back an integer. The expenses don't use it primarily because you can't store a moment object in Firebase which is where we'd expect the expenses to come from."" 
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([testExpenses[0], testExpenses[1]])
});

test('should sort by date',() => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([testExpenses[2], testExpenses[0], testExpenses[1]])
});

test('should sort by amount',() => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([testExpenses[1], testExpenses[2], testExpenses[0]])
});