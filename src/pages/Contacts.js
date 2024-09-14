import { Link } from "react-router-dom";
import React from "react";
import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";
const Contacts = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Contact Us" />
        <section id="contacts-2" className="wide-100 contacts-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row">
              <div className="col-md-12">
                <div className="section-title title-centered mb-60">
                  {/* Title 	*/}
                  <h3 className="h3-sm">Need Help? Get in Touch</h3>
                  {/* Text */}
                  {/* <p className="p-md">
                                        Aliquam a augue suscipit, luctus neque purus ipsum neque
                                        dolor primis libero tempus, blandit posuere and ligula
                                        varius magna a porta
                                    </p> */}
                </div>
              </div>
            </div>
            <div className="contacts-2-holder">
              <div className="row d-flex align-items-center">
                {/* CONTACT BOX #1 */}
                <div className="col-lg-4">
                  <div className="contact-box b-right">
                    {/* Icon */}
                    <img
                      className="img-75"
                      src="images/icons/pin.png"
                      alt="contacts-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md">Our Location</h5>
                    {/* Text */}
                    <p>
                      #1st floor, Upstair Canara Bank, Manjunatha Complex,
                      Jannapura, Bhadravathi - 577301, Ph : 98444 37118
                    </p>
                    {/* Button */}
                    <Link
                      href="/contacts"
                      className="btn btn-tra-grey rose-hover"
                    >
                      Find Location On Map
                    </Link>
                  </div>
                </div>
                {/* CONTACT BOX #2 */}
                <div className="col-lg-4">
                  <div className="contact-box b-right">
                    {/* Icon */}
                    <img
                      className="img-75"
                      src="images/icons/world-map.png"
                      alt="contacts-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md">Partnership Request</h5>
                    {/* Text */}
                    <p>For partnership and business development inquiries</p>
                    {/* Button */}
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      href="mailto:yourdomain@mail.com"
                      className="btn btn-tra-grey rose-hover"
                    >
                      info@codecraftacademy.co.in
                    </Link>
                  </div>
                </div>
                {/* CONTACT BOX #3 */}
                <div className="col-lg-4">
                  <div className="contact-box">
                    {/* Icon */}
                    <img
                      className="img-75"
                      src="/images/icons/request.png"
                      alt="contacts-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md">Need Help?</h5>
                    {/* Text */}
                    <p>
                      Have questions about teaching and career opportunities?
                    </p>
                    {/* Button */}
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      href="mailto:yourdomain@mail.com"
                      className="btn btn-tra-grey rose-hover"
                    >
                      info@codecraftacademy.co.in
                    </Link>
                  </div>
                </div>
              </div>
              {/* End row */}
            </div>
            {/* End contacts-holder */}
          </div>
          {/* End container */}
        </section>
        {/* END CONTACTS-2 */}
        {/* GOOGLE MAP
				============================================= */}
        <div id="gmap" className="map-section division">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="google-map">
                  {/* Embedded Google Map using an iframe - to select your location find it on Google maps and paste the link as the iframe src. If you want to use the Google Maps API instead then have at it! */}
                                   <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61982.933449097494!2d75.7055143!3d13.8430398!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ab13a52136396f7%3A0xc5a1b0a2e894a344!2sCode%20Craft%20Academy!5e0!3m2!1sen!2sin!4v1725282307434!5m2!1sen!2sin"
                    style={{
                      width: "100%",
                      height: "400px",
                      border: "0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
