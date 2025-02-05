import React from "react";
import Formcontato from './formcontact.jsx'

function Contact() { 

    return(  
         
        <div className="py-10 w-full md:rounded-lg mt-[80px] text-black md:px-20 md:py-10">
            <div className="px-6 mb-6">
                <h4 className="text-[40px] font-ubuntu leading-tight">
                    Me conte um pouco mais a respeito do seu projeto!
                </h4>
            </div>
            <Formcontato/> 
        </div>
                                 
    );
}
export default Contact