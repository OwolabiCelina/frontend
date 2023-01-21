const Contact = () => {
    return ( 
        <>
        <section id="ft-breadcrumb" className="ft-breadcrumb-section position-relative" style={{backgroundImage: `url("assets/img/bg/bread-bg.jpg")`}}>
		<span className="background_overlay"></span>
		<span className="design-shape position-absolute"><img src="assets/img/shape/tmd-sh.png" alt="" /></span>
		<div className="container">
			<div className="ft-breadcrumb-content headline text-center position-relative">
				<h2>Contact</h2>
				<div className="ft-breadcrumb-list ul-li">
					<ul>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

    	<section id="ft-contact-page" className="ft-contact-page-section page-padding">
		<div className="container">
			<div className="ft-contact-page-content">
				<div className="row">
					<div className="col-lg-6">
						<div className="ft-contact-page-text-wrapper">
							<div className="ft-section-title-2 headline pera-content">
								<span className="sub-title">Get a Quote</span>
								<h2>Get in Touch And We’ll  Help
									Your Business
								</h2>
							</div>
							<div className="ft-contact-page-contact-info">
								<div className="ft-contact-cta-items d-flex">
									<div className="ft-contact-cta-icon d-flex align-items-center justify-content-center">
										<i className="fal fa-map-marker-alt"></i>
									</div>
									<div className="ft-contact-cta-text headline pera-content">
										<h3>Office address</h3>
										<p>Digital Agency Network 20 Eastbourne
										Terrace London W2 6LG</p>
									</div>
								</div>
								<div className="ft-contact-cta-items d-flex">
									<div className="ft-contact-cta-icon d-flex align-items-center justify-content-center">
										<i className="fas fa-phone-alt"></i>
									</div>
									<div className="ft-contact-cta-text headline pera-content">
										<h3>Telephone number</h3>
										<p>(408) 389-5470</p>
										<p>(408) 456-5470</p>
									</div>
								</div>
								<div className="ft-contact-cta-items d-flex">
									<div className="ft-contact-cta-icon d-flex align-items-center justify-content-center">
										<i className="far fa-envelope"></i>
									</div>
									<div className="ft-contact-cta-text headline pera-content">
										<h3>Mail address</h3>
										<p>help@envato.com</p>
										<p>help@support.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="ft-contact-page-form-wrapper headline">
							<h3 className="text-center">Get a Quote</h3>
							<form action="https://html.themexriver.com/fastrans/contact.php">
								<div className="row">
									<div className="col-lg-6">
										<input type="text" name="name" placeholder="Your Name" />
									</div>
									<div className="col-lg-6">
										<input type="email" name="email" placeholder="Your Email" />
									</div>
									<div className="col-lg-6">
										<input type="text" name="affi" placeholder="Affiliation" />
									</div>
									<div className="col-lg-6">
										<input type="text" name="number" placeholder="Number" />
									</div>
									<div className="col-lg-6">
										<input type="text" name="department" placeholder="Inquiry Department" />
									</div>
									<div className="col-lg-6">
										<input type="text" name="date" placeholder="Date" />
									</div>
									<div className="col-lg-12">
										<textarea name="message" placeholder="Your Message"></textarea>
									</div>
									<div className="col-lg-12">
										<button> Book An Appointmet</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>		
        </>
     );
}
 
export default Contact;