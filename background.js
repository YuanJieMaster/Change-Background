chrome.runtime.onInstalled.addListener(() => {
    console.log('自定义背景插件已安装！');

    // 初始化背景设置，默认背景URL
    chrome.storage.local.get(['backgroundUrl'], (result) => {
        if (!result.backgroundUrl) {
            // chrome.storage.local.set({ backgroundUrl: 'https://s2.loli.net/2024/08/28/mdWLKCXRtbpFoNv.jpg' });
            chrome.storage.local.set({ backgroundUrl: 'https://s2.loli.net/2024/08/28/CEVIuZQnh5fSNbM.jpg' });
        }
    });
});