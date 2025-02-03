let timer;

$(document).ready(() => {
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

    loadStatistics();
});

function updateDisplay() {
    $('#minutes').text(String(timer.minutes).padStart(2, '0'));
    $('#seconds').text(String(timer.seconds).padStart(2, '0'));
}

function updateStatus(text) {
    $('#status-text').text(text);
} 