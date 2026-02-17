import { div } from "framer-motion/client";
import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
export const About = () => {
    return( 
    <section className="mt-12 pb-8" id="about">
    {/*heading*/}
<div className="text-center ">
<p className="text-content font-semibold inlineflex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4 ">
    < PiStarFourFill className="text-lg"/>
    About
    
     </p>
     <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradiant mb-8 rounded-2xl mb-4 ">Turning complex problems <br/>
     into simple designes
     
     </h2>


</div>
{/*about data*/}
<div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-12">
    {/*card 1*/}
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-centerborder border-white">
        <h3 className="text-5xl md:text-6xl font-bold text-gradiant mb-2 ">80+</h3>
        <p className="text-gray-700 font-medium text-lg">Happy clients</p>
    </div>
    {/*card 2*/}
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-centerborder border-white">
        <h3 className="text-5xl md:text-6xl font-bold text-gradiant mb-2">2+</h3>
        <p className="text-gray-700 font-medium text-lg">Year of experiance</p>
    </div>
    {/*card 3*/}
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-centerborder border-white">
        <h3 className="text-5xl md:text-6xl font-bold text-gradiant mb-2">50+</h3>
        <p className="text-gray-700 font-medium text-lg">Projects Done</p>
    </div>
</div>
{/*content text*/}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
    <div className="lg:col-span-2 space-y-6">
        <p className=" text-gray-600 text-lg leading-relaxed">
I am a frontend developer and UI/UX designer with 2 years of experience in creating visually stunning and user-friendly digital experiences. I have a strong passion for design and a keen eye for detail, which allows me to create interfaces that are not only aesthetically pleasing but also highly functional. I am proficient in HTML, CSS, JavaScript, and various frontend frameworks, and I am always eager to learn new technologies and stay up-to-date with the latest design trends. My goal is to create seamless and engaging user experiences that leave a lasting impression.
        </p>
        <p className=" text-gray-600 text-lg leading-relaxed">
I am a frontend developer and UI/UX designer with 2 years of experience in creating visually stunning and user-friendly digital experiences. I have a strong passion for design and a keen eye for detail, which allows me to create interfaces that are not only aesthetically pleasing but also highly functional. I am proficient in HTML, CSS, JavaScript, and various frontend frameworks, and I am always eager to learn new technologies and stay up-to-date with the latest design trends. My goal is to create seamless and engaging user experiences that leave a lasting impression.
        </p>
        {/* download button*/}
        <a href="#/assets/resume.pdf" download className="custom-gradient  py-4 px-8 text-white rounded-full font-semibold flex item-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300">
        Download CV
         <HiDownload className="text-lg"/>
         </a>
    </div>
</div>
{/*right column */}
<div  className="lg:col-span-1 space-y-4">
    <div >
        <p className="text-gray-500 text-sm font-medium mb-1">Name</p>
        <p className="text-gray-800 text-xl font-semibold">Jatin Panchal</p>
    </div>
    <div >
        <p className="text-gray-500 text-sm font-medium mb-1">Phone</p>
        <p className="text-gray-800 text-xl font-semibold">+91 874-006-6535</p>
    </div>
    <div >
        <p className="text-gray-500 text-sm font-medium mb-1">Location</p>
        <p className="text-gray-800 text-xl font-semibold">Delhi,India</p>
    </div>
</div>

</section>

    
    );

};