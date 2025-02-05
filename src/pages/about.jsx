import React from "react";

function about() {

    return (
        <div className="flex flex-col items-center justify-center mt-[80px] md:text-[20px]">
            <div className="w-full h-[200px] flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                <h4 className="text-[40px] font-ubuntu">
                    Quem nós somos!
                </h4>
            </div>
            <div className="mx-8 flex flex-col items-center justify-center py-8 text-black">
                <div className="flex flex-col text-justify gap-3 md:px-20 md:py-10">
                    <p>A SIFE Mídia é uma empresa de criação de sites profissionais que projeta, desenvolve e gerencia sites de alto impacto que geram leads, vendem produtos e contam histórias.</p>
                    <p>Somos uma empresa especializada no desenvolvimento de sites modernos e funcionais, focados em atender às necessidades específicas de cada cliente. Nosso compromisso é entregar soluções que garantam flexibilidade na manutenção, permitindo que você tenha total autonomia na gestão do seu conteúdo.</p>
                    <p>Trabalhamos com foco em responsividade, criando sites que se adaptam perfeitamente a qualquer dispositivo, seja desktop, tablet ou smartphone. Além disso, priorizamos a escalabilidade, desenvolvendo projetos que crescem junto com o seu negócio, acompanhando novas demandas e oportunidades.</p>
                    <p>Combinamos identidade visual única e layouts clean e modernos, garantindo uma experiência de navegação agradável e profissional para seus usuários. Nossa equipe também é especializada em estratégias de SEO, otimizando o seu site para que ele alcance as melhores posições nos motores de busca e aumente o engajamento do seu público-alvo.</p>
                    <p>Nosso objetivo é criar não apenas um site, mas uma ferramenta poderosa para impulsionar a sua marca, fortalecendo sua presença digital e gerando resultados consistentes.</p>
                </div>
            </div>
        </div>
    
    )

}

export default about