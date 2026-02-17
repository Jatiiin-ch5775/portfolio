
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
export const Contact = () => {
const [result, setResult] =React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "82336f0e-8a82-4595-808d-ea044c0b47eb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if(data.success){
    setResult("message sent successfully");
    event.target.reset();
  }else{
    console.log("Error", data);
    setResult(data.message);
  }
};
return(
    <section className="mt-12 pb-8" id="resume">
            {/* Heading */}
        <div className="text-center ">
        <p className="text-content font-semibold inlineflex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4 ">
            < PiStarFourFill className="text-lg"/>
            Contact
            
        </p>
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradiant mb-8 rounded-2xl mb-4 ">Let's make something <br/>
             awesome together!
             </h2>
        </div>
        {/*contact from*/}
        <form onSubmit={onSubmit} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-xl font-semibold">
            {/*left side*/}
            <div className="flex flex-col space-y-6">
                <input type="text" name="name" id="" placeholder="Your Name*" className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3"  required/>
                <input type="email"  name="email" placeholder="Email Address*" className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3"  required  id=""/>
            </div>
            {/*right side*/}
            <div className="flex flex-col space-y-6">
                 <input type="tel" name="" id="Phone" placeholder="Phone NUmber*" className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3" required/>
                <input type="text"  name="Company" placeholder="Company Name*"className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3" required  id=""/>

            </div>
            {/*text area*/}
            <div className="md:col-span-2">
                <textarea name="message" id="" placeholder="A Few Words*" className="w-full border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-2 h-24 resize-none" required></textarea>
            </div>
            {/* button*/}
            <div className="md:col-span-2">
            <button type="submit" className="mt-6 custom-gradient text-white text-[1rem] fomt-semibold py-3 px-6 rounded-2xl flex items-center gap-2 hover:opactiy-90 transition-opacity cursor-pointer">
                Send Message <FaPaperPlane/>
            </button>
            </div>

<span>{result}</span>


        </form>
          
    </section>
    );
};
