const body = document.querySelector('body');
const ranitaPlopMP3 = new Audio('./../audios/Ranita_Salto.wav');
// const scratchImage = $('#scratch-img'); 

// setInterval(() =>{
//     if(scratchImage.css('left') == '90%') {
//         scratchImage.css('animation', 'turn 0.1s linear;')
//     }
// }, 10)



body.addEventListener('click', () => {
    ranitaPlopMP3.play();
}, false)

