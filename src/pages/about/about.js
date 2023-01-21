const About = () => {
    return ( 
        <>
            <section style={{backgroundImage: `url("assets/img/bg/bread-bg.jpg")`}} id="ft-breadcrumb" class="ft-breadcrumb-section position-relative" data-background="assets/img/bg/bread-bg.jpg">
		<span class="background_overlay"></span>
		<span class="design-shape position-absolute"><img src="assets/img/shape/tmd-sh.png" alt="" /></span>
		<div class="container">
			<div class="ft-breadcrumb-content headline text-center position-relative">
				<h2>About</h2>
				<div class="ft-breadcrumb-list ul-li">
					<ul>
						<li><a href="#">Home</a></li>
						<li>About</li>
					</ul>
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
							<div className="ft-section-title-2 headline pera-content">
								<span className="sub-title">About Company</span>
								<h2>We Provide
									a Reliable Services
									<span>Since 1982</span>
								</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
							</div>
							<div className="ft-about-feature-wrapper-2">
								<div className="row">
									<div className="col-lg-6">
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
									<div className="col-lg-6">
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
					<div className="col-lg-6">
						<div className="ft-about-img-2-wrapper position-relative">
							<span className="ft-about-shape1 position-absolute"><img src="assets/img/shape/ab-sh1.png" alt="" /></span>
							<span className="ft-about-shape2 position-absolute"><img src="assets/img/shape/ab-sh2.png" alt="" /></span>
							<div className="ft-about-img-2">
								<img src="assets/img/about/ab2.jpg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
     );
}
 
export default About;