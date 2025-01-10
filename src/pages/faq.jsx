import React, { useState } from "react";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";

function faq() {
    const [menus, setMenus] = useState({});

    const toggleSubmenu = (submenuId) => {
        setMenus((prev) => ({
            ...prev,
            [submenuId]: !prev[submenuId],
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center mt-[80px]">
            <div class="w-full h-[200px] flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                <h4 className="text-[40px] font-ubuntu mx-8 leading-tight">
                    Perguntas frequentes (FAQ)
                </h4>
            </div>
            <div className="w-full flex mx-8 flex-col items-center justify-center p-8 text-black text-[18px]">
            <ul className="w-full flex flex-col items-center justify-center gap-3">
                <li className="w-full flex flex-col bg-white border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu1")}
                    className="flex gap-2 px-2"
                    >
                        <div className="flex items-center min-w-3 py-2">{!menus["submenu1"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}</div>
                        <p className="text-left">O que é responsividade</p>
                    </button> 
                    <ul id="submenu1" className="submenu text-[16px] border-gray-300 bg-white px-8 py-3" style={{ display: menus["submenu1"] ? "block" : "none" }}>
                        <li>
                            <p> Responsividade é a capacidade de um site ou aplicativo de se adaptar automaticamente a diferentes tamanhos de tela e dispositivos, como computadores, tablets e smartphones, garantindo uma experiência de uso consistente e agradável. Um design responsivo ajusta elementos como layout, imagens, texto e menus para manter a funcionalidade e a estética, independentemente do dispositivo utilizado. </p>
                        </li>
                    </ul>
                </li>
                <li className="w-full flex flex-col bg-white border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu2")} // Corrigido para React
                    className="flex gap-2 px-2"
                    >
                        <div className="flex items-center min-w-3 py-2">{!menus["submenu2"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}</div>
                        <p className="text-left">Vocês oferecem suporte após o lançamento?</p>
                    </button>
                    <ul id="submenu2" className="w-full text-[16px] submenu border-gray-300 bg-white px-8 py-3" style={{ display: menus["submenu2"] ? "block" : "none" }}>
                    <li>
                        <p>Oferecemos suporte especializado para manutenção de sites, garantindo que sua plataforma esteja sempre atualizada, segura e funcionando de forma otimizada. Nosso serviço inclui correções de erros, atualizações de conteúdo, ajustes de design, implementação de novas funcionalidades e monitoramento contínuo para prevenir problemas. Trabalhamos com agilidade e eficiência para manter seu site moderno, responsivo e alinhado às suas necessidades, proporcionando uma experiência online confiável e de alta qualidade para seus usuários.</p>
                    </li>
                    </ul>
                </li>
                <li className="w-full flex flex-col bg-white border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu3")} // Corrigido para React
                    className="flex gap-2 px-2"
                    >
                        <div className="flex items-center min-w-3 py-2">{!menus["submenu3"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}</div>
                        <p className="text-left">Quanto tempo leva para desenvolver um site?</p>
                    </button>
                    <ul id="submenu3" className="w-full text-[16px] submenu border-gray-300 bg-white px-8 py-3" style={{ display: menus["submenu3"] ? "block" : "none" }}>
                    <li>
                        <p>O tempo para desenvolver um site depende de vários fatores, como complexidade, funcionalidades, e personalização. Sites simples levam de 1 a 3 semanas, intermediários de 4 a 8 semanas, e projetos complexos, como e-commerces, podem levar 3 a 6 meses ou mais. O número de páginas, recursos específicos (como login e pagamentos), responsividade, SEO, design personalizado, e a colaboração do cliente também influenciam. Além disso, testes e ajustes são essenciais para garantir qualidade, e o tamanho da equipe de desenvolvimento pode acelerar ou prolongar o prazo.</p>
                    </li>
                    </ul>
                </li>
                <li className="w-full flex flex-col bg-white border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu4")}
                    className="flex gap-2 px-2"
                    >
                        <div className="flex items-center min-w-3 py-2">{!menus["submenu4"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}</div>
                        <p className="text-left">Quais informações preciso fornecer para iniciar o desenvolvimento do site?</p>
                    </button> 
                    <ul id="submenu4" className="submenu text-[16px] border-gray-300 bg-white px-8 py-3" style={{ display: menus["submenu4"] ? "block" : "none" }}>
                        <li>
                            <p> Geralmente, são necessárias informações sobre sua empresa, público-alvo, objetivos do site, identidade visual (logos, cores), conteúdos (textos, imagens) e funcionalidades desejadas.</p>
                        </li>
                    </ul>
                </li>
				<li className="w-full flex flex-col bg-white border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu5")}
                    className="flex gap-2 px-2"
                    >
                        <div className="flex items-center min-w-3 py-2">{!menus["submenu5"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}</div>
                        <p className="text-left">O site será otimizado para SEO? </p>
                    </button> 
                    <ul id="submenu5" className="submenu text-[16px] border-gray-300 bg-white px-8 py-3" style={{ display: menus["submenu5"] ? "block" : "none" }}>
                        <li>
                            <p> Sim, o desenvolvimento inclui práticas básicas de SEO, como estrutura de URL, meta tags, e otimização para velocidade, para melhorar sua visibilidade nos mecanismos de busca.</p>
                        </li>
                    </ul>
                </li>
				
                <li className="w-full flex flex-col bg-white border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu6")}
                    className="flex gap-2 px-2"
                    >
                        <div className="flex items-center min-w-3 py-2">{!menus["submenu6"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}</div>
                        <p className="text-left">O que está incluso no custo do desenvolvimento do site? </p>
                    </button> 
                    <ul id="submenu6" className="submenu text-[16px] border-gray-300 bg-white px-8 py-3" style={{ display: menus["submenu6"] ? "block" : "none" }}>
                        <li>
                            <p> O custo geralmente inclui design, desenvolvimento, testes, implementação de funcionalidades básicas, e treinamento para uso do site. Custos adicionais podem ser aplicados para funcionalidades extras ou integrações específicas.</p>
                        </li>
                    </ul>
                </li>
                <li className="w-full flex flex-col bg-white border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu7")}
                    className="flex gap-2 px-2"
                    >
                        <div className="flex items-center min-w-3 py-2">{!menus["submenu7"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}</div>
                        <p className="text-left">Vocês cuidam do registro de domínio e hospedagem?</p>
                    </button> 
                    <ul id="submenu7" className="submenu text-[16px] border-gray-300 bg-white px-8 py-3" style={{ display: menus["submenu7"] ? "block" : "none" }}>
                        <li>
                            <p> Sim, oferecemos orientação e suporte para registro de domínio e escolha de hospedagem, ou podemos cuidar de tudo para você.</p>
                        </li>
                    </ul>
                </li>
                <li className="w-full flex flex-col bg-white border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu8")}
                    className="flex gap-2 px-2"
                    >
                        <div className="flex items-center min-w-3 py-2">{!menus["submenu8"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}</div>
                        <p className="text-left">Meu site será escalável?</p>
                    </button> 
                    <ul id="submenu8" className="submenu text-[16px] border-gray-300 bg-white px-8 py-3" style={{ display: menus["submenu8"] ? "block" : "none" }}>
                        <li>
                            <p> Sim, desenvolvemos sites com foco na escalabilidade, permitindo que novas funcionalidades ou páginas sejam adicionadas conforme sua necessidade.</p>
                        </li>
                    </ul>
                </li>					                	  
                </ul>
            </div>
        </div>
    
    )

}

export default faq