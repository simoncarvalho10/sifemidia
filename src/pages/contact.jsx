import React from "react";
import Contato from '../Script/contato.js'

function Contact() { 
    const { btnFormContato } = Contato ();
    return(  
        <div id="tudo" className="flex flex-col justify-center bg-slate-50">  
            <div id="contatospam" className="w-full md:rounded-lg mt-[80px] py-8">
                <div className="px-6 flex flex-col gap-3">
                    <p className="w-full -mb-2">*Nome:</p>
                    <input id="nameContato" type="text" className="w-full h-8 bg-white border rounded-md border-gray-300" />
                    <span id="alertnameContato" className='hidden text-red-500 -mt-2'>Por favor, digite o seu nome!</span>
                    <p className="w-full -mb-2">*Telefone:</p>
                    <input id="foneContato" type="text" className="w-full h-8 border bg-white rounded-md border-gray-300"/>
                    <span id="alertfoneContato" className='hidden text-red-500 -mt-2'>Por favor, digite o seu telefone!</span>
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
                    <input type="text" className="w-full h-[110px] border bg-white rounded-md border-gray-300"/>
                    <button onClick={btnFormContato} id="enviarContato" className="h-8 bg-sky-700 mt-2 text-white">Enviar</button>
                </div>
            </div>
        </div>                          
    );
}
export default Contact