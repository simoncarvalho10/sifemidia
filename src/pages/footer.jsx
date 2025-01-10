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
            <div class="bg-grdFooter text-black py-6">
                <div class="h-full m-8 md:mx-12 flex flex-col md:flex-row md:justify-between items-center justify-center md:gap-24 gap-3">
                    <div class="hidden md:flex flex-col md:w-[20%]">
                        <h4 class="md:w-full font-bold text-[22px] md:h-9">Menus:</h4>
                        <p className='md:w-full md:h-7 md:hover:bg-gray-200'>Home</p>
                        <p className='md:w-full md:h-7 md:hover:bg-gray-200'>Quem Somos</p>
                        <p className='md:w-full md:h-7 md:hover:bg-gray-200'>Portifólio</p>
                        <p className='md:w-full md:h-7 md:hover:bg-gray-200'>Fale Conosco</p>
                    </div>
                    <div className='flex flex-col justify-center gap-4'>
                        <img class="h-[60px]" src={SifeLogoPb} alt="logo" />
                        <p class=" text-justify">A SIFE Mídia é uma empresa de criação de sites profissionais que projeta, desenvolve e gerencia sites de alto impacto que geram leads, vendem produtos e contam histórias.</p>
                    </div>
                    <div class="w-full flex justify-center gap-2">
                        <HiOutlineMail size={30}/>
                        <p>sifemidia@outlook.com</p>
                    </div>
                    <div className="flex flex-col rounded-t-lg items-center fixed bottom-0 py-3 text-gray-300 justify-center gap-2 w-[60%] bg-grdMenus">
                        <div onClick={() => toggleSubmenu("ftmenu")} class="flex-col gap-4 md:w-[30%]">
                            <h4 class="flex items-center gap-2 text-[15px] font-ubuntu">
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