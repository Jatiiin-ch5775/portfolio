"use client"
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineViewGrid,HiDownload } from "react-icons/hi";

export const Hero = () => {
  //icon array
  const icons = [
    "/assets/icon-1.svg",
    "/assets/icon-2.svg",
    "/assets/icon-3.svg",
    "/assets/icon-4.svg",
    "/assets/icon-5.svg",
    "/assets/icon-6.svg",
    "/assets/icon-7.svg",
    "/assets/icon-8.svg",
  ]
  return (
    <section>
        <div className=" max-w-2xl m-auto flex flex-col item-center justify-center text-center pt-24  md:pt-36 px-4 md:px-0 pb-8 overflow-hidden">
        {/*profile Image*/}
        <div>
            <Image
             src="/profile.png"
              width={150} 
              height={150} 
              className="rounded-full mb-6 mx-auto"
              alt="Profile"
             />
        </div> 
        {/*name*/}
        <h3 className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2"> 
            I am JATIN PANCHAL < span className="inline-block">👋</span>
</h3>
{/*titel*/}
<h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight ">
frontend developer<br  className="md:hidden"/> and UI/UX designer.
</h1>
{/*icon swipe*/}
<div className="relative my-6 md:my-8 w-full mask-r-from-50% mask-1-from-50%">
<motion.div
 className="flex gap-4 w-max"
  animate={{ x: ["0%" ,"-50%"]}}
transition={{ repeat:Infinity, repeatType:"loop",duration: 15, ease:"linear"}}>
{/*icons loop*/}
{icons.concat(icons).map((icon, index) => (
<Image 

src={icon}
 key={index}
 alt={'icon ${index + 1}'}
width={40}
height={40} className="md:w-[50px] md:h-[50px]"
/>
))}
</motion.div>
</div>
{/*buttons*/}
< div className="flex flex-col md:flex-row item-center gap-4 w-full md:w-auto">
  <Link 
  
  href="portfolio" className="custom-gradient w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold flex item-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300">My Work <HiOutlineViewGrid className="text-lg"/>
  </Link>
  <Link href="#/assets/resume.pdf" download className="w-full md:w-auto py-3 px-8 rounded-full font-semibold border border-content/20 hover:border-content/40 hover:shadow-sm transition-color duration-300 flex items-center justify-center gap-2">MyResume<HiDownload className="text-lg"/></Link>
</div>
        </div>
    </section>
  )
};
    
