document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. GESTIÓN DE PANELES Y TABS (MÓDULOS)
  // ==========================================
  const solutionButtons = document.querySelectorAll('.solution-btn');
  const solutionPanels = document.querySelectorAll('.solution-panel');
  const dropdownLinks = document.querySelectorAll('.dropdown-item.solution-link');

  // Función reutilizable para activar un módulo específico
  function activateModule(targetId) {
    // Desactivar todos los botones laterales y paneles
    solutionButtons.forEach(btn => btn.classList.remove('active'));
    solutionPanels.forEach(panel => panel.classList.remove('active'));

    // Activar el botón lateral correspondiente
    const targetBtn = document.querySelector(`.solution-btn[data-target="${targetId}"]`);
    if (targetBtn) {
      targetBtn.classList.add('active');
    }

    // Activar el panel objetivo
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  }

  // Listener para botones laterales de módulos
  solutionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      activateModule(targetId);
    });
  });


  // ==========================================
  // 2. MENÚ DESPLEGABLE DE MÓDULOS (HEADER)
  // ==========================================
  const modulosBtn = document.getElementById('modulosDropdownBtn');
  const modulosContent = document.getElementById('modulosDropdownContent');

  if (modulosBtn && modulosContent) {
    // Abrir / Cerrar al hacer clic en el botón
    modulosBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = modulosContent.style.display === 'block';
      modulosContent.style.display = isVisible ? 'none' : 'block';
    });

    // Cerrar el menú desplegable al hacer clic fuera
    document.addEventListener('click', () => {
      modulosContent.style.display = 'none';
    });

    // Cambiar de tab y cerrar menú al hacer clic en una opción del desplegable
    dropdownLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('data-target');
        activateModule(targetId);
        modulosContent.style.display = 'none';
      });
    });
  }


  // ==========================================
  // 3. MENÚ HAMBURGUESA RESPONSIVE (MÓVILES)
  // ==========================================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en cualquier enlace de navegación
    document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }


  // ==========================================
  // 4. ENVÍO DEL FORMULARIO DE CONTACTO
  // ==========================================
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      
      alert(`¡Gracias, ${name}! Hemos recibido tus datos. El equipo de Kore Automations se pondrá en contacto contigo a la brevedad.`);
      
      contactForm.reset();
    });
  }

  // LÓGICA DE SUBMÓDULOS E INTERACTIVIDAD DE VIDEO
document.addEventListener('DOMContentLoaded', () => {
  const submoduleCards = document.querySelectorAll('.submodule-card');
  const mainVideo = document.getElementById('mainDesktopVideo');
  const videoSource = document.getElementById('desktopVideoSource');
  const videoTitle = document.getElementById('desktopVideoTitle');
  const videoDesc = document.getElementById('desktopVideoDesc');

  submoduleCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remover activo de otros submódulos
      submoduleCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Actualizar reproductor en PC
      const newVideo = card.getAttribute('data-video');
      const newTitle = card.getAttribute('data-title');
      const newDesc = card.getAttribute('data-desc');

      if (mainVideo && videoSource) {
        videoSource.src = newVideo;
        videoTitle.textContent = newTitle;
        videoDesc.textContent = newDesc;
        mainVideo.load();
      }
    });
  });
});

// FUNCIONES PARA VENTANA FLOTANTE EN MÓVIL (MODAL)
function openVideoModal(videoSrc, title) {
  const modal = document.getElementById('videoModal');
  const modalPlayer = document.getElementById('modalVideoPlayer');
  const modalSource = document.getElementById('modalVideoSource');
  const modalTitle = document.getElementById('modalVideoTitle');

  if (modal && modalPlayer) {
    modalSource.src = videoSrc;
    modalTitle.textContent = title;
    modalPlayer.load();
    modal.style.display = 'flex';
  }
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const modalPlayer = document.getElementById('modalVideoPlayer');
  if (modal) {
    modal.style.display = 'none';
    if (modalPlayer) modalPlayer.pause();
  }
}

document.getElementById('closeModalBtn')?.addEventListener('click', closeVideoModal);

});