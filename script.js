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