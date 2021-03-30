import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div>
            
            <div id="footer">
	
	{/* <!-- Footer Top Section --> */}
	<div className="footer-top-section">
		<div className="container">
			<div className="row">
				<div className="col-xl-12">

					{/* <!-- Footer Rows Container --> */}
					<div className="footer-rows-container">
						
						{/* <!-- Left Side --> */}
						<div className="footer-rows-left">
							<div className="footer-row">
								<div className="footer-row-inner footer-logo">
									<img src="/assets/images/HandiworkLogo2.png" alt="" />
								</div>
							</div>
						</div>
						
						{/* <!-- Right Side --> */}
						<div className="footer-rows-right">

							{/* <!-- Social Icons --> */}
							<div className="footer-row">
								<div className="footer-row-inner">
									<ul className="footer-social-links">
										<li>
											<a href="#" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-facebook-f"></i>
											</a>
										</li>
										<li>
											<a href="#" title="Twitter" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-twitter"></i>
											</a>
										</li>
										<li>
											<a href="#" title="Instagram" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-instagram"></i>
											</a>
										</li>
										<li>
											<a href="#" title="LinkedIn" data-tippy-placement="bottom" data-tippy-theme="light">
												<i className="icon-brand-linkedin-in"></i>
											</a>
										</li>
									</ul>
									<div className="clearfix"></div>
								</div>
							</div>
							
							{/* <!-- Language Switcher --> */}
							{/* <div className="footer-row">
								<div className="footer-row-inner">
									<select className="selectpicker language-switcher" data-selected-text-format="count" data-size="5">
										<option selected>English</option>
										<option>Français</option>
										<option>Español</option>
										<option>Deutsch</option>
									</select>
								</div>
							</div> */}
						</div>

					</div>
					{/* <!-- Footer Rows Container / End --> */}
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Footer Top Section / End --> */}

	{/* <!-- Footer Middle Section --> */}
	<div className="footer-middle-section">
		<div className="container">
			<div className="row">

				{/* <!-- Links --> */}
				<div className="col-xl-2 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>For Customers</h3>
						<ul>
							<li><Link to="/handiworks"><span>Browse Artisans</span></Link></li>
							{/* <li><a href="#"><span>Add Resume</span></a></li> */}
							{/* <li><a href="#"><span>Job Alerts</span></a></li> */}
							<li><Link to="#"><span>My Bookmarks</span></Link></li>
						</ul>
					</div>
				</div>

				{/* <!-- Links --> */}
				<div className="col-xl-2 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>For Artisans</h3>
						<ul>
							{/* <li><a href="#"><span>Browse Candidates</span></a></li> */}
							<li><Link to="/handiworks"><span>Handiworks</span></Link></li>
							<li><Link to="#"><span>Post </span></Link></li>
							{/* <li><a href="#"><span>Plans & Pricing</span></a></li> */}
						</ul>
					</div>
				</div>

				{/* <!-- Links --> */}
				<div className="col-xl-2 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>Helpful Links</h3>
						<ul>
							<li><Link to="/login"><span>Contact</span></Link></li>
							<li><Link to="#"><span>Privacy Policy</span></Link></li>
							<li><Link to="#"><span>Terms of Use</span></Link></li>
						</ul>
					</div>
				</div>

				{/* <!-- Links --> */}
				<div className="col-xl-2 col-lg-2 col-md-3">
					<div className="footer-links">
						<h3>Account</h3>
						<ul>
							<li><Link to="/login"><span>Log In</span></Link></li>
							<li><Link to="/register"><span>My Account</span></Link></li>
						</ul>
					</div>
				</div>

				{/* <!-- Newsletter --> */}
				<div className="col-xl-4 col-lg-4 col-md-12">
					<h3><i className="icon-feather-mail"></i> Sign Up For a Newsletter</h3>
					<p>Weekly breaking news, analysis and cutting edge advices on handiworks searching.</p>
					<form action="#" method="get" className="newsletter">
						<input type="text" name="fname" placeholder="Enter your email address" />
						<button type="submit"><i className="icon-feather-arrow-right"></i></button>
					</form>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Footer Middle Section / End --> */}
	
	{/* <!-- Footer Copyrights --> */}
	<div className="footer-bottom-section">
		<div className="container">
			<div className="row">
				<div className="col-xl-12">
					© {(new Date().getFullYear())} <strong>Handiworks</strong>. All Rights Reserved.
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Footer Copyrights / End --> */}

</div>

        </div>
    )
}

export default Footer;
