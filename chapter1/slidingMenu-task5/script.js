const ul = document.getElementById("list");
ul.hidden = true;
const btn = document.getElementById("button");
let countClicks = 0;
btn.addEventListener("click", function () {
  countClicks++;
  if (countClicks % 2 != 0) {
    btn.innerText = "▼ Sweeties (click me)!";
    ul.hidden = false;
  } else {
    btn.innerText = "▶ Sweeties (click me)!";
    ul.hidden = true;
  }
});
