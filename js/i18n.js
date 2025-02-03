const translations = {
    'zh-TW': {
        subtitle: '簡單有效的時間管理工具',
        start: '開始',
        pause: '暫停',
        reset: '重置',
        ready: '準備開始',
        focusing: '專注中...',
        paused: '已暫停',
        completed: '時間到！',
        statistics: '今日統計',
        completedCount: '完成次數',
        focusTime: '專注時間',
        settings: '設定',
        soundToggle: '音效開關'
    },
    'en': {
        subtitle: 'Simple and Effective Time Management Tool',
        start: 'Start',
        pause: 'Pause',
        reset: 'Reset',
        ready: 'Ready',
        focusing: 'Focusing...',
        paused: 'Paused',
        completed: 'Time\'s up!',
        statistics: 'Today\'s Statistics',
        completedCount: 'Completed',
        focusTime: 'Focus Time',
        settings: 'Settings',
        soundToggle: 'Sound Toggle'
    }
};

let currentLang = 'zh-TW';

function updateLanguage(lang) {
    currentLang = lang;
    // 更新語言按鈕文字
    $('#languageDropdown').text(lang === 'zh-TW' ? '繁體中文' : 'English');
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
    
    // 更新按鈕文字
    $('#start-btn').text(translations[lang].start);
    $('#pause-btn').text(translations[lang].pause);
    $('#reset-btn').text(translations[lang].reset);
    
    // 更新狀態文字
    $('#status-text').text(translations[lang].ready);
    
    // 更新其他文字
    $('h3').first().text(translations[lang].statistics);
    $('.stat-card h4').first().text(translations[lang].completedCount);
    $('.stat-card h4').last().text(translations[lang].focusTime);
    $('.settings h3').text(translations[lang].settings);
    $('.form-check-label').text(translations[lang].soundToggle);
    
    // 儲存語言偏好
    localStorage.setItem('preferred_language', lang);
}

$(document).ready(() => {
    // 載入儲存的語言偏好
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang) {
        updateLanguage(savedLang);
    }
    
    // 語言切換事件監聽
    $('.dropdown-item').click(function(e) {
        e.preventDefault();
        const lang = $(this).data('lang');
        updateLanguage(lang);
    });
}); 