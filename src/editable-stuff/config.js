// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Daneshwari",
  middleName: "",
  lastName: "Hanagandi",
  message: "Enthusiastic about blending innovation and technology to solve real-world problems.",
  icons: [
    // {
    //   image: "fa-github",
    //   url: "https://github.com/Daneshwari07",
    // },
    // {
    //   image: "fa-linkedin",
    //   url: "https://www.linkedin.com/in/daneshwari-hanagandi-4a7b90287",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  // imageLink: require("../editable-stuff/hashirshoaeb.png"),
  // imageSize: 375,
  message:
    "As a passionate Computer Science graduate with hands-on experience in Machine Learning, Deep Learning, and intelligent system design, I am driven by the transformative potential of AI in shaping secure, seamless digital experiences.My projects ranging from medical image classification using deep learning to enhancing speech quality using AI have strengthened my skills in building real-world, data-driven solutions. I enjoy solving complex problems that require a mix of innovation, performance, and responsibility.Visa’s commitment to tech-driven global impact and innovation resonates strongly with my values, and I’m eager to contribute meaningfully to your mission of enabling trusted, intelligent digital commerce worldwide."
  // resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Daneshwari07", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: [],
};





const skills = {
  show: true,
  hardSkills: [
    { name: "Python" },
    { name: "SQL" },
    { name: "Data Structures" },
    { name: "C/C++" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "HTML/CSS" },
    { name: "C#" },
  ],
  softSkills: [
    { name: "Goal-Oriented" },
    { name: "Collaboration" },
    { name: "Positivity" },
    { name: "Adaptability" },
    { name: "Problem Solving" },
    { name: "Empathy" },
    { name: "Organization" },
    { name: "Creativity" },
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hanagandidaneshwari@gmail.com",
};



export { navBar, mainBody, about, repos, skills,getInTouch };
