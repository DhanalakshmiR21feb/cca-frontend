import { Link} from 'react-router-dom';
import React from "react";

const TeacherProfilePagePagination = () => {
    return (
        <div className="page-pagination division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <Link href="#" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                            tabIndex={-1}
                                        >
                                            <i className="fas fa-angle-left" />

                                    </Link>
                                </li>
                                <li className="page-item active">
                                    <Link href="#" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            1
                                            <span className="sr-only">
                                                (current)
                                            </span>

                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            2

                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            3

                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            4

                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            <i className="fas fa-angle-right" />

                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </div>
    );
};

export default TeacherProfilePagePagination;
