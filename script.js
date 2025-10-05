const burger = document.getElementById('burger');
const music = document.getElementById('music');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');

  if (burger.classList.contains('active')) {
    music.play();   // ▶️ почати музику
  } else {
    music.pause();  // ⏸️ зупинити
  }
});