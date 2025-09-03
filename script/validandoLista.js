const mensagemVazio = document.querySelector(".mensagemVazio");

function validacaoItensVazio(listaUl) {
    const itens = listaUl.querySelectorAll("li");

    if(itens.length == 0) {
        mensagemVazio.style.display = "block";
    } 
    
    else {
        mensagemVazio.style.display = "none";
    }    

};

export default validacaoItensVazio;


