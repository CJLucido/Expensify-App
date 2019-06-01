//should this still run before the test page is hooked up?

import React from "react";
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from "../actions/expenses";
import {removeExpense} from "../actions/expenses";

export class EditExpensePage extends React.Component {
    
    onSubmit= (expense) =>{
        this.props.editExpense(this.props.expense.id , expense);
        this.props.history.push('/');
    }
    
    onClick= () => {
        this.props.removeExpense({id: this.props.expense.id}); 
        this.props.history.push('/');
} //dispatch was removed from these calls to props because it was called in mapDispatchToProps, doi

      render() { return  (
            <div>
            <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
            />
        
            <button 
             onClick={this.onClick} 
            >Remove</button>
          
            </div>
            ); }

}

const mapToDispatchProps = (dispatch, props) => { //added props here for removeExpense object, using redux docs add own
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (data) => dispatch(removeExpense(data)) //why use an arbitrary "data" rather than id?
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps, mapToDispatchProps)(EditExpensePage);


//refactor from classless component to class based
//setup mapToDispatchProps editExpense and removeExpense
//pull global editExpense and removeExpense by passing in dispatch and calling those functions to new dispatch prop in mapTo