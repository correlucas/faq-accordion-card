const question = document.querySelectorAll('dt');
const answer = document.querySelectorAll('dd');
const arrow = document.querySelectorAll('dt:after')


question[0].classList.toggle('active');
answer[0].classList.toggle('active');


function activeAccordion() {

  answer.forEach((answers) => {
    answers.classList.remove('active') //remove from all answers the active
  });

  question.forEach((questions) => {
    questions.classList.remove('active') //remove from all answers the active
  });

  this.classList.toggle('active'); //add active when the selected item is clicked
  this.nextElementSibling.classList.toggle('active'); //add active when the previous item is clicked (the question)
}

question.forEach((item) => {
  item.addEventListener('click', activeAccordion)
});

