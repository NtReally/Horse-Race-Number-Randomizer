const array = ['🐎', '🏇', '🐴', '🎠'];

function spawnHorse() {
    const horse = document.createElement('span');

    let randomhorse = array[Math.floor(Math.random() * array.length)];

    horse.textContent = randomhorse;
    horse.style.position = 'fixed';
    horse.style.bottom = '0px';
    horse.style.left = Math.random() * 80 + 'vw';
    horse.style.bottom = Math.random() * 40 + 'vh';
    horse.style.fontSize = '5rem';
    horse.style.transition = 'left 3s linear';
    document.body.appendChild(horse);

    setTimeout(() => {
        horse.style.left = '100vw';
    }, 100);

    setTimeout(() => {
        horse.remove();
    }, 3200);
}

setInterval(spawnHorse, 2000);

//-----------------------------------------------------------//

var numinput = document.getElementById("horseCountInput");
var startButton = document.getElementById("startRaceBtn");

numinput.addEventListener('input', function() {
    let value = parseInt(numinput.value, 10);
    let horsesdiv = document.querySelector('.horses');
    horsesdiv.innerHTML = '';

    if (isNaN(value) || value < 1) {
        value = 1;
        numinput.value = 1;
    } else if (value > 30) {
        value = 30;
        numinput.value = 30;
    }

    for (let i = 0; i < value; i++) {
        let horse = document.createElement('span');
        horse.textContent = array[Math.floor(Math.random() * array.length)];;
        horse.style.position = 'flex';
        horse.style.justifyContent = 'center';
        horse.style.fontSize = '3rem';
        horse.style.marginLeft = 'auto'; // ts doesnt work pmo so much
        horse.style.marginRight = 'auto'; // ts doesnt work pmo so much
        horsesdiv.appendChild(horse);
    }
});

