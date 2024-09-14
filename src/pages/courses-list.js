import React from "react";
import CoursesListBanner2 from "../components/Courses Listing/CoursesListBanner2";
import CoursesListBanner3 from "../components/Courses Listing/CoursesListBanner3";
import CoursesListCategories1 from "../components/Courses Listing/CoursesListCategories1";
import CoursesListCourses1 from "../components/Courses Listing/CoursesListCourses1";
import CoursesListCourses3 from "../components/Courses Listing/CoursesListCourses3";
import CoursesListCourses5 from "../components/Courses Listing/CoursesListCourses5";
import CoursesListPageHero from "../components/Courses Listing/CoursesListPageHero";
import Aboutcourses3 from "../components/About/Aboutcourses3";
import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";

const CoursesList = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Our Courses" />
        <Aboutcourses3 />
      </div>
    </Layout>
  );
};

export default CoursesList;
