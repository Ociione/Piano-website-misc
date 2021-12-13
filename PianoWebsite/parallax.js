//kod för att ha parallax bakgrund 

(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    function parallax(e) {
        let _w = window.innerWidth;
        let _h = window.innerHeight;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${0 - (_mouseX - _w) * 0.0085}% ${0 - (_mouseY - _h) * 0.02}%`;
        let _depth2 = `${0 - (_mouseX - _w) * 0.0190}% ${0 - (_mouseY - _h) * 0.04}%`;
        let _depth3 = `${0 - (_mouseX - _w) * 0.0570}% ${0 - (_mouseY - _h) * 0.12}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})();


