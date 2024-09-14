import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/swiper/swiper.css";
import Demo9 from "./pages/Demo9";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Workshops from "./pages/Workshops";
import PreLoader from "./layout/PreLoader";
import CoursesList from "./pages/courses-list";
import CourseDetails from "./components/About/Aboutcourses3";
import "./css/globals.css";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
        {loader && <PreLoader />}
      <Router>
        <Routes>
          <Route path="/" exact element={<Demo9 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/workshop1" element={<Workshops />} />
          <Route path="/course" element={<CoursesList />} />
          {/* <Route path="/course-details" element={<CourseDetails />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
