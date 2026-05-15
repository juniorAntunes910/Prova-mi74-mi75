let temaBtn = document.getElementById("mudar-tema");
let temaAtual = "claro";
let body = document.body;
let iconContainer = document.getElementById("container-icone");
let headers = document.getElementsByClassName("nav-desktop");
let camposForm = document.querySelectorAll("input, select, textarea");
let option = document.querySelectorAll("option");

let cards = document.getElementsByClassName("card-content-box");
let cardBtns = document.getElementsByClassName("content-infos-btn");
let cardLinks = document.querySelectorAll(".content-infos-btn a");

let infoCurso = document.getElementById("info-curso");
let btnInscrever = document.getElementById("inscrever");
let btnSolicitar = document.getElementById("solicitar");
let voltarTexto = document.querySelector("#voltar p");

const svgSol = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F9F9F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const svgLua = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>`;

temaBtn.onclick = function () {
  if (temaAtual === "claro") {
    temaAtual = "escuro";
    body.style.backgroundColor = "#1E1E1E";
    body.style.color = "#F9F9F9";
    iconContainer.innerHTML = svgSol;

    if (infoCurso) infoCurso.style.backgroundColor = "#2C2C2C";
    if (btnInscrever) btnInscrever.style.backgroundColor = "#4DA6FF";
    if (voltarTexto) voltarTexto.style.color = "#F9F9F9";

    for (let opt of option) opt.style.color = "#F9F9F9";
    for (let header of headers) header.style.color = "#F9F9F9";
    for (let campo of camposForm) {
      campo.style.backgroundColor = "#2C2C2C";
      campo.style.color = "#F9F9F9";
    }
    for (let card of cards) {
      card.style.backgroundColor = "#2C2C2C";
      card.style.color = "#F9F9F9";
    }
  } else {
    temaAtual = "claro";
    body.style.backgroundColor = "white";
    body.style.color = "#1E1E1E";
    iconContainer.innerHTML = svgLua;

    if (infoCurso) infoCurso.style.backgroundColor = "#FFFFFF";
    if (btnInscrever) btnInscrever.style.backgroundColor = "#0077CC";
    if (btnSolicitar) btnSolicitar.style.backgroundColor = "#2C2C2C"
    if (btnSolicitar) btnSolicitar.style.color = "#F9F9F9";
    if (btnSolicitar) btnSolicitar.style.border = "1px solid #444444";
    if (voltarTexto) voltarTexto.style.color = "#1E1E1E";

    for (let opt of option) opt.style.color = "#1E1E1E";
    for (let header of headers) header.style.color = "#1E1E1E";
    for (let campo of camposForm) {
      campo.style.backgroundColor = "white";
      campo.style.color = "#1E1E1E";
    }
    for (let card of cards) {
      card.style.backgroundColor = "#FFFFFF";
      card.style.color = "#1E1E1E";
    }
  }
};

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let cpf = document.getElementById("cpf");
let curso = document.getElementById("curso");
let cep = document.getElementById("cep");
let rua = document.getElementById("rua");
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("estado");

function customError(input, message) {
  if (!input) return;
  input.oninvalid = () => input.setCustomValidity(message);
  input.oninput = () => input.setCustomValidity("");
}

customError(nome, "Nome deve conter ao menos um caracter");
customError(email, "Email invalido por favor digite novamente!");
customError(cpf, "CPF Invalido por favor digite novamente");
customError(curso, "Por favor selecione um curso");
customError(rua, "Por favor insira uma Rua valida");
customError(bairro, "Por favor insira um Bairro valido");
customError(cidade, "Por favor insira uma cidade valida");
customError(estado, "Por favor insira um estado valido");

if (telefone) {
  telefone.oninput = function () {
    this.setCustomValidity("");
    if (this.value.length != 9) this.setCustomValidity("Telefone deve ter 9 digitos");
  };
}

if (cpf) {
  cpf.oninput = function () {
    this.setCustomValidity("");
    if (this.value.length != 11) this.setCustomValidity("CPF deve ter 11 digitos");
  };
}

if (cep) {
  cep.onblur = async function () {
    this.setCustomValidity("");
    let valorCep = this.value.replace(/\D/g, "");
    if (valorCep.length === 8) {
      try {
        let response = await fetch(`https://viacep.com.br/ws/${valorCep}/json/`);
        const data = await response.json();
        if (data.erro) {
          this.setCustomValidity("CEP invalido por favor insira novamente");
          this.reportValidity();
        } else {
          if (rua) rua.value = data.logradouro;
          if (bairro) bairro.value = data.bairro;
          if (cidade) cidade.value = data.localidade;
          if (estado) estado.value = data.uf;
        }
      } catch (error) {
        this.setCustomValidity("Erro ao consultar CEP");
        this.reportValidity();
      }
    }
  };
  cep.oninput = () => cep.setCustomValidity("");
}