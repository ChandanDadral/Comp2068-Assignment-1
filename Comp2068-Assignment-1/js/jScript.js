var audio = new Audio("");

audio.oncanplaythrough = function () {
    audio.play();
}

audio.loop = true;

audio.onended = function () {
    audio.play();
}