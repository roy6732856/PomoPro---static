class Timer {
    constructor() {
        this.minutes = 25;
        this.seconds = 0;
        this.isRunning = false;
        this.timerInterval = null;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.timerInterval = setInterval(() => this.tick(), 1000);
            updateStatus('專注中...');
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.timerInterval);
            updateStatus('已暫停');
        }
    }

    reset() {
        this.isRunning = false;
        clearInterval(this.timerInterval);
        this.minutes = 25;
        this.seconds = 0;
        updateDisplay();
        updateStatus('準備開始');
    }

    tick() {
        if (this.seconds === 0) {
            if (this.minutes === 0) {
                this.complete();
                return;
            }
            this.minutes--;
            this.seconds = 59;
        } else {
            this.seconds--;
        }
        updateDisplay();
    }

    complete() {
        this.pause();
        playSound('complete');
        updateStatus('時間到！');
        incrementCompletedCount();
    }
} 