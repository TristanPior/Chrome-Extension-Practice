console.log("popup.js running");



let checkBox = document.getElementById("toggle");
checkBox.addEventListener("click", switchToggle);


function switchToggle() {
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);
    function gotTabs(tabs) {
        // send new state to the content script
        let newState = checkBox.checked;
        chrome.tabs.sendMessage(tabs[0].id, newState);
    }
}