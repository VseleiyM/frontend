function toggleTheme() {
    var theme = document.documentElement.getAttribute('data-bs-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
}

// Добавим обработчик события для кнопки
document.addEventListener('DOMContentLoaded', function() {
    var themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', function() {
        toggleTheme();
    });
});