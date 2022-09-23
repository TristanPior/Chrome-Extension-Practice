console.log("core.js is running");

chrome.runtime.onMessage.addListener(gotMessage);
document.addEventListener('mouseover', underline, false);

var prev = null;
var checkBox = false;

function gotMessage(message, sender, sendRespone) {
    checkBox = message;
}

function underline(e) {
    console.log(checkBox);
    if(checkBox) {

        var srcelm = e.srcElement;

        if(prev != null) {
            prev.classList.remove('underline');
        }
        srcelm.classList.add('underline');
        prev = srcelm;
    }
}