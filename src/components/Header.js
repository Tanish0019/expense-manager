import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';


const Header = ({ startLogout }) => (
    <header className="header"> 
        <div className="content-container">
            <div className="header__content">
                <Link to="/dashboard" className="header__title">
                    <h1 >Expense Manager</h1>
                </Link>
                <button onClick={startLogout} className="button button--link">Logout</button>
            </div>
        </div>       
    </header>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Header);