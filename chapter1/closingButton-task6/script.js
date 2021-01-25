const catBtn = document.getElementById("catRb");
const horseBtn = document.getElementById("horseRb");
const donkeyBtn = document.getElementById("donkeyRb");
catBtn.addEventListener("click", () => {
  const p = document.getElementById("cat");
  p.remove();
});
horseBtn.addEventListener("click", () => {
  const p = document.getElementById("horse");
  p.remove();
});
donkeyBtn.addEventListener("click", () => {
  const p = document.getElementById("donkey");
  p.remove();
});
