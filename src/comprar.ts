const divDeLista = document.getElementById("listaDeProductos");

const lista = document.createElement("ul");
divDeLista?.appendChild(lista);
let arregloDeProductos: string[] = new Array(2);

arregloDeProductos[0] = "Aceite";
arregloDeProductos[1] = "Harina";

arregloDeProductos.forEach((item) => {
  const items = document.createElement("li");
  const inputDeProductos = document.createElement("input");

  function contarCantidad() {
    let cantidad: any;
    cantidad = inputDeProductos.value;
    console.log(cantidad);
  }
  const botonDeProductos = document.createElement("button");
  botonDeProductos.classList.add("botones");
  let btns = document.querySelectorAll("botones");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("submit", contarCantidad);
    let etiquetas = document.createElement("label");
    etiquetas.textContent = "Comprar";
    btns = document.querySelectorAll("botones");
    btns.forEach((item) => {
      let agregaretiqueta: any;
      agregaretiqueta = item;
      agregaretiqueta.appendChild("etiquetas");
    });
  }

  items.textContent = item;
  lista.appendChild(items);
  items.appendChild(inputDeProductos);
  items.appendChild(botonDeProductos);
  console.log(items);
});
console.log(divDeLista);

console.log(lista);
