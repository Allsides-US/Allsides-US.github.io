const questions = [
    {
        question: "Which of these was sold in stores first?",
        answers: ["Macintosh computer", "Sony Walkman", "Post-it Notes"],
        correct: "Sony Walkman"
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let selectedAnswer = null;
let totalMoney = 1000000;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();

    document.getElementById('submitAnswer').addEventListener('click', checkAnswer);
});

function loadQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const moneyContainer = document.getElementById('moneyContainer');
    const answersContainer = document.getElementById('answers');

    moneyContainer.innerHTML = `Money: $${totalMoney}`;
    questionContainer.querySelector('#question').textContent = questions[currentQuestion].question;

    answersContainer.innerHTML = '';
    questions[currentQuestion].answers.forEach(answer => {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.textContent = answer;
        answerDiv.addEventListener('click', () => selectAnswer(answerDiv, answer));
        answersContainer.appendChild(answerDiv);
    });
}

function selectAnswer(element, answer) {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedAnswer = answer;
}

function checkAnswer() {
    const resultContainer = document.getElementById('result');
    if (selectedAnswer === questions[currentQuestion].correct) {
        resultContainer.textContent = "Correct! You keep your money.";
    } else {
        resultContainer.textContent = `Wrong! The correct answer was ${questions[currentQuestion].correct}. You lose half your money.`;
        totalMoney /= 2;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        resultContainer.textContent += " Game over!";
    }
}
