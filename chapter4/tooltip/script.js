const buttons = document.body.getElementsByTagName("button");
const body = document.getElementsByTagName("body");
let span = document.createElement("span");
for (let button of buttons) {
  button.addEventListener("mouseover", function (e) {
    const target = e.target;
    let data = getData(this);
    span.innerText = data;
    span.setAttribute("class", "tooltip");
    body[0].append(span);
    console.log(e.clientX, e.clientY);
    if (e.clientY < 40) {
      span.style.top = e.clientY + 90 + "px";
    } else {
      span.style.top = e.clientY - 60 + "px";
    }
    span.style.left = e.clientX + "px";
  });

  button.addEventListener("mouseout", () => {
    span.remove();
  });
}
function getData(button) {
  return button.getAttribute("data-tooltip");
}
