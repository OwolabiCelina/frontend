import { Fragment } from "react";

const SignIn = () => {
    return ( 
        <div className="sign-in">
            
            <Fragment>
          
            <label>Email</label>
            <input type="text"/>

            <label>Password</label>
            <input type="password"/>

            </Fragment>
        </div>
     );
} 
 
export default SignIn;