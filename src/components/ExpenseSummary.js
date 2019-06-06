import React from "react";
import { connect } from "react-redux";
//import ConnectedExpenseList from "./ExpenseList";
import expensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses"
import numeral from 'numeral';

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {

        //const expenseCount = {...expenses}.valueOf();
        const expenseWord = expenseCount === 1 ? "expense" : "expenses";
        const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

       
            return (
                <div>{
                   <h1> 
                        <p> Viewing {expenseCount} {expenseWord} totalling
                         {formattedExpensesTotal}</p>
                    </h1>
                }</div>
            )
};

//why can't I just call ConnectedExpenseList as it already has state mapped to props

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount : visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)