;(function(){
    const btnAjuda = $("#btnAjuda")

    btnAjuda.removeClass("no-js")

    btnAjuda.click(function(){
        const xhr = new XMLHttpRequest()
        xhr.open("GET", "https://ceep.herokuapp.com/cartoes/instrucoes");
        xhr.responseType = "json";
        xhr.send();
        xhr.addEventListener("load", function(){
            const objeto = xhr.response;
            const ajudas = objeto.instrucoes;
            var statusError = xhr.status;
            if (statusError == "error") {
                console.log("não deu");
            } else {
                ajudas.forEach(function(ajuda){
                    criaCartao(ajuda)
                })
            }
        });
    })
})();