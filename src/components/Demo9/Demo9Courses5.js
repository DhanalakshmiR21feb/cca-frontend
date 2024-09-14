import { Link} from 'react-router-dom';
import React from "react";

const Demo9Courses5 = () => {
    return (
        <section id="courses-5" className="courses-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-60">
                            {/* Title 	*/}
                            <h3 className="h3-sm">
                                Best Courses
                            </h3>
                            {/* Text */}
                            <p className="p-md">
                            Our courses offer hands-on learning with real-world projects, ensuring you gain practical skills.
                             Personalized, one-on-one teaching further supports your unique learning needs.
                            </p>
                            {/* Button */}
                            <div className="title-btn">
                                <Link href="/courses-list" to="/course"
                                    className="btn btn-tra-grey rose-hover">
                                    View All Courses

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* COURSES LIST */}
                    <div className="col-lg-6">
                        {/* COURSE #1 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">

                                <div className="row">
                                    {/* Course Description */}
                                    <div className="col-sm-7 cbox-5-txt">
                                        <h5 className="h5-xs">
                                            Basic English Grammar
                                            
                                        </h5>
                                        <p className="p-sm grey-color">
                                            10 Total Hours
                                        </p>
                                        {/* Rating */}
                                        <div className="course-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            {/* <span className="cr-rating">
                                                4.89 (31 Reviews)
                                            </span> */}
                                        </div>
                                    </div>
                                    {/* Course Data */}
                                    <div className="col-sm-3 cbox-5-data text-center clearfix">
                                        <p className="grey-color">
                                            <i className="fas fa-users" />
                                            7348
                                        </p>
                                    </div>
                                    {/* Course Price */}
                                    <div className="col-sm-2 cbox-5-price text-right clearfix">
                                        <span className="course-price">
                                        ₹1199
                                        </span>
                                        <span className="old-price">
                                        ₹1499
                                        </span>
                                    </div>
                                </div>

                            </Link>
                        </div>
                        {/* END COURSE #1 */}
                        {/* COURSE #2 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">

                                <div className="row">
                                    {/* Course Description */}
                                    <div className="col-sm-7 cbox-5-txt">
                                        <h5 className="h5-xs">
                                        Intermediate English Grammar
                                        </h5>
                                        <p className="p-sm grey-color">
                                            20 Total Hours
                                        </p>
                                        {/* Rating */}
                                        <div className="course-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                            {/* <span className="cr-rating">
                                                4.19 (76 Reviews)
                                            </span> */}
                                        </div>
                                    </div>
                                    {/* Course Data */}
                                    <div className="col-sm-3 cbox-5-data text-center clearfix">
                                        <p className="grey-color">
                                            <i className="fas fa-users" />
                                            12035
                                        </p>
                                    </div>
                                    {/* Course Price */}
                                    <div className="col-sm-2 cbox-5-price text-right clearfix">
                                        <span className="course-price">
                                        ₹1499
                                        </span>
                                        <span className="old-price">
                                        ₹1999
                                        </span>
                                    </div>
                                </div>

                            </Link>
                        </div>
                        {/* END COURSE #2 */}
                        {/* COURSE #3 */}
                        <div className="cbox-5">
                            <Link href="/course-details">

                                <div className="row">
                                    {/* Course Description */}
                                    <div className="col-sm-7 cbox-5-txt">
                                        <h5 className="h5-xs">
                                           Advanced English
                                        </h5>
                                        <p className="p-sm grey-color">
                                            30 Total Hours
                                        </p>
                                        {/* Rating */}
                                        <div className="course-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            {/* <span className="cr-rating">
                                                4.15 (58 Ratings)
                                            </span> */}
                                        </div>
                                    </div>
                                    {/* Course Data */}
                                    <div className="col-sm-3 cbox-5-data text-center clearfix">
                                        <p className="grey-color">
                                            <i className="fas fa-users" />
                                            10651
                                        </p>
                                    </div>
                                    {/* Course Price */}
                                    <div className="col-sm-2 cbox-5-price text-right clearfix">
                                        <span className="course-price">
                                        ₹1999
                                        </span>
                                        <span className="old-price">
                                        ₹2499
                                        </span>
                                    </div>
                                </div>

                            </Link>
                        </div>
                        {/* END COURSE #3 */}
                    </div>
                    {/* END COURSES LIST */}
                    {/* COURSES LIST */}
                    <div className="col-lg-6">
                        {/* COURSE #4 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">

                                <div className="row">
                                    {/* Course Description */}
                                    <div className="col-sm-7 cbox-5-txt">
                                        <h5 className="h5-xs">
                                            Advanced Excel
                                        </h5>
                                        <p className="p-sm grey-color">
                                            20 Total Hours
                                        </p>
                                        {/* Rating */}
                                        <div className="course-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                            {/* <span className="cr-rating">
                                                4.08 (164 Reviews)
                                            </span> */}
                                        </div>
                                    </div>
                                    {/* Course Data */}
                                    <div className="col-sm-3 cbox-5-data text-center clearfix">
                                        <p className="grey-color">
                                            <i className="fas fa-users" />
                                            15491
                                        </p>
                                    </div>
                                    {/* Course Price */}
                                    <div className="col-sm-2 cbox-5-price text-right clearfix">
                                        <span className="course-price">
                                        ₹1999
                                        </span>
                                        <span className="old-price">
                                        ₹2499
                                        </span>
                                    </div>
                                </div>

                            </Link>
                        </div>
                        {/* END COURSE #4 */}
                        {/* COURSE #5 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">

                                <div className="row">
                                    {/* Course Description */}
                                    <div className="col-sm-7 cbox-5-txt">
                                        <h5 className="h5-xs">
                                            C Programming
                                        </h5>
                                        <p className="p-sm grey-color">
                                            60 Total Hours
                                        </p>
                                        {/* Rating */}
                                        <div className="course-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            {/* <span className="cr-rating">
                                                4.79 (117 Reviews)
                                            </span> */}
                                        </div>
                                    </div>
                                    {/* Course Data */}
                                    <div className="col-sm-3 cbox-5-data text-center clearfix">
                                        <p className="grey-color">
                                            <i className="fas fa-users" />
                                            17035
                                        </p>
                                    </div>
                                    {/* Course Price */}
                                    <div className="col-sm-2 cbox-5-price text-right clearfix">
                                        <span className="course-price">
                                        ₹3499
                                        </span>
                                        <span className="old-price">
                                        ₹3999
                                        </span>
                                    </div>
                                </div>

                            </Link>
                        </div >
                        {/* END COURSE #5 */}
                        {/* COURSE #6 */}
                        <div className="cbox-5">
                            <Link href="/course-details">

                                <div className="row">
                                    {/* Course Description */}
                                    <div className="col-sm-7 cbox-5-txt">
                                        <h5 className="h5-xs">
                                            Computer Aided Design(CAD)
                                        </h5>
                                        <p className="p-sm grey-color">
                                            25 Total Hours
                                        </p>
                                        {/* Rating */}
                                        <div className="course-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                            {/* <span className="cr-rating">
                                                4.42 (82 Ratings)
                                            </span> */}
                                        </div>
                                    </div>
                                    {/* Course Data */}
                                    <div className="col-sm-3 cbox-5-data text-center clearfix">
                                        <p className="grey-color">
                                            <i className="fas fa-users" />
                                            8163
                                        </p>
                                    </div>
                                    {/* Course Price */}
                                    <div className="col-sm-2 cbox-5-price text-right clearfix">
                                        <span className="course-price">
                                        ₹2499
                                        </span>
                                        <span className="old-price">
                                        ₹2999
                                        </span>
                                    </div>
                                </div>

                            </Link>
                        </div >
                        {/* END COURSE #6 */}
                    </div >
                    {/* END COURSES LIST */}
                </div >
                {/* End row */}
            </div >
            {/* End container */}
        </section >
    );
};

export default Demo9Courses5;
