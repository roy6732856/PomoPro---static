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
    return `${minutes} 分鐘`;
}

// 日期處理
function getTodayKey() {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
} 