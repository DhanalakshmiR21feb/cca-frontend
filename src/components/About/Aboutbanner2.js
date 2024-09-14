import React from "react";
import Time from "../../utils/time";
import { Link} from 'react-router-dom';
import { useModal } from "../Register/ModalContext";
const Aboutbanner2 = () => {
    const { openUserFormModal } = useModal();
    return (
        <section id="banner-2" className="bg-01 wide-60 banner-section">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* BANNER TEXT */}
                    <div className="col-md-7">
                        <div className="banner-2-txt white-color">
                            <h3 className="h3-lg">
                                Register now for 
                                <span> 20% Scholorship on Courses</span>. Limited offer!!
                    
                            </h3>
                            {/* COUNTDOWN ELEMENT */}
                            <div className="countdown">
                                <span className="countdown-txt">Ends in</span>
                                <div id="clock">
                                    <div className="cbox clearfix">
                                        <span className="cbox-digit">
                                            {Time("2024-010-31 00:00:00").days}
                                        </span>{" "}
                                        <span className="cbox-txt">d</span>
                                    </div>
                                    <div className="cbox clearfix">
                                        <span className="cbox-digit">
                                            {Time("2024-010-31 00:00:00").hours}
                                        </span>{" "}
                                        <span className="cbox-txt">h</span>
                                    </div>
                                    <div className="cbox clearfix">
                                        <span className="cbox-digit">
                                            {Time("2024-010-31 00:00:00").minutes}
                                        </span>{" "}
                                        <span className="cbox-txt">m</span>
                                    </div>
                                    <div className="cbox clearfix">
                                        <span className="cbox-digit">
                                            {Time("2022-09-27 00:00:00").seconds}
                                        </span>{" "}
                                        <span className="cbox-txt">s</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* REGISTER FORM */}
                    {/* <div className="col-md-5">
                        <div id="register-form">
                            <form
                                name="registerForm"
                                className="row register-form"
                                onSubmit={(e) => e.preventDefault()}
                            >
                               
                                <div id="input-name" className="col-md-12">
                                    <p>Your Name*</p>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control name"
                                        placeholder="Enter Your Name*"
                                        required
                                    />
                                </div>
                           
                                <div id="input-email" className="col-md-12">
                                    <p>Your Email*</p>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control email"
                                        placeholder="Enter Your Email*"
                                        required
                                    />
                                </div>
                           
                                <div id="input-contactNo" className="col-md-12">
                                    <p>Your Phone Number*</p>
                                    <input
                                        type="tel"
                                        name="contactNo"
                                        className="form-control contactNo"
                                        placeholder="Enter Your Phone Number*"
                                        required
                                    />
                                </div>
                            
                                <div className="col-md-12 form-btn">
                                    <button
                                        type="submit"
                                        className="btn btn-md btn-rose tra-black-hover submit"
                                    >
                                        Register Now
                                    </button>
                                </div>
                                
                                <div className="col-md-12 register-form-msg text-center">
                                    <span className="loading" />
                                </div>
                            </form>
                        </div>
                    </div> */}
                      <div><Link href="#" onClick={openUserFormModal}   
                      
                   className="btn btn-md btn-rose tra-white-hover">
                                    Enroll Now
                            </Link>
                            </div>
                    {/* END REGISTER FORM */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Aboutbanner2;
