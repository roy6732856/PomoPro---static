$(document).ready(() => {
    // 檢查儲存的主題偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
    
    // 主題切換按鈕事件
    $('#theme-toggle').click(() => {
        if ($('body').hasClass('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});

function enableDarkMode() {
    $('body').addClass('dark-mode');
    $('#theme-toggle i').removeClass('fa-moon').addClass('fa-sun');
    localStorage.setItem('theme', 'dark');
    // 更新計時器顯示顏色
    $('.timer-display').css('color', 'var(--dark-text)');
}

function disableDarkMode() {
    $('body').removeClass('dark-mode');
    $('#theme-toggle i').removeClass('fa-sun').addClass('fa-moon');
    localStorage.setItem('theme', 'light');
    // 恢復計時器顯示顏色
    $('.timer-display').css('color', 'var(--primary-color)');
} 