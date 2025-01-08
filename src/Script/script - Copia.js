function Script() {}
const alertnameContato = document.getElementById("alertnameContato")
const alertfoneContato = document.getElementById("alertfoneContato")
const nameContato = document.getElementById("nameContato")
const foneContato = document.getElementById("foneContato") 
const spanMenu = document.getElementById("spanMenu")
const openMenu = document.getElementById("openMenu")
const closeMenu = document.getElementById("closeMenu")
const spamContato = document.getElementById("spamContato")
const btnOrcamento = document.getElementById("btnOrcamento")

export function btnOpenMenu() {
    openMenu.style.display ="none";
    closeMenu.style.display ="flex";
    spanMenu.style.display ="flex";
    alert("Entrou")

}; 
export function btnCloseMenu() {
    openMenu.style.display ="flex";
    closeMenu.style.display ="none";
    spanMenu.style.display ="none";
};
export function btnCloseContato() {
    spamContato.style.display ="none";
}; 
export const btnFormContato = () => {
    
    if (nameContato.value == "") {
        alertnameContato.style.display = "flex";
        nameContato.classList.add("border-red-500");
    }

    if (foneContato.value == "") {
        alertfoneContato.style.display = "flex";
        foneContato.classList.add("border-red-500");
    }
}

export function Script() {
  
    useEffect (() => {    
    
        nameContato.addEventListener("input", function(event){
            let inputnameContato = event.target.value;
            if (inputnameContato !== ""){
                alertnameContato.style.display = "none";
                nameContato.classList.remove("border-red-500");
            }
        });
    
        foneContato.addEventListener("input", function(event){
            let inputnameContato = event.target.value;
            if (inputnameContato !== ""){
                alertfoneContato.style.display = "none";
                foneContato.classList.remove("border-red-500");
            }
        });

        spanMenu.addEventListener("click", function(event){
            if(event.target === spanMenu) {
                spanMenu.style.display = "none"
                openMenu.style.display ="flex";
                closeMenu.style.display ="none";
            } 
        })
    
        btnOrcamento.addEventListener("click", function(){
            spamContato.style.display = "flex";
        })    
        
        spamContato.addEventListener("click", function(event){
            if(event.target === spamContato) {
                spamContato.style.display = "none";
            } 
        })    
                  
    }) 
}