const defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.googleadservices.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function (details) { return { cancel: true } },
    { urls: defaultFilters },
    ["blocking"]
)