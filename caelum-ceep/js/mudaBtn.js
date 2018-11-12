var btn = document.querySelector("#btnMudaLayout");
const mural = document.querySelector(".mural");

function changeBtnContent() {
    if (btn.textContent == "Linhas") {
        btn.textContent = "Blocos";
    } else {
        btn.textContent = "Linhas";
    }
}

function changeViewMode() {
    mural.classList.toggle("mural--linha");
}

btn.addEventListener("click", changeBtnContent);
btn.addEventListener("click", changeViewMode);

btn.classList.remove("no-js");