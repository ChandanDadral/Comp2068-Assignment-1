var audio = new Audio("");

audio.oncanplaythrough = function () {
    audio.play();
}

audio.loop = true;

audio.onended = function () {
    audio.play();
}

//Script for Time
var c=10
var t 
function stopCount() 
{ 
    clearTimeout(t) 
} 
function timedCount()
{ document.getElementById('txt').value=c 
c=c-1 
if(c==-1)
{
    alert("time over")
    stopcount()
}
t = setTimeout("timedCount()", 1000)
}

