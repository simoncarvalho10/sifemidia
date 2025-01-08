import { useState} from 'react';

function Script() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const btnOpenMenu = () => {
        setIsMenuOpen(true);
        console.log("acessou o botão Open")
    }; 
    const btnCloseMenu = () => {
        setIsMenuOpen(false);
        console.log("acessou o botão Close")
    };

    //const spanMenu = document.getElementById("spanMenu");
    document.addEventListener("click", function(event){
        if(event.target === spanMenu) {
            setIsMenuOpen(false);
            console.log("acessou o botão Close")
        } 
    })     

    return {
        isMenuOpen, 
        btnOpenMenu,
        btnCloseMenu,
    }
}

export default Script