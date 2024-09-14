import React from "react";
import CoursesSlider from "../CoursesSlider";

const CoursesListCourses1 = () => {
  return (
    <section id="courses-1" className="wide-100 courses-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-40">
              {/* Title 	*/}
              <h4 className="h4-xl">Our Courses</h4>
              {/* Text */}
              <p className="p-md">
              At Code Craft Academy, our mission is to empower students by providing high-quality, 
              affordable education in the field of technology. We strive to bridge the gap between
               theoretical knowledge and practical skills through hands-on training in courses like AI,
                Data Analysis, Web Design, and more. Our goal is to equip learners with the tools and 
                confidence needed to excel in the tech industry and create a brighter, tech-driven 
                future for everyone.
              </p>
            </div>
          </div>
        </div>
        {/* COURSE BOXES CAROUSEL */}
        <div className="row">
          <div className="col-lg-12">
            <CoursesSlider />
          </div>
        </div>
        {/* END COURSES BOXES CAROUSEL */}
      </div>
      {/* End container */}
    </section>
  );
};

export default CoursesListCourses1;
