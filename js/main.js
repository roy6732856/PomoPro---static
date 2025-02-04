let timer;
let totalFocusTime = 0;

$(document).ready(() => {
    // 先載入時間設定
    loadTimeSettings();
    // 再初始化計時器
    timer = new Timer();
    
    $('#start-btn').click(() => {
        timer.start();
        $('#start-btn').prop('disabled', true);
        $('#pause-btn').prop('disabled', false);
        playSound('start');
    });

    $('#pause-btn').click(() => {
        timer.pause();
        $('#start-btn').prop('disabled', false);
        $('#pause-btn').prop('disabled', true);
        playSound('pause');
    });

    $('#reset-btn').click(() => {
        timer.reset();
        $('#start-btn').prop('disabled', false);
        $('#pause-btn').prop('disabled', true);
    });

    // 最後載入統計資料
    loadStatistics();
});

function updateDisplay() {
    $('#minutes').text(String(timer.minutes).padStart(2, '0'));
    $('#seconds').text(String(timer.seconds).padStart(2, '0'));
}

function updateFocusTimeDisplay() {
    $('#focus-time').text(totalFocusTime + ' 分鐘');
}

function updateStatus(text) {
    $('#status-text').text(text);
} 