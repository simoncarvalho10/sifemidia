import React, { useState } from "react";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im"; 
import { GrInstagram } from "react-icons/gr"; 
import { RiWhatsappLine } from "react-icons/ri"; 
import SifeLogoPb from '../assets/logo_sife_bk.svg'

function footer() {
        const [menus, setMenus] = useState({});
    
        const toggleSubmenu = (submenuId) => {
            setMenus((prev) => ({
                ...prev,
                [submenuId]: !prev[submenuId],
            }));
        };
    return(           
            <div className="bg-grdFooter text-black py-6 md:text-[20px]">
                <div className="h-full m-8 md:mx-12 flex flex-col  md:justify-between items-center justify-center gap-3">
                    <div className='flex flex-col justify-center gap-4'>
                        <img className="h-[60px]" src={SifeLogoPb} alt="logo" />
                        <p className=" text-justify md:px-60">A SIFE Mídia é uma empresa de criação de sites profissionais que projeta, desenvolve e gerencia sites de alto impacto que geram leads, vendem produtos e contam histórias.</p>
                    </div>
                    <div className="w-full flex justify-center gap-2">
                        <HiOutlineMail size={30}/>
                        <p>sifemidia@outlook.com</p>
                    </div>
                    <div className="flex flex-col rounded-t-lg items-center fixed bottom-0 py-3 text-gray-300 justify-center gap-2 w-[60%] bg-grdMenus">
                        <div onClick={() => toggleSubmenu("ftmenu")} className="flex-col gap-4 md:w-[30%]">
                            <h4 className="flex items-center justify-center gap-2 text-[15px] md:text-[20px] font-ubuntu">
                                {!menus["ftmenu"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}
                                Acesse nossas redes:
                            </h4>
                        </div>
                        <div style={{ display: menus["ftmenu"] ? "block" : "none" }}>
                            <div className="flex items-center justify-center gap-4">
                                <RiFacebookFill size={32}/>
                                <ImLinkedin2 size={32}/>
                                <GrInstagram size={32}/>
                                <RiWhatsappLine size={32}/>
                            </div>
                        </div>  
                    </div>
                </div >
            </div>

    );
}
export default footer