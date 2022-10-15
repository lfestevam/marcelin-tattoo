//menu-mobile
const btnMobile = document.getElementById("btn-mobile");
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
btnMobile.addEventListener("click", toggleMenu);
//
const sobre = document.getElementById("sobreout");
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
sobre.addEventListener("click", toggleMenu);
//
const trabalhos = document.getElementById("trabalho");
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
trabalhos.addEventListener("click", toggleMenu);
//
const endereco = document.getElementById("endereco");
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
endereco.addEventListener("click", toggleMenu);
//
//galeria trabalhos
const galeria = document.querySelectorAll("#trabalhos-galeria li img");

function trocarImagem(event) {
  const principal = document.querySelector(".img-principal img");
  const img = event.currentTarget;
  const src = img.src;
  principal.setAttribute("src", src);
}

function imagens(itens) {
  itens.addEventListener("click", trocarImagem);
}
galeria.forEach(imagens);
