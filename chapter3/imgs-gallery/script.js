const gallery = document.getElementById("thumbs");
let largeImg = document.getElementById("largeImg");
gallery.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target;
  let newSrc = target.getAttribute("src");
  largeImg.setAttribute("src", newSrc);
});
