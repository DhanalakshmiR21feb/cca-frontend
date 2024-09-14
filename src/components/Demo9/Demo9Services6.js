import { Link } from "react-router-dom";
import React from "react";
import { useModal } from "../Register/ModalContext";

const Demo9Services6 = () => {
  const { openUserFormModal } = useModal();
  return (
    <section
      id="services-6"
      className="bg-03 wide-60 services-section division"
    >
      <div className="container white-color">
        {/* SERVICES TEXT */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 text-center">
            <div className="services-6-txt">
              {/* Title */}
              <h3 className="h3-md">Get Quality Education with CCA</h3>
              {/* Text */}
              <p className="p-md">
                <div>
                  🎓 We offer courses in AI, Data Analysis, and Designing, all
                  with hands-on training.
                </div>
                <div>💰 Quality education at affordable prices.</div>
                <div>🏢 Multiple branches across the state.</div>
              </p>
              {/* Button */}
              {/* <button type="submit" onClick={(e) => {
                  e.preventDefault();
                  isOpen=true;

                }}
                className="btn btn-md btn-rose tra-white-hover">Register</button> */}
              <Link
                href="#"
               onClick={openUserFormModal}
                className="btn btn-md btn-rose tra-white-hover"
              >
                Start Learning Now!
              </Link>
            </div>
          </div>
        </div>
        {/* END SERVICES TEXT */}
        {/* SERVICE BOXES */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              {/* SERVICE BOX #1 */}
              <div className="sbox-6 icon-xl">
                <span className="flaticon-031-select" />
                <h5 className="h5-xs">Trending Courses</h5>
              </div>
              {/* SERVICE BOX #2 */}
              <div className="sbox-6 icon-xl">
                <span className="flaticon-028-learning-1" />
                <h5 className="h5-xs">Certified Teachers</h5>
              </div>
              {/* SERVICE BOX #3 */}
              <div className="sbox-6 icon-xl">
                <span className="flaticon-006-diploma" />
                <h5 className="h5-xs">Graduation Certificate</h5>
              </div>
              {/* SERVICE BOX #4 */}
              <div className="sbox-6 icon-xl">
                <span className="flaticon-013-elearning-5" />
                <h5 className="h5-xs">Online Course Facilities</h5>
              </div>
              {/* SERVICE BOX #5 */}
              <div className="sbox-6 icon-xl">
                <span className="flaticon-001-book" />
                <h5 className="h5-xs">Free Books &amp; Library</h5>
              </div>
            </div>
          </div>
        </div>
        {/* END SERVICE BOXES */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo9Services6;
