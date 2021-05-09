
const resetButton = document.querySelector("#reset")
const winningScoreSelect = document.querySelector("#playto")

let winningScore = 25;
let isGameOver = false;


let t1 = {
  button: document.querySelector("#t1Button"),
  display: document.querySelector("#t1Display"),
  score: 0
}

let t2 = {
  button: document.querySelector("#t2Button"),
  display: document.querySelector("#t2Display"),
  score: 0
}

function upgradeScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success")
      opponent.display.classList.add("has-text-danger")
      player.button.disabled = true;
      opponent.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

t1.button.addEventListener("click", function () {
  upgradeScores(t1, t2)
})
t2.button.addEventListener("click", function () {
  upgradeScores(t2, t1)
})


winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
})

resetButton.addEventListener("click", reset);//若是reset()，表示當下立刻執行，所以這裡我們放reset，當click才會呼叫它

function reset() {
  for (let t of [t1, t2]) {
    isGameOver = false;
    t.score = 0;
    t.display.textContent = 0;
    t.display.classList.remove("has-text-success", "has-text-danger")
    t.button.disabled = false;
  }
}