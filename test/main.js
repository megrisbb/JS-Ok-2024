// script.js

// Функція для відкриття відео
function openVideo() {
    var modal = document.getElementById('video-modal');
    modal.style.display = 'block'; // Показуємо вікно з відео
    var iframe = modal.querySelector('iframe');
    iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Змінюємо src iframe на посилання на відео
}

// Отримуємо кнопку та додаємо обробник подій
var openVideoBtn = document.getElementById('openVideoBtn');
openVideoBtn.addEventListener('click', openVideo);
