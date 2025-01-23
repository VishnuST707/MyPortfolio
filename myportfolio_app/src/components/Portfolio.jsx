import React, { useRef, useEffect } from "react";
import "../styles/Portfolio.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const sectionRefs = useRef([]);
 
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100}, 
        {opacity: 1,
          y:0,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            scrub: true,
            start: "top 40%",
            end: "top 10%",  
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="fixed md:container md:mx-auto w-screen bg-mycolor h-[4rem] rounded-b-lg flex justify-between items-center px-4 z-10 shadow-custom">
        <div>
          <img
            className="object-fill h-[7rem] w-[7rem]"
            alt="portfolio"
            src="https://i.im.ge/2025/01/22/HTlNiT.logo1.png"
          />
        </div>
        <div className="bg-mycolor h-[2rem] flex items-center justify-center text-textcolor">
          <img
            className="object-fill h-[4rem] w-[13rem]"
            alt="portfolio"
            src="https://i.im.ge/2025/01/22/HTlAaG.myportfolio1.jpeg"
          />
        </div>
        <div  className="bg-mycolor h-[3rem] w-[3rem] rounded-border1  flex justify-center items-center">
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-rows-6 w-screen h-[100rem] bg-mycolor ">
      <div
        ref={addToRefs}
        className="md:container md:mx-auto w-screen bg-mycolor h-[25rem] rounded-b-lg flex justify-between items-center"
      >
        <div className="static basis-1/2 bg-mycolor h-[25rem] flex items-center justify-center mt-[10rem]">
          <div className="grid grid-rows-5 w-[25rem] h-[15rem] text-center">
            <div className="flex items-center justify-end rounded-md text-font1 font-fontw1 text-expcolor1">
              Hello . . . !
            </div>
            <div className="b flex items-center justify-end rounded-md " >
              <div className=" text-font1 font-fontw1 text-expcolor1" >
                My Name is  
                  <span className="text-font2 font-fontw2 bg-gradient-to-r from-blue-500 via-orange-500 to-orange-500 bg-clip-text text-transparent ">
                  VISHNU ST
                  </span>
              </div>
            </div>
            <div className="flex items-center justify-end text-font1 font-fontw1 bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500 bg-clip-text text-transparent">
              JAVA FULLSTACK DEVELOPER
            </div >
            <div className="flex items-center  justify-center">
            <a href="https://www.canva.com/design/DAGc_yZYAVk/Ww-4Dy-0FBCa6wKNQsLPJw/view?utm_content=DAGc_yZYAVk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfdf5db8bb9" 
              className="flex items-center justify-center bg-gradient-to-r from-orange-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent w-[12rem] h-[3rem] rounded-border1 border-2 border-sky-500 animate-wiggle">
               VIEW MY RESUME
              </a>
            </div >
            <div className="flex items-center justify-end text-font font-fontw1 bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500 bg-clip-text text-transparent">
              to know about me and my projects scroll down 
            </div >
          </div>
        </div>
        <div className="basis-1/2 bg-mycolor h-[25rem] columns-3xs flex items-center justify-start">
          <img
            className="w-[30rem] h-[20rem] mt-[10rem] rounded-border1 aspect-square border-4 border-cyan-500"
            src="https://i.im.ge/2025/01/22/HTl0Hf.imgvishnust.jpeg"
            alt="myphoto"
          />
        </div>
      </div>
      {/* Projects */}
     
      <div
        ref={addToRefs}
        className="md:container md:mx-auto w-screen bg-mycolor h-[25rem] rounded-b-lg flex justify-between items-center">
        <div className="static basis-1/2 bg-expcolor3 h-[25rem] flex items-center justify-center">
        <iframe class="w-full h-[25rem] rounded-border2 aspect-video border-8 border-orange-500 " src="https://my-project-orcin-three.vercel.app/"></iframe>
        </div>
        <div className="static basis-1/2 bg-expcolor3 h-[25rem] flex items-center justify-center">
        <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-pretty text-font2 font-fontw2 tracking-tight text-expcolor1 ">EMPLOYMENT MANAGEMENT WEBSITE</h2>
        <h3 className="text-expcolor1 font-serif" >Objective</h3>
        <p class="mt-2 text-lg/8 text-expcolor4">
          Developed a webapplication to help companies efficiently manage their 
          employees allowing for functionalities such as adding deleting 
          and filtering employees based on age , salary, and ID.</p>
        <h3 className="text-expcolor1 font-serif" >Role and Contribution</h3>
        <p class="mt-2 text-lg/8 text-expcolor4">
      Independently designed and developed the entair application using React Js and Material UI
        </p>
        <h3 className="text-expcolor1 font-serif" >Project Link</h3>
        <div>
        <a href="https://my-project-orcin-three.vercel.app/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
        </a>
        </div>
        </div>
        </div>
      </div>
      <div
        ref={addToRefs}
        className="md:container md:mx-auto w-screen bg-mycolor h-[25rem] rounded-b-lg flex justify-between items-center"
      >
        <div className="static basis-1/2 bg-expcolor3 h-[25rem] flex items-center justify-center">
        <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-pretty text-font2 font-fontw2 tracking-tight text-expcolor1 ">TRAVEL BOOKING WEBPAGE</h2>
        <h3 className="text-expcolor1 font-serif" >Objective</h3>
        <p class="mt-2 text-lg/8 text-expcolor4">
        A modern responsive travel booking webpage built using React.js and React Bootstrap , featuring
        an interative flight search form , travel destination highlights,newsletter subscription, and a clean 
        professional design for an engaging use experience .</p>
        <h3 className="text-expcolor1 font-serif" >Role and Contribution</h3>
        <p class="mt-2 text-lg/8 text-expcolor4">
      Independently designed and developed the entair application using React Js and React Bootstrap
        </p> 
        <h3 className="text-expcolor1 font-serif" >Project Link</h3>
        <div>
        <a href="https://my-project1-coral.vercel.app/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
        </a>
        </div>
        </div>
        </div>
        <div className="static basis-1/2 bg-expcolor3 h-[25rem] flex items-center justify-center">
        <iframe class="w-full h-[25rem] rounded-border2 aspect-video border-8 border-orange-500" src="https://my-project1-coral.vercel.app/"></iframe>
        </div>
      </div>
      <div
        ref={addToRefs}
        className="md:container md:mx-auto w-screen bg-mycolor h-[25rem] rounded-b-lg flex justify-between items-center"
      >
        <div className="static basis-1/2 bg-expcolor3 h-[25rem] flex items-center justify-center">
        <iframe class="w-full h-[25rem] rounded-border2 aspect-video border-8 border-orange-500" src="https://publuu.com/flip-book/776956/1721154"></iframe>
        </div>
        <div className="static basis-1/2 bg-expcolor3 h-[25rem] flex items-center justify-center">
        <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-pretty text-font2 font-fontw2 tracking-tight text-expcolor1 ">BENTCH POWER SUPPLY FROM DAMAGED SMPS</h2>
        <h3 className="text-expcolor1 font-serif" >Objective</h3>
        <p class="mt-2 text-lg/8 text-expcolor4">
        Our project aimed to convert a damaged switch-mode power supply (SMPS) into a bench
        power supply thereby addressing and reducing e-waste in the world.This was the goal of the project .
        </p>
        <h3 className="text-expcolor1 font-serif" >Role and Contribution</h3>
        <p class="mt-2 text-lg/8 text-expcolor4">
        Led a team of 6 in planning ,executing and completing the project 
        .Assembled all electronic components and ensured proper intergration and functionality
        of the converted bench power supply. 
        </p> 
        <h3 className="text-expcolor1 font-serif" >Project Link</h3>
        <div>
        <a href="https://publuu.com/flip-book/776956/1721154">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
        </a>
        </div>
        </div>
        </div>
      </div>
      <div className="md:container md:mx-auto w-screen bg-mycolor h-[25rem] mt-[10rem] rounded-b-lg flex justify-between items-center">
      <div class="grid grid-flow-col grid-rows-3 gap-1 w-screen h-[20rem]">
         <div className="row-start-1 row-end-4 bg-mycolor  flex flex-col items-center rounded-border1 shadow-custom">
         <h3 className="text-expcolor1 font-serif text-font4" >Education</h3>
          <ul class="list-disc pl-5 marker:text-red-500">
           <li>
            <h3 className="text-expcolor1 font-serif text-font">Bachelor of science in Physics</h3>
            <h4 className="text-expcolor1 font-serif text-font6">FROM : Iqubal College</h4>
            <h4 className="text-expcolor1 font-serif text-font6">UNDER : Kerala University</h4>
            <h4 className="text-expcolor1 font-serif text-font6">POY : 2024</h4>
            <h4 className="text-expcolor1 font-serif text-font6">CGPA : 6.670</h4><br/>
           </li>
           <li>
            <h3 className="text-expcolor1 font-serif text-font">Higher Secondary Education</h3>
            <h4 className="text-expcolor1 font-serif text-font6">FROM : Lourdes Mount Higher Secondary School</h4>
            <h4 className="text-expcolor1 font-serif text-font6">UNDER : Kerala Higher Secondary Board</h4>
            <h4 className="text-expcolor1 font-serif text-font6">POY : 2019</h4>
            <h4 className="text-expcolor1 font-serif text-font6">CGPA : 8.5</h4><br/><br/>
           </li>
          </ul>
         </div>
         <div className="row-start-1 row-end-4 bg-mycolor flex flex-col items-center rounded-border1 shadow-custom">
         <h3 className="text-expcolor1 font-serif text-font4" >Technical Skills</h3>
          <ul class="list-disc pl-5 marker:text-red-500">
           <li>
            <h3 className="text-expcolor1 font-serif text-font6">LANGUAGE : java</h3>
           </li>
           <li>
            <h3 className="text-expcolor1 font-serif text-font6">JAVA FRAMEWORK : SpringBoot , Hibernate</h3>
           </li>
           <li>
            <h3 className="text-expcolor1 font-serif text-font6">DESIGN TOOL : Figma</h3>
           </li>
           <li>
            <h3 className="text-expcolor1 font-serif text-font6">MARKUP LANGUAGE : HTML</h3>
           </li>
           <li>
            <h3 className="text-expcolor1 font-serif text-font6">STYLING : CSS , Bootstap , Material UI , TailWind CSS</h3>
           </li>
           <li>
            <h3 className="text-expcolor1 font-serif text-font6">JAVASCRIPT LIBRARIES AND FRAMEWORK : React.js,React Bootstrap</h3>
           </li>
           <li>
            <h3 className="text-expcolor1 font-serif text-font6">DATABASE MANAGEMENT : MySQL</h3>
           </li>
           <li>
            <h3 className="text-expcolor1 font-serif text-font6">VERSION CONTROL : Git,GitHub</h3>
           </li>
          </ul>
         </div>
         <div className="row-start-1 row-end-4 bg-mycolor flex flex-col items-center rounded-border1 shadow-custom">
         <h3 className="text-expcolor1 font-serif text-font4" >Links</h3>
         <ul class="list-disc  ">
           <li>
           <a href="https://github.com/VishnuST707">
           <GitHubIcon style={{ fontSize: 30, color: 'white' }}/>
           </a>
           </li><br/>
           <li> 
           <h3 className="text-expcolor1 font-serif text-font6"> < PhoneIphoneIcon style={{ fontSize: 30, color: 'white' }}/>   +91 6238996733</h3>
           </li><br/>
           <li> 
           <h3 className="text-expcolor1 font-serif text-font6"> <AlternateEmailIcon style={{ fontSize: 30, color: 'red' }}/>   vishnustshanmughan7@gmail.com</h3>
           </li><br/>
           <li>
           <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage" className="text-expcolor1 font-serif text-font6">
           < InsertLinkIcon style={{ fontSize: 30, color: 'white' }}/>
           Indeed
           </a>
           </li><br/>
           <li>
           <a href="https://www.linkedin.com/in/vishnu-st-1340aa327/" className="text-expcolor1 font-serif text-font6">
           < LinkedInIcon style={{ fontSize: 30, color: 'blue' }}/>
           </a>
           </li><br/>
          </ul>
         </div>
      </div>
      </div> 
      </div>
      
    </>
  );
}

export default Portfolio;
