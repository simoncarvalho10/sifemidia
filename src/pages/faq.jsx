import React, { useState } from "react";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";

function faq() {
    const [menus, setMenus] = useState({}); // Armazena o estado de cada submenu

    const toggleSubmenu = (submenuId) => {
        setMenus((prev) => ({
            ...prev,
            [submenuId]: !prev[submenuId], // Alterna o estado do submenu específico
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center mt-[80px]">
            <div class="w-full h-[200px] flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                <h4 className="text-[40px] font-ubuntu mx-8">
                    Perguntas frequentes (FAQ)
                </h4>
            </div>
            <div className="w-full flex mx-8 flex-col items-center justify-center p-8 text-black">
            <ul className="w-full flex flex-col items-center justify-center gap-3">
                <li className="w-full flex flex-col bg-white border border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu1")}
                    className="flex items-center justify-center h-[40px] gap-2"
                    >
                        {!menus["submenu1"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}
                        O que é responsividade
                    </button> 
                    <ul id="submenu1" className="submenu border border-gray-300 bg-white p-6" style={{ display: menus["submenu1"] ? "block" : "none" }}>
                        <li>
                            <p> Responsividade é a capacidade de um site ou aplicativo de se adaptar automaticamente a diferentes tamanhos de tela e dispositivos, como computadores, tablets e smartphones, garantindo uma experiência de uso consistente e agradável. Um design responsivo ajusta elementos como layout, imagens, texto e menus para manter a funcionalidade e a estética, independentemente do dispositivo utilizado. </p>
                        </li>
                    </ul>
                </li>
                <li className="w-full flex flex-col bg-white border border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu2")} // Corrigido para React
                    className="flex items-center justify-center h-[40px] gap-2"
                    >
                        {!menus["submenu2"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}
                        Vocês oferecem suporte após o lançamento?
                    </button>
                    <ul id="submenu2" className="w-full submenu border  border-gray-300 bg-white p-6" style={{ display: menus["submenu2"] ? "block" : "none" }}>
                    <li>
                        <p>Oferecemos suporte especializado para manutenção de sites, garantindo que sua plataforma esteja sempre atualizada, segura e funcionando de forma otimizada. Nosso serviço inclui correções de erros, atualizações de conteúdo, ajustes de design, implementação de novas funcionalidades e monitoramento contínuo para prevenir problemas. Trabalhamos com agilidade e eficiência para manter seu site moderno, responsivo e alinhado às suas necessidades, proporcionando uma experiência online confiável e de alta qualidade para seus usuários.</p>
                    </li>
                    </ul>
                </li>
                <li className="w-full flex flex-col bg-white border border-gray-400 hover:bg-gray-200">
                    <button
                    onClick={() => toggleSubmenu("submenu3")} // Corrigido para React
                    className="flex items-center justify-center h-[40px] gap-2"
                    >
                        {!menus["submenu3"] ? <SlArrowRight size={12} /> : <SlArrowDown size={12} />}
                        Quanto tempo leva para desenvolver um site?
                    </button>
                    <ul id="submenu3" className="w-full submenu border  border-gray-300 bg-white p-6" style={{ display: menus["submenu3"] ? "block" : "none" }}>
                    <li>
                        <p>O tempo para desenvolver um site depende de vários fatores, como complexidade, funcionalidades, e personalização. Sites simples levam de 1 a 3 semanas, intermediários de 4 a 8 semanas, e projetos complexos, como e-commerces, podem levar 3 a 6 meses ou mais. O número de páginas, recursos específicos (como login e pagamentos), responsividade, SEO, design personalizado, e a colaboração do cliente também influenciam. Além disso, testes e ajustes são essenciais para garantir qualidade, e o tamanho da equipe de desenvolvimento pode acelerar ou prolongar o prazo.</p>
                    </li>
                    </ul>
                </li>	  
                </ul>
            </div>
        </div>
    
    )

}

export default faq