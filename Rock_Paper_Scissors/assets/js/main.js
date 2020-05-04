let option = document.getElementsByClassName("option");
let disabled = [];

for (let i = 0; i < option.length; i++) {
  option[i].addEventListener("click", function () {
    if (this.classList.contains("selected")) {
      this.classList.remove("selected");
    } else {
      option[i].classList.add("selected");
    }
    disable();
    undisable();
  });

  console.log(option[i].classList);
}
//  console.log(option);

function disable() {
  for (let i = 0; i < option.length; i++) {
    if (option[i].classList.contains("selected") === false) {
      option[i].classList.add("disabled");
    }
  }
}

function undisable() {
  for (let i = 0; i < option.length; i++) {
    if (option[i].classList.contains("disabled")) {
      disabled.push("disabled");
      console.log(disabled);
    }
  }
}

console.log(disabled);
