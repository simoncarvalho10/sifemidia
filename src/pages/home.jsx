import React from "react";
import { useRef } from "react";
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

function home() {
   
    const formChange = (event) => {
        const elementGroup = event.target.dataset.group;
        validateForm(elementGroup);
    };    
    const { 
        btnCloseContato,    
        btnFormContato,
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
                <span id="contatospam" className="max-h-[90%] w-[90%] md:w-[60%] md:rounded-lg bg-white overflow-auto">
                    <div className="w-full px-6 pt-6">
                        <button onClick={btnCloseContato} id="btnCloseContato" className="  top-0"><TfiClose size={25}/></button>
                    </div>
                    <div className="px-6 pb-6 pt-2 flex flex-col gap-3">
                        <p className="w-full -mb-2">*Nome:</p>
                        <input id="nameContato" data-group="group1" onChange={formChange} type="text" className="w-full h-8 bg-white border rounded-md border-gray-300" />
                        <span id="alertnameContato" data-group="group1" className='hidden text-red-500 -mt-2'>Por favor, digite o seu nome!</span>
                        <p className="w-full -mb-2">*Telefone:</p>
                        <input id="foneContato" data-group="group2" onChange={formChange} type="text" className="w-full h-8 border bg-white rounded-md border-gray-300"/>
                        <span id="alertfoneContato" data-group="group2" className='hidden text-red-500 -mt-2'>Por favor, digite o seu telefone!</span>
                        <p className="w-full -mb-2">Tipo de site:</p>
                        <select name="" id="" className="w-full h-8 border bg-white rounded-md border-gray-300">
                            <option value="">Novo Site</option>
                            <option value="">Atulização de site</option>
                        </select>
                        <div className="flex gap-3">
                            <div className="grow">
                                <p className="w-full">Já possuo um domínio:</p>
                                <select name="" id="" className="w-full h-8 border bg-white rounded-md border-gray-300">
                                    <option value="0">Sim</option>
                                    <option value="1">Não</option>
                                </select>
                            </div>
                            <div className="w-[40%]">
                                <p className="w-full">Qtde. de páginas:</p>
                                <select name="" id="" className="w-full h-8 border bg-white rounded-md border-gray-300">
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
                        <p className="w-full -mb-2">Observações:</p>
                        <input type="text" className="w-full h-[95px] border bg-white rounded-md border-gray-300"/>
                        <button onClick={btnFormContato} id="enviarContato" className="h-8 bg-sky-700 mt-2 text-white">Enviar</button>
                    </div>
                </span>
            </div>
            <div id="default-carousel" class="md:hidden relative w-full" data-carousel="slide">
                <div class="h-screen md:h-96 bg-blue-200">
                    <div 
                        class="flex duration-700 ease-in-out" data-carousel-item
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
                <div class="absolute flex -translate-x-1/2 bottom-[80px] left-1/2 space-x-3 rtl:space-x-reverse">
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
            </div>         
            <div id="default-carousel" class="hidden md:flex relative w-full mt-[80px]" data-carousel="slide">
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
                                className={`absolute block h-full md:w-full object-cover bg-cover bg-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
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
                            class={`w-3 h-3 rounded-full bg-gray-200 ${currentIndex === index ? 'bg-gray-400' : 'bg-gray-600'}`}
                            aria-current="true" 
                            aria-label="Slide 1" 
                            data-carousel-slide-to="0">
                        </button>
                    ))}
                </div>
                <button onClick={prevImage} type="button" class="hidden md:block absolute top-0 start-0 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/80 group-hover:bg-black/50 dark:group-hover:bg-gray-800/90 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={nextImage} type="button" class="hidden md:block absolute top-0 end-0 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div class="bg-budget md:shadow-lg  w-full h-[480px] flex flex-col justify-center px-8 md:px-12 text-white bg-teste bg-cover bg-center bg-green-400">
                <div class="my-12 md:flex">
                    <div class="flex justify-center w-full h-[150px] md:h-[250px] overflow-hidden">
                        <img  src={imgPC} alt="logo" />
                    </div>
                    <div className='md:flex md:flex-col md:justify-center md:place-items-start'>
                        <h2 class="font-bold text-[20px] -mb-6 w-full">AGÊNCIA DE CRIAÇÃO DE SITES</h2>
                        <p class="text-justify py-10">
                        Nossos sites são desenvolvidos para que você tenha autonomia em gerenciar seu próprio conteúdo.
                        Através de um painel administrativo você terá liberdade para adicionar textos, imagens, vídeos e até mesmo criar páginas adicionais. 
                        </p>
                        <button onClick={btnOrcamento} id="btnOrcamento" class="bg-white hover:bg-purple-100 rounded-full px-8 h-12 text-black text-sm">Peça um orçamento</button>
                    </div>
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
        </div>           
            
    );
}
export default home