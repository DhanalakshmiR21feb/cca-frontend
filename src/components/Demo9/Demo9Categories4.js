import { Link } from "react-router-dom";
import React from "react";

const Demo9Categories4 = () => {
  return (
    <section id="categories-4" className="wide-60 categories-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-80">
              {/* Title 	*/}
              <h3 className="h3-sm">Our Course Categories</h3>
              {/* Text */}
              {/* <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                                primis libero tempus, blandit posuere and ligula varius magna a
                                porta
                            </p> */}
              {/* Button */}
              {/* <div className="title-btn">
                <Link
                  href="/categories-list"
                  className="btn btn-tra-grey rose-hover"
                >
                  View All Categories
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          {/* CATEGORIE BOX #1 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-blue">
                  <img
                    src="/images/icons/categories/development.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Office Automation</h5>
                {/* <p>341 Courses</p> */}
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">Artificial Intelligence,</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Internet of Things,</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Hardware &amp; Networking</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Cycber Law</Link>
                  </li>

                  <li>
                    <Link href="/courses-list">Network &amp; Security</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #1 */}
          {/* CATEGORIE BOX #2 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-green">
                  <img
                    src="/images/icons/categories/money.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Programming Languages</h5>
                {/* <p>428 Courses</p> */}
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">C Programming</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      Algorithms &amp; Data Structures
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">C ++</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Core Java</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Javascript</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Html , CSS</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #2 */}
          {/* CATEGORIE BOX #3 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-red">
                  <img
                    src="/images/icons/categories/design.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Soft Skills</h5>
                {/* <p>268 Courses</p> */}
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">Beginner English</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Intermediate English</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Advanced English</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Facing Interviews</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Call Center Training</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #3 */}
          {/* CATEGORIE BOX #4 */}

          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-yellow">
                  <img
                    src="/images/icons/categories/chip.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Programming</h5>
                <p>284 Courses</p>
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">Mobile Development,</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Web Development,</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Game Development,</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Software Testing,</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Programming Languages,</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Databases,</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Cloud Computing,</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Software Development,</Link>
                  </li>
                  <li>
                    <Link href="/courses-list">Development Tools</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #5 */}
        </div>
        {/* End row */}
        {/* ALL COURSES BUTTON */}
        <div className="row">
          <div className="col-md-12">
            <div className="all-courses-btn">
              <Link
                href="/categories-list"
                className="btn btn-md btn-tra-grey rose-hover"
              >
                Browse All Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo9Categories4;
