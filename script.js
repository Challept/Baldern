const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

let checkAlive = setInterval(function () {
    // Get current dino Y position
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

    // Get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Check for collision
    if (cactusLeft > 0 && cactusLeft < 70 && dinoBottom <= 40) {
        cactus.style.animationPlayState = "paused";
        dino.style.animationPlayState = "paused";
        alert("Whoops! Game Over :(");
        window.location.reload();
    }
}, 10);

document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        jump();
    }
});
