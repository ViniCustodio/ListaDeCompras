import validacaoItensVazio from "./validandoLista.js";

const btnAdicionar = document.getElementById('btnAdicionar');
const listaUl = document.getElementById("listaDeCompras");
let contador = 1;

btnAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const adicionandoItem = document.getElementById('item');
    console.log(adicionandoItem)

    if(adicionandoItem.value == ''){
        return
    }
    
    /* Criando tags HTML */

    const tagLi = document.createElement("li");
    const tagCheckbox = document.createElement("input");
    tagCheckbox.setAttribute("type", "checkbox")
    tagCheckbox.id = `checkbox-`+ contador++;
    const tagParagrafo = document.createElement("p");
    const tagDivItens = document.createElement("div");
    const tagButtonMenos = document.createElement("button");

    let tagInputNumero = document.createElement("input");
    tagInputNumero.setAttribute("type", "number");
    tagInputNumero.value = 0;
    tagInputNumero.setAttribute("min", "0") ;

    const tagButtonMais = document.createElement("button");
    const tagButtonLixeira = document.createElement("button");
    tagButtonLixeira.id = `dumb-`+ contador++;  

    /* Interligando todas as tags criadas */

    tagLi.appendChild(tagCheckbox);
    tagLi.appendChild(tagParagrafo);
    tagLi.appendChild(tagDivItens);
    tagDivItens.appendChild(tagButtonMenos);
    tagDivItens.appendChild(tagInputNumero);
    tagDivItens.appendChild(tagButtonMais);
    tagLi.appendChild(tagButtonLixeira);

    /* Adicionando classes nas tags criadas */

    tagLi.classList.add("itens-adicionados");
    tagDivItens.classList.add("qtd-itens");

    /* adicionando tags criadas na lista */

    listaUl.appendChild(tagLi);


    /* Adicionado valores do input nas novas tags criadas */

    tagParagrafo.innerText = adicionandoItem.value

    /* Limpando campos após adicionar item */

    adicionandoItem.value = "";

    /* Criando icones e adicionando nas listas */

    const iconeMenos = criarIcone({d: "M6 12L18 12", stroke: "white"}); 

    const iconeMais = criarIcone({d: "M12 6L12 18 M6 12L18 12", stroke: "white"}); 
    
    const iconeLixeira = criarIcone({
    d: "M12 10V17M8 10V17M19 9H22M19 14H22M19 19H21M16 6V16.2C16 17.8802 16 18.7202 15.673 19.362C15.3854 19.9265 14.9265 20.3854 14.362 20.673C13.7202 21 12.8802 21 11.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V6M2 6H18M14 6L13.7294 5.18807C13.4671 4.40125 13.3359 4.00784 13.0927 3.71698C12.8779 3.46013 12.6021 3.26132 12.2905 3.13878C11.9376 3 11.523 3 10.6936 3H9.30643C8.47705 3 8.06236 3 7.70951 3.13878C7.39792 3.26132 7.12208 3.46013 6.90729 3.71698C6.66405 4.00784 6.53292 4.40125 6.27064 5.18807L6 6",
    width: 30,
    height: 30,
    stroke: "#ffffff"
    });

    tagButtonMenos.appendChild(iconeMenos);
    tagButtonMais.appendChild(iconeMais);
    tagButtonLixeira.appendChild(iconeLixeira);

    tagCheckbox.addEventListener("click", () => {

        let riscado = tagLi.querySelector("p");

        if(tagCheckbox.checked){
        riscado.style.textDecoration = "line-through";
        }
        else{
            let riscado = tagLi.querySelector("p");
            riscado.style.textDecoration = "none";
        }
    });

     /* Criando botão para remoção de itens */

    tagButtonLixeira.type = "button";
    tagButtonLixeira.addEventListener("click", () => {
        listaUl.removeChild(tagLi);
        validacaoItensVazio(listaUl)
    })

     /* Adicionando funcionalidade nos botões de menos e mais */

     tagButtonMenos.addEventListener("click", () =>{
        let qtdItens = tagInputNumero.value;

        if(qtdItens == 0){
            return
        }
        
        qtdItens--

        tagInputNumero.value = qtdItens;
        
     });

     tagButtonMais.addEventListener("click", () =>{
        let qtdItens = tagInputNumero.value;
        qtdItens++

        tagInputNumero.value = qtdItens;
        
     });

    /* Condicional para validação de itens */

    validacaoItensVazio(listaUl)

});

validacaoItensVazio(listaUl);

function criarIcone({d, width = 24, height = 24, stroke = "#ffffff", strokeWidth = 2}) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width + "px");
    svg.setAttribute("height", height + "px");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("stroke", stroke);
    path.setAttribute("stroke-width", strokeWidth);
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");

    svg.appendChild(path);
    return svg;
}
