import FoneMask from './fonemask'

function Contato() {

    let alertnameContato
    let alertfoneContato
    let nameContato
    let foneContato
    let spamContato
    let tpSite
    let pDominio
    let qtdPage
    let txtObserv

    function declarVar(){
        alertnameContato = document.getElementById("alertnameContato");
        alertfoneContato = document.getElementById("alertfoneContato");
        nameContato = document.getElementById("nameContato");
        foneContato = document.getElementById("foneContato");
        spamContato = document.getElementById("spamContato");
        tpSite = document.getElementById("tpSite");
        pDominio = document.getElementById("pDominio");
        qtdPage = document.getElementById("qtdPage");
        txtObserv = document.getElementById("txtObserv");
    }
    
    const btnCloseContato = () => {
        declarVar();
        spamContato.style.display ="none";
    }; 
    const btnOrcamento = () => {
        declarVar();
        console.log("style = "+spamContato.style.display)
        spamContato.style.display ="flex";
    }; 
    const btnFormContato = () => {
        declarVar();
        if (nameContato.value == "") {
            alertnameContato.style.display = "flex";
            nameContato.classList.add("border-red-500");
        }

        if (foneContato.value == "") {
            alertfoneContato.style.display = "flex";
            foneContato.classList.add("border-red-500");
        }

        if (nameContato.value != "" && foneContato.value != "") {
            // Passa todas as opções do select para uma variável
            const cIdxTpSite = tpSite.selectedIndex;
            const cIdxDominio = pDominio.selectedIndex;
            const cIdxQtdPage = qtdPage.selectedIndex;
            
            const cOptsTpSite = tpSite.options[cIdxTpSite].text;
            const cOptsDominio = pDominio.options[cIdxDominio].text;
            const cOptsQtdPage = qtdPage.options[cIdxQtdPage].text;

            let vMsg = `*ORÇAMENTO DE SITE*%0A%0A`
            vMsg = `${vMsg}*Nome:* ${nameContato.value}%0A`
            vMsg = `${vMsg}*Telefone:* ${foneContato.value}%0A%0A`
            vMsg = `${vMsg}*Tipo de site:* ${cOptsTpSite}%0A`
            vMsg = `${vMsg}*Possui Domínio:* ${cOptsDominio}%0A`
            vMsg = `${vMsg}*Qtd. de Páginas:* ${cOptsQtdPage}%0A%0A`
            vMsg = `${vMsg}*Observações:* ${txtObserv.value}`
            
            const vPhone = +5562984917598
            window.open(`https://wa.me/${vPhone}?text=${vMsg}`,"_blank") 
            location.reload();        
            
        }
    }
    document.addEventListener("click", function(event){
        if(event.target === spamContato) {
            declarVar();
            spamContato.style.display ="none";
        } 
    }) 
    return {
        btnCloseContato,
        btnFormContato,
        btnOrcamento,
    }
}
export default Contato;

export function validateForm(elementGroup, valueInput) {

    const group = elementGroup
    if (elementGroup=="group2"){
        FoneMask(valueInput);
    }
    
    const groupElements = document.querySelectorAll(`[data-group="${group}"]`);

    if (groupElements != "group2" && valueInput.value != ""){
        
        groupElements.forEach(element => {
            
                if (element.tagName.toLowerCase() === 'input') {
                    element.classList.remove("border-red-500");
                }
                if (element.tagName.toLowerCase() === 'span') {
                    element.style.display = "none";
                }
            
        })

    }   

}	       
