var curPosition = 0;

function onGameLoad() {
    document.getElementById("roll-button").addEventListener("click", rollDice);

    var cell = document.getElementById("cell_0")
    var player = document.getElementById("player")
    var rect = cell.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    player.style.top  = rect.top + "px";
    player.style.left = rect.left + "px";
    document.addEventListener("keydown", onKeyPress);
    curPosition = 0;
}

function rollDice() {
  var dice = document.getElementById("die");
  toggleClasses(dice);
  dice.dataset.roll = getRandomNumber(1, 6);
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onKeyPress(event) {
    if (event.keyCode === 37) {
        curPosition++;
        var rect = document.getElementById("cell_" + curPosition).getBoundingClientRect();
        player.style.top  = rect.top + "px";
        player.style.left = rect.left + "px";
    }
}

