chrome.storage.local.get(['backgroundUrl'], (result) => {
    if (result.backgroundUrl) {
        document.body.style.backgroundImage = `url(${result.backgroundUrl})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    }
});