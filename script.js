document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar todas las tarjetas
  const cards = document.querySelectorAll('.card');
  
  // Agregar evento de clic a cada tarjeta
  cards.forEach(card => {
    card.addEventListener('click', function() {
      // Alternar la clase 'flipped' para activar la animación de volteo
      this.classList.toggle('flipped');
    });
  });
});