// 統計數據的本地存儲
const STORAGE_KEY = 'timefocus_stats';

// 初始化統計數據
function initDailyStats() {
    const todayKey = getTodayKey();
    const stats = getStats();
    
    if (!stats[todayKey]) {
        stats[todayKey] = {
            completedCount: 0,
            focusMinutes: 0
        };
        saveStats(stats);
    }
    
    return stats[todayKey];
}

// 獲取所有統計數據
function getStats() {
    const stats = localStorage.getItem(STORAGE_KEY);
    return stats ? JSON.parse(stats) : {};
}

// 保存統計數據
function saveStats(stats) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

// 增加完成次數
function incrementCompletedCount() {
    const todayKey = getTodayKey();
    const stats = getStats();
    
    if (!stats[todayKey]) {
        stats[todayKey] = { completedCount: 0, focusMinutes: 0 };
    }
    
    stats[todayKey].completedCount++;
    stats[todayKey].focusMinutes += 25; // 每次完成增加25分鐘
    
    saveStats(stats);
    updateStatisticsDisplay();
}

// 載入統計數據到畫面
function loadStatistics() {
    const todayStats = initDailyStats();
    updateStatisticsDisplay(todayStats);
}

// 更新統計顯示
function updateStatisticsDisplay() {
    const todayStats = getStats()[getTodayKey()];
    $('#completed-count').text(todayStats.completedCount);
    const formattedTime = formatTime(todayStats.focusMinutes);
    $('#focus-time').text(formattedTime);
} 