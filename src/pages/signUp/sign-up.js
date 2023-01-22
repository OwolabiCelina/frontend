import { Fragment, useState } from "react";
import axios from "axios";

const SignUp = () => {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        city: "",
        country: "",
        street: "",
        state: ""
    });

    const registrationEndPoint = "https://jsonplaceholder.typicode.com/posts"

    const handleSubmit = (event) => {
            event.preventDefault();
            axios.post(registrationEndPoint, {
                userData
            }).then(res => console.log(res)).catch(err => console.log(err))
        
    }

    const handleChange = (event) => {
            const {name , value} = event.target;

            setUserData(prevValue => {
                return {...prevValue, [name]:value}
            })
    }

    return ( 
        <div className="sign-up">
            <Fragment>
                <form>
                   <label>firstName:
                    <input type="text"  name="firstName" value={userData.firstName} onChange={handleChange}/>
                   </label>

                   <label>lastName:
                    <input type="text"  name="lastName" value={userData.lastName}/>
                   </label>

                   <label>email:
                    <input type="text" name="email" value={userData.email} />
                   </label>

                   <label>password:
                    <input type="password" name="password" value={userData.password} />
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

                   <input type="submit" onClick={handleSubmit}/>      
                </form>
            </Fragment>
        </div>
     );
}
 
export default SignUp;