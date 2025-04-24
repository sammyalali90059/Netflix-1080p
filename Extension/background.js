// Define the rule to modify User-Agent
const userAgentRule = {
  id: 1,
  priority: 1,
  action: {
    type: "modifyHeaders",
    requestHeaders: [
      {
        header: "User-Agent",
        operation: "set",
        value: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 OPR/117.0.0.0"
      }
    ]
  },
  condition: {
    urlFilter: "*",
    resourceTypes: ["main_frame"]
  }
};

// Load saved state on startup
chrome.storage.local.get("enabled", ({ enabled }) => {
  if (enabled) {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [userAgentRule],
      removeRuleIds: [userAgentRule.id]
    });
  }
});

// Listen for toggle events
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggle") {
    chrome.storage.local.get("enabled", ({ enabled }) => {
      const newEnabled = !enabled;
      chrome.storage.local.set({ enabled: newEnabled });
      
      if (newEnabled) {
        chrome.declarativeNetRequest.updateDynamicRules({
          addRules: [userAgentRule],
          removeRuleIds: [userAgentRule.id]
        });
      } else {
        chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: [userAgentRule.id]
        });
      }
      sendResponse({ success: true });
    });
    return true; // Required for async response
  }
});
