const video = document.getElementById("video");

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0; 
}

function rewind() {
    video.currentTime -= 10;
}

function forward() {
    video.currentTime += 10;
}

function increase() {
    video.playbackRate += 0.1;
}

function decrease() {
    video.playbackRate -= 0.1;
}