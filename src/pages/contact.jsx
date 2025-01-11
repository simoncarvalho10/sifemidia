import React from "react";
import Formcontato from './formcontact.jsx'

function Contact() { 

    return(  
         
        <div className="w-full md:rounded-lg mt-[80px] py-8 text-black">
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