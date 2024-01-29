/*
The content.js file is responsible for injecting or modifying the content of web pages that you visit. 
It allows your extension to interact with the web page’s HTML, CSS, and JavaScript code. 
You can use content.js to add or remove elements on a webpage, modify its appearance, or interact with the page’s functionality.
*/

/**
 * Universal Credit link highlighter
 * @author Robert Koteles, Senior Web Developer
 * @description It makes the links added to the optional field of the job on https://www.universal-credit.service.gov.uk/work-search active and clickable.
 */

function urlify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, '<a href="$1">$1</a>');
}

function enableLinks() {
  console.log("enableLinksenableLinksenableLinks");
  let notes = document.querySelectorAll(".job-list__item-notes");

  notes.forEach((item) => {
    const text = item.innerHTML.replace("(", "").replace(")", "");
    item.innerHTML = urlify(text);
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "convert") {
    enableLinks();
    sendResponse({ message: "Job related links are enabled." });
  }
});
