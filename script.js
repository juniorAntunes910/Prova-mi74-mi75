let temaBtn = document.getElementById('mudar-tema');
let temaAtual = "claro";
let body = document.body;

temaBtn.onclick = function(){
    if(temaAtual === "claro"){
        temaAtual = "escuro";
        body.style.background = "#1E1E1E";
    }else{
        temaAtual = "claro"
        body.style.background = "#F9F9F9";
    }
}