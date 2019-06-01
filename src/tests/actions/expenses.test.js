import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test("should setup remove expense action object", () => {
    const action = removeExpense({id: "123abc"});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

//toEqual checks properties within objects or arrays

test("should setup edit expense action object", () => {
    const action = editExpense("new", {note: "new note"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: "new",
        updates: {
            note: "new note"
        }
    })
});

test("should setup add expense action object", () =>{
    const expenseData ={
        description:"new description",
        note:"add note", 
        amount: 15,
        createdAt: 1000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: "new description",
            note: "add note",
            amount: 15,
            createdAt: 1000,
            id: expect.any(String)
        }
    });
});

test("should setup DEFAULT add expense action object", () =>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});