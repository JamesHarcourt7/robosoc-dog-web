var w = false
var a = false
var s = false
var d = false
var cam = document.getElementById("camera-view")
var x = 0
var y = 0

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) {
        document.getElementById("w").style.filter = "brightness(50%)"
        w = true
    }
    if(event.keyCode == 65) {
        document.getElementById("a").style.filter = "brightness(50%)"
        a = true
    }
    if(event.keyCode == 83) {
        document.getElementById("s").style.filter = "brightness(50%)"
        s = true
    }
    if(event.keyCode == 68) {
        document.getElementById("d").style.filter = "brightness(50%)"
        d = true
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 87) {
        document.getElementById("w").style.filter = "brightness(100%)"
        w = false
    }
    if(event.keyCode == 65) {
        document.getElementById("a").style.filter = "brightness(100%)"
        a = false
    }
    if(event.keyCode == 83) {
        document.getElementById("s").style.filter = "brightness(100%)"
        s = false
    }
    if(event.keyCode == 68) {
        document.getElementById("d").style.filter = "brightness(100%)"
        d = false
    }
});


(function(){
    if (w) y ++;
    if (a) x ++;
    if (s) y --;
    if (d) x --;
    cam.style.top = y + "px";
    cam.style.left = x + "px";
    setTimeout(arguments.callee, 25);
})();
