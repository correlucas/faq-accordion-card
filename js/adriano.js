const question = document.querySelectorAll('dt');
const answer = document.querySelectorAll('dd');

question[0].classList.add('active');
answer[0].classList.add('active');

function activeAccordion(ev) {
  question.forEach(element => {
    element.classList.remove("active");
    answer.forEach(element => element.classList.remove("active"));
  });

  ev.target.classList.add("active");
  ev.target.nextElementSibling.classList.add("active");
};

question.forEach(element => element.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("active")) {
    ev.target.classList.remove("active");
    ev.target.nextElementSibling.classList.remove("active");
    return null;
  }
  activeAccordion(ev);
})
);