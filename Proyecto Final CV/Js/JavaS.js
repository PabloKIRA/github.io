//animacion de imagenes 

var imagen = document.getElementById("lenguajes");
imagen.onmousedown = animarImagen;

function animarImagen() {
  var imagen = document.getElementById("lenguajes");
  imagen.style.transform = "scale(1.2)";
  
  setTimeout(function() {
    imagen.style.transform = "scale(1)";
  }, 1000); // Demora de 1 segundo (1000 milisegundos)
}

