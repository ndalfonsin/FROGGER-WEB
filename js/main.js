const body = document.querySelector('body');
const ranitaPlopMP3 = new Audio('./../audios/Ranita_Salto.wav');


body.addEventListener('click', () => {
    ranitaPlopMP3.play();
}, false)