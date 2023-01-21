
import { useState, Fragment } from "react";

const SignIn = () => {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const handleEmailChange = (event) => {
    //     const newValue = event.target.value;
    //     setEmail(newValue)
    // }
    // const handlePasswordChange = (event) => {
    //     const newPassword = event.target.value;
    //     setPassword(newPassword)
    // }


    // const handleClick = () => {
    //     const userDetails = {
    //         userEmail: email,
    //         userPassword: password 
    //     }

    //     console.log(userDetails)
    // }

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const newUserDetail = event.target.value;
        const userId = event.target.id;
        if (userId === "email"){
            setUserDetails({
                ...userDetails,
                    email: newUserDetail,
                })
        }else if (userId === "password"){
            setUserDetails({
                ...userDetails,
                password: newUserDetail
            })
        }
    }

    
    const handleClick = () => {
        const userInfo = {
            userEmail: userDetails.email,
            userPassword: userDetails.password
        }

        console.log(userInfo)
    }
    return ( 
        <div className="sign-in">
            
            <Fragment>
          
            <label>Email</label><br />
            <input id = "email" type="text" value={userDetails.email} onChange={handleChange}/><br />

            <label>Password</label><br />
            <input id = "password" type="password" value={userDetails.password} onChange={handleChange}/><br />
            
            <button type="submit" onClick={handleClick}>Login</button>

            </Fragment>
        </div>
     );
} 
 
export default SignIn;