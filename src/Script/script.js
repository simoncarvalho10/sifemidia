import { useState} from 'react';

function Script() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const btnOpenMenu = () => {
        setIsMenuOpen(true);
    }; 
    const btnCloseMenu = () => {
        setIsMenuOpen(false);
    };

    //const spanMenu = document.getElementById("spanMenu");
    document.addEventListener("click", function(event){
        if(event.target === spanMenu) {
            setIsMenuOpen(false);
        } 
    })     

    return {
        isMenuOpen, 
        btnOpenMenu,
        btnCloseMenu,
    }
}

export default Script