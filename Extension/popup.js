// Get current state and update button
chrome.storage.local.get("enabled", ({ enabled }) => {
  const button = document.getElementById("toggleButton");
  button.textContent = enabled ? "Disable User-Agent" : "Enable User-Agent";
  
  // Toggle on click
  button.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "toggle" }, () => {
      // Update button text after toggle
      const newLabel = button.textContent.includes("Enable") 
        ? "Disable User-Agent" 
        : "Enable User-Agent";
      button.textContent = newLabel;
    });
  });
});
