const li = document.getElementsByTagName("li");
for (let listItem of li) {
  listItem.addEventListener("click", function (e) {
    listItem.setAttribute("class", "selected");
  });
}
