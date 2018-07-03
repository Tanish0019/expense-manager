// HOC - HIGHER ORDER COMPONENT IS A COMPONENT THAT RENDERS ANOTHER COMPONENT
// We can reuse code
// we can do render hijacking
// prop manipulation
// abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

//HOC component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. please don't share</p>
            <WrappedComponent {...props}/>   
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated 
                ? <WrappedComponent {...props}/>
                : <p>You need to be authenticated to see this</p>
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)


ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are the details"/>, document.getElementById('app'))