import { Fragment, useState } from "react";

const SignUp = () => {

    const [userData, setUserData] = useState({
        firstName: "",
        latsName: "",
        email: "",
        password: "",
        phoneNumber: "",
        city: "",
        country: "",
        street: "",
        state: ""
    });
    const handleSubmit = (event) => {
        
    }

    return ( 
        <div className="sign-up">
            <Fragment>
                <form>
                   <label>firstName:
                    <input type="text" />
                   </label>

                   <label>lastName:
                    <input type="text" />
                   </label>

                   <label>email:
                    <input type="text" />
                   </label>

                   <label>password:
                    <input type="password" />
                   </label>

                   <label>phoneNumber:
                    <input type="number" />
                   </label>    

                   <label>city:
                    <input type="text"   />
                   </label>  

                   <label>country:
                    <input type="text"   />
                   </label> 

                   <label>street:
                    <input type="text"   />
                   </label>

                   <label>state:
                    <input type="text"   />
                   </label>     

                   <input type="submit" onChange={handleSubmit}/>      
                </form>
            </Fragment>
        </div>
     );
}
 
export default SignUp;