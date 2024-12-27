//import { FaSave } from 'react-icons/fa'
import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { CiMenuFries } from "react-icons/ci";
import { RiFacebookFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im"; 
import { GrInstagram } from "react-icons/gr"; 
import { RiWhatsappLine } from "react-icons/ri"; 
import './styles/style.css';
import { useState } from 'react'

import sifeLogo from './assets/logo_sife.svg'
import sifeLogoPb from './assets/logo_sife_bk.svg'

import imgPC from './assets/pc.png'
import imgResp from './assets/icResponsive.svg'
import imgDom from './assets/icDominio.svg'
import imgSeo from './assets/icSeo.svg'
import imgEml from './assets/icEmail.svg'
import imgHst from './assets/icHeadset.svg'
import imgMds from './assets/icMedias.svg'
import { TfiClose } from "react-icons/tfi";
import { useEffect } from "react";




function App() {
  const [count, setCount] = useState(0)

  const btnOpenMenu = () => {
    const spanMenu = document.getElementById("spanMenu")
    const openMenu = document.getElementById("openMenu")
    const closeMenu = document.getElementById("closeMenu")
    openMenu.style.display ="none";
    closeMenu.style.display ="flex";
    spanMenu.style.display ="flex";

  };

  const btnCloseMenu = () => {
    const spanMenu = document.getElementById("spanMenu")
    const openMenu = document.getElementById("openMenu")
    const closeMenu = document.getElementById("closeMenu")
    openMenu.style.display ="flex";
    closeMenu.style.display ="none";
    spanMenu.style.display ="none";
  };

//

useEffect(() => {

    const spanMenu = document.getElementById("spanMenu")
    const openMenu = document.getElementById("openMenu")
    const closeMenu = document.getElementById("closeMenu")
    spanMenu.addEventListener("click", function(event){

        if(event.target === spanMenu) {
            spanMenu.style.display = "none"
            openMenu.style.display ="flex";
            closeMenu.style.display ="none";
        } 
    
    })
        
  }, []); 

//


  return (
    
    
        <div id="tudo" className="flex flex-col justify-center bg-slate-50">
            <div>
                <div id="head" className="shadow-lg px-8 py-4 h-[80px] bg-sky-900 w-full flex justify-between fixed top-0 z-50">
                    <div className="w-[120px] " >
                        <img className="h-full" id="logotop" src={sifeLogo} alt="logo" />
                    </div>
                    <div className="hidden md:flex gap-1">
                        <div id="menu" className="flex gap-0.5 text-white h-full py-1">
                            <div className="menu w-[110px] flex items-center justify-center hover:border-b-2 hover:border-white" id="btnHome">Home</div>
                            <div className="menu w-[110px] flex items-center justify-center  hover:border-b-2 hover:border-white" id="quem_somos">Quem Somos</div>
                            <div className="menu w-[110px] flex items-center justify-center  hover:border-b-2 hover:border-white" id="portifolio">Portifólio</div>
                            <div className="menu w-[110px] flex items-center justify-center  hover:border-b-2 hover:border-white" id="fale_conosco">Fale Conosco</div>
                        </div>
                    </div>
                    <div className='flex md:hidden'>
                        <button id="openMenu" onClick={btnOpenMenu} className="h-full flex items-center text-white hover:text-gray-300"><CiMenuFries size={33} /></button>
                        <button id="closeMenu" onClick={btnCloseMenu} className="h-full hidden items-center text-white hover:text-gray-300"><TfiClose size={33} /></button>
                    </div>
                </div>
                <div id="spanMenu" className='hidden w-full h-screen fixed'>
                    <span className='bg-sky-900 w-[70%] h-[100%] mt-[80px] pr-8 text-right fixed right-0'>
                        <div id="menu" className="flex flex-col text-white w-full h-[200px] gap-2">
                            <div className="bg-sky-800 hover:bg-sky-700 h-[50px] w-full flex items-center justify-end pr-4">Home</div>
                            <div className="bg-sky-800 hover:bg-sky-700 h-[50px] w-full flex items-center justify-end pr-4">Quem Somos</div>
                            <div className="bg-sky-800 hover:bg-sky-700  h-[50px] w-full flex items-center justify-end pr-4">Portifólio</div>
                            <div className="bg-sky-800 hover:bg-sky-700  h-[50px] w-full flex items-center justify-end pr-4">Fale Conosco</div>
                        </div>
                    </span>
                </div>
            </div>
            <div className="bg-banner w-full h-[250px] bg-cover bg-center mt-[80px]"></div>
            <div class="bg-budget w-full h-[480px] flex flex-col justify-center px-8 text-white bg-teste bg-cover bg-center bg-green-400">
                <div class="my-12">
                    <div class="flex  justify-center w-full h-[150px] overflow-hidden">
                        <img  src={imgPC} alt="logo" />
                    </div>
                    <h2 class="font-bold text-[20px] -mb-6 w-full">AGÊNCIA DE CRIAÇÃO DE SITES</h2>
                    <p class="text-justify py-10">
                    Nossos sites são desenvolvidos para que você tenha autonomia em gerenciar seu próprio conteúdo.
                    Através de um painel administrativo você terá liberdade para adicionar textos, imagens, vídeos e até mesmo criar páginas adicionais. 
                    </p>
                    <button id="btnMenu" class="bg-white hover:bg-purple-100 rounded-full px-8 h-12 text-black text-sm">Peça um orçamento</button>
                </div>
            </div>
            <div id="service" class="text-black px-8 md:px-12 my-8 md:my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                <div class="flex gap-4">
                    <div class="w-[50px] min-w-[30px]">
                        <img class="w-full" src={imgResp} alt="seo" />
                    </div>
                    <div class="w-full">
                        <h4 class="font-bold text-base">SITE RESPONSIVO</h4>
                        <p>Um site adaptável para computador, tablet e celular melhora a experiência do usuário, aumentando as interações.</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-[50px] min-w-[30px]">
                        <img class="w-full" src={imgDom} alt="seo" />
                    </div>
                    <div class="w-full">
                        <h4 class="font-bold text-base">DOMÍNIO PERSONALIZADO</h4>
                        <p>Você transmitirá mais credibilidade aos seus clientes com um domínio personalizado. Por exemplo: www.suamarca.com.br
                        </p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-[50px] min-w-[30px]">
                        <img class="w-full" src={imgSeo} alt="seo" />
                    </div>
                    <div class="w-full">
                        <h4 class="font-bold text-base">ENCONTRADO NO GOOGLE</h4>
                        <p>Através de SEO, você alcançará mais clientes com uma boa classificação nos resultados das buscas do Google e Bing.</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-[50px] min-w-[30px]">
                        <img class="w-full" src={imgEml} alt="seo" />
                    </div>
                    <div class="w-full">
                        <h4 class="font-bold text-base">E-MAIL PROFISSIONAL</h4>
                        <p>Profissionalismo das suas comunicações, enviando e recebendo mensagens por um e-mail com sua marca. Por exemplo:
                        contato@suamarca.com.br</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-[50px] min-w-[30px]">
                        <img class="w-full" src={imgHst} alt="seo" />
                    </div>
                    <div class="w-full">
                        <h4 class="font-bold text-base">SUPORTE CONTÍNUO</h4>
                        <p>Oferecemos o Plano de Cuidados com o Site, proporcionando suporte contínuo para garantir a segurança e o bom funcionamento do seu site. </p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-[50px] min-w-[30px]">
                        <img class="w-full" src={imgMds} alt="seo" />
                    </div>
                    <div class="w-full">
                        <h4 class="font-bold text-base">REDES SOCIAIS</h4>
                        <p>O conteúdo de seu site compartilhado e podendo ser visto por milhões de pessoas.</p>
                    </div>
                </div>
            </div>
            <div class="bg-gray-300 text-black">
                <div class="m-8 flex flex-col md:flex-row md:justify-between items-center justify-center md:gap-56 gap-3">
                    <div class="hidden md:flex flex-col">
                        <h4>Menus</h4>
                        <p>Home</p>
                        <p>Quem Somos</p>
                        <p>Portifólio</p>
                        <p>Fale Conosco</p>
                    </div>
                    <div className='flex flex-col justify-center gap-4'>
                        <img class="h-[60px]" src={sifeLogoPb} alt="logo" />
                        <p class=" text-justify">A SIFE Mídia é uma empresa de criação de sites profissionais que projeta, desenvolve e gerencia sites de alto impacto que geram leads, vendem produtos e contam histórias.</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <h4 class="font-bold text-[22px]">Acesse nossas redes</h4>
                        <div class="flex justify-center w-full gap-3">
                            <RiFacebookFill size={40}/>
                            <ImLinkedin2 size={40}/>
                            <GrInstagram size={40}/>
                            <RiWhatsappLine size={40}/>
                        </div>
                        <div class="w-full flex justify-center gap-2">
                            <HiOutlineMail size={30}/>
                            <p>sifemidia@outlook.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
  )
}


export default App
