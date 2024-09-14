import { Link } from "react-router-dom";
import React from "react";
import Layout from "../../layout/Layout";
import PageTitle from "../../layout/PageTitle";
const Aboutcourses3 = () => {
  return (
    // <Layout>
    //   <div className="inner-page-wrapper">
    //     <PageTitle pageTitle="About CCA" />

        <section id="courses-3" className="wide-60 courses-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row">
              <div className="col-md-12">
                <div className="section-title title-centered mb-60">
                  {/* Title 	*/}
                  <h3 className="h3-sm">Popular Courses</h3>

                  <p className="p-md">
                    Our courses offer hands-on learning with real-world
                    projects, ensuring you gain practical skills. Personalized,
                    one-on-one teaching further supports your unique learning
                    needs.
                  </p>
                  {/* Button 
									<div class="title-btn">
										<Link href='/courses-list'> className='btn btn-rose tra-black-hover'>View All Courses</Link>
									</div> */}
                </div>
              </div>
            </div>
            {/* COURSES HOLDER */}
            <div className="row courses-grid">
              {/* COURSE #1 */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="cbox-1">
                  <Link href="/course-list">
                    <img
                      className="img-fluid"
                      src="images/courses/office.png"
                      alt="course-preview"
                    />

                    <div className="cbox-1-txt">
                      <p className="course-tags">
                        <span>MS Word</span>
                        <span>Advance Excel</span>
                        <span>Power Point</span>
                      </p>

                      <h5 className="h5-xs">Office Automation</h5>

                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* END COURSE #1 */}
              {/* COURSE #2 */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="cbox-1">
                  <Link href="/course-details">
                    <img
                      className="img-fluid"
                      src="images/courses/basic-grammar.png"
                      alt="course-preview"
                    />

                    <div className="cbox-1-txt">
                      <p className="course-tags">
                        <span>Languages</span>
                        <span>English</span>
                      </p>

                      <h5 className="h5-xs">Basic English Grammar</h5>

                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* END COURSE #2 */}
              {/* COURSE #2 */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="cbox-1">
                  <Link href="/course-details">
                    <img
                      className="img-fluid"
                      src="images/courses/intermediate-eng.png"
                      alt="course-preview"
                    />

                    <div className="cbox-1-txt">
                      <p className="course-tags">
                        <span>Languages</span>
                        <span>English</span>
                      </p>

                      <h5 className="h5-xs">Intermediate English</h5>

                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* END COURSE #2 */}
              {/* COURSE #3 */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="cbox-1">
                  <Link href="/course-details">
                    <img
                      className="img-fluid"
                      src="images/courses/tally.png"
                      alt="course-preview"
                    />

                    <div className="cbox-1-txt">
                      <p className="course-tags">
                        <span>Tally with GST</span>
                        <span>ERP9</span>
                      </p>

                      <h5 className="h5-xs">Banking and Accounting</h5>

                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* END COURSE #3 */}
              {/* COURSE #4 */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="cbox-1">
                  <Link href="/course-details">
                    <img
                      className="img-fluid"
                      src="images/courses/programming.jpg"
                      alt="course-preview"
                    />

                    <div className="cbox-1-txt">
                      <p className="course-tags">
                        <span>C</span>
                        <span>Advance C & Data Structures</span>
                        <span>C++</span>
                        <span>Java</span>
                        <span>C #</span>
                      </p>

                      <h5 className="h5-xs">Programming</h5>

                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* END COURSE #4 */}
              {/* COURSE #5 */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="cbox-1">
                  <Link href="/course-details">
                    <img
                      className="img-fluid"
                      src="images/courses/development.png"
                      alt="course-preview"
                    />

                    <div className="cbox-1-txt">
                      <p className="course-tags">
                        <span>Full Stack </span>
                        <span>Frontend</span>
                        <span>Backend</span>
                        <span>Databases</span>
                      </p>

                      <h5 className="h5-xs">Development</h5>

                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* END COURSE #5 */}
              {/* COURSE #6 */}

              {/* END COURSE #6 */}
              {/* COURSE #7 */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="cbox-1">
                  <Link href="/course-details">
                    <img
                      className="img-fluid"
                      src="images/courses/webdesigning.jpg"
                      alt="course-preview"
                    />

                    <div className="cbox-1-txt">
                      <p className="course-tags">
                        <span>HTML 5</span>
                        <span>CSS3</span>
                        <span>Javascript</span>
                      </p>

                      <h5 className="h5-xs">Web Designing</h5>

                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* END COURSE #7 */}
              {/* COURSE #8 */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="cbox-1">
                  <Link href="/course-details">
                    <img
                      className="img-fluid"
                      src="images/courses/digital.jpg"
                      alt="course-preview"
                    />

                    <div className="cbox-1-txt">
                      <p className="course-tags">
                        <span>Internet Marketing</span>
                        <span>FB</span>
                        <span>Instagram</span> <span>Whatsapp API</span>
                      </p>

                      <h5 className="h5-xs">Digital Marketing</h5>

                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* END COURSE #8 */}
            </div>
            {/* END COURSES HOLDER */}
            {/* ALL COURSES BUTTON */}
            {/* <div className="row">
                    <div className="col-md-12">
                        <div className="all-courses-btn">
                            <Link href="/courses-list" className="btn btn-md btn-tra-grey rose-hover">
                                View All Courses

                            </Link>
                        </div>
                    </div>
                </div> */}
          </div>
          {/* End container */}
        </section>
    //   </div>
    // </Layout>
  );
};

export default Aboutcourses3;
