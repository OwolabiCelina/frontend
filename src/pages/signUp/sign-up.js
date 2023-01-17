import { Fragment } from "react";

const SignUp = () => {
    return ( 
        <div className="sign-up">
            
            <Fragment>
            <label>FirstName</label>
            <input type="text"/>

            <label>LastName</label>
            <input type="text"/>
            
            
            <label>Address</label>
            <input type="text"/>

            
            <label>Email</label>
            <input type="text"/>

            
            <label>Password</label>
            <input type="password"/>

            
            <label>PhoneNumber</label>
            <input type="number"/>

            
            <label>State</label>
            <input type="text"/>

            
            <label>City</label>
            <input type="text"/>

            
            <label>Country</label>
            <input type="text"/>

            </Fragment>
        </div>
     );
}
 
export default SignUp;