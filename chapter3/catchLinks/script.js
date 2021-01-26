const links = document.querySelectorAll("a");
for (let link of links) {
  link.addEventListener("click", function (event) {
    let q = confirm("Are you sure ypu want to leave us?");
    if (!q) {
      event.preventDefault();
    }
  });
}
