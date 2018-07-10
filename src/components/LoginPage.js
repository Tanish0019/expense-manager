import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { dispatch } from '../../node_modules/rxjs/internal/observable/pairs';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expense Tracker App</h1>
            <p>Managing your expenses has never been so easy</p>
            <button onClick={startLogin} className="loginBtn loginBtn--google">Login with Google</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
};

export default connect(undefined, mapDispatchToProps)(LoginPage);