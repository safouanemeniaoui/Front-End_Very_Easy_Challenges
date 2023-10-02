let myDiv = document.querySelector(".result");

let font = document.querySelector("#font");

font.onchange = function () {
  console.log(this.value);
  if (this.value === "one") {
    myDiv.style.fontFamily = "Verdana";
  } else if (this.value === "two") {
    myDiv.style.fontFamily = "Gill Sans";
  } else {
    myDiv.style.fontFamily = "Franklin Gothic Medium";
  }
};
