let currentRoundQuestions = [];
let currentQuestionIndex = 0; // Track the current question index

// Load the questions for round 3
function loadQuestionsRound3() {
  currentRoundQuestions = bonusQuestions; // Directly use round3Questions
  displayQuestion(currentQuestionIndex); // Display the first question
}

// Display the selected question
function displayQuestion(index) {
  const question = currentRoundQuestions[index];
  document.getElementById("display-question").classList.remove("hidden");

  if (question.type === "open-ended") {
    document.getElementById("multiple-choice").classList.add("hidden");
    document.getElementById("open-ended").classList.remove("hidden");

    document.getElementById("open-ended-text").innerHTML = `
      <p>${question.question.en}</p>
      <p>${question.question.si}</p>
    `;
  } else if (question.type === "multiple-choice") {
    document.getElementById("open-ended").classList.add("hidden");
    document.getElementById("multiple-choice").classList.remove("hidden");

    document.getElementById("question-text").innerHTML = `
      <p>${question.question.en}</p>
      <p>${question.question.si}</p>
    `;

    const choicesList = document.getElementById("choices-list");
    choicesList.innerHTML = "";

    question.choices.en.forEach((choiceEn, idx) => {
      const li = document.createElement("li");
      li.innerHTML = `
          <span class="choice-en">${choiceEn}</span>
          <span class="choice-si">${question.choices.si[idx]}</span>
        `;
      li.classList.add("choice-item");
      choicesList.appendChild(li);
    });
  }
}

// Function to navigate to the next question
function nextQuestion() {
  if (currentQuestionIndex < currentRoundQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    alert("You've completed all the questions!");
    // Optionally reset to the first question or navigate away
    currentQuestionIndex = 0; // Resetting to first question
    displayQuestion(currentQuestionIndex); // Display the first question again
  }
}

// Reset round logic
function resetRound() {
  currentQuestionIndex = 0; // Reset to the first question
  displayQuestion(currentQuestionIndex); // Display the first question
}

// Automatically load questions when the page is loaded
document.addEventListener("DOMContentLoaded", loadQuestionsRound3);
