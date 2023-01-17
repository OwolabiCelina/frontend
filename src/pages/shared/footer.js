const Footer = () => {
    return ( 
        <>
         <footer style={{backgroundImage: `url("assets/img/bg/f-bg.png")`}} id="ft-footer-2" className="ft-footer-section-2" data-background="assets/img/bg/f-bg.png">
		<div className="ft-footer-newslatter position-relative">
			<div className="container">
				<div className="ft-footer-newslatter-content d-flex justify-content-between align-items-center flex-wrap">
					<div className="ft-footer-newslatter-text headline">
						<h2>Sign up for  alerts,
						news & insights from Equita.</h2>	
					</div>
					<div className="ft-footer-newslatter-form position-relative">
						<form action="#">
							<input type="text" placeholder="Email" />
							<button type="submit">Subscribe Now</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="ft-footer-widget-wrapper-2">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="ft-footer-widget ul-li-block headline pera-content">
							<div className="logo-widget">
								<div className="site-logo">
									<a href="#"><img src="assets/img/logo/logo4.png" alt="" /></a>
								</div>
								<div className="ft-footer-address">
									<span>Address: 27 Division St, New York, NY 10002, USA</span>
									<span>Website: fastrans.com</span>
									<span>Email: fastrans@mail.com</span>
									<span>Phone: +8 (123) 152 25 45</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="ft-footer-widget ul-li-block headline pera-content">
							<div className="menu-widget">
								<h3 className="widget-title">Our Services</h3>
								<ul>
									<li><a href="service-single.html">Air Freight</a></li>
									<li><a href="service-single.html">Ocen Freight</a></li>
									<li><a href="service-single.html">Warehousing</a></li>
									<li><a href="service-single.html">Global stock transparency</a></li>
									<li><a href="service-single.html">Transport consolidation</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="ft-footer-widget ul-li-block headline pera-content">
							<div className="menu-widget">
								<h3 className="widget-title">Industry Sectors</h3>
								<ul>
									<li><a href="service-single.html">Electronics Industry</a></li>
									<li><a href="service-single.html">Industrial & Manufacturing</a></li>
									<li><a href="service-single.html">Semicon & Solar</a></li>
									<li><a href="service-single.html">Oil & Gas Cargo</a></li>
									<li><a href="service-single.html">Energy & Chemicals</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="ft-footer-widget ul-li-block headline pera-content">
							<div className="menu-widget">
								<h3 className="widget-title">Quick Links</h3>
								<ul>
									<li><a href="service-single.html">How it Works</a></li>
									<li><a href="service-single.html">Help Link</a></li>
									<li><a href="service-single.html">Terms & Conditions</a></li>
									<li><a href="service-single.html">Contact Us</a></li>
									<li><a href="service-single.html">Privacy Policy</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="ft-footer-copywrite-2 text-center">
			<span>Copyright @ 2021 Logistics.All Rights Reserved</span>
		</div>
	</footer>	
        </>
     );
}
 
export default Footer;