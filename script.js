const questions = [
  {
      question: "In which year was the first African Cup of Nations held?",
      options: ["1957", "1960", "1970", "1980"],
      correctAnswer: "1957"
  },
  {
      question: "Which country has won the most African Cup titles?",
      options: ["Egypt", "Nigeria", "Cameroon", "Ghana"],
      correctAnswer: "Egypt"
  },
  {
      question: "Who is the all-time top scorer in the African Cup of Nations?",
      options: ["Didier Drogba", "Samuel Eto'o", "Asamoah Gyan", "Hossam Hassan"],
      correctAnswer: "Hossam Hassan"
  },
  {
      question: "Which African Cup edition introduced the expansion to 24 teams?",
      options: ["2012", "2015", "2017", "2019"],
      correctAnswer: "2019"
  },
  {
      question: "Where was the African Cup of Nations 2022 hosted?",
      options: ["Morocco", "Nigeria", "Cameroon", "Algeria"],
      correctAnswer: "Cameroon"
  }
];

let currentQuestion = 0;
let userAnswers = [];

document.addEventListener('DOMContentLoaded', function () {
  startQuiz();
});

function startQuiz() {
  document.getElementById('quiz-container').style.display = 'block';
  displayQuestion();
}

function displayQuestion() {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");

  questionContainer.innerHTML = `<div class="question">${questions[currentQuestion].question}</div>`;
  
  const optionsHtml = questions[currentQuestion].options.map(
      option => `<div class="option"><input type="radio" name="q${currentQuestion}" value="${option}"> ${option}</div>`
  ).join('');

  optionsContainer.innerHTML = optionsHtml;
}

function nextQuestion() {
  const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);

  if (!selectedOption) {
      alert("Please select an option!");
      return;
  }

  userAnswers.push(selectedOption.value);
  currentQuestion++;

  if (currentQuestion < questions.length) {
      displayQuestion();
  } else {
      displayResult();
  }
}

function displayResult() {
  const quizContainer = document.getElementById('quiz-container');
  const resultContainer = document.getElementById('result-container');

  const score = calculateScore();
  const resultText = `You scored <span class="score">${score}</span> out of <span class="score">${questions.length}</span>!`;

  resultContainer.innerHTML = resultText;
  resultContainer.style.display = 'block';

  // Hide unnecessary elements
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('options-container').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('submit-btn').style.display = 'none';
}

function calculateScore() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
          score++;
      }
  }

  return score;
}