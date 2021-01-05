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



const rows = [
  ["name1", "city1", "some other info"],
  ["name2", "city2", "more info"]
];

let csvContent = "data:text/csv;charset=utf-8," 
  + rows.map(e => e.join(",")).join("\n");

//   var encodedUri = encodeURI(csvContent);
// window.open(encodedUri);

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
document.body.appendChild(link); // Required for FF

// link.click();

console.log(rows.map(e => e.join(",")).join("\n"));
