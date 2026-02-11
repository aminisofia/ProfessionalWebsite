let spinning = false;
function spin() {
    if (spinning) return;
    spinning = true;

    var img = document.getElementById("profile");
    img.style.transform = "rotate(0deg)";
    let degrees = 0;
    const interval = setInterval(function () {
        degrees+=1.5;
        let easedDegrees = lerp(0, 360, easeInOutSine(degrees / 360));
        img.style.transform = "rotate(" + easedDegrees + "deg)";

        if (degrees >= 360) {
            spinning = false;
            clearInterval(interval);
        }
    }, 1);
}

function lerp(a, b, t) {
    return (1 - t) * a + (t) * b;
}

function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}
