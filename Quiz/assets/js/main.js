let submitBtn = document.getElementById("btn");
let questions = document.getElementsByClassName("questions");
function tagelements(element, tag) {
  return element.getElementsByTagName(tag);
}

function startQuiz() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let quiz = JSON.parse(xhttp.responseText).quiz;

      for (let i = 0; i < quiz.length; i++) {
        let question = document.createElement("div");
        question.classList.add("question");
        let question_title = document.createElement("h3");
        let options = document.createElement("div");
        question.append(question_title);

        question.append(options);
        question_title.innerHTML = quiz[i].question;

        quiz[i].options.forEach((option) => {
          let option_div = document.createElement("div");
          option_div.classList.add("option");
          let option_tick = document.createElement("input");
          let option_value = document.createElement("label");

          option_tick.setAttribute("type", "radio");
          option_tick.setAttribute("name", i);
          option_tick.setAttribute("value", option.value);

          option_value.innerHTML = option.value + "<br>";

          option_div.append(option_tick);
          option_div.append(option_value);
          options.append(option_div);
        });
        questions[0].append(question);
      }
      submitBtn.addEventListener("click", function (e) {
        // console.log()
        e.preventDefault();
        let answers = [];
        let selected = [];
        let score = [];
        for (let i = 0; i < quiz.length; i++) {
          //   console.log(quiz[i].answer);
          answers.push(quiz[i].answer);
          //   console.log(typeof quiz[i].answer);
        }
        console.log(answers);
        let question_div = document.getElementsByClassName("question");

        // console.log(question_div);
        for (let i = 0; i < question_div.length; i++) {
          let tag = tagelements(question_div[i], "input");
          //   console.log(tag);
          let nonselected = [];
          for (let j = 0; j < tag.length; j++) {
            // console.log(tag[j]);
            if (tag[j].checked) {
              // console.log(tag[j].value);
              selected.push(tag[j].value);
            } else {
              nonselected.push(tag[j].value);
            }
          }
          if (nonselected.length === tag.length) {
            selected.push("No answer selected");
          }
        }
        // console.log(selected.length);
        console.log(selected);
        // console.log(nonselected);

        if (answers.length === selected.length) {
          for (let i = 0; i < answers.length; i++) {
            if (answers[i] === selected[i]) {
              score.push("Correct answer");
            } else {
              score.push("Wrong answer");
            }
          }
        }

        for (let i = 0; i < question_div.length; i++) {
          let tag = tagelements(question_div[i], "input");
          console.log(tag);
          console.log(answers);
          console.log(selected);
          for (let j = 0; j < tag.length; j++) {
            // console.log(tag[j]);
            if (tag[j].value === answers[i]) {
              tag[j].parentElement.setAttribute(
                "style",
                "background-color: green;"
              );
              // console.log(tag[j].value);
              // selected.push(tag[j].value);
            } else if (selected[i] !== answers[i]) {
              if (tag[j].value === selected[i]) {
                console.log(tag[j]);
                tag[j].parentElement.setAttribute(
                  "style",
                  "background-color: red;"
                );
              }
              // nonselected.push(tag[j].value);
            }
          }
        }
        console.log(score);
      });
    }
  };
  xhttp.open("GET", "assets/json/quiz.json", true);
  xhttp.send();
}

startQuiz();
