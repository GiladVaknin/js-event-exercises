const field = document.getElementById("field");
field.addEventListener("click", function (event) {
  let x = event.clientX;
  let y = event.clientY;
  moveBall(x, y);
});
function moveBall(x, y) {
  const ball = document.getElementById("ball");
  console.log(x, y);
  if (x > 170) {
    ball.style.left = "170px";
  } else if (x < 40) {
    ball.style.left = "40px";
  } else {
    ball.style.left = x - 40 + "px";
  }
  if (y < 50) {
    ball.style.top = y - 50 + "px";
  } else if (y < 180) {
    ball.style.top = y;
  } else {
    ball.style.top = y - 40 + "px";
  }
}
