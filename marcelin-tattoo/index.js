const btn = document.getElementById("btn-ver-mais");
function verMais() {
  const aparecer = document.getElementById("trabalhos-p2");
  aparecer.classList.toggle("visivel");
}
btn.addEventListener("click", verMais);
//
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
const galeria = document.getElementById("galeria");
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
galeria.addEventListener("click", toggleMenu);
//
const endereco = document.getElementById("endereco");
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
endereco.addEventListener("click", toggleMenu);
//
