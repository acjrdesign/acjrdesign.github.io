const btns = document.querySelectorAll(".opcoesDoCartao-remove");

(function(){
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
            btns[i] = document.querySelector(".opcoesDoCartao-remove");
            const card = btns[i].parentNode.parentNode;
            card.classList.add("remove-card");
            card.addEventListener("transitionend", function(){
                card.remove();
            })
        })
    }
})();
