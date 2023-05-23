//set initial count
let count = 0;

// select value and buttons
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("reset")) {
      count = 0;
    } else if (style.contains("increase")) {
      count++;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
