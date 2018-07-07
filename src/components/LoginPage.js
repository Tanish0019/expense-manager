import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { dispatch } from '../../node_modules/rxjs/internal/observable/pairs';

export const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
};

export default connect(undefined, mapDispatchToProps)(LoginPage);