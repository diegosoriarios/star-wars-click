window.onload = function onLoad() {
    let r = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            width = 0;
            c = 0;
            r++;
            gem++;
            $('#money-list').html("<li>Gem: " + gem + "</li>");
        } else {
            width+= c/r;
            elem.style.width = width + '%';
        }
    }
};