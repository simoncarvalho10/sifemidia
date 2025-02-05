import React from "react";
import { useState } from "react";
import { WhatsAppWidget } from "react-whatsapp-widget";
//import WhatsAppWidget from "react-whatsapp-widget";
//import "react-whatsapp-widget/dist/index.css"; // Importar estilos

function chatWhatsapp() {

    const [isOpen, setIsOpen] = useState(false);

    const spanOpen = () => {
        setIsOpen(true);
    };  
    
    //const spanMenu = document.getElementById("spanMenu");
    document.addEventListener("click", function(event){
        if(event.target === spanChat) {
            setIsOpen(false);
            console.log("acessou o botão Close")
        } 
    })     

    return (
        <div className="w-full bg-yellow-400">
            <div className="fixed z-30 flex justify-end w-[90%] bottom-0 mb-[200px]">
                <button onClick={spanOpen} className="flex items-center justify-center right-0 p-3 bg-green-600 rounded-full">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        style={{ width: "60px", height: "60px" }}
                    />
                </button>
            </div>  
            <span id='spanChat' className="fixed bg-black/80 top-0 z-50 w-full h-screen" style={!isOpen ? {display:'none'} : {display:'block'}}>
                <div className="m-8 h-[90%] bg-white">
                    <WhatsAppWidget
                        phoneNumber="5591998765432" // Substitua pelo número do WhatsApp no formato internacional
                        message="Olá! Como podemos ajudar você?"
                        companyName="Minha Empresa"
                        replyTimeText="Responde em alguns minutos"
                        sendButtonText="Enviar"
                    />
                </div>
            </span>	
        </div>
    )
}
export default chatWhatsapp