document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. MÓDULO INTERACTIVO DE SOLUCIONES (TABS)
  // ==========================================
  const solutionButtons = document.querySelectorAll('.solution-btn');
  const solutionPanels = document.querySelectorAll('.solution-panel');

  solutionButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remover clase 'active' de todos los botones
      solutionButtons.forEach(btn => btn.classList.remove('active'));
      
      // Remover clase 'active' de todos los paneles
      solutionPanels.forEach(panel => panel.classList.remove('active'));

      // Activar el botón presionado
      button.classList.add('active');

      // Obtener el ID del panel objetivo y activarlo
      const targetId = button.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // ==========================================
  // 2. MENÚ DESPLEGABLE EN DISPOSITIVOS MÓVILES
  // ==========================================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en cualquier enlace
    document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 3. ENVÍO DEL FORMULARIO DE CONTACTO
  // ==========================================
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      
      // Mensaje de confirmación temporal
      alert(`¡Gracias, ${name}! Hemos recibido tus datos. El equipo de Kore Automations se pondrá en contacto contigo a la brevedad.`);
      
      contactForm.reset();
    });
  }

});