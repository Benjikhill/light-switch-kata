function buttonLight() {
  let btn = document.querySelector("button--dark");
  btn.classList.toggle("button");
}
function bodyLight() {
  let body = document.querySelector("body");
  body.classList.toggle("body--dark");
}
function changeTitle() {
  if ("button--dark" === true) {
    document.title = "Good Night";
  }
}
