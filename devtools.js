// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
chrome.devtools.panels.create("DemoPanel", "toast.png", "panel.html", function(panel) {
  
  panel.onShown.addListener(function () {
    chrome.extension.sendMessage({
      action: 'script',
      content: 'inserted-script.js',
      tabId: chrome.devtools.inspectedWindow.tabId
    });
  });

});