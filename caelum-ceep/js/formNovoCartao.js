;(function(){
    const form = document.querySelector(".formNovoCartao");
    const mural = document.querySelector(".mural");
    let contador = document.querySelectorAll(".cartao").length;
    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const textAreaContent = document.querySelector(".formNovoCartao-conteudo");
        const isTextAreaVazio = textAreaContent.value.trim().length === 0;
        const conteudo = textAreaContent.value;
        if(isTextAreaVazio) {
            const msgErro = document.createElement("div")
            msgErro.classList.add("formNovoCartao-msg")
            msgErro.textContent = "Formulário inválido!"

            const btnSubmit = form.children[form.children.length-1]

            form.addEventListener("animationend", function(event){
                event.target.remove();
            })
            form.insertBefore(msgErro, btnSubmit)
            
        } else {

          criaCartao({conteudo});

        }
    });

    form.classList.remove("no-js");

})();

