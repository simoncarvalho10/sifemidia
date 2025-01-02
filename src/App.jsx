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

import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'

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

  const btnCloseContato = () => {
    const spamContato = document.getElementById("spamContato")
    spamContato.style.display ="none";
  };

const [currentIndex, setCurrentIndex] = useState(0);
const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);

//const images = [img1, img2, img3]; 

const images = [
    /*'./src/assets/1.jpg',
    './src/assets/2.jpg',
    './src/assets/3.jpg'*/
    img1,
    img2,
    img3
]; 



const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //alert("Imagem = "+images.length);
};

const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    //alert("Imagem = "+images.length);
};

const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const swipeDistance = touchStart - touchEnd;

    // Swipe para a direita
    if (swipeDistance > 50) {
      nextImage();
    }

    // Swipe para a esquerda
    if (swipeDistance < -50) {
      prevImage();
    }

    // Resetar os valores de toque
    setTouchStart(null);
    setTouchEnd(null);
  };

useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Troca a imagem a cada 3 segundos

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
}, []);



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

    const spamContato = document.getElementById("spamContato")
    const btnOrcamento = document.getElementById("btnOrcamento")
    
    btnOrcamento.addEventListener("click", function(event){
        spamContato.style.display = "flex";
    })    
    
    spamContato.addEventListener("click", function(event){
        if(event.target === spamContato) {
            spamContato.style.display = "none";
        } 
    })    

    
  }, []);
  
  

//


  return (
    
    
        <div id="tudo" className="flex flex-col justify-center bg-slate-50">
            <div>
               <div id="head" className="shadow-lg px-8 py-4 h-[80px] bg-sky-900 w-full flex justify-between fixed z-10 top-0">
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
                <div id="spanMenu" className='hidden w-full h-screen fixed z-10'>
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
            <div id="spamContato" className="fixed hidden justify-center items-center h-screen w-full bg-black/80 top-0 z-50">
                <span id="contatospam" className="h-[90%] w-[90%] bg-gray-300">
                    <div className="w-full px-6 pt-6">
                        <button onClick={btnCloseContato} id="btnCloseContato" className="  top-0"><TfiClose size={25}/></button>
                    </div>
                    <div className="px-6 pb-6 pt-2 flex flex-col gap-3">
                        <p className="w-full -mb-2">nome</p>
                        <input type="text" className="w-full h-8" />
                        <p className="w-full -mb-2">telefone</p>
                        <input type="text" className="w-full h-8"/>
                        <p className="w-full -mb-2">Tipo de site</p>
                        <select name="" id="" className="w-full h-8">
                            <option value="">Novo Site</option>
                            <option value="">Atulização de site</option>
                        </select>
                        <div className="flex gap-3">
                            <div className="w-[40%]">
                                <p className="w-full">Dominio</p>
                                <select name="" id="" className="w-full h-8">
                                    <option value="0">Já possuo um domínio</option>
                                    <option value="1">Sim</option>
                                    <option value="2">Não</option>
                                </select>
                            </div>
                            <div className="grow">
                                <p className="w-full">Qtde. de páginas</p>
                                <select name="" id="" className="w-full h-8">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                    <option value="">6</option>
                                    <option value="">7</option>
                                    <option value="">8</option>
                                    <option value="">9</option>
                                    <option value="">10</option>
                                </select>
                            </div>
                        </div>
                        <p className="w-full -mb-2">Observações</p>
                        <input type="text" className="w-full h-[95px]"/>
                        <button className="h-8 bg-sky-700 mt-2 text-white">Enviar</button>
                    </div>
                </span>
            </div>

            <div id="default-carousel" class="relative w-full mt-[80px]" data-carousel="slide">
                <div class="h-56 overflow-hidden md:h-96 bg-blue-200">
                    <div 
                        class="flex duration-700 ease-in-out" data-carousel-item
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {images.map((image, index) => (
                            <img 
                                key={index}
                                id={`carousel-item-${index + 1}`} 
                                src={image}
                                alt={`Imagem ${index + 1}`} 
                                //alt={`Image ${index + 1}`}
                                className={`absolute block h-full md:w-full object-cover bg-cover bg-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
                                    index === currentIndex 
                                    ? 'opacity-100'
                                    : index < currentIndex 
                                    ? 'opacity-0'
                                    : index < currentIndex }`}
                            />
                        ))}
                        </div>
                </div>
                <div class="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            type="button" 
                            class={`w-3 h-3 rounded-full bg-white ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                            aria-current="true" 
                            aria-label="Slide 1" 
                            data-carousel-slide-to="0">
                        </button>
                    ))}
                </div>
                <button onClick={prevImage} type="button" class="absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={nextImage} type="button" class="absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
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
                    <button  id="btnOrcamento" class="bg-white hover:bg-purple-100 rounded-full px-8 h-12 text-black text-sm">Peça um orçamento</button>
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
