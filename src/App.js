import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import Education from "./components/home/Education"
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
// import GetInTouch from "./components/home/GetInTouch.jsx";
import DomainCard from "./components/home/DomainCard.jsx";
import VisaTechInvestments from "./components/home/VisaTechInvestments";
import ContactSection from "./components/home/ContactSection.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}

      <>
      <Education />
      <div className="-mt-14"> {/* Negative margin to pull it up */}
       {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
       )}
      </div>
      </>

      <>
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      </>
      <>
        {repos.show && (
         <div className="bg-white py-34 px-4 mt-16 shadow-inner"> 
         <DomainCard/>
         </div>
         
        )}
        <VisaTechInvestments/>
      </>
      <>
       <ContactSection/>
      </>
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename="/Portfolio.github.io">

      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
    </BrowserRouter>
  );
};

export default App;
