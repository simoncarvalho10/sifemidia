import FoneMask from './fonemask'

function Contato() {

    let alertnameContato
    let alertfoneContato
    let nameContato
    let foneContato
    let spamContato

    function declarVar(){
        alertnameContato = document.getElementById("alertnameContato");
        alertfoneContato = document.getElementById("alertfoneContato");
        nameContato = document.getElementById("nameContato");
        foneContato = document.getElementById("foneContato");
        spamContato = document.getElementById("spamContato");
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
    }
    document.addEventListener("click", function(event){
        if(event.target === spamContato) {
            declarVar();
            spamContato.style.display ="none";
            console.log("acessou o botão Close")
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
    console.log('elementGroup = '+elementGroup);
    console.log('valueInput 1 = '+valueInput.value);
    //console.log('valueInput = '+valueInput);
    const group = elementGroup
    if (elementGroup=="group2"){
        FoneMask(valueInput);
    }
    
    const groupElements = document.querySelectorAll(`[data-group="${group}"]`);

    console.log('valueInput 2 = '+valueInput.value);

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
