import { Link} from 'react-router-dom';
import React from "react";

const CategoryDetailsBanner3 = () => {
    return (
        <section
            id="banner-3"
            className="bg-lightgrey bg-map banner-section division"
        >
            <div className="container">
                <div className="banner-3-holder bg-lightdark">
                    <div className="row d-flex align-items-center">
                        {/* BANNER IMAGE */}
                        <div className="col-lg-8">
                            <div className="banner-3-img">
                                <img
                                    className="img-fluid"
                                    src="images/banner-3-img.jpg"
                                    alt="banner-image"
                                />
                            </div>
                        </div>
                        {/* END BANNER IMAGE */}
                        {/* BANNER TEXT */}
                        <div className="col-lg-4">
                            <div className="banner-3-txt white-color">
                                {/* Title */}
                                <h4 className="h4-xs">
                                    Learn something new every day with
                                    <span>CCA</span>
                                </h4>
                                {/* Button */}
                                <Link href="/courses-list" className="btn btn-rose tra-white-hover">Find Out More
                                </Link>
                            </div>
                        </div>
                        {/* END BANNER TEXT */}
                    </div>
                    {/* End row */}
                </div>
                {/* End banner-3-holder */}
            </div>
            {/* End container */}
        </section>
    );
};

export default CategoryDetailsBanner3;
