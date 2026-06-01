// ===============================
// AGRO FORTE - FUTURO SUSTENTÁVEL
// script.js
// ===============================

// Mensagem inicial
console.log("Site Agro Forte carregado com sucesso!");

// ===============================
// EFEITO DE DIGITAÇÃO NO TÍTULO
// ===============================

const titulo = document.querySelector("header h1");

const texto =
  "Agro Forte, Futuro Sustentável";

let index = 0;

function escreverTexto() {
  if (index < texto.length) {
    titulo.innerHTML += texto.charAt(index);
    index++;
    setTimeout(escreverTexto, 90);
  }
}

// Limpa o texto antes de iniciar
if (titulo) {
  titulo.innerHTML = "";
  escreverTexto();
}

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const botaoTopo = document.createElement("button");

botaoTopo.innerText = "↑";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "15px 20px";
botaoTopo.style.fontSize = "22px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.background = "#9be15d";
botaoTopo.style.color = "#111";
botaoTopo.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "999";

// Mostrar botão ao rolar

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }

});

// Voltar ao topo

botaoTopo.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// ===============================
// ANIMAÇÃO NOS CARDS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.8s ease";

  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 300 * i);

});

// ===============================
// EFEITO HOVER NAS IMAGENS
// ===============================

const imagens = document.querySelectorAll(".card img");

imagens.forEach((img) => {

  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "0.5s";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });

});

// ===============================
// FRASES MOTIVACIONAIS DO AGRO
// ===============================

const frases = [
  "Produzir alimentos também é cuidar do planeta.",
  "Sustentabilidade é o caminho do futuro.",
  "O agro move o mundo com responsabilidade.",
  "Tecnologia e natureza podem caminhar juntas.",
  "Preservar hoje é garantir o amanhã."
];

const fraseElemento = document.createElement("div");

document.body.appendChild(fraseElemento);

fraseElemento.style.position = "fixed";
fraseElemento.style.left = "20px";
fraseElemento.style.bottom = "20px";
fraseElemento.style.background = "rgba(0,0,0,0.7)";
fraseElemento.style.color = "#9be15d";
fraseElemento.style.padding = "15px";
fraseElemento.style.borderRadius = "10px";
fraseElemento.style.fontSize = "14px";
fraseElemento.style.maxWidth = "250px";
fraseElemento.style.zIndex = "999";

let fraseAtual = 0;

function trocarFrase() {

  fraseElemento.innerHTML = frases[fraseAtual];

  fraseAtual++;

  if (fraseAtual >= frases.length) {
    fraseAtual = 0;
  }

}

trocarFrase();

setInterval(trocarFrase, 4000);

// ===============================
// DATA AUTOMÁTICA NO FOOTER
// ===============================

const footer = document.querySelector("footer");

const data = new Date();

const ano = data.getFullYear();

if (footer) {

  const textoData = document.createElement("p");

  textoData.innerHTML =
    "Atualizado em " +
    data.toLocaleDateString("pt-BR") +
    " © " +
    ano;

  textoData.style.marginTop = "10px";

  footer.appendChild(textoData);
}

// ===============================
// ALERTA DE BOAS-VINDAS
// ===============================

setTimeout(() => {

  alert(
    "Bem-vindo ao site Agro Forte 🌱\nJuntos por um futuro sustentável!"
  );

}, 1500);

// ===============================
// FIM DO SCRIPT
// ===============================

