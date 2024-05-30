window.onload = function () {
    var header = document.querySelector('h1');
    var scale = 1;
    var step = 0.01;

    function pulseHeader() {
        if (scale > 1.1 || scale < 0.9) {
            step = -step; // Reverse the scaling direction
        }
        scale += step;
        header.style.transform = 'scale(' + scale + ')';
        requestAnimationFrame(pulseHeader);
    }

    pulseHeader();
};
