import { Link} from 'react-router-dom';
import React from "react";

const CategoriesListPageHero = () => {
    return (
        <section className="bg-05 page-hero-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-txt white-color">
                            {/* Title */}
                            <h3 className="h3-xs">Course Categories</h3>
                            {/* Share Icons */}
                            <div className="share-list">
                                <ul className="share-social-icons text-center clearfix">
                                    <li>
                                        <p>
                                            <span>3486 courses</span> found in{" "}
                                            <span>18 categories</span>
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
                                        <Link href="#" 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }} 
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
                                                54.2k

                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Text */}
                            <p>
                                <span>164,714 students</span> are learning
                                online on CCA
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

export default CategoriesListPageHero;
