function play() {
  let name = prompt("What is your first name?");
  let startGame = confirm(
    `Hi ${name}, are you ready to help Alice find the White Rabbit?`
  );
  if (startGame === true) {
    document.getElementById("intro").style.display = "none";
    document.getElementById("twoDoors").style.display = "block";
  } else {
    document.getElementById("intro").style.display = "none";
    document.getElementById("noPlay").style.display = "block";
  }
}
function redDoor() {
  let painters = confirm("Are you sure you want to go through the red door?");
  if (painters === true) {
    document.getElementById("twoDoors").style.display = "none";
    document.getElementById("redDoor").style.display = "block";
  } else {
    alert("Time's ticking...the White Rabbit's getting away!");
  }
}
function helpPaint() {
  let helpPaint = confirm("Teamwork makes the dream work!");
  if (helpPaint === true) {
    document.getElementById("redDoor").style.display = "none";
    document.getElementById("whiteRabbit").style.display = "block";
  } else {
    alert("Will you be part of the problem or the solution?");
  }
}
function snitched() {
  let snitches = confirm("All ways are the Queen's way...");
  if (snitches === true) {
    document.getElementById("redDoor").style.display = "none";
    document.getElementById("redQueen").style.display = "block";
  } else {
    alert("Decisions, decisions...");
  }
}
function blueDoor() {
  let hatter = confirm("Are you sure you want to go through the blue door?");
  if (hatter === true) {
    document.getElementById("twoDoors").style.display = "none";
    document.getElementById("blueDoor").style.display = "block";
  } else {
    alert("Time's ticking...the White Rabbit's getting away!");
  }
}
function pickCat() {
  let catsGrin = confirm("Twas brillig, and the slithy toves...");
  if (catsGrin === true) {
    document.getElementById("blueDoor").style.display = "none";
    document.getElementById("whiteRabbit").style.display = "block";
  } else {
    alert("Quick, before the grin disappears...");
  }
}
function pickCaterpillar() {
  let smokingCaterpillar = confirm(
    "You are old, Father William, the young man said..."
  );
  if (smokingCaterpillar === true) {
    document.getElementById("blueDoor").style.display = "none";
    document.getElementById("redQueen").style.display = "block";
  } else {
    alert("Take the Caterpillar's advice with a grain of salt...");
  }
}
function endGame() {
  let endGame = confirm("Are your sure you want to go?");
  if (endGame === true) {
    document.getElementById("intro").style.display = "none";
    document.getElementById("noPlay").style.display = "block";
  } else {
    alert("Great, Alice still needs your help!");
  }
}

let start = document.getElementById("start");
start.addEventListener("click", play);

let end = document.getElementById("dontPlay");
end.addEventListener("click", endGame);

let painters = document.getElementById("painters");
painters.addEventListener("click", redDoor);

let helpCards = document.getElementById("help");
helpCards.addEventListener("click", helpPaint);

let dontHelpCards = document.getElementById("snitch");
dontHelpCards.addEventListener("click", snitched);

let hatter = document.getElementById("hatter");
hatter.addEventListener("click", blueDoor);

let smilingCat = document.getElementById("cheshireCat");
smilingCat.addEventListener("click", pickCat);

let hookah = document.getElementById("caterpillar");
hookah.addEventListener("click", pickCaterpillar);
