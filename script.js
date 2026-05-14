let temaBtn = document.getElementById('mudar-tema');
let temaAtual = "claro";
let body = document.body;
let icone = temaBtn.querySelector('svg');
let card = document.getElementsByTagName('card-box');

temaBtn.onclick = function() {
    if (temaAtual === "claro") {
        temaAtual = "escuro";
        body.style.backgroundColor = "#1E1E1E";
        icone.style.stroke = "white"; 
        body.style.color = "white";

    } else {
        temaAtual = "claro";
        body.style.backgroundColor = "white";
        icone.style.stroke = "black"; 
        card.style.backgroundColor = "#2C2C2C";
        card.style.color = "white";
    }
}