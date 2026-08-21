document.addEventListener('DOMContentLoaded', () => {
  // 1. CAMBIO DE MÓDULOS PRINCIPALES (PESTAÑAS SUPERIORES)
  const mainTabs = document.querySelectorAll('.main-tab-btn');
  const modulePanels = document.querySelectorAll('.module-content-panel');

  mainTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetModule = tab.getAttribute('data-module');

      // Remover activo de las pestañas principales
      mainTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Ocultar todos los paneles y mostrar el seleccionado
      modulePanels.forEach(panel => {
        if (panel.id === targetModule) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // 2. CAMBIO DE SUBMÓDULOS Y VIDEOS EN PC
  modulePanels.forEach(panel => {
    const submoduleCards = panel.querySelectorAll('.submodule-card');
    const mainVideo = panel.querySelector('.mainDesktopVideo');
    const videoSource = panel.querySelector('.desktopVideoSource');
    const videoTitle = panel.querySelector('.desktopVideoTitle');
    const videoDesc = panel.querySelector('.desktopVideoDesc');

    submoduleCards.forEach(card => {
      card.addEventListener('click', () => {
        submoduleCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const newVideo = card.getAttribute('data-video');
        const newTitle = card.getAttribute('data-title');
        const newDesc = card.getAttribute('data-desc');

        if (mainVideo && videoSource) {
          videoSource.src = newVideo;
          if (videoTitle) videoTitle.textContent = newTitle;
          if (videoDesc) videoDesc.textContent = newDesc;
          mainVideo.load();
        }
      });
    });
  });
});

// 3. FUNCIONALIDAD DEL MODAL DE VIDEO EN MÓVIL
function openVideoModal(videoSrc, title) {
  const modal = document.getElementById('videoModal');
  const modalPlayer = document.getElementById('modalVideoPlayer');
  const modalSource = document.getElementById('modalVideoSource');
  const modalTitle = document.getElementById('modalVideoTitle');

  if (modal && modalPlayer) {
    modalSource.src = videoSrc;
    if (modalTitle) modalTitle.textContent = title;
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