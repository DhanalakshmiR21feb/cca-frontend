import { Link} from 'react-router-dom';
import React from "react";
import Counter from "../Counter";
const AboutStatistic1 = () => {
    return (
        <div id="statistic-1" className="bg-yellow statistic-section division">
            <div className="container">
                <div className="row">
                    {/* STATISTIC BLOCK #1 */}
                    <div className="col-md-4">
                        <div className="statistic-block">
                            {/* Digits */}
                            <h5 className="statistic-number">
                                2,
                                <Counter end={769} />
                            </h5>

                            <div className="statistic-block-txt">
                            <h5 className="h5-lg">In line Students</h5>
                                {/* <Link href="" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Learn More &gt;

                                </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #2 */}
                    <div className="col-md-4">
                        <div className="statistic-block">
                            {/* Digits */}
                            <h5 className="statistic-number">
                                <Counter end={637} />
                            </h5>

                            <div className="statistic-block-txt">
                            <h5 className="h5-lg">Online Students</h5>
                                {/* <Link href="" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        {`Discover More &gt;`}

                                </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #3 */}
                    <div className="col-md-4">
                        <div className="statistic-block">
                            {/* Digits */}
                            <h5 className="statistic-number">
                                <Counter end={942} />
                            </h5>

                            <div className="statistic-block-txt">
                            <h5 className="h5-lg">Free Course Students</h5>
                                {/* <Link href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    Discover More &gt;

                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </div>
    );
};

export default AboutStatistic1;
