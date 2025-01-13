let zIndexCounter = 1;

function toggleStartMenu() {
  const menu = document.getElementById('start-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function openWindow(id) {
  const window = document.getElementById(id);
  window.style.display = 'block';
  window.style.zIndex = ++zIndexCounter;
}

function closeWindow(id) {
  const window = document.getElementById(id);
  window.style.display = 'none';
}

function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
}
  
function minimizeWindow(id) {
  const window = document.getElementById(id);
  window.style.display = 'none';
}

// Dragging functionality
document.querySelectorAll('.window').forEach((win) => {
  const titleBar = win.querySelector('.title-bar');
  let offsetX = 0, offsetY = 0;

  titleBar.onmousedown = (e) => {
    win.style.zIndex = ++zIndexCounter;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
    document.onmousemove = (event) => {
      win.style.left = `${event.clientX - offsetX}px`;
      win.style.top = `${event.clientY - offsetY}px`;
    };
  };

  document.onmouseup = () => {
    document.onmousemove = null;
  };
});

// Funktion zum Öffnen eines Bildes in voller Größe
function viewImage(imageSrc) {
    const viewer = document.createElement('div');
    viewer.id = 'full-image-viewer';
    
    const img = document.createElement('img');
    img.src = imageSrc;
  
    const closeButton = document.createElement('button');
    closeButton.className = 'close-btn';
    closeButton.innerHTML = 'X';
    closeButton.onclick = () => document.body.removeChild(viewer);
  
    viewer.appendChild(img);
    viewer.appendChild(closeButton);
    document.body.appendChild(viewer);
  }
  
  // Fenster minimieren (Dummy Funktion für später)
  function minimizeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
  }
  
  // Fenster schließen (Dummy Funktion für später)
  function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
  }
  
  // Funktion zum Senden einer Nachricht
function sendMessage() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    
    // Nachricht vom Input-Feld holen
    const message = chatInput.value;
    if (message.trim() === "") return; // Keine leeren Nachrichten senden
  
    // Neue Nachricht erstellen und anzeigen
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
  
    // Scrollen zum neuesten Eintrag
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // Input-Feld zurücksetzen
    chatInput.value = '';
  }
  
  // Funktion zum Minimieren des Chat-Fensters (Dummy Funktion für später)
  function minimizeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
  }
  
  // Funktion zum Schließen des Chat-Fensters (Dummy Funktion für später)
  function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
  }
  