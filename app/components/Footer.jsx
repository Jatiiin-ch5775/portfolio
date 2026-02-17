
import React from "react";
import{FaDribbble} from "react-icons/fa";
import{FaBehance} from "react-icons/fa";
import{FaInstagram} from "react-icons/fa";
import{FaTwitch} from "react-icons/fa";

import { FaPinterest } from "react-icons/fa";
export const Footer =()=>{
    //social media links
    const socialIcons =[
        {icon:FaDribbble, href:"https://dribbble.com/"},
        {icon:FaBehance, href:"https://www.behance.net/"},
        {icon:FaInstagram, href:"https://www.instagram.com/"},
        {icon:FaTwitch, href:"https://www.twitch.tv/"},
        {icon:FaPinterest, href:"https://www.pinterest.com/"}
    ];
    return(
        <footer className="py-12 px-4 text-center">
            <div className="flex justify-center gap-2 md:gap-6 mb-8">
                {socialIcons.map((social,index)=>{
                    const IconComponent = social.icon;
                return(
                <a href={social.href} key={index} className="p-4 rounded-2xl border border-outer hover:bg-primary/10 transition-all">
                    <IconComponent className="text-xl- md:text-2xl text-primary"/>
                    </a>

                );
})}
            </div>
            <p className="text=xl md:text-2xl font-semibold text-gradient max-w-3xl mx-auto mb-8">
                want to know more about me, tell me about your project or just to say 
                hello? drop me a line and I'll get back to you as soon as possible.
            </p>
            <hr  className="border-outer mb-8"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-md text-content">
                <div>
                    <p className="font-semibold">Location</p>
                    <p>Delhi,India</p>
                </div>
                    <div>
                        <p className="font-semibold">Phone</p>
                        <p>8740066535</p>
                    </div>
                    <div>
                        <p className="font-semibold">Email</p>
                        <p>panchal9474@gmail.com</p>
                    </div>
                </div>
            
        </footer>









    );
};