import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

import { useState, useEffect } from 'react';

function Galeria() {

    const images = [img1,img2,img3]; 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

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
    
    return {
        images, // Exportando o array de imagens
        currentIndex,
        setCurrentIndex,
        nextImage,
        prevImage,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    }

}
export default Galeria

