const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");//Se establece una variable y se le asigna el objeto con su correspondiente id de el html, en este caso el input "range" del color azul

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");//Se establece una variable y se le asigna el objeto con su correspondiente id de el html, en este caso el texto que mostrará el valor del input "range"

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;//Se establece una variable para almacenar el valor del input "range"

textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;//Se establece el valor de la variable almacenada del input "range" en el texto para mostrar en la página html

function actualizarColor(rojo, verde, azul) {//funcion que tiene como entrada los 3 valores de color para establecerlos en el fondo
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;//Se crea una variable tipo string con los valores recibidos de la funcion para ser interpretados como tipo rgb()"
  document.body.style.backgroundColor = colorRGB;//Se establece el color del cuerpo de la página html, usando a la funcion de backgroundColor y que recibe como entrada el color creado en string anteriormente
}

// Para actualizar Red (Rojo).

inputRojo.addEventListener("change", (e) => {//Se añade un escuchador de eventos al input "range" para detectar cuando se han realizado cambios
 
  rojo = e.target.value;//obtiene el valor del input al ser detectado
  textoRojo.textContent = rojo; //Se establece el valor de la variable almacenada del input "range" en el texto para mostrar en la página html
  actualizarColor(rojo, verde, azul); //llama la función anterior para actualizar el color nuevamente
});

// Para actualizar Green (Verde).
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul).
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});