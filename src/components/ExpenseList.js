import React from 'react';
import { connect } from 'react-redux';
import ExpenseSummary from './ExpenseSummary';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <ExpenseSummary/>
        <h1>Expense List</h1>
        {
            props.expenses.length > 0 ? props.expenses.map((expense, i) => <ExpenseListItem {...expense} key={i}/>) : <p>There are no expenses</p> 
        }

    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
