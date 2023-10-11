const quizDB = [
    {
    question: "Q1: Which type of JavaScript language is?",
     a: "Object-Oriented.",
     b: "Object-Based.",
     c: "Assembly-language.",
     d: "High-level.",
     ans: "ans2"
    
  },
  {
    question: "Q2: Which of the following function of String object returns the characters in a string between two indexes into the string?",

     a: "slice()",
     b: "split()",
     c: "substr()",
     d: "substring()",
    ans: "ans4"
  },
  {
    question: "Q3: Which of the following function of String object creates an HTML anchor that is used as a hypertext target?",

     a: "anchor()",
     b: "link()",
     c: "blink()",
     d: "big()",
    ans: "ans1"
  },
  {

    question: "Q4: Which of the following function of Array object represents the source code of an object?",
     a: "toSource()",
     b: "splice()",
     c: "toString()",
     d: "unshift()",
    ans: "ans1"
  }
];
let questionCount = 0;
let score=0;
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

const loadQuestion= () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
        return answer;
    });
    return answer;

};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () =>{
     const checkedAnswer = getCheckAnswer();
     console.log(checkedAnswer);

     if(checkedAnswer== quizDB[questionCount].ans)
     {
        score++;
     };
     questionCount++;
     deselectAll();
     if(questionCount < quizDB.length)
     {
        loadQuestion();
     }
     else{
            showScore.innerHTML= `
            <h3>You scored 🎉${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>`;
            showScore.classList.remove('scoreArea');
     }

});