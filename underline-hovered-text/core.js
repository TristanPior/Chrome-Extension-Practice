document.addEventListener('mouseover', underline, false);

var prev = null;

function underline(e) {
    var srcelm = e.srcElement;

    if(prev != null) {
        prev.classList.remove('underline');
    }
    srcelm.classList.add('underline');
    prev = srcelm;
}