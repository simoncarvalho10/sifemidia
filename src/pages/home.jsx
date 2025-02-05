import React from "react";
import { TfiClose } from "react-icons/tfi";
import imgPC from '../assets/pc.png'
import imgResp from '../assets/icResponsive.svg'
import imgDom from '../assets/icDominio.svg'
import imgSeo from '../assets/icSeo.svg'
import imgEml from '../assets/icEmail.svg'
import imgHst from '../assets/icHeadset.svg'
import imgMds from '../assets/icMedias.svg'

import img1a from '../assets/1a.jpg';
import img2b from '../assets/2b.jpg';
import img3c from '../assets/3c.jpg';

import Contato from '../Script/contato.js'
import { validateForm } from '../Script/contato.js'
import Galeria from '../Script/galeria.js'

import Formcontato from './formcontact.jsx'

function home() {
   
    const formChange = (event) => {
        const elementGroup = event.target.dataset.group;
        const valueInput = event.target;
        validateForm(elementGroup, valueInput);
    };    
    const { 
        btnCloseContato,    
        btnOrcamento
    } = Contato();

    const { 
        images, 
        currentIndex, 
        setCurrentIndex, 
        nextImage, 
        prevImage, 
        handleTouchStart, 
        handleTouchMove, 
        handleTouchEnd 
    } = Galeria();

    const images2 = [img1a,img2b,img3c]; 

    return(     
        <div>   
            <div id="spamContato" style={{display:'none'}} className="fixed justify-center items-center h-screen w-full bg-black/80 top-0 z-50 text-black">
                <span id="contatospam" className="h-[90%] w-[90%] md:w-[60%] md:rounded-lg bg-white overflow-auto pb-6">
                    <div className="w-full px-6 pt-6">
                        <button onClick={btnCloseContato} id="btnCloseContato" className="  top-0"><TfiClose size={25}/></button>
                    </div>
                    <Formcontato/> 
                </span>
            </div>
            <div id="default-carousel" className="md:hidden relative w-full" data-carousel="slide">
                <div className="h-screen md:h-96 bg-blue-200">
                    <div 
                        className="flex duration-700 ease-in-out" data-carousel-item
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {images2.map((image, index) => (
                            <img 
                                key={index}
                                id={`carousel-item-${index + 1}`} 
                                src={image}
                                alt={`Imagem ${index + 1}`} 
                                //alt={`Image ${index + 1}`}
                                className={`absolute block w-full h-full object-cover bg-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                />
                        ))}
                        </div>
                </div>
                <div className="absolute flex -translate-x-1/2 bottom-[80px] left-1/2 space-x-3 rtl:space-x-reverse">
                    {images.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            type="button" 
                            className={`w-3 h-3 rounded-full bg-white ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                            aria-current="true" 
                            aria-label="Slide 1" 
                            data-carousel-slide-to="0">
                        </button>
                    ))}
                </div>
            </div>         
            <div id="default-carousel" className="hidden md:flex relative w-full mt-[80px]" data-carousel="slide">
                <div className="h-56 overflow-hidden md:h-96 bg-blue-200">
                    <div 
                        className="flex duration-700 ease-in-out" data-carousel-item
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
                                className={`absolute block h-full md:w-full object-cover bg-cover bg-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                />
                        ))}
                        </div>
                </div>
                <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            type="button" 
                            className={`w-3 h-3 rounded-full bg-gray-200 ${currentIndex === index ? 'bg-gray-400' : 'bg-gray-600'}`}
                            aria-current="true" 
                            aria-label="Slide 1" 
                            data-carousel-slide-to="0">
                        </button>
                    ))}
                </div>
                <button onClick={prevImage} type="button" className="hidden md:block absolute top-0 start-0 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/80 group-hover:bg-black/50 dark:group-hover:bg-gray-800/90 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={nextImage} type="button" className="hidden md:block absolute top-0 end-0 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className="bg-grdBudget md:shadow-lg  w-full h-full flex flex-col justify-center px-8 md:px-12 text-white bg-teste bg-cover bg-center bg-green-400">
                <div className="py-16 md:flex">
                    <div className="flex justify-center w-full h-[150px] md:h-[250px] overflow-hidden">
                        <img  src={imgPC} alt="logo" />
                    </div>
                    <div className='md:flex md:flex-col md:justify-center md:place-items-start'>
                        <h2 className="font-bold text-[20px] -mb-6 w-full">AGÊNCIA DE CRIAÇÃO DE SITES</h2>
                        <p className="text-justify py-10">
                        Nossos sites são desenvolvidos para que você tenha autonomia em gerenciar seu próprio conteúdo.
                        Através de um painel administrativo você terá liberdade para adicionar textos, imagens, vídeos e até mesmo criar páginas adicionais. 
                        </p>
                        <button onClick={btnOrcamento} id="btnOrcamento" className="bg-white hover:bg-purple-100 rounded-full px-8 h-12 text-black text-sm">Peça um orçamento</button>
                    </div>
                </div>
            </div>
            <div id="service" className="text-black px-8 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                <div className="flex gap-4">
                    <div className="w-[50px] min-w-[30px]">
                        <img className="w-full" src={imgResp} alt="seo" />
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold text-base">SITE RESPONSIVO</h4>
                        <p>Um site adaptável para computador, tablet e celular melhora a experiência do usuário, aumentando as interações.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-[50px] min-w-[30px]">
                        <img className="w-full" src={imgDom} alt="seo" />
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold text-base">DOMÍNIO PERSONALIZADO</h4>
                        <p>Você transmitirá mais credibilidade aos seus clientes com um domínio personalizado. Por exemplo: www.suamarca.com.br
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-[50px] min-w-[30px]">
                        <img className="w-full" src={imgSeo} alt="seo" />
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold text-base">ENCONTRADO NO GOOGLE</h4>
                        <p>Através de SEO, você alcançará mais clientes com uma boa classificação nos resultados das buscas do Google e Bing.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-[50px] min-w-[30px]">
                        <img className="w-full" src={imgEml} alt="seo" />
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold text-base">E-MAIL PROFISSIONAL</h4>
                        <p>Profissionalismo das suas comunicações, enviando e recebendo mensagens por um e-mail com sua marca. Por exemplo:
                        contato@suamarca.com.br</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-[50px] min-w-[30px]">
                        <img className="w-full" src={imgHst} alt="seo" />
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold text-base">SUPORTE CONTÍNUO</h4>
                        <p>Oferecemos o Plano de Cuidados com o Site, proporcionando suporte contínuo para garantir a segurança e o bom funcionamento do seu site. </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-[50px] min-w-[30px]">
                        <img className="w-full" src={imgMds} alt="seo" />
                    </div>
                    <div className="w-full">
                        <h4 className="font-bold text-base">REDES SOCIAIS</h4>
                        <p>O conteúdo de seu site compartilhado e podendo ser visto por milhões de pessoas.</p>
                    </div>
                </div>
            </div>
        </div>           
            
    );
}
export default home