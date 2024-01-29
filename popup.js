/*
The popup.js file contains JavaScript code that controls the behavior and functionality of the popup.html UI.
*/

document.addEventListener("DOMContentLoaded", function () {
  var convertButton = document.getElementById("convertButton");

  convertButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "convert" });
    });
  });
});
