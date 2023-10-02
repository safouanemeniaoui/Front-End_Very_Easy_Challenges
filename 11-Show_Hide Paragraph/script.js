let btn = document.querySelector("h2");
let myP = document.querySelector("p");

btn.onclick = function () {
  myP.classList.toggle("active");
  btn.classList.toggle("_active");
};
