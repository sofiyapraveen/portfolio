const questions = [
  {
    question: "What does HTML stand for?",
    answers: ["HyperText Markup Language", "HighText Machine Language", "Hyperlinking Text Management Language", "Home Tool Markup Language"],
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "What is the main function of an operating system?",
    answers: ["To manage hardware resources", "To perform data backups", "To edit text files", "To design web pages"],
    correctAnswer: "To manage hardware resources"
  },
  {
    question: "Which programming language is known as the 'mother of all languages'?",
    answers: ["C", "Python", "Java", "Assembly"],
    correctAnswer: "C"
  },
  {
    question: "What does 'CPU' stand for?",
    answers: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
    correctAnswer: "Central Processing Unit"
  },
  {
    question: "What does RAM stand for?",
    answers: ["Random Access Memory", "Read Access Memory", "Rapid Access Module", "Read-Only Access Memory"],
    correctAnswer: "Random Access Memory"
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out)?",
    answers: ["Queue", "Array", "Stack", "Heap"],
    correctAnswer: "Stack"
  },
  {
    question: "Which of these is a NoSQL database?",
    answers: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correctAnswer: "MongoDB"
  },
  {
    question: "What is the purpose of a compiler?",
    answers: ["To execute programs directly", "To translate high-level code into machine code", "To debug code", "To encrypt data"],
    correctAnswer: "To translate high-level code into machine code"
  },
  {
    question: "What is an algorithm?",
    answers: ["A step-by-step procedure to solve a problem", "A type of software", "A programming language", "A hardware component"],
    correctAnswer: "A step-by-step procedure to solve a problem"
  },
  {
    question: "Which company developed the Java programming language?",
    answers: ["Microsoft", "Sun Microsystems", "IBM", "Apple"],
    correctAnswer: "Sun Microsystems"
  }
];


let currentQuestionIndex = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = ""; // Clear previous answers

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => checkAnswer(answer);
    answersDiv.appendChild(button);
  });

  document.getElementById("feedback").textContent = "";
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");

  if (selectedAnswer === currentQuestion.correctAnswer) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorrect!";
    feedback.style.color = "red";
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showFeedbackForm();
  }
}

function showFeedbackForm() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `
    <h2>Thank you for completing the quiz!</h2>
    <p>We'd love to hear your feedback. Please fill out the form below:</p>
    <form id="feedback-form">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name" required><br><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br><br>
      <label for="comments">Comments:</label><br>
      <textarea id="comments" name="comments" rows="4" required></textarea><br><br>
      <button type="submit">Submit Feedback</button>
    </form>
  `;

  const feedbackForm = document.getElementById("feedback-form");
  feedbackForm.onsubmit = function (event) {
    event.preventDefault();
    alert("Thank you for your feedback!");
    feedbackForm.reset();
  };
}

loadQuestion();
