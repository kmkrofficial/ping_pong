const p1 = {
    score: 0,
    button: document.querySelector("#p1Increment"),
    display: document.querySelector("#p1Display"),
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Increment"),
    display: document.querySelector("#p2Display"),
}

const resetBtn = document.querySelector("#reset")
const maxSelect = document.querySelector("#max")
let max = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score===max){
            isGameOver = true
            player.button.disabled = true
            opponent.button.disabled = true
            player.display.classList.add("winner")
            opponent.display.classList.add("loser")
        }
    player.display.textContent = player.score;
    }
}

p1IncrementBtn.addEventListener("click", function () {
    updateScores(p1, p2)
})

p2IncrementBtn.addEventListener("click", function () {
    updateScores(p2, p1)
})

resetBtn.addEventListener("click", reset)

maxSelect.addEventListener("change", function () {
    max = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false
    p1.score = 0
    p2.score = 0
    p1.display.textContent = p1
    p2.display.textContent = 0

    p1.display.classList.remove("winner", "loser")
    p2.display.classList.remove("loser", "winner")

    p1.button.disabled = false
    p2.button.disabled = false
}