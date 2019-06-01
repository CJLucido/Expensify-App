//Higher order component- component (HOC) that renders another component
//goal is to reuse code
//render hijacking, prop manipulation, abstract state

import React from "react";
import ReactDOM from "react-dom";


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is Private Info</p>}
        <WrappedComponent {...props}/> 
        
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
        return (props) => (
            <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p> Please log in</p> }
            </div>
         );
};

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="This is the detail"/>, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is the detail"/>, document.getElementById("app"));