import { Link} from 'react-router-dom';
import React from "react";

const SinglePostNews2 = () => {
    return (
        <section
            id="news-2"
            className="bg-whitesmoke wide-60 news-section division"
        >
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-60">
                            {/* Title 	*/}
                            <h4 className="h4-sm">Related Posts:</h4>
                        </div>
                    </div>
                </div>
                {/* NEWS GRID */}
                <div className="row d-flex align-items-center">
                    {/* ARTICLE #1 */}
                    <div className="col-md-6 col-lg-3">
                        <div id="a2-1" className="article-2 b-right">
                            {/* Post Data */}
                            <p className="p-sm">March 11, 2020</p>
                            {/* Title */}
                            <h5 className="h5-sm">
                                <Link href="/single-post">

                                    Integer congue magna at pretium purus
                                    pretium

                                </Link>
                            </h5>
                            {/* Text */}
                            <p>
                                An enim nullam tempor sapien gravida donec enim
                                blandit ipsum porta justo integer odio velna
                                vitae auctor integer
                            </p>
                            {/* Post Author */}
                            <span>By Joel Peterson</span>
                        </div>
                    </div>
                    {/* END ARTICLE #1 */}
                    {/* ARTICLE #2 */}
                    <div className="col-md-6 col-lg-3">
                        <div id="a2-2" className="article-2 b-right">
                            {/* Post Data */}
                            <p className="p-sm">March 04, 2020</p>
                            {/* Title */}
                            <h5 className="h5-sm">
                                <Link href="/single-post">

                                    Congue magna CCA purus pretium
                                    magnis

                                </Link>
                            </h5>
                            {/* Text */}
                            <p>
                                Donec enim blandit and ipsum porta justo integer
                                odio a velna vitae auctor an integer congue
                                magna at pretium nulla
                            </p>
                            {/* Post Author */}
                            <span>By Jennifer K.</span>
                        </div>
                    </div>
                    {/* END ARTICLE #2 */}
                    {/* ARTICLE #3 */}
                    <div className="col-md-6 col-lg-3">
                        <div id="a2-3" className="article-2 b-right">
                            {/* Post Data */}
                            <p className="p-sm">February 24, 2020</p>
                            {/* Title */}
                            <h5 className="h5-sm">
                                <Link href="/single-post">

                                    8 neque dolor primis a libero tempus
                                    blandit

                                </Link>
                            </h5>
                            {/* Text */}
                            <p>
                                Porta justo integer odio velna vitae an auctor
                                integer congue magna at pretium purus ligula
                                rutrum luctus risus ultrice
                            </p>
                            {/* Post Author */}
                            <span>By Michael Deal</span>
                        </div>
                    </div>
                    {/* END ARTICLE #3 */}
                    {/* ARTICLE #4 */}
                    <div className="col-md-6 col-lg-3">
                        <div id="a2-4" className="article-2">
                            {/* Post Data */}
                            <p className="p-sm">February 19, 2020</p>
                            {/* Title */}
                            <h5 className="h5-sm">
                                <Link href="/single-post">

                                    Ligula varius magna and porta a laoreet
                                    pretium

                                </Link>
                            </h5>
                            {/* Text */}
                            <p>
                                Vitae auctor integer a congue magna undo pretium
                                at purus pretium ligula a rutrum luctus risus
                                and ultrice blandit
                            </p>
                            {/* Post Author */}
                            <span>By Aaron Wall</span>
                        </div>
                    </div >
                    {/* END ARTICLE #4 */}
                </div >
                {/* END NEWS GRID */}
            </div >
            {/* End container */}
        </section >
    );
};

export default SinglePostNews2;
