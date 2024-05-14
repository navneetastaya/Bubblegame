var timer = 31;
var score = 0;
var rn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function newhit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
}

function bubble() {
    var clut = "";

    for (let i = 1; i <= 50; i++) {
        var bb = Math.floor(Math.random() * 10);
        clut += `<div class="bubble">${bb}</div>`;
    }

    document.querySelector(".b-box").innerHTML = clut;
}

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".b-box").innerHTML = `<h1>Game Over </h1>`;
        }
    }, 1000);
}

document.querySelector(".b-box").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === rn) {
        increaseScore();
        bubble();
        newhit();
    }
});

runtimer();
bubble();
newhit();
