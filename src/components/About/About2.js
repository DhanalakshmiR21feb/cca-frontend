import { Link} from 'react-router-dom';
import React from "react";
import { useModal } from "../Register/ModalContext";

const About2 = () => {
    const { openUserFormModal } = useModal();
    return (
        <section id="about-2" className="wide-60 about-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* ABOUT IMAGE */}
                    <div className="col-md-5 col-lg-6">
                        <div className="img-block pc-25 mb-40">
                            <img
                                className="img-fluid"
                          src="/images/about.jpeg"
                                alt="about-image"
                            />
                        </div>
                    </div>
                    {/* ABOUT TEXT */}
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block pc-25 mb-40">
                            <h3 className="h3-sm">
                                Transform your life through online education
                            </h3>

                            <p>
                            we believe that online education should be more than just watching videos.
                             Our courses are interactive, engaging, and designed to provide a rich learning experience. 
                             You'll participate in live sessions, complete hands-on projects, 
                             and receive personalized feedback from instructors. With 24/7 access to course materials, 
                            you can revisit lessons and practice until you feel confident in your new skills.
                            </p>
                            {/* List */}
                            <ul className="txt-list mb-15">
                                <li>
                                <b>Achieve Your Goals:</b>
                                 Gain the skills you need to advance your career or explore new opportunities with our online courses.
                                </li>
                                <li>
                                <b>Enroll Today:</b> Begin your path to success—explore our courses and enroll now to start transforming your life.
                                </li>
                           
                            </ul>
                            {/* Button */}
                            <Link href="#"
                             onClick={openUserFormModal}
                                className="btn btn-md btn-tra-grey rose-hover">
                                Start Learning Now

                            </Link>
                        </div>
                    </div>
                    {/* END ABOUT TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default About2;
