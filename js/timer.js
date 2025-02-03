class Timer {
    constructor() {
        this.minutes = parseInt($('#workTime').val());
        this.seconds = 0;
        this.isRunning = false;
        this.timerInterval = null;
        this.pomodoroCount = 0;
        this.isBreak = false;
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
        if (this.isBreak) {
            this.minutes = this.pomodoroCount % 4 === 0 ? 
                parseInt($('#longBreak').val()) : 
                parseInt($('#shortBreak').val());
        } else {
            this.minutes = parseInt($('#workTime').val());
        }
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
        this.pomodoroCount++;
        
        if (this.isBreak) {
            this.isBreak = false;
            this.minutes = parseInt($('#workTime').val());
            updateStatus(translations[currentLang].readyToWork);
        } else {
            this.isBreak = true;
            if (this.pomodoroCount % 4 === 0) {
                this.minutes = parseInt($('#longBreak').val());
                updateStatus(translations[currentLang].longBreak);
            } else {
                this.minutes = parseInt($('#shortBreak').val());
                updateStatus(translations[currentLang].shortBreak);
            }
        }
        
        incrementCompletedCount();
        updateDisplay();
    }
} 