import { Link } from "react-router-dom";
import React, { useState } from "react";
import CoursesSlider from "../components/CoursesSlider";
import CategoryDetailsCourses5 from "../components/Category Details/CategoryDetailsCourses5";
import Time from "../utils/time.js";
const Workshops = () => {
  const [active, setActive] = useState(1);
  const activeLi = (value) => (active === value ? "current" : "");
  return (
    <div>
        <div    className="bg-home-banner wide-60"></div>
      {/* className='App-header'> */}
      <div>
        {" "}
        <h1>
          You can Master The Best ChatGPT Hacks to Save Hours Of Time & Effort,
          Enhance Your Communication Skills & Leave a Lasting Impression in Your
          Interactions Without Struggling to Learn AI or Watching Countless
          Tutorials.
        </h1>
      </div>
      <div>
        <button className="shrink-button">
          <h1>JOIN NOW</h1>
        </button>
      </div>
      <div>
        <p>
          {" "}
          <h1> By Joining The LIVE ChatGPT Rockstar Workshop</h1>
        </p>
        <p>
          {" "}
          <h2>
            No Prior Knowledge or Experience Required! YES, It will be that
            Easy!
          </h2>
        </p>
      </div>
      {/* Tabs */}
      <section id="faqs-1" className="bg-fixed wide-70 faqs-section division">
        <div className="container">
          <div className="row">
            {/* TABS NAVIGATION */}
            <div className="col-lg-5">
              <div className="tabs-nav clearfix">
                <ul className="tabs-1">
                  {/* TAB-1 LINK */}
                  <li
                    className={`tab-link ${activeLi(1)}`}
                    onClick={() => setActive(1)}
                    data-tab="tab-1"
                  >
                    <img
                    className="img-55"
                    src="/images/icons/lesson.png"
                    alt="tab-icon"
                  />
                    <div className="tab-link-txt">
                      <h5 className="h5-xs">Time-Saving Tips & Tricks</h5>
                      {/* <p>
                        Discover shortcuts and techniques to efficiently
                        leverage ChatGPT for various tasks, from drafting emails
                        to brainstorming ideas.
                      </p> */}
                    </div>
                  </li>
                  {/* TAB-2 LINK */}
                  <li
                    className={`tab-link ${activeLi(2)}`}
                    onClick={() => setActive(2)}
                    data-tab="tab-2"
                  >
                    <div className="tab-link-txt">
                      <h5 className="h5-xs">
                      Crafting Engaging Conversations
                      </h5>
                      {/* <p>
                      Learn how to create engaging, natural, and productive interactions using ChatGPT, whether 
                      for customer support, content creation, or personal use.
                      </p> */}
                    </div>
                  </li>
                  {/* TAB-3 LINK */}
                  <li
                    className={`tab-link ${activeLi(3)}`}
                    onClick={() => setActive(3)}
                    data-tab="tab-3"
                  >
                    <div className="tab-link-txt">
                      <h5 className="h5-xs">Personalizing Your Experience:</h5>
                      {/* <p>
                        Master the art of tailoring ChatGPT’s responses to suit
                        your specific needs, making the AI more effective in
                        your unique context.
                      </p> */}
                    </div>
                  </li>
                  {/* TAB-4 LINK */}
                  <li
                    className={`tab-link ${activeLi(4)}`}
                    onClick={() => setActive(4)}
                    data-tab="tab-4"
                  >
                    <div className="tab-link-txt">
                      <h5 className="h5-xs">Enhancing Productivity</h5>
                      {/* <p>
                        Explore how ChatGPT can automate repetitive tasks,
                        assist in research, and provide instant solutions,
                        saving you valuable time.
                      </p> */}
                    </div>
                  </li>
                       {/* TAB-5 LINK */}
                       <li
                    className={`tab-link ${activeLi(5)}`}
                    onClick={() => setActive(5)}
                    data-tab="tab-5"
                  >
                    <div className="tab-link-txt">
                      <h5 className="h5-xs">Using Advanced Prompts</h5>
                      {/* <p>
                      Learn how to structure prompts effectively to get the most accurate 
                      and useful responses from ChatGPT.
                      </p> */}
                    </div>
                  </li>
                       {/* TAB-6 LINK */}
                       <li
                    className={`tab-link ${activeLi(6)}`}
                    onClick={() => setActive(6)}
                    data-tab="tab-6"
                  >
                    <div className="tab-link-txt">
                      <h5 className="h5-xs">Integrating ChatGPT with Tools</h5>
                      {/* <p>
                      Discover how to integrate ChatGPT with other tools and platforms to streamline workflows and enhance productivity.
                      </p> */}
                    </div>
                  </li>
                       {/* TAB-7 LINK */}
                       <li
                    className={`tab-link ${activeLi(7)}`}
                    onClick={() => setActive(7)}
                    data-tab="tab-4"
                  >
                    <div className="tab-link-txt">
                      <h5 className="h5-xs">Ethical Use of AI</h5>
                      {/* <p>
                      Understand the importance of ethical considerations when 
                      using AI and how to ensure responsible usage of ChatGPT.
                      </p> */}
                    </div>
                  </li>
                       {/* TAB-8 LINK */}
                       <li
                    className={`tab-link ${activeLi(8)}`}
                    onClick={() => setActive(8)}
                    data-tab="tab-4"
                  >
                    <div className="tab-link-txt">
                      <h5 className="h5-xs">Avoiding Common Pitfalls</h5>
                      {/* <p>
                      Identify and avoid the common mistakes users make when interacting 
                      with ChatGPT to ensure smooth and effective conversations.
                      </p> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* END TABS NAVIGATION */}
            {/* TABS CONTENT */}
            <div className="col-lg-7">
              <div className="tabs-content">
                {/* TAB-1 CONTENT */}
                <div id="tab-1" className={`tab-content ${activeLi(1)}`}>
                  {/* CATEGORY TITLE */}
                  <div className="category-title">
                    {/* Title */}
                    <h4 className="h4-md">Time-Saving Tips & Tricks</h4>
                    {/* Text */}
                    <p className="p-md">
                    Discover shortcuts and techniques to efficiently leverage ChatGPT 
                    for various tasks, from drafting emails to brainstorming ideas.
                    </p>
                  </div>
                      </div>
                {/* END TAB-1 CONTENT */}
                {/* TAB-2 CONTENT */}
                <div id="tab-2" className={`tab-content ${activeLi(2)}`}>
                  {/* CATEGORY TITLE */}
                  <div className="category-title">
                    {/* Title */}
                    <h4 className="h4-md">Crafting Engaging Conversations</h4>
                    {/* Text */}
                    <p className="p-md">
                    Learn how to create engaging, natural, and productive interactions using ChatGPT, 
                    whether for customer support, content creation, or personal use.
                    </p>
                  </div>
     
                    </div>
                {/* END TAB-2 CONTENT */}
                {/* TAB-3 CONTENT */}
                <div id="tab-3" className={`tab-content ${activeLi(3)}`}>
                  {/* CATEGORY TITLE */}
                  <div className="category-title">
                    {/* Title */}
                    <h4 className="h4-md">Personalizing Your Experience</h4>
                    {/* Text */}
                    <p className="p-md">
                    Master the art of tailoring ChatGPT’s responses to suit your specific needs,
                     making the AI more effective in your unique context.
                    </p>
                  </div>
                </div>
                {/* TAB-4 CONTENT */}
                <div id="tab-4" className={`tab-content ${activeLi(4)}`}>
                  {/* CATEGORY TITLE */}
                  <div className="category-title">
                    {/* Title */}
                    <h4 className="h4-md">Treeks Premium</h4>
                    {/* Text */}
                    <p className="p-md">
                      Integer congue magna at pretium purus pretium ligula
                      rutrum at risus luctus eros dolor auctor ipsum blandit
                      purus vehicula magna and luctus tempor quisque
                    </p>
                  </div>
                  {/* QUESTION #11 */}
                  <div className="question">
                    {/* Question */}
                    <h5 className="h5-sm">What is Treeks Premium Monthly?</h5>
                    {/* Answer */}
                    <ul className="txt-list mb-15">
                      <li>
                        Nullam rutrum eget nunc varius etiam mollis risus at
                        congue etiam and aliquam sapien egestas, congue gestas
                        posuere cubilia undo congue ipsum mauris
                      </li>
                      <li>
                        Integer congue magna at pretium purus pretium ligula
                        rutrum at risus luctus eros dolor auctor ipsum blandit
                        purus vehicula magna and luctus tempor quisque
                      </li>
                    </ul>
                  </div>
                  {/* END QUESTION #11 */}
                  {/* QUESTION #12 */}
                  <div className="question">
                    {/* Question */}
                    <h5 className="h5-sm">
                      How much does Premium Monthly cost?
                    </h5>
                    {/* Answer */}
                    <p>
                      Aliqum mullam blandit tempor sapien gravida donec ipsum,
                      at porta justo. Velna vitae and congue auctor magna nihil
                      impedit ligula risus. Mauris donec ociis magnis sapien
                      etiam sapien sagittis congue tempor gravida donec enim
                      ipsum porta justo
                    </p>
                    {/* List */}
                    <ul className="txt-list mb-15">
                      <li>
                        Integer congue magna at pretium purus pretium ligula
                        rutrum at risus luctus eros dolor auctor ipsum blandit
                        purus vehicula magna and luctus tempor quisque
                      </li>
                      <li>
                        Risus at congue etiam and aliquam sapien egestas posuere
                        a cubilia
                      </li>
                    </ul>
                  </div>
                  {/* END QUESTION #12 */}
                  {/* QUESTION #13 */}
                  <div className="question">
                    {/* Question */}
                    <h5 className="h5-sm">
                      Can I get a refund if I cancel my subscription?
                    </h5>
                    {/* Answer */}
                    <p>
                      An augue egestas an ipsum vitae emo ligula volute ante
                      ipsum primis in faucibus sit ametn in odio. Integer congue
                      leo metus, eu mollis lorem viverra suscipit lectus magna.
                      At sagittis congue augue egestas magna ipsum vitae and
                      purus
                    </p>
                  </div>
                  {/* END QUESTION #13 */}
                </div>
                {/* END TAB-4 CONTENT */}
              </div>
            </div>
            {/* END TABS CONTENT */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/*timer */}
      <section id="banner-2" className="bg-03 wide-60 banner-section">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* BANNER TEXT */}
          <div className="col-md-7">
            <div className="banner-2-txt white-color">
              {/* Title */}
              <h3 className="h3-lg">
                Register now for getting
                <span>200+ courses free access</span>. This offer for limited
                time
              </h3>
              {/* COUNTDOWN ELEMENT */}
              <div className="countdown">
                <span className="countdown-txt">Ends in</span>
                <div id="clock">
                  <div className="cbox clearfix">
                    <span className="cbox-digit">
                      {Time("2022-09-27 00:00:00").days}
                    </span>{" "}
                    <span className="cbox-txt">d</span>
                  </div>
                  <div className="cbox clearfix">
                    <span className="cbox-digit">
                      {Time("2022-09-27 00:00:00").hours}
                    </span>{" "}
                    <span className="cbox-txt">h</span>
                  </div>
                  <div className="cbox clearfix">
                    <span className="cbox-digit">
                      {Time("2022-09-27 00:00:00").minutes}
                    </span>{" "}
                    <span className="cbox-txt">m</span>
                  </div>
                  <div className="cbox clearfix">
                    <span className="cbox-digit">
                      {Time("2022-09-27 00:00:00").seconds}
                    </span>{" "}
                    <span className="cbox-txt">s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* REGISTER FORM */}
          <div className="col-md-5">
            <div id="register-form">
              <form
                name="registerForm"
                className="row register-form"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Form Input */}
                <div id="input-name" className="col-md-12">
                  <p>Your Name*</p>
                  <input
                    type="text"
                    name="name"
                    className="form-control name"
                    placeholder="Enter Your Name*"
                    required
                  />
                </div>
                {/* Form Input */}
                <div id="input-email" className="col-md-12">
                  <p>Your Email*</p>
                  <input
                    type="email"
                    name="email"
                    className="form-control email"
                    placeholder="Enter Your Email*"
                    required
                  />
                </div>
                {/* Form Input */}
                <div id="input-contactNo" className="col-md-12">
                  <p>Your Phone Number*</p>
                  <input
                    type="tel"
                    name="contactNo"
                    className="form-control contactNo"
                    placeholder="Enter Your Phone Number*"
                    required
                  />
                </div>
                {/* Form Button */}
                <div className="col-md-12 form-btn">
                  <button
                    type="submit"
                    className="btn btn-md btn-rose tra-black-hover submit"
                  >
                    Register Now
                  </button>
                </div>
                {/* Form Message */}
                <div className="col-md-12 register-form-msg text-center">
                  <span className="loading" />
                </div>
              </form>
            </div>
          </div>
          {/* END REGISTER FORM */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
    </div>
  );
};
export default Workshops;
