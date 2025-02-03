const appConfig = {
    features: {
        settings: false,        // 控制一般設定的顯示
        timeSettings: true     // 控制時間設定的顯示
    }
};

function checkFeatureFlag(featureName) {
    return appConfig.features[featureName] || false;
}

// 在頁面載入時檢查並隱藏被禁用的功能
$(document).ready(() => {
    if (!checkFeatureFlag('settings')) {
        $('.settings').hide();
    }
    
    if (!checkFeatureFlag('timeSettings')) {
        $('.time-settings').hide();
    }
}); 