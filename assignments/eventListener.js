let playBtn = document.getElementById("play");
console.log(playBtn);

let audio = new Audio("./audio/music.mp4");

playBtn.addEventListener("click", () => {
    audio.play();
});

let pauseBtn = document.getElementById("pause");
console.log(pauseBtn);

pauseBtn.addEventListener("click", () => {
    audio.pause();
});

let playPauseBtn = document.getElementById("playPause");
console.log(playPauseBtn);

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
