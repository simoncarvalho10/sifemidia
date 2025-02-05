import React from "react";
import { Link } from "react-router-dom";
import sifeLogo from '../assets/logo_sife.svg'
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import Script from '../Script/script.js'

function head() {
    const { isMenuOpen, btnOpenMenu, btnCloseMenu } = Script();
    return(          
                <div>
                    <div id="head" className="shadow-lg px-8 md:px-12 py-4 h-[80px] bg-grdMenus w-full flex justify-between fixed z-10 top-0">
                        <div className="w-[120px] " >
                            <img className="h-full" id="logotop" src={sifeLogo} alt="logo" />
                        </div>
                        <div className="hidden md:flex gap-1">
                            <div id="menu" className="flex gap-6 text-white h-full py-1">
                                <Link to="/" className="menu flex items-center justify-center hover:border-b-[1px] hover:border-white" id="btnHome">Home</Link>
                                <Link to="/about" className="menu flex items-center justify-center  hover:border-b-[1px] hover:border-white" id="quem_somos">Quem somos</Link>
                                <Link to="/faq" className="menu flex items-center justify-center  hover:border-b-[1px] hover:border-white" id="portifolio">Perguntas frequentes</Link>
                                <Link to="/contact" className="menu flex items-center justify-center  hover:border-b-[1px] hover:border-white" id="fale_conosco">Fale conosco</Link>
                            </div>
                        </div>
                        <div className='flex md:hidden'>
                            <button id="openMenu" onClick={btnOpenMenu} className="h-full flex items-center text-white hover:text-gray-300">
                                {!isMenuOpen ? <CiMenuFries size={33}  /> : <TfiClose size={33} />}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && ( 
                        <div id="spanMenu" className='w-full h-screen fixed z-10'>
                            <span className='bg-grdMenus w-[70%] h-[100%] mt-[80px] pr-8 text-right fixed right-0'>
                                <div id="menu" className="flex flex-col text-gray-200 w-full h-[200px] gap-2">
                                    <Link to="/" onClick={btnCloseMenu} className="bg-grdSubMenus hover:bg-sky-700 h-[50px] w-full flex items-center justify-end pr-4">Home</Link>
                                    <Link to="/about" onClick={btnCloseMenu} className="bg-grdSubMenus hover:bg-sky-700 h-[50px] w-full flex items-center justify-end pr-4">Quem somos</Link> 
                                    <Link to="/faq" onClick={btnCloseMenu} className="bg-grdSubMenus hover:bg-sky-700 h-[50px] w-full flex items-center justify-end pr-4">Perguntas frequentes</Link> 
                                    <Link to="/contact" onClick={btnCloseMenu} className="bg-grdSubMenus hover:bg-sky-700  h-[50px] w-full flex items-center justify-end pr-4">Fale conosco</Link>
                                </div>
                            </span>
                        </div>
                    )}
                </div>
    );
}
export default head