import { Link} from 'react-router-dom';
import React from "react";

const CoursesListPageHero = () => {
    return (
        <section className="bg-05 page-hero-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-txt white-color">
                            {/* Title */}
                            <h3 className="h3-xs">English Language Courses</h3>
                            {/* Share Icons */}
                            <div className="share-list">
                                <ul className="share-social-icons text-center clearfix">
                                    <li>
                                        <p>
                                            <span>289 courses</span> found
                                        </p>
                                        <p />
                                    </li>
                                    <li>
                                        <Link href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="share-ico ico-facebook"
                                        >
                                            <i className="fab fa-facebook-f" />

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="share-ico ico-twitter"
                                        >
                                            <i className="fab fa-twitter" />

                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            href="mailto:yourdomain@mail.com"
                                            className="share-ico ico-mail"
                                        >
                                            <i className="far fa-envelope" />

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="share-ico ico-bookmark"
                                        >
                                            <i className="far fa-bookmark" />
                                            8.4k

                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Text */}
                            <p>
                                <span>9,463 students</span> are learning English
                                Language on CCA
                            </p>
                        </div>
                    </div>
                    {/* END PAGE HERO TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default CoursesListPageHero;
