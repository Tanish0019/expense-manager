import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

import 'react-dates/initialize';
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';


const store = configureStore();

const App = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(App, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }   
        })
        
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});