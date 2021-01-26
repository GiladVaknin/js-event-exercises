const li = document.getElementsByTagName("li");
let count = 0;
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function (e) {
    if (count > 0) {
      let last = document.getElementById("last");
      last.classList.remove("selected");
      last.id = "";
    }
    li[i].setAttribute("class", "selected");
    li[i].setAttribute("id", "last");
    count++;
  });
}
