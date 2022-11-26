
const Depression = [
{
    question: "Q1: Do you lost interest in your daily life activities ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q2: Have you put on or lost weight ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q3: Are you falling asleep during the day ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q4: Are you feeling restlessness or slowed down physically or mentally ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q5: Are you being tired often and feeling like loosing energy ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q6: Do you consider yourself worthless or guilty for something ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q7: Do you feel trouble in concentrating and making decisions ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q8: Do you have any suicidal thoughts ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q9: Do you sleep improper(too much/ too little) ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q10: Have you observed any changes in your apetite (not eating enough or overeating) ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q11: Are you fatigue (extremely tired from mental or physical stress) ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q12: Are you hopeless ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q13: Do you have low self-esteem (lack of confidence) ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q14: Are you feeling sad for the same thing over 2 or more years ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q15: Do you have excessive angerness irregularly even for some minute things ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},
{
    question: "Q16: Does your depression effected your daily cycle after 2 months of the cause of depression ?",
    a: "Yes",
    b: "No",
    ans: "ans1"
},

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const submit = document.querySelector('#submit');


const answers = document.querySelectorAll('.answer');

let questionCount = 0;

    let score = 0;

    const loadQuestion = () => {

    const questionList = Depression[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false )
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();   
    console.log(checkedAnswer);       
    
    if(checkedAnswer === Depression[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < Depression.length) {
        loadQuestion();
    }
    
    else {
        var x = score;
        score=0;
        console.log(x);
    
    }

})

