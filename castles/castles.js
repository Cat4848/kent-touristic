window.onload = function() {
    var image = document.getElementById("carouselImage");

    setInterval(()=> {
         
        image.src = "c" + number() + ".jpg";
            
        
    }, 2000);
};

function makeCount() {
    var counter = 0;

    return function inner() {

    if (counter > 1) {
        counter = 0;
        return counter;
    } else{ 

        counter++;
        return counter;
    }

    }
}

var number = makeCount();

function initOverBookButton() {
    var bookButton = document.getElementsByTagName("input");
    for (let i = 0; i < bookButton.length; i++) {
        bookButton[i].onmouseenter = addStyle;     
    }
}

function initOutBookButton() {
    var bookButton = document.getElementsByTagName("input");
    for (let i = 0; i < bookButton.length; i++) {
        bookButton[i].onmouseleave = removeStyle;     
    }
}

function addStyle(x) {
    var event = x.target;
    event.style.padding = "25px";
}

function removeStyle(x) {
    var event = x.target;
    event.style.padding = "20px";
}





