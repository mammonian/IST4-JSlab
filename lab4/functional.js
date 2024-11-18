const startButton = document.getElementById('sttart');
if (startButton) {
    startButton.addEventListener('click', function () {
        const difficulty = document.getElementById('difficulty').value;
        const bug = document.getElementById('bugs').value;
        
        if (!difficulty || !bug) {
            alert('Please choose both difficulty and bug!');
            return;
        }

        // Зберігаємо налаштування в localStorage
        localStorage.setItem('difficulty', difficulty);
        localStorage.setItem('bug', bug);
        
        // Перехід на сторінку гри
        window.location.href = 'game.html';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let score = 0;
    let timeLeft = 0;
    let timer = null;
    let bugElement = null;
    let isGameOver = false;

    // Отримуємо налаштування з localStorage
    const difficulty = localStorage.getItem('difficulty');
    const bugType = localStorage.getItem('bug');

    // Перевірка на відсутність налаштувань
    if (!difficulty || !bugType) {
        console.error('Difficulty or bug type is not set!');
        window.location.href = 'index.html'; // Перехід назад на головну
        return;
    }

    // Встановлюємо час в залежності від складності
    const timeLimits = {
        easy: 5,
        medium: 3,
        hard: 2
    };

    // Встановлення часу
    timeLeft = timeLimits[difficulty] || 5;

    // Отримуємо елементи на сторінці
    const scoreDisplay = document.getElementById('hitCount');
    const timerDisplay = document.getElementById('timeLeft');
    const messageDisplay = document.getElementById('messageDisplay');
    const restartBtn = document.getElementById('restartBtn');

    // Перевірка на наявність кнопки перезапуску
    if (restartBtn) {
        restartBtn.addEventListener('click', function() {
            localStorage.clear();
            window.location.href = 'index.html'; // Перехід на головну
        });
    } else {
        console.error('Restart button not found!');
    }

    // Старт гри
    function startGame() {
        score = 0;
        updateScore();
        updateTimerDisplay();
        startTimer();
        createBug(bugType);
    }

    // Старт таймера
    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                gameOver();
            }
        }, 1000);
    }

    // Оновлення таймера
    function updateTimerDisplay() {
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;
    }

    // Оновлення лічильника балів
    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}`;
    }

    // Створення квадратика з кольором в залежності від вибраної істоти
    function createBug(bugType) {
        if (bugElement) {
            bugElement.remove(); // Видаляємо попереднього жучка
        }

        // Встановлення кольору залежно від вибраної істоти
        let color;
        switch (bugType) {
            case 'butterfly':
                color = 'lightblue'; // Колір метелика
                break;
            case 'bee':
                color = 'yellow'; // Колір бджоли
                break;
            case 'ladybug':
                color = 'red'; // Колір божої корівки
                break;
            default:
                color = 'gray'; // Якщо тип не знайдений, ставимо сірий
        }

        // Встановлення розміру квадратика залежно від складності
        let size;
        switch (difficulty) {
            case 'easy':
                size = 100; // Великий квадратик для легкого рівня
                break;
            case 'medium':
                size = 75; // Середній квадратик для середнього рівня
                break;
            case 'hard':
                size = 50; // Маленький квадратик для складного рівня
                break;
            default:
                size = 100; // Дефолтний розмір
        }

        bugElement = document.createElement('div');
        bugElement.classList.add('bug');
        bugElement.style.backgroundColor = color;
        bugElement.style.width = `${size}px`;
        bugElement.style.height = `${size}px`;
        bugElement.style.position = 'absolute';
        bugElement.style.borderRadius = '10px'; // Округлені кути для квадратика

        bugElement.addEventListener('click', function() {
            if (!isGameOver) {
                score++;
                updateScore();
                timeLeft = timeLimits[difficulty]; // Оновлюємо час
                moveBug();
            }
        });

        moveBug();
        document.getElementById('bugContainer').appendChild(bugElement);
    }

    // Переміщення квадратика
    function moveBug() {
        const x = Math.random() * (window.innerWidth - 100); // Містить зміщення по ширині
        const y = Math.random() * (window.innerHeight - 100); // Містить зміщення по висоті
        bugElement.style.left = `${x}px`;
        bugElement.style.top = `${y}px`;
    }

    // Завершення гри
    function gameOver() {
        clearInterval(timer);
        isGameOver = true;
        messageDisplay.textContent = `Game Over! Your score: ${score}`;
        messageDisplay.style.color = 'red';
        restartBtn.style.display = 'block'; // Кнопка для перезапуску гри
    }

    // Запуск гри
    startGame();
});