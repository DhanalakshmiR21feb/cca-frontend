import { Link} from 'react-router-dom';
import React from "react";

const HomeSelect = () => {
    return (
        <section id="select" className="bg-fixed select-section division">
            <div className="container-fluid">
                <div className="st-content">
                    <div className="row">
                        <div className="col-md-12 section-title p-0">
                            <h3>Creative Templates That Impress</h3>
                            <p>
                                CCA comes with 9 ready to use stunning demos to help people
                                build nice and fancy website without being a professional
                                designers
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-6 col-lg-4 select_link wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <div className="hover-overlay">
                                <Link href="/demo-1">

                                    <img
                                        className="img-fluid"
                                        src="/demo/images/layout-1.jpg"
                                        alt="layout-1-preview"
                                    />

                                </Link>
                            </div>
                            <h4>Home Page #1</h4>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 select_link wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <div className="hover-overlay">
                                <Link href="/demo-2">

                                    <img
                                        className="img-fluid"
                                        src="/demo/images/layout-2.jpg"
                                        alt="layout-2-preview"
                                    />

                                </Link>
                            </div>
                            <h4>Home Page #2</h4>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 select_link wow fadeInUp"
                            data-wow-delay="0.8s"
                        >
                            <div className="hover-overlay">
                                <Link href="/demo-3">

                                    <img
                                        className="img-fluid"
                                        src="/demo/images/layout-3.jpg"
                                        alt="layout-3-preview"
                                    />

                                </Link>
                            </div>
                            <h4>Home Page #3</h4>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 select_link wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <div className="hover-overlay">
                                <Link href="/demo-4">

                                    <img
                                        className="img-fluid"
                                        src="/demo/images/layout-4.jpg"
                                        alt="layout-4-preview"
                                    />

                                </Link>
                            </div>
                            <h4>Home Page #4</h4>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 select_link wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <div className="hover-overlay">
                                <Link href="/demo-5">

                                    <img
                                        className="img-fluid"
                                        src="/demo/images/layout-5.jpg"
                                        alt="layout-5-preview"
                                    />

                                </Link>
                            </div>
                            <h4>Home Page #5</h4>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 select_link wow fadeInUp"
                            data-wow-delay="0.8s"
                        >
                            <div className="hover-overlay">
                                <Link href="/demo-6">

                                    <img
                                        className="img-fluid"
                                        src="/demo/images/layout-6.jpg"
                                        alt="layout-6-preview"
                                    />

                                </Link>
                            </div>
                            <h4>Home Page #6</h4>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 select_link wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <div className="hover-overlay">
                                <Link href="/demo-7">

                                    <img
                                        className="img-fluid"
                                        src="/demo/images/layout-7.jpg"
                                        alt="layout-7-preview"
                                    />

                                </Link>
                            </div>
                            <h4>Home Page #7</h4>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 select_link wow fadeInUp"
                            data-wow-delay="0.6s"
                        >
                            <div className="hover-overlay">
                                <Link href="/demo-8">

                                    <img
                                        className="img-fluid"
                                        src="/demo/images/layout-8.jpg"
                                        alt="layout-8-preview"
                                    />

                                </Link>
                            </div>
                            <h4>Home Page #8</h4>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 select_link wow fadeInUp"
                            data-wow-delay="0.8s"
                        >
                            <div className="hover-overlay">
                                <Link href="/demo-9">

                                    <img
                                        className="img-fluid"
                                        src="/demo/images/layout-9.jpg"
                                        alt="layout-9-preview"
                                    />

                                </Link>
                            </div>
                            <h4>Home Page #9</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSelect;
