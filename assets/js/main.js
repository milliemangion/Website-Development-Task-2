
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.getElementById("travelQuiz").addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = document.querySelectorAll("input[type=radio]:checked");
  const resultBox = document.getElementById("quizResult");

  if (answers.length < 10) {
    resultBox.classList.remove("d-none");
    resultBox.textContent = "Please answer all questions.";
    return;
  }

  let relaxScore = 0;

  answers.forEach(answer => {
    if (answer.value === "relax") {
      relaxScore++;
    }
  });

  resultBox.classList.remove("d-none");

  if (relaxScore >= 5) {
    resultBox.textContent =
      "You prefer relaxed and scenic trips. Amsterdam is a great match for you!";
  } else {
    resultBox.textContent =
      "You enjoy energetic city experiences. Explore vibrant destinations!";
  }
});
