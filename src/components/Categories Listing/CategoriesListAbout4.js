import React from "react";

const CategoriesListAbout4 = () => {
    return (
        <section
            id="about-4"
            className="bg-lightgrey wide-70 about-section division"
        >
            <div className="container">
                {/* ABOUT TEXT */}
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div className="a4-txt">
                            {/* Title */}
                            <h5 className="h5-xl text-center">
                                Our goal is to make online education work for
                                everyone
                            </h5>
                            {/* Text */}
                            <p>
                            our mission is to ensure that online education is accessible, effective, 
                            and empowering for all. We believe that learning should be flexible, inclusive, 
                            and tailored to meet the diverse needs of our students. Whether you're a working 
                            professional, a busy parent, or a lifelong learner, our goal is to provide you with 
                            the tools, support, and resources you need to succeed on your educational journey.
                            </p>
                        </div>
                    </div>
                </div>
                {/* END ABOUT TEXT */}
                {/* ABOUT IMAGE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="img-block">
                            <img
                                className="img-fluid"
                                src="images/image-03.jpg"
                                alt="about-image"
                            />
                        </div>
                    </div>
                </div>
                {/* ABOUT BOXES */}
                <div className="a4-boxes">
                    <div className="row d-flex align-items-center">
                        {/* BOX #1 */}
                        <div className="col-md-4">
                            <div className="abox-4 icon-sm">
                                {/* Icon */}
                                <span className="flaticon-004-computer" />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    <h5 className="h5-lg">Trusted Content</h5>
                                    <p className="grey-color">
                                        Congue augue egestas magna volutpat
                                        dictum suscipit ipsum egestas magna
                                        vitae purus
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END BOX #1 */}
                        {/* BOX #2 */}
                        <div className="col-md-4">
                            <div className="abox-4 icon-sm">
                                {/* Icon */}
                                <span className="flaticon-028-learning-1" />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    <h5 className="h5-lg">
                                        Certified Teachers
                                    </h5>
                                    <p className="grey-color">
                                        Congue augue egestas magna volutpat
                                        dictum suscipit ipsum egestas magna
                                        vitae purus
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END BOX #2 */}
                        {/* BOX #3 */}
                        <div className="col-md-4">
                            <div className="abox-4 icon-sm">
                                {/* Icon */}
                                <span className="flaticon-032-tablet" />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    <h5 className="h5-lg">Lifetime Access</h5>
                                    <p className="grey-color">
                                        Congue augue egestas magna volutpat
                                        dictum suscipit ipsum egestas magna
                                        vitae purus
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END BOX #3 */}
                    </div>
                    {/* End row */}
                </div>
                {/* END ABOUT BOXES */}
            </div>
            {/* End container */}
        </section>
    );
};

export default CategoriesListAbout4;
