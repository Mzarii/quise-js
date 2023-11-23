const corricte = ["D", "B", "A", "B", "A"];
const form = document.querySelector("form");
const scoor = document.querySelector("#ss");
const question = document.querySelectorAll(".question");
let result = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const reponse = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  reponse.forEach((el, idx) => {
    if (el === corricte[idx]) {
      result += 1;
      question[idx].setAttribute("style", "background-color: #b6f7b6;");
    } else question[idx].setAttribute("style", "background-color: #fa9878;");
  });

  scrollTo(0, 0);
  scoor.querySelector("p").textContent = `Ton score ${result}/5 !`;

  scoor.classList.toggle("non");
});

function nouveau(event) {
  location.reload();
}
