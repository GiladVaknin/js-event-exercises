const buttons = document.getElementsByClassName("remove-button");
document.addEventListener("click", function (e) {
  const target = e.target;
  if (target.className != "remove-button") return;
  else {
    let p = target.closest("div");
    p.hidden = true;
  }
});
