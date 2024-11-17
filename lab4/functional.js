document.getElementById('sttart').addEventListener('click', function () {
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

let score = 0;
        let timeLeft = 0;
        let timer = null;
        let bugElement = null;
        let isGameOver = false;

        // Отримуємо налаштування з localStorage
        const difficulty = localStorage.getItem('difficulty');
        const bugType = localStorage.getItem('bug');

        // Встановлюємо час в залежності від складності
        const timeLimits = {
            easy: 5,
            medium: 3,
            hard: 2
        };

        // Задаємо таймер і старт гри
        timeLeft = timeLimits[difficulty] || 5;

        const scoreDisplay = document.getElementById('hitCount');
        const timerDisplay = document.getElementById('timeLeft');
        const messageDisplay = document.getElementById('messageDisplay');
        const restartBtn = document.getElementById('restartBtn');

        // Стартуємо гру
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

        // Створення жучка
        function createBug(bugType) {
            if (bugElement) {
                bugElement.remove(); // Видаляємо попереднього жучка
            }

            const bugImage = `photo/${bugType}_${difficulty}.png`;

            bugElement = document.createElement('div');
            bugElement.classList.add('bug');
            bugElement.style.backgroundImage = `url(${bugImage})`;

            bugElement.addEventListener('click', function () {
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

        // Переміщення жучка
        function moveBug() {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
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

        // Перезапуск гри
        restartBtn.addEventListener('click', function () {
            localStorage.clear(); // Очищаємо налаштування
            window.location.href = 'index.html'; // Повернення на головну сторінку
        });