import {Fragment} from 'react';
import './hero-body.css';

const Hero = () => {
    return(
        <Fragment>
    <section style={{backgroundImage: `url("assets/img/bg/slider-bg.jpg")`}} id="ft-banner" className="ft-banner-section"  databackground="assets/img/bg/slider-bg.jpg">
		<div className="ft-banner-content">
			<div className="container">
				<div className="ft-banner-text-content headline pera-content text-center">
					<h1 className="cd-headline letters scale">Shipping Products
						<span className="cd-words-wrapper">
							<b className="is-visible">WorldWide</b>
							<b>Safely</b>
							<b>Everywhere</b>
						</span></h1>
						<p> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.  </p>
						<div className="ft-banner-btn-wrapper d-flex justify-content-center align-items-center">
							<div className="ft-banner-btn">
								<a className="d-flex justify-content-center align-items-center" href="service.html">Our Services</a>
							</div>
							<div className="ft-banner-video-btn">
								<a className="video_box" href="https://www.youtube.com/watch?v=C4jjFanHZo8">
									<i className="fas fa-play"></i>
									<span>How It Work</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

   
	<section id="ft-featured" className="ft-featured-section">
		<div className="container">
			<div className="ft-section-title-2 headline pera-content text-center">
				<span className="sub-title">Featured</span>
				<h2>The unique qualities that make
					<span>FasTrans</span> special.
				</h2>
			</div>
			<div className="ft-featured-content">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
						<div className="ft-featured-innerbox position-relative">
							<div className="ft-featured-icon">
								<i className="flaticon-pricing"></i>
							</div>
							<div className="ft-featured-text headline pera-content">
								<h3><a href="service-single.html">Transparent Pricing</a></h3>
								<p>Incididunt ut labore et dolore magna aliqua. Quis ipsum gravida.</p>
								<div className="ft-btn-2">
									<a href="service-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
						<div className="ft-featured-innerbox position-relative">
							<div className="ft-featured-icon">
								<i className="flaticon-deadline"></i>
							</div>
							<div className="ft-featured-text headline pera-content">
								<h3><a href="service-single.html">Real Time Tracking</a></h3>
								<p>Incididunt ut labore et dolore magna aliqua. Quis ipsum gravida.</p>
								<div className="ft-btn-2">
									<a href="service-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
						<div className="ft-featured-innerbox position-relative">
							<div className="ft-featured-icon">
								<i className="flaticon-warehouse"></i>
							</div>
							<div className="ft-featured-text headline pera-content">
								<h3><a href="service-single.html">Warehoues Storage</a></h3>
								<p>Incididunt ut labore et dolore magna aliqua. Quis ipsum gravida.</p>
								<div className="ft-btn-2">
									<a href="service-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="ft-product-mesurment" className="ft-product-mesurment-section">
		<div className="container">
			<div className="ft-product-mesurment-content position-relative">
				<span className="ft-pm-bg-img position-absolute"><img src="assets/img/bg/pm-bg.png" alt="" /></span>
				<div className="row">
					<div className="col-lg-8">
						<div className="ft-product-mesurment-form">
							<div className="ft-product-mesurment-tab-btn">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item" role="presentation">
										<button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Request A Quote</button>
									</li>
									<li className="nav-item" role="presentation">
										<button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Track & Trace</button>
									</li>
								</ul>
							</div>
							<div className="tab-content" id="myTabContent">
								<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
									<div className="ft-product-mesurment-form-input">
										<form action="#">
											<div className="ft-product-mesurment-form-input-area">
												<label className="ft-pm-title">Personal  Data</label>
												<div className="row">
													<div className="col-lg-4">
														<div className="ft-pm-input">
															<input type="text" placeholder="First Name" />
														</div>
													</div>
													<div className="col-lg-4">
														<div className="ft-pm-input">
															<input type="text" placeholder="Last Name" />
														</div>
													</div>
													<div className="col-lg-4">
														<div className="ft-pm-input">
															<input type="email" placeholder="Your Email" />
														</div>
													</div>
												</div>
											</div>
											<div className="ft-product-mesurment-form-input-area">
												<label className="ft-pm-title">Shipment  Date</label>
												<div className="row">
													<div className="col-lg-4">
														<div className="ft-pm-input ft-select-option position-relative">
															<select name="#">
																<option value="#">Shipment Type</option>
																<option value="#">By Air</option>
																<option value="#">By Ship</option>
																<option value="#">By Road</option>
															</select>
														</div>
													</div>
													<div className="col-lg-4">
														<div className="ft-pm-input">
															<input type="text" placeholder="City Type Departure" />
														</div>
													</div>
													<div className="col-lg-4">
														<div className="ft-pm-input">
															<input type="Text" placeholder="Delivery City" />
														</div>
													</div>
													<div className="col-lg-4">
														<div className="ft-pm-input ft-select-option position-relative">
															<select name="#">
																<option value="#">Incoterms</option>
																<option value="#">By Air</option>
																<option value="#">By Ship</option>
																<option value="#">By Road</option>
															</select>
														</div>
													</div>
													<div className="col-lg-2">
														<div className="ft-pm-input">
															<input type="Text" placeholder="Weight" />
														</div>
													</div>
													<div className="col-lg-2">
														<div className="ft-pm-input">
															<input type="Text" placeholder="Height" />
														</div>
													</div>
													<div className="col-lg-2">
														<div className="ft-pm-input">
															<input type="Text" placeholder="Width" />
														</div>
													</div>
													<div className="col-lg-2">
														<div className="ft-pm-input">
															<input type="Text" placeholder="Length" />
														</div>
													</div>
												</div>
											</div>
											<div className="ft-product-mesurment-checkbox">
												<label>
													<input className="condition" name="#" type="radio" value="#" checked="" />
													<span className="checkmark-circle"></span>
													<span className="slug">Incoterms</span>
												</label>
												<label>
													<input className="condition" name="#" type="radio" value="#" />
													<span className="checkmark-circle"></span>
													<span className="slug">Express Delivery</span>
												</label>
												<label>
													<input className="condition" name="#" type="radio" value="#" />
													<span className="checkmark-circle"></span>
													<span className="slug">Insurance</span>
												</label>
												<label>
													<input className="condition" name="#" type="radio" value="#" />
													<span className="checkmark-circle"></span>
													<span className="slug">Packaging</span>
												</label>
											</div>
											<button>Request For A Quote</button>
										</form>
									</div>
								</div>
								<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
									<div className="ft-product-mesurment-form-input">
										<form action="#">
											<div className="ft-product-mesurment-form-input-area">
												<label className="ft-pm-title">Personal  Data</label>
												<div className="row">
													<div className="col-lg-4">
														<div className="ft-pm-input">
															<input type="text" placeholder="First Name" />
														</div>
													</div>
													<div className="col-lg-4">
														<div className="ft-pm-input">
															<input type="text" placeholder="Last Name" />
														</div>
													</div>
													<div className="col-lg-4">
														<div className="ft-pm-input">
															<input type="email" placeholder="Your Email" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="ft-pm-input">
															<input type="text" placeholder="Your Tracking Id" />
														</div>
													</div>
												</div>
											</div>
											<button>Track & Trace</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="ft-service-2" className="ft-service-section-2 position-relative">
		<span className="ft-service-bg position-absolute"> <img src="assets/img/bg/ser-bg.png" alt=""/></span>
		<div className="container">
			<div className="ft-section-title-2 headline pera-content text-center">
				<span className="sub-title">What We Do</span>
				<h2>We are optimists who Love 
					to work together.
				</h2>
			</div>
			<div className="ft-service-content-2">
				<div className="ft-service-slider-2">
					<div className="ft-item-innerbox">
						<div className="ft-service-innerbox-2 position-relative">
							<div className="ft-service-img text-center">
								<img src="assets/img/service/ser4.3.jpg" alt=""/>
							</div>
							<div className="ft-service-text position-relative headline">
								<div className="ft-service-icon position-absolute d-flex align-items-center justify-content-center">
									<i className="flaticon-free-shipping"></i>
								</div>
								<h3><a href="service-single.html">Road Freight</a></h3>
								<div className="ft-btn-2">
									<a href="service-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
							<div className="ft-service-serial position-absolute">
								1
							</div>
						</div>
					</div>
					<div className="ft-item-innerbox">
						<div className="ft-service-innerbox-2 position-relative">
							<div className="ft-service-img text-center">
								<img src="assets/img/service/ser4.4.jpg" alt=""/>
							</div>
							<div className="ft-service-text position-relative headline">
								<div className="ft-service-icon position-absolute d-flex align-items-center justify-content-center">
									<i className="flaticon-boat"></i>
								</div>
								<h3><a href="service-single.html">Ocean Freight</a></h3>
								<div className="ft-btn-2">
									<a href="service-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
							<div className="ft-service-serial position-absolute">
								2
							</div>
						</div>
					</div>
					<div className="ft-item-innerbox">
						<div className="ft-service-innerbox-2 position-relative">
							<div className="ft-service-img text-center">
								<img src="assets/img/service/ser4.2.jpg" alt=""/>
							</div>
							<div className="ft-service-text position-relative headline">
								<div className="ft-service-icon position-absolute d-flex align-items-center justify-content-center">
									<i className="flaticon-plane"></i>
								</div>
								<h3><a href="service-single.html">Cargo Freight</a></h3>
								<div className="ft-btn-2">
									<a href="service-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
							<div className="ft-service-serial position-absolute">
								3
							</div>
						</div>
					</div>
					<div className="ft-item-innerbox">
						<div className="ft-service-innerbox-2 position-relative">
							<div className="ft-service-img text-center">
								<img src="assets/img/service/ser4.jpg" alt=""/>
							</div>
							<div className="ft-service-text position-relative headline">
								<div className="ft-service-icon position-absolute d-flex align-items-center justify-content-center">
									<i className="flaticon-train"></i>
								</div>
								<h3><a href="service-single.html">Air Freight</a></h3>
								<div className="ft-btn-2">
									<a href="service-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
							<div className="ft-service-serial position-absolute">
								4
							</div>
						</div>
					</div>
					<div className="ft-item-innerbox">
						<div className="ft-service-innerbox-2 position-relative">
							<div className="ft-service-img text-center">
								<img src="assets/img/service/ser4.3.jpg" alt=""/>
							</div>
							<div className="ft-service-text position-relative headline">
								<div className="ft-service-icon position-absolute d-flex align-items-center justify-content-center">
									<i className="flaticon-free-shipping"></i>
								</div>
								<h3><a href="service-single.html">Road Freight</a></h3>
								<div className="ft-btn-2">
									<a href="service-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
							<div className="ft-service-serial position-absolute">
								5
							</div>
						</div>
					</div>
					<div className="ft-item-innerbox">
						<div className="ft-service-innerbox-2 position-relative">
							<div className="ft-service-img text-center">
								<img src="assets/img/service/ser4.4.jpg" alt=""/>
							</div>
							<div className="ft-service-text position-relative headline">
								<div className="ft-service-icon position-absolute d-flex align-items-center justify-content-center">
									<i className="flaticon-boat"></i>
								</div>
								<h3><a href="service-single.html">Ocean Freight</a></h3>
								<div className="ft-btn-2">
									<a href="service-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
							<div className="ft-service-serial position-absolute">
								6
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="ft-about-2" className="ft-about-section-2">
		<div className="container">
			<div className="ft-about-content-2">
				<div className="row">
					<div className="col-lg-6">
						<div className="ft-about-text-wrapper-2">
							<div className="ft-section-title-2 headline pera-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
								<span className="sub-title">About Company</span>
								<h2>We Provide
									a Reliable Services
									<span>Since 1982</span>
								</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
							</div>
							<div className="ft-about-feature-wrapper-2">
								<div className="row">
									<div className="col-lg-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
										<div className="ft-about-feature-list-item d-flex align-items-center">
											<div className="ft-about-feature-icon d-flex align-items-center justify-content-center">
												<i className="fal fa-bullseye-arrow"></i>
											</div>
											<div className="ft-about-feature-text headline pera-content">
												<h3>Our Mission</h3>
												<p>Lorem ipsum dolor sit amet sed do eiusmod facilisis. 
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
										<div className="ft-about-feature-list-item d-flex align-items-center">
											<div className="ft-about-feature-icon d-flex align-items-center justify-content-center">
												<i className="fal fa-bullseye-arrow"></i>
											</div>
											<div className="ft-about-feature-text headline pera-content">
												<h3>Our Vision</h3>
												<p>Lorem ipsum dolor sit amet sed do eiusmod facilisis. 
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="ft-btn-3">
									<a className="d-flex justify-content-center align-items-center" href="about.html">Explore More <i className="flaticon-right-arrow"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 wow fadeInRight" data-wow-delay="600ms" data-wow-duration="1500ms">
						<div className="ft-about-img-2-wrapper position-relative">
							<span className="ft-about-shape1 position-absolute"><img src="assets/img/shape/ab-sh1.png" alt=""/></span>
							<span className="ft-about-shape2 position-absolute"><img src="assets/img/shape/ab-sh2.png" alt=""/></span>
							<div className="ft-about-img-2">
								<img src="assets/img/about/ab2.jpg" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="ft-experience" className="ft-experience-section">
		<div className="container">
			<div className="ft-experience-content">
				<div className="row">
					<div className="col-lg-6">
						<div className="ft-experience-text">
							<div className="ft-section-title-2 headline pera-content">
								<span className="sub-title">Experience</span>
								<h2>Global Shipping Partner
									To World’s  Famous Companies
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="ft-experience-circle-progress">
							<div className="row">
								<div className="col-lg-4">
									<div className="counter-boxed text-center headline position-relative">
										<div className="graph-outer">
											<input type="text" className="dial" data-fgColor="#f22728" data-bgColor="#fff" data-width="80" data-height="80" data-linecap="round"  value="95" />
											<div className="inner-text count-box"><span className="count-text" data-stop="95" data-speed="3500"></span>%</div>
										</div>
										<h3>Warehousing</h3>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="counter-boxed text-center headline position-relative">
										<div className="graph-outer">
											<input type="text" className="dial" data-fgColor="#f22728" data-bgColor="#fff" data-width="80" data-height="80" data-linecap="round"  value="85" />
											<div className="inner-text count-box"><span className="count-text" data-stop="85" data-speed="3500"></span>%</div>
										</div>
										<h3>Oceann Freight</h3>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="counter-boxed text-center headline position-relative">
										<div className="graph-outer">
											<input type="text" className="dial" data-fgColor="#f22728" data-bgColor="#fff" data-width="80" data-height="80" data-linecap="round"  value="90" />
											<div className="inner-text count-box"><span className="count-text" data-stop="90" data-speed="3500"></span>%</div>
										</div>
										<h3>Air Freight</h3>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</section>

	<section id="ft-portfolio-2" className="ft-portfolio-section-2 position-relative">
		<div className="ft-section-title-2 headline pera-content text-center">
			<span className="sub-title">Project</span>
			<h2>Let's Checkout our All
				Latest Project
			</h2>
		</div>
		<div className="ft-portfolio-content-2">
			<div className="ft-portfolio-slider-2">
				<div className="ft-portfolio-slider-item">
					<div className="ft-portfolio-slider-innerbox position-relative">
						<div className="ft-portfolio-img">
							<img src="assets/img/project/port1.jpg" alt=""/>
						</div>
						<div className="ft-portfolio-text headline headline pera-content">
							<h3><a href="project-single.html">Service & Aftermarket
							Logistics</a></h3>
							<p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo vel facilisis. </p>
							<div className="ft-btn-3">
								<a className="d-flex justify-content-center align-items-center" href="portfolio-single.html">Read More <i className="flaticon-right-arrow"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="ft-portfolio-slider-item">
					<div className="ft-portfolio-slider-innerbox position-relative">
						<div className="ft-portfolio-img">
							<img src="assets/img/project/port2.jpg" alt=""/>
						</div>
						<div className="ft-portfolio-text headline headline pera-content">
							<h3><a href="project-single.html">Service & Aftermarket
							Logistics</a></h3>
							<p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo vel facilisis. </p>
							<div className="ft-btn-3">
								<a className="d-flex justify-content-center align-items-center" href="portfolio-single.html">Read More <i className="flaticon-right-arrow"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="ft-portfolio-slider-item">
					<div className="ft-portfolio-slider-innerbox position-relative">
						<div className="ft-portfolio-img">
							<img src="assets/img/project/port3.jpg" alt=""/>
						</div>
						<div className="ft-portfolio-text headline headline pera-content">
							<h3><a href="project-single.html">Service & Aftermarket
							Logistics</a></h3>
							<p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo vel facilisis. </p>
							<div className="ft-btn-3">
								<a className="d-flex justify-content-center align-items-center" href="portfolio-single.html">Read More <i className="flaticon-right-arrow"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="ft-portfolio-slider-item">
					<div className="ft-portfolio-slider-innerbox position-relative">
						<div className="ft-portfolio-img">
							<img src="assets/img/project/port4.jpg" alt=""/>
						</div>
						<div className="ft-portfolio-text headline headline pera-content">
							<h3><a href="project-single.html">Service & Aftermarket
							Logistics</a></h3>
							<p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo vel facilisis. </p>
							<div className="ft-btn-3">
								<a className="d-flex justify-content-center align-items-center" href="portfolio-single.html">Read More <i className="flaticon-right-arrow"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="ft-portfolio-slider-item">
					<div className="ft-portfolio-slider-innerbox position-relative">
						<div className="ft-portfolio-img">
							<img src="assets/img/project/port1.jpg" alt=""/>
						</div>
						<div className="ft-portfolio-text headline headline pera-content">
							<h3><a href="project-single.html">Service & Aftermarket
							Logistics</a></h3>
							<p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo vel facilisis. </p>
							<div className="ft-btn-3">
								<a className="d-flex justify-content-center align-items-center" href="portfolio-single.html">Read More <i className="flaticon-right-arrow"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="ft-portfolio-slider-item">
					<div className="ft-portfolio-slider-innerbox position-relative">
						<div className="ft-portfolio-img">
							<img src="assets/img/project/port2.jpg" alt=""/>
						</div>
						<div className="ft-portfolio-text headline headline pera-content">
							<h3><a href="project-single.html">Service & Aftermarket
							Logistics</a></h3>
							<p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo vel facilisis. </p>
							<div className="ft-btn-3">
								<a className="d-flex justify-content-center align-items-center" href="portfolio-single.html">Read More <i className="flaticon-right-arrow"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="ft-portfolio-slider-item">
					<div className="ft-portfolio-slider-innerbox position-relative">
						<div className="ft-portfolio-img">
							<img src="assets/img/project/port3.jpg" alt=""/>
						</div>
						<div className="ft-portfolio-text headline headline pera-content">
							<h3><a href="project-single.html">Service & Aftermarket
							Logistics</a></h3>
							<p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo vel facilisis. </p>
							<div className="ft-btn-3">
								<a className="d-flex justify-content-center align-items-center" href="portfolio-single.html">Read More <i className="flaticon-right-arrow"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="ft-testimonial-2" className="ft-testimonial-section-2">
		<div className="container">
			<div className="ft-testimonial-top-content-2 d-flex justify-content-between align-items-end flex-wrap">
				<div className="ft-section-title-2 headline pera-content">
					<span className="sub-title">Testimonial</span>
					<h2>What People & Clients
						Think About Us?
					</h2>
				</div>
				<div className="ft-title-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
				</div>
			</div>
			<div className="ft-testimonial-slider-wrapper-2  swiper-container">
				<div className="ft-testimonial-slider-2">
					<div className="choose_slider_items ul-li choose_slider">
						<ul id="mySlider1">
							<li className="current_item">
								<div className="ft-testimonial-innerbox-item-2 text-center">
									<div className="ft-testimonial-img">
										<img src="assets/img/testimonial/test2.1.jpg" alt=""/>
									</div>
									<div className="ft-testimonial-text headline pera-content">
										<div className="ft-testimonial-meta">
											<h3>Gallen  Maxwell</h3>
											<span>UI/UX Designer</span>
										</div>
										<p>Lncididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
										<div className="ft-testimonial-rate ul-li">
											<ul>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="current_item">
								<div className="ft-testimonial-innerbox-item-2 text-center">
									<div className="ft-testimonial-img">
										<img src="assets/img/testimonial/test2.1.jpg" alt=""/>
									</div>
									<div className="ft-testimonial-text headline pera-content">
										<div className="ft-testimonial-meta">
											<h3>Gallen  Maxwell</h3>
											<span>UI/UX Designer</span>
										</div>
										<p>Lncididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
										<div className="ft-testimonial-rate ul-li">
											<ul>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="current_item">
								<div className="ft-testimonial-innerbox-item-2 text-center">
									<div className="ft-testimonial-img">
										<img src="assets/img/testimonial/test2.1.jpg" alt=""/>
									</div>
									<div className="ft-testimonial-text headline pera-content">
										<div className="ft-testimonial-meta">
											<h3>Gallen  Maxwell</h3>
											<span>UI/UX Designer</span>
										</div>
										<p>Lncididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
										<div className="ft-testimonial-rate ul-li">
											<ul>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="current_item">
								<div className="ft-testimonial-innerbox-item-2 text-center">
									<div className="ft-testimonial-img">
										<img src="assets/img/testimonial/test2.1.jpg" alt=""/>
									</div>
									<div className="ft-testimonial-text headline pera-content">
										<div className="ft-testimonial-meta">
											<h3>Gallen  Maxwell</h3>
											<span>UI/UX Designer</span>
										</div>
										<p>Lncididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
										<div className="ft-testimonial-rate ul-li">
											<ul>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="current_item">
								<div className="ft-testimonial-innerbox-item-2 text-center">
									<div className="ft-testimonial-img">
										<img src="assets/img/testimonial/test2.1.jpg" alt=""/>
									</div>
									<div className="ft-testimonial-text headline pera-content">
										<div className="ft-testimonial-meta">
											<h3>Gallen  Maxwell</h3>
											<span>UI/UX Designer</span>
										</div>
										<p>Lncididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
										<div className="ft-testimonial-rate ul-li">
											<ul>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li className="current_item">
								<div className="ft-testimonial-innerbox-item-2 text-center">
									<div className="ft-testimonial-img">
										<img src="assets/img/testimonial/test2.1.jpg" alt=""/>
									</div>
									<div className="ft-testimonial-text headline pera-content">
										<div className="ft-testimonial-meta">
											<h3>Gallen  Maxwell</h3>
											<span>UI/UX Designer</span>
										</div>
										<p>Lncididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
										<div className="ft-testimonial-rate ul-li">
											<ul>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
												<li><i className="fas fa-star"></i></li>
											</ul>
										</div>
									</div>
								</div>
							</li>
						</ul>
						<div><a id="btn_next1" href="#"><i className="far fa-arrow-right"></i></a></div>
						<div><a id="btn_prev1" href="#"><i className="far fa-arrow-left"></i></a></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="ft-faq-why-choose-us" className="ft-faq-why-choose-us-section">
		<div className="container">
			<div className="ft-faq-why-choose-content">
				<div className="row">
					<div className="col-lg-6">
						<div className="ft-faq-content">
							<div className="ft-section-title-2 headline pera-content">
								<span className="sub-title">Frequently Asked Question</span>
								<h2>Have an Any Question?</h2>
							</div>
							<div className="accordion" id="accordionExample">
								<div className="accordion-item headline pera-content">
									<h2 className="accordion-header" id="headingOne">
										<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											Can i specify a delivery date when ordering?
										</button>
									</h2>
									<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus commodo viverra. 
										</div>
									</div>
								</div>
								<div className="accordion-item headline pera-content">
									<h2 className="accordion-header" id="headingTwo">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											What payment methods are supported?
										</button>
									</h2>
									<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus commodo viverra. 
										</div>
									</div>
								</div>
								<div className="accordion-item headline pera-content">
									<h2 className="accordion-header" id="headingThree">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											What is Federation of International Trade Association?
										</button>
									</h2>
									<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus commodo viverra. 
										</div>
									</div>
								</div>
								<div className="accordion-item headline pera-content">
									<h2 className="accordion-header" id="headingFour">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
											How can I Track My Shipments?
										</button>
									</h2>
									<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus commodo viverra. 
										</div>
									</div>
								</div>
							</div>	
						</div>
					</div>
					<div className="col-lg-6">
						<div className="ft-why-choose-content-2">
							<div className="ft-section-title-2 headline pera-content wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
								<span className="sub-title">Why Choos Us</span>
								<h2>Why You Like FasTrans?</h2>
							</div>
							<div className="ft-why-choose-feature-wrapper-2">
								<div className="row">
									<div className="col-lg-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
										<div className="ft-why-choose-feature-list-item-2">
											<div className="ft-why-choose-feature-icon">
												<i className="flaticon-logistics"></i>
											</div>
											<div className="ft-why-choose-feature-text headline pera-content">
												<h3>Safe Packing</h3>
												<p>Do eiusmod tempor incididunt ut labore et dolore aliqua.
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
										<div className="ft-why-choose-feature-list-item-2">
											<div className="ft-why-choose-feature-icon">
												<i className="flaticon-delivery-truck"></i>
											</div>
											<div className="ft-why-choose-feature-text headline pera-content">
												<h3>Right Time Delivery</h3>
												<p>Do eiusmod tempor incididunt ut labore et dolore aliqua.
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
										<div className="ft-why-choose-feature-list-item-2">
											<div className="ft-why-choose-feature-icon">
												<i className="flaticon-boat"></i>
											</div>
											<div className="ft-why-choose-feature-text headline pera-content">
												<h3>Ship everywhere</h3>
												<p>Do eiusmod tempor incididunt ut labore et dolore aliqua.
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 wow fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
										<div className="ft-why-choose-feature-list-item-2">
											<div className="ft-why-choose-feature-icon">
												<i className="flaticon-free-shipping"></i>
											</div>
											<div className="ft-why-choose-feature-text headline pera-content">
												<h3>Fastest Shipping</h3>
												<p>Do eiusmod tempor incididunt ut labore et dolore aliqua.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>						

	<section id="ft-blog-2" className="ft-blog-section-2 position-relative">
		<div className="container">
			<div className="ft-section-title-2 headline pera-content text-center">
				<span className="sub-title">Blog</span>
				<h2>Our Latest Post & News
				</h2>
			</div>
			<div className="ft-blog-content-2">
				<div className="ft-blog-slider-2">
					<div className="ft-item-innerbox">
						<div className="ft-blog-innerbox-2">
							<div className="ft-blog-img-2 position-relative">
								<img src="assets/img/blog/blg2.1.jpg" alt=""/>
								<div className="ft-blog-meta text-center d-flex align-items-center justify-content-center position-absolute">
									21 Oct
								</div>
							</div>
							<div className="ft-blog-text-2 headline pera-content">
								<h3><a href="blog-single.html">5 Benefits of Working with
									a Freight Broker
								</a></h3>
								<p>Masum suspendisse ultrices gravida. Risuslac vel facilisis gravida. </p>
								<div className="ft-btn-2">
									<a href="blog-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="ft-item-innerbox">
						<div className="ft-blog-innerbox-2">
							<div className="ft-blog-img-2 position-relative">
								<img src="assets/img/blog/blg2.2.jpg" alt=""/>
								<div className="ft-blog-meta text-center d-flex align-items-center justify-content-center position-absolute">
									21 Oct
								</div>
							</div>
							<div className="ft-blog-text-2 headline pera-content">
								<h3><a href="blog-single.html">Packaging And logistics
									services to the world
								</a></h3>
								<p>Masum suspendisse ultrices gravida. Risuslac vel facilisis gravida. </p>
								<div className="ft-btn-2">
									<a href="blog-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="ft-item-innerbox">
						<div className="ft-blog-innerbox-2">
							<div className="ft-blog-img-2 position-relative">
								<img src="assets/img/blog/blg2.3.jpg" alt=""/>
								<div className="ft-blog-meta text-center d-flex align-items-center justify-content-center position-absolute">
									21 Oct
								</div>
							</div>
							<div className="ft-blog-text-2 headline pera-content">
								<h3><a href="blog-single.html">Key Logistics Trends in Life
									Sciences 2021
								</a></h3>
								<p>Masum suspendisse ultrices gravida. Risuslac vel facilisis gravida. </p>
								<div className="ft-btn-2">
									<a href="blog-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="ft-item-innerbox">
						<div className="ft-blog-innerbox-2">
							<div className="ft-blog-img-2 position-relative">
								<img src="assets/img/blog/blg2.1.jpg" alt="" />
								<div className="ft-blog-meta text-center d-flex align-items-center justify-content-center position-absolute">
									21 Oct
								</div>
							</div>
							<div className="ft-blog-text-2 headline pera-content">
								<h3><a href="blog-single.html">5 Benefits of Working with
									a Freight Broker
								</a></h3>
								<p>Masum suspendisse ultrices gravida. Risuslac vel facilisis gravida. </p>
								<div className="ft-btn-2">
									<a href="blog-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="ft-item-innerbox">
						<div className="ft-blog-innerbox-2">
							<div className="ft-blog-img-2 position-relative">
								<img src="assets/img/blog/blg2.2.jpg" alt="" />
								<div className="ft-blog-meta text-center d-flex align-items-center justify-content-center position-absolute">
									21 Oct
								</div>
							</div>
							<div className="ft-blog-text-2 headline pera-content">
								<h3><a href="blog-single.html">Packaging And logistics
									services to the world
								</a></h3>
								<p>Masum suspendisse ultrices gravida. Risuslac vel facilisis gravida. </p>
								<div className="ft-btn-2">
									<a href="blog-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="ft-item-innerbox">
						<div className="ft-blog-innerbox-2">
							<div className="ft-blog-img-2 position-relative">
								<img src="assets/img/blog/blg2.3.jpg" alt=""/>
								<div className="ft-blog-meta text-center d-flex align-items-center justify-content-center position-absolute">
									21 Oct
								</div>
							</div>
							<div className="ft-blog-text-2 headline pera-content">
								<h3><a href="blog-single.html">Key Logistics Trends in Life
									Sciences 2021
								</a></h3>
								<p>Masum suspendisse ultrices gravida. Risuslac vel facilisis gravida. </p>
								<div className="ft-btn-2">
									<a href="blog-single.html">
										<i className="icon-first flaticon-right-arrow"></i>
										<span>Read More</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="carousel_nav  clearfix">
					<button type="button" className="blg-left_arrow"><i className="far fa-arrow-left"></i></button>
					<button type="button" className="blg-right_arrow"><i className="far fa-arrow-right"></i></button>
				</div>
			</div>
		</div>
	</section>	
        </Fragment>
    )
}

export default Hero;