let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').innerText = '';
    document.getElementById('guess').value = '';
    document.getElementById('restart').style.display = 'none';
}

document.getElementById('submit').addEventListener('click', function() {
    const guess = Number(document.getElementById('guess').value);
    attempts++;

    if (guess === randomNumber) {
        document.getElementById('message').innerText = `¡Correcto! El número era ${randomNumber}. Lo adivinaste en ${attempts} intentos.`;
        document.getElementById('restart').style.display = 'block';
    } else if (guess < randomNumber) {
        document.getElementById('message').innerText = 'Demasiado bajo. Intenta de nuevo.';
    } else if (guess > randomNumber) {
        document.getElementById('message').innerText = 'Demasiado alto. Intenta de nuevo.';
    }
});

document.getElementById('restart').addEventListener('click', startGame);

// Inicia el juego al cargar la página
startGame();