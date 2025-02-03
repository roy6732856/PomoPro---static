const translations = {
    'zh-TW': {
        subtitle: '簡單有效的時間管理工具',
        whatIsPomodoro: '什麼是番茄鐘工作法？',
        pomodoroExplanation: `番茄鐘工作法是一種時間管理方法，其步驟為：
            <ol class="text-start">
                <li>選擇一個待完成的任務</li>
                <li>設定 25 分鐘的計時器</li>
                <li>專注工作直到時間結束</li>
                <li>短暫休息 5 分鐘</li>
                <li>每完成四個番茄鐘循環，進行一次較長的休息（15-30 分鐘）</li>
            </ol>`,
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
        soundToggle: '音效開關',
        pomodoroTitle: '番茄鐘工作法',
        pomodoroDesc: '這是一種簡單有效的時間管理方法，通過固定的工作和休息循環來提高專注力和工作效率。',
        step1: '選擇一個待完成的任務',
        step2: '設定專注時間',
        step3: '專注工作到時間結束',
        step4: '享受短暫的休息時間',
        step5: '重複循環，每四次後進行長休息',
        timeSettings: '時間設定',
        workTime: '工作時間',
        shortBreak: '短休息',
        longBreak: '長休息',
        timeUnit: {
            minute: '分鐘',
            minutes: '分鐘'
        }
    },
    'en': {
        subtitle: 'Simple and Effective Time Management Tool',
        whatIsPomodoro: 'What is the Pomodoro Technique?',
        pomodoroExplanation: `The Pomodoro Technique is a time management method that follows these steps:
            <ol class="text-start">
                <li>Choose a task to complete</li>
                <li>Set a 25-minute timer</li>
                <li>Work focused until the timer rings</li>
                <li>Take a short 5-minute break</li>
                <li>After four pomodoros, take a longer break (15-30 minutes)</li>
            </ol>`,
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
        soundToggle: 'Sound Toggle',
        pomodoroTitle: 'Pomodoro Technique',
        pomodoroDesc: 'A simple and effective time management method that uses fixed work and break cycles to improve focus and productivity.',
        step1: 'Choose a task to complete',
        step2: 'Set focus time',
        step3: 'Work until time is up',
        step4: 'Take a short break',
        step5: 'Repeat cycle, take long break after four rounds',
        timeSettings: 'Time Settings',
        workTime: 'Work Time',
        shortBreak: 'Short Break',
        longBreak: 'Long Break',
        timeUnit: {
            minute: 'minute',
            minutes: 'minutes'
        }
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
    
    // 更新統計顯示
    updateStatisticsDisplay();
    
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