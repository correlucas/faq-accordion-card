const question = document.querySelectorAll('dt');
const answer = document.querySelectorAll('dd');
const arrow = document.querySelectorAll('dt:after');
// const isQuestionActive = this.className = 'active';


question[0].classList.add('active');
answer[0].classList.add('active');


function activeAccordion() {

  // if (this.classList.contains("active")) {
  //   this.classList.toggle("active");
  //   this.target.nextElementSibling.classList.toggle("active");
  //   return null;
  // }

  // question.forEach((item) => {
  //   item.classList.remove('active') //remove from all answers the active
  // });

  // answer.forEach((item) => {
  //   item.classList.remove('active') //remove from all answers the active
  // });

  this.classList.toggle('active'); //add active when the selected item is clicked
  this.nextElementSibling.classList.toggle('active'); //add active when the previous item is clicked (the question)
}

question.forEach((item) => {
  item.addEventListener('click', activeAccordion)
});

