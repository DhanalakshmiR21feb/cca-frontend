import React from "react";
import About2 from "../components/About/About2";
import Aboutbanner2 from "../components/About/Aboutbanner2";
import Aboutbanner3 from "../components/About/Aboutbanner3";
import Aboutcategories4 from "../components/About/Aboutcategories4";
import Aboutcourses3 from "../components/About/Aboutcourses3";
import Aboutnews1 from "../components/About/Aboutnews1";
import Aboutreviews1 from "../components/About/Aboutreviews1";
import Aboutservices5 from "../components/About/Aboutservices5";
import AboutStatistic1 from "../components/About/AboutStatistic-1";
import Aboutteam2 from "../components/About/Aboutteam2";
// import Video1 from "../components/Video1";
import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";

const About = () => {
  return (
    <Layout>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="About CCA" />
        <About2 /> {/*start learning now */}
        <AboutStatistic1 />
        <Aboutcourses3 />
        <Aboutbanner2 />{/*Register */}
        <Aboutservices5 />
        {/* <Aboutbanner3 /> */}
      </div>
    </Layout>
  );
};

export default About;
