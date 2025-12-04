

// animar un elemento con id="train" desde left:0 hasta left:~400px en 2s
document.addEventListener('DOMContentLoaded', function () {
  const celula = document.getElementById('celula');
  if (!celula) return;

  const start = Date.now();
  const duration = 2000; // ms

  const timer = setInterval(function () {
    const timePassed = Date.now() - start;

    if (timePassed >= duration) {
      // mover al final y terminar
      celula.style.left = (duration / 5) + 'px';
      clearInterval(timer);
      return;
    }

    // dibujar la animación en el momento timePassed
    draw(timePassed);
  }, 20);

const boton = document.getElementById('.boton-enlace');

boton.addEventListener('click', function() {
  // Cambiar el fondo del botón a rojo
  this.style.backgroundColor = 'red';
});
