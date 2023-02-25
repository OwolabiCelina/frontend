import { Fragment, useState } from "react";
import axios from "axios";
import "./sign-up.css";
import Header from "../shared/nav";
import InputField from "../reusable/inputField";
import Footer from "../shared/footer";
import { Link } from "react-router-dom";
 

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

    // const registrationEndPoint = "https://jsonplaceholder.typicode.com/posts";
    const registrationEndPoint = "http://localhost:8080/users/senders/register-user";

    const handleSubmit = (event) => {

        event.preventDefault();

        let sendData = {
            firstName:userData.firstName,
            lastName:userData.lastName,
            email:userData.email,
            password:userData.password,
            phoneNumber:userData.phoneNumber,
            address: {
                city:userData.city,
                country:userData.country,
                state:userData.state,
                street:userData.street
            }
        }
            event.preventDefault();
            // console.log("hi banke");
            axios.post(registrationEndPoint,  sendData
                ).then(res => console.log(res)).catch(err => console.log(err))
        console.log(sendData);
    }

    const handleChange = (event) => {
            const {name , value} = event.target;

            setUserData(prevValue => {
                return {...prevValue, [name]:value}
            })
            // console.log(userData);
    }

    return ( 
      
            <div className="sign-up-section">
                <Header />
                <div className="signup-container">

                    <form>
                        <InputField 
                            name={"firstName"}
                            type="text"
                            value={userData.firstName}
                            holder={"First Name"}
                            handleChange={handleChange}
                        />

                        <InputField 
                            name={"lastName"}
                            type="text"
                            value={userData.lastName}
                            holder={"Last Name"}
                            handleChange={handleChange}
                        />
 
                        <InputField 
                            name={"email"}
                            type="text"
                            value={userData.email}
                            holder={"email"}
                            handleChange={handleChange}
                        />

                        <InputField 
                            name={"password"}
                            type="password"
                            // id="password"
                            value={userData.password}
                            holder={"password"}
                            handleChange={handleChange}
                        />
 
                        <InputField 
                            name={"phoneNumber"}
                            type="number"
                            value={userData.phoneNumber}
                            holder={"phoneNumber"}
                            handleChange={handleChange}
                        />

                        <InputField 
                            name={"city"}
                            type="text"
                            value={userData.city}
                            holder={"city"}
                            handleChange={handleChange}
                        />

                        <InputField 
                            name={"country"}
                            type="text"
                            value={userData.country}
                            holder={"country"}
                            handleChange={handleChange}
                        />

                        <InputField 
                            name={"street"}
                            type="text"
                            value={userData.street}
                            holder={"street"}
                            handleChange={handleChange}
                        />

                        <InputField 
                            name={"date"}
                            type="text"
                            value={userData.date}
                            holder={"date"}
                            handleChange={handleChange}
                        />
                    <div id="btn">
                        <button type="submit" onClick={handleSubmit}>submit</button>
                    </div>
                    
                    </form>

                    <div className="footer">
                    <div className="footer-text">
                        <span>Already have an Account? </span>
                        <Link to="/log-in">LogIn</Link>
                </div>
                
                    

                </div>
                </div>

                {/* <Footer /> */}
            </div>
       
     );
}
 
export default SignUp;