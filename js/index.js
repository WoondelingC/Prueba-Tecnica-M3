const botones = document.querySelector(".button-group");
const botonCerrar = document.querySelector(".botones");

botones.addEventListener("click", () => {
  abrirModal();
});

botonCerrar.addEventListener("click", () => {
  cerrarModal();
});

const abrirModal = () => {
  document.querySelector(".seleccion").classList.add("modal");
  document.querySelector(".productos").classList.add("productosOcultos");
};

const cerrarModal = () => {
  document.querySelector(".seleccion").classList.remove("modal");

  document.querySelector(".productos").classList.remove("productosOcultos");
};
