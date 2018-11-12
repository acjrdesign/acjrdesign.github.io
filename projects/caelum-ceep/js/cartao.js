const criaCartao = (function(){
    var contador = 0;
   
    return function ({cor, conteudo}){
        
        contador++;

        const criaCartao = $(`<article id="cartao_${contador}" class="cartao" tabindex="0" style="background-color:${cor};">
        <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
    
            <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
            <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
            </label>
    
            <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
            </label>
    
            <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
            </label>
    
            <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
            </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
        </article>`);

        criaCartao.on("focusin", function(){
            criaCartao.addClass("cartao--focado");
        });
        criaCartao.on("focusout", function(){
            criaCartao.removeClass("cartao--focado");
        });
        criaCartao.on("change", function mudaCor (event) {
            criaCartao.css("background-color", event.target.value);
        });
        criaCartao.on("keydown", ".opcoesDoCartao-opcao", function addKeyClick (event) {
            if( (event.keyCode == 13 || event.keyCode == 32) ) {
                this.click();
            }
        });
        criaCartao.on("click", ".opcoesDoCartao-remove", function removeBotao(event) {
                criaCartao.addClass("cartao--some");
                criaCartao.on("transitionend", function() {
                    criaCartao.remove();
                })
        });

        $(".mural").append(criaCartao);
       
    }

})();

$.ajax({
    url: "https://ceep.herokuapp.com/cartoes/carregar/"
    ,method: "GET"
    ,data: {usuario:"acjr@email.com"}
    ,dataType: "jsonp"
    ,success: function(json){
        const cartoes = json.cartoes;
        cartoes.forEach(function(cartao){
            criaCartao(cartao);
        })
    }
})

  