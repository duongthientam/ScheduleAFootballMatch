function myFunction() {
    var x = document.getElementById("myTopnav");
    //


    // 
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    //
    /*window.addEventListener('click', function(event) {
        var box = document.getElementById('menu');
        if (event.target != box && event.target.parentNode != box) {
            box.className = "topnav";
        }
    });*/
}

// function hideOnClickOutside() {
var element = document.getElementById('myTopnav');
const outsideClickListener = event => {
    if (!element.contains(event.target)) { // or use: event.target.closest(selector) === null
        if (isVisible(element)) {
            element.className = "topnav";
            // removeClickListener()
        }
    }
}
const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
}
document.addEventListener('click', outsideClickListener);
const isVisible = elem => !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
// }