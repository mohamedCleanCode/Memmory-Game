// Logic of start game
document.querySelector(".start-game").addEventListener("click", (e) => {
  let userName = prompt("Type your name please!");
  if (userName == "" || userName == null) {
    document.querySelector(".name span").innerHTML = "Unkwon";
  } else {
    userName = userName.substr(0, 1).toUpperCase() + userName.slice(1);
    document.querySelector(".name span").innerHTML = userName;
    e.target.parentElement.remove();
  }
});
