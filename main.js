// Logic of start game
document.querySelector(".start-game").addEventListener("click", (e) => {
  let userName = prompt("Type your name please!");
  if (userName == "" || userName == null) {
    document.querySelector(".name span").innerHTML = "Unkwon";
    e.target.parentElement.remove();
  } else {
    userName = userName.substr(0, 1).toUpperCase() + userName.slice(1);
    document.querySelector(".name span").innerHTML = userName;
    e.target.parentElement.remove();
  }
});

// Logic of order boxs
let time = 5000;
let memoryGame = document.querySelector(".memory-game");
let boxs = memoryGame.querySelectorAll(".box");
let range = [...boxs.keys()];
let shuffledArray = range.sort((a, b) => 0.5 - Math.random());

// Loop on boxs
boxs.forEach((box, i) => {
  box.style.order = shuffledArray[i];
  // add event click
  box.addEventListener("click", () => {
    // Add active
    addActive(box);
    filterActive();
  });
});

// Add active function
function addActive(selectedBox) {
  selectedBox.classList.add("active");
}

// Filter active function
function filterActive() {
  let activeBox = Array.from(boxs).filter((box) =>
    box.classList.contains("active")
  );
  if (activeBox.length === 2) {
    // Stop clicking
    stopClicking();
  }
}

// Stop clicking function
function stopClicking() {
  memoryGame.classList.add("pointer-events-none");
  setTimeout(() => {
    memoryGame.classList.remove("pointer-events-none");
  }, time);
}
