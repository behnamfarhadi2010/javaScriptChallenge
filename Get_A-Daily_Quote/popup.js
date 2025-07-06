document.getElementById("notifyBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "getQuote" }, (response) => {
    const quote = response?.quote || "No quote found";
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon.png",
      title: "Quote of the Day",
      message: quote,
      priority: 2
    });
  });
});