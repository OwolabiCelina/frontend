import {Routes, Route} from 'react-router-dom'; 
import Hero from './pages/hero/hero-body';
import SignIn from './pages/Sign-In/sign-in';
import SignUp from './pages/signUp/sign-up';
import About from './pages/about/about';
import Services from './pages/services/services';
import Contact from './pages/contact/contact';
import Common from './pages/shared/common';

export default function RoutePage(){
    return(
        <>
        <Routes>
            <Route path="/log-in" element={<SignIn />}/>
            <Route path="/" element={<Common Component={Hero} />}/>
            <Route path='/sign-up' element={<SignUp />}/>
            <Route path='/about-us' element={<Common Component={About} />} />
            <Route path='/services' element={<Common Component={Services} />}/>
            <Route path='/get-quote' element={<Common Component={Contact} />} />          
        </Routes>
        </>
    )
}