//rickroll easter egg om man spelar rätt noter

var rickrollnum = 0

//lyssnar efter rätt kombination av noter
document.addEventListener('keydown', function (event) {
    if (event.key == 'g' && rickrollnum == 0) {
        rickrollnum += 1;
        return;
    } 
    else if (event.key == "h" && rickrollnum == 1) {
        rickrollnum += 1;
        return;
    }
    else if (event.key == "k" && rickrollnum == 2) {
        rickrollnum += 1;
        return;
    }
    else if (event.key == "h" && rickrollnum == 3) {
        rickrollnum += 1;
        return;
    }
    else if (event.key == "ö" && rickrollnum == 4) {
        rickrollnum += 1;
        return;
    }
    else if (event.key == "ö" && rickrollnum == 5) {
        rickrollnum += 1;
        return;
    }
    else if (event.key == "l" && rickrollnum == 6) {
        rickroll();
    }
    else {
        rickrollnum = 0
    }
});

function rickroll() {
    document.getElementById("parallax").style.backgroundImage = "url(https://media4.giphy.com/media/OB9IwSCXxDu5gpyOFk/giphy.gif)";
    var audio = new Audio('https://github.com/Ociione/ociione.github.io/blob/main/rick.mp3?raw=true');
    audio.play();
}
