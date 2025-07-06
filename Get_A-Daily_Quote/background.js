// Ensure quotes.js exists in same directory
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs"
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function showNotification() {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icon.png",
    title: "Quote of the Day",
    message: getRandomQuote(),
    priority: 2
  });
}

function checkAndNotify() {
  const today = new Date().toDateString();

  chrome.storage.local.get("lastShown", (data) => {
    if (data.lastShown !== today) {
      showNotification();
      chrome.storage.local.set({ lastShown: today });
    }
  });
}

// Set up daily alarm
chrome.alarms.create('dailyQuote', { periodInMinutes: 1440 });
chrome.alarms.onAlarm.addListener(checkAndNotify);

// Initial check
checkAndNotify();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getQuote") {
    sendResponse({ quote: getRandomQuote() });
  }
  return true;
});