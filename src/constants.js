import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import bitm from "./assets/education-logo/Birla.png"
import mother from "./assets/education-logo/MTMHSSK.png"

import dc from "./assets/company-logo/180dc.jpeg"
import iet from "./assets/company-logo/ietbitmesra.png"
import Education from "./components/education/Education";

export default gitLogo
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
    {
      id: 0,
      img: dc,
      role: "Technical Consultant",
      company: "180 Degree Consulting-BIT Mesra",
      date: "April 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "DSA",
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Next Js",
        
      ],
    },
    {
      id: 1,
      img: iet,
      role: "Tech Member",
      company: "IET-BIT Mesra",
      date: "July 2024 - Present",
      desc: "Volunteer for Coding Weekender event, engaging over 200 students in thrilling competition and led a workshop on C++ basic concepts for 150+ students.",
      skills: [
        "C++",
        "Competitive Programming",
        "Problem Solving",
        "DSA",
        "Graphics Designing", 
      ],
    }]

    export const projects=[
      {
        id:"0",
        title:"VidTube",
        description:"backend-only clone of YouTube's core features using Node.js and Express, supporting user registration, authentication and secure access to video-related APIs",
        tags:["NodeJS","Express","MongoDB","Cloudinary","Multer"],
        github:"https://github.com/akhand-24/VidTube-Project",

      },
      {
        id:"1",
        title:"VidTube",
        description:"backend-only clone of YouTube's core features using Node.js and Express, supporting user registration, authentication and secure access to video-related APIs",
        tags:["NodeJS","Express","MongoDB","Cloudinary","Multer"],
        github:"https://github.com/akhand-24/VidTube-Project",
      },
      {  id:"0",
        title:"VidTube",
        description:"backend-only clone of YouTube's core features using Node.js and Express, supporting user registration, authentication and secure access to video-related APIs",
        tags:["NodeJS","Express","MongoDB","Cloudinary","Multer"],
        github:"https://github.com/akhand-24/VidTube-Project",
      }
    ] 

    export const education=[
      {
        id: 0,
        img: bitm,
        school: "Birla Institute of Technology, Mesra",
        date: "Sept 2023 - Present",
        grade: "8.3 CGPA",
        desc: "Pursuing B.Tech in Electronics and Communication Engineering, I have gained a strong foundation in both technical and analytical domains. My time in college has been enriched by hands-on learning, active participation in diverse student-led initiatives, and consistent growth in areas like coding, problem-solving, and collaboration across interdisciplinary environments.",
        degree: "Bachelors of Technology - BTech",
      },
      {
        id: 1,
        img: mother,
        school: "Mother Teresa Mission Higher Secondary School, Kanpur",
        date: "2013 - 2022",
        grade: "93% in XII, 93% in X",
        desc: "Completed 10th and 12th with a strong academic record, developing a disciplined approach to learning and a solid foundation in science and mathematics that fueled my interest in engineering and technology.",
        degree: "ICSE (Class-X) and ISC (Class-XII)",
      },
    ]