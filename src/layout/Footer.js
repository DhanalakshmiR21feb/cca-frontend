import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email ", email);
    const formdata=({"email":email  });
    // Clear previous error
    setEmailError("");

    // Check if email is valid
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return; // Stop submission if email is invalid
    }
    console.log("Email ", email);
    setIsLoading(true);
    try {
      const url = "http://localhost:4040/subscription-email";
      const response = await axios.post(url,formdata);
      console.log("data ", response);
      setTimeout(() => {
        setIsLoading(false);
        alert("Subscribed successfully!");
      }, 2000);
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
      setIsLoading(false);
    }
  
  };

  return (
    <footer id="footer-2" className="footer division">
      <div className="container">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER INFO */}
          <div className="col-md-5 col-lg-5 col-xl-4">
            <div className="footer-info mb-40">
              {/* Footer Logo */}
              {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
              <img src="logo.jpg" width={300} height={100} alt="footer-logo" />
              {/* Text */}
              <p>
                Unlock your potential with our courses, designed for success in
                today's fast-paced world. Choose flexible learning options,
                whether online or in-class, tailored to your needs.
              </p>
            </div>
          </div>
          {/* FOOTER PRODUCTS LINKS */}
          <div className="col-md-3 col-lg-3 col-xl-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-md">Quick Links</h5>
              {/* Footer Links */}
              <ul className="foo-links clearfix">
                <li>
                  <Link href="/about">About CCA</Link>
                </li>
                <li>
                  <Link href="/categories-list">Courses Catalog</Link>
                </li>

                <li>
                  <Link href="/contacts">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER COMPANY LINKS */}
          <div className="col-md-4 col-lg-4 col-xl-3">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-md">Popular Categories</h5>
              {/* Footer Links */}
              <ul className="clearfix">
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Business English
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Finance &amp; Accounting
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Office Productivity
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER NEWSLETTER FORM */}
          <div className="col-md-7 col-xl-3">
            <div className="footer-form mb-20">
              {/* Title */}
              <h5 className="h5-md">Stay in Touch</h5>
              {/* Newsletter Form Input */}
              <form className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
                  <span className="input-group-btn">
                    <button
                      disabled={isLoading}
                      type="submit"
                      onClick={handleSubmit}
                      className="btn btn-md btn-rose tra-black-hover submit"
                      // className="btn btn-rose tra-rose-hover"
                    >
                      {isLoading ? (
                        <>
                          <img
                            src="/images/loading-loader.gif" // path to your loading image or spinner
                            alt="Loading"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </>
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </span>
                </div>
                 {/* Display email error */}
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                {/* Newsletter Form Notification */}
                <label className="form-notification" />
              </form>
            </div>
          </div>
          {/* END FOOTER NEWSLETTER FORM */}
        </div>
        {/* END FOOTER CONTENT */}
        {/* BOTTOM FOOTER */}
        <div className="bottom-footer">
          <div className="row">
            {/* FOOTER COPYRIGHT */}
            <div className="col-lg-8">
              <ul className="bottom-footer-list">
                <li>
                  <p>© Copyright CCA {new Date().getFullYear()}</p>
                </li>
                <li>
                  <p>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      href="tel:9844437118"
                    >
                      +91 9844437118
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="last-li">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      href="mailto:info@codecraftacademy.co.in"
                    >
                      info@codecraftacademy.co.in
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
            {/* FOOTER SOCIALS LINKS */}
            <div className="col-lg-4 text-right">
              <ul className="foo-socials text-center clearfix">
                <li>
                  <Link
                    href="#"
                    to="https://www.facebook.com/profile.php?id=61563450310734"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="ico-facebook"
                  >
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="ico-instagram"
                  >
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              
       
                {/*
									<li>href="#" class="ico-behance"><i class="fab fa-behance"></i></li>	
									<li>href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></li>									
									<li>href="#" class="ico-instagram"><i class="fab fa-instagram"></i></li>	
									<li>href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></li>
									<li>href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></li>								
									<li>href="#" class="ico-youtube"><i class="fab fa-youtube"></i></li>										
									<li>href="#" class="ico-vk"><i class="fab fa-vk"></i></li>
									<li>href="#" class="ico-yelp"><i class="fab fa-yelp"></i></li>
									<li>href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></li>
								    */}
              </ul>
            </div>
          </div>
        </div>
        {/* END BOTTOM FOOTER */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer;
