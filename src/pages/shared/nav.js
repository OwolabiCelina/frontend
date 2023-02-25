import { Fragment } from "react";
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return(
       <Fragment>
		
         <div className="navbar">
            
        <header id="ft-header" className="ft-header-section header-style-two">
		<div className="ft-header-top">
			<div className="container">
				<div className="ft-header-top-content d-flex justify-content-between align-items-center">
					<div className="ft-header-top-cta ul-li">
						<ul>
							<li><i className="fal fa-envelope"></i>fastrans@support.com</li>
							<li><i className="fal fa-map-marker-alt"></i>312 Herbert Macauley Way, Sabo Yaba Lagos</li>
						</ul>
					</div>
					<div className="ft-header-cta-info d-flex">
						<div className="ft-header-cta-icon d-flex justify-content-center align-items-center">
							<i className="flaticon-call"></i>
						</div>
						<div className="ft-header-cta-text headline pera-content">
							<p>Get In Touch</p>
							<h3>+2348034705303</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="ft-header-main-menu-wrapper">
			<div className="container">
				<div className="ft-header-main-menu-area position-relative">
					<div className="ft-header-main-menu d-flex align-items-center justify-content-between position-relative">
						<div className="ft-site-logo-area">
							<div className="ft-site-logo position-relative">
								<a href="index.html"><img src="assets/img/logo/logo3.png" alt=""/></a>
							</div>
						</div>
						<div className="ft-main-navigation-area">
							<nav className="ft-main-navigation clearfix ul-li">
								<ul id="ft-main-nav" className="nav navbar-nav clearfix">
									<li>
										<NavLink to="/">Home</NavLink>								
									</li>
									<li><NavLink to="/about-us">About</NavLink></li>
									<li>
										<NavLink to="/services">Services</NavLink>
									</li>
									<li>
										<NavLink to="/sign-up">Sign up</NavLink>
									</li>
									<li>
										<NavLink to="/log-in">Log in</NavLink>
									</li>	
									
																	
								</ul>
							</nav>
						</div>
						<div className="ft-header-cta-btn">
							<NavLink className="d-flex justify-content-center align-items-center" to="/get-quote">Get Free Quote</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
        </div>
       </Fragment>
    )
}

export default Header;
