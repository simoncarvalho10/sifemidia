function foneMask(event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

    // Máscara para formato de telefone (xx) xxxx-xxxx
    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
    } 

    input.value = value; // Atualiza o valor no campo
    
    return (
        value
    )
}
export default foneMask