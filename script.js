const button = document.querySelector("button");

/*button.addEventListener("click", function () {
  if (document.body.classList.contains("bodydark")) {
    console.log("darktheme");
    console.log("switching to light theme");
    document.title = "Good Morning";
    document.body.classList.remove("bodydark");
  } else {
    console.log("lighttheme");
    console.log("switching To Dark Theme");
    document.title = "Good Night";
    document.body.classList.add("bodydark");
  }
  console.log(button);
});*/

button.addEventListener("click", function () {
  document.body.classList.toggle("bodydark");
  if (document.body.classList.contains("bodydark")) {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
  console.log(button);
});
