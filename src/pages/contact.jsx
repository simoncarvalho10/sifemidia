import React from "react";
import Contato from '../Script/contato.js'
import FoneMask from '../Script/fonemask.js'

function Contact() { 
    const { btnFormContato } = Contato ();
    
    return(  
         
        <div id="contatospam" className="w-full md:rounded-lg mt-[80px] py-8 text-black">
            <div className="px-6 mb-6">
                <h4 className="text-[40px] font-ubuntu leading-tight">
                    Me conte um pouco mais a respeito do seu projeto!
                </h4>
            </div>
            <div className="px-6 flex flex-col gap-3">
                <p className="w-full -mb-1">*Nome:</p>
                <input id="nameContato" type="text" placeholder='Digite o seu nome...' className="w-full p-3 bg-white border rounded-sm border-gray-300" />
                <span id="alertnameContato" className='hidden text-red-500 -mt-2'>Por favor, digite o seu nome!</span>
                <p className="w-full -mb-1">*Telefone:</p>
                <input id="foneContato" onChange={FoneMask} type="text" placeholder='Digite o seu telefone...'className="w-full p-3 border bg-white rounded-sm border-gray-300"/>
                <span id="alertfoneContato" className='hidden text-red-500 -mt-2'>Por favor, digite o seu telefone!</span>
                <p className="w-full -mb-1">Tipo de site:</p>
                <select name="" id="" className="w-full p-2 border bg-white rounded-sm border-gray-300">
                    <option value="">Novo Site</option>
                    <option value="">Atualização de site</option>
                </select>
                <div className="flex gap-3">
                    <div className="grow">
                        <p className="w-full mb-2">Já possuo um domínio:</p>
                        <select name="" id="" className="w-full p-2 border bg-white rounded-sm border-gray-300">
                            <option value="0">Sim</option>
                            <option value="1">Não</option>
                        </select>
                    </div>
                    <div className="w-[40%]">
                        <p className="w-full mb-2">Qtde. de páginas:</p>
                        <select name="" id="" className="w-full p-2 border bg-white rounded-sm border-gray-300">
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
                <p className="w-full -mb-1">Observações:</p>
                <textarea placeholder='Digite aqui o motivo do contato...' className='p-3 w-full h-[180px] border rounded-sm border-gray-300 resize-none leading-tight'></textarea>
                <button onClick={btnFormContato} id="enviarContato" className="rounded-xl h-10 bg-sky-700 mt-2 text-white">Enviar</button>
            </div>
        </div>
                                 
    );
}
export default Contact