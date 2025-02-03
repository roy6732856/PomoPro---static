// 音效控制
const sounds = {
    start: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3'),
    pause: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3'),
    complete: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3')
};

function playSound(soundName) {
    const soundEnabled = $('#sound-toggle').prop('checked');
    if (soundEnabled && sounds[soundName]) {
        sounds[soundName].play().catch(error => {
            console.log('音效播放失敗:', error);
        });
    }
}

// 時間格式化
function formatTime(minutes) {
    if (currentLang === 'en') {
        return minutes === 1 ? '1 minute' : `${minutes} minutes`;
    } else {
        return `${minutes} 分鐘`;
    }
}

// 日期處理
function getTodayKey() {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

// 時間調整功能
function adjustTime(type, change) {
    const inputs = {
        'work': '#workTime',
        'short': '#shortBreak',
        'long': '#longBreak'
    };
    
    const input = $(inputs[type]);
    const currentValue = parseInt(input.val());
    const min = parseInt(input.attr('min'));
    const max = parseInt(input.attr('max'));
    const newValue = currentValue + change;
    
    if (newValue >= min && newValue <= max) {
        input.val(newValue);
        saveTimeSettings();
        // 如果計時器沒有運行，更新顯示的時間
        if (!timer.isRunning) {
            if ((type === 'work' && !timer.isBreak) ||
                (type === 'short' && timer.isBreak && timer.pomodoroCount % 4 !== 0) ||
                (type === 'long' && timer.isBreak && timer.pomodoroCount % 4 === 0)) {
                timer.reset();
            }
        }
    }
}

// 保存時間設定
function saveTimeSettings() {
    const settings = {
        workTime: parseInt($('#workTime').val()),
        shortBreak: parseInt($('#shortBreak').val()),
        longBreak: parseInt($('#longBreak').val())
    };
    localStorage.setItem('time_settings', JSON.stringify(settings));
}

// 載入時間設定
function loadTimeSettings() {
    const savedSettings = localStorage.getItem('time_settings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        $('#workTime').val(settings.workTime);
        $('#shortBreak').val(settings.shortBreak);
        $('#longBreak').val(settings.longBreak);
        // 載入設定後重置計時器
        if (timer && !timer.isRunning) {
            timer.reset();
        }
    }
}

// 在頁面載入時初始化設定
$(document).ready(() => {
    loadTimeSettings();
}); 