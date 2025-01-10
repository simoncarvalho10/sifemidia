import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im"; 
import { GrInstagram } from "react-icons/gr"; 
import { RiWhatsappLine } from "react-icons/ri"; 
import SifeLogoPb from '../assets/logo_sife_bk.svg'

function footer() {
    return(           
            <div class="bg-grdFooter text-black py-6">
                <div class="h-full m-8 md:mx-12 flex flex-col md:flex-row md:justify-between items-center justify-center md:gap-24 gap-3">
                    <div class="hidden md:flex flex-col md:w-[20%]">
                        <h4 class="md:w-full font-bold text-[22px] md:h-9">Menus:</h4>
                        <p className='md:w-full md:h-7 md:hover:bg-gray-200'>Home</p>
                        <p className='md:w-full md:h-7 md:hover:bg-gray-200'>Quem Somos</p>
                        <p className='md:w-full md:h-7 md:hover:bg-gray-200'>Portifólio</p>
                        <p className='md:w-full md:h-7 md:hover:bg-gray-200'>Fale Conosco</p>
                    </div>
                    <div className='flex flex-col justify-center gap-4'>
                        <img class="h-[60px]" src={SifeLogoPb} alt="logo" />
                        <p class=" text-justify">A SIFE Mídia é uma empresa de criação de sites profissionais que projeta, desenvolve e gerencia sites de alto impacto que geram leads, vendem produtos e contam histórias.</p>
                    </div>
                    <div class="flex-col gap-4 md:w-[30%]">
                        <h4 class="font-bold text-[22px]">Acesse nossas redes:</h4>
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
    );
}
export default footer