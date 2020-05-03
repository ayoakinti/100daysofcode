let buttons = document.getElementsByClassName("btn");
let display = document.getElementById("calc_display");
let solution = "";
console.log(display.innerHTML);
let isequals = false;

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];

  button.addEventListener("click", function () {
    let value = button.dataset.value;
    if (button.dataset.value === "equals") {
      isequals = true;
      console.log(eval(solution));
      display.innerText = eval(solution);
      solution = eval(solution);
    } else if (button.dataset.value === "clear") {
      solution = "";
      display.innerText = solution;
      console.log(solution);
    } else if (button.classList.contains("digit")) {
      // console.log(isequals);
      if (isequals === true) {
        solution = "";
        isequals = false;

        solution += value;
        display.innerText = solution;

        console.log(solution);
      } else {
        solution += value;
        display.innerText = solution;

        console.log(solution);
      }
    } else {
      isequals = false;
      solution += value;
      display.innerText = solution;

      console.log(solution);
    }
  });
}
let a = "ayo";
document.addEventListener("keydown", function (event) {
  // console.log("button");
  const key = event.key;
  if (key === "Backspace") {
    if (isequals) {
      (solution = ""), (display.innerText = solution);
    } else {
      solution = solution.slice(0, -1);
      display.innerText = solution;
    }
  }
});
