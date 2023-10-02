let myOpen = document.querySelector(".open");
let myList = document.querySelector(".list");
let myClose = document.querySelector(".close");
let colors = document.querySelectorAll("li");
let main = document.querySelector("ul");
let myImages = document.querySelector("img");
let myDiv = document.querySelector(".colors");

console.log(colors);

myOpen.onclick = function () {
  myList.style.opacity = 100;
  myClose.style.display = "block";
  myOpen.style.display = "none";
};

myClose.onclick = function () {
  myList.style.opacity = 0;
  myClose.style.display = "none";
  myOpen.style.display = "block";
};

if (window.localStorage.getItem("color")) {
  for (let i = 0; i < document.images.length; i++) {
    document.images[i].style.backgroundColor =
      window.localStorage.getItem("color");
  }
  colors.forEach((li) => {
    li.classList.remove("active");
    if (
      li.getAttribute("data-color") === window.localStorage.getItem("color")
    ) {
      li.classList.add("active");
    }
  });
}

main.onclick = function (e) {
  colors.forEach((li) => {
    li.classList.remove("active");
  });
  e.target.classList.add("active");
  for (let i = 0; i < document.images.length; i++) {
    document.images[i].style.backgroundColor = document
      .querySelector(`[class = "active"]`)
      .getAttribute("data-color");
  }
  window.localStorage.setItem(
    "color",
    `${document.querySelector("[class = 'active']").getAttribute("data-color")}`
  );
};

window.onscroll = function () {
  console.log(window.scrollY);
  if (window.scrollY >= 50) {
    myDiv.style.cssText =
      "justify-content: flex-start ; flex-direction: column-reverse ; margin-bottom : 20px";
  } else {
    myDiv.style.cssText = "justify-content: flex-start";
  }
};
