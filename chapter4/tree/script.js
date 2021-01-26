let listItem = document.getElementsByTagName("li");
const mainList = document.getElementById("tree");
mainList.addEventListener("click", function (e) {
  const target = e.target;
  if (target.getAttribute("tag-name") != "li") {
    let l = target.getElementsByTagName("li");
    for (let ls of l) {
      if (ls.innerText != "Animals" && ls.innerText != "Fishes")
        ls.hidden = !ls.hidden;
    }
  } else {
    return;
  }
});
