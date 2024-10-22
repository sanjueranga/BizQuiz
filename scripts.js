let currentRoundQuestions = [];
let selectedQuestionIndex = -1; // Track the selected question index
let currentRound = null; // Variable to track the current round

// Sample data for questions in both rounds

// Load the questions for the selected round
function loadQuestions(round) {
  currentRound = round; // Set the current round
  document.getElementById("round-selection").classList.add("hidden");
  document.getElementById("question-pool").classList.remove("hidden");

  currentRoundQuestions = round === 1 ? round1Questions : round2Questions;

  // Load saved state from localStorage
  const savedState =
    JSON.parse(localStorage.getItem(`round${round}-questions`)) || [];

  // Apply the saved state to the current round questions
  currentRoundQuestions.forEach((question, index) => {
    if (savedState[index] !== undefined) {
      question.taken = savedState[index].taken;
    }
  });

  renderQuestionsGrid();
}

// Function to render the questions grid
function renderQuestionsGrid() {
  const questionGrid = document.getElementById("questions-grid");
  questionGrid.innerHTML = ""; // Clear previous questions

  currentRoundQuestions.forEach((question, index) => {
    const button = document.createElement("button");
    button.className = "question-button";
    button.innerHTML = `Question ${index + 1}`;

    if (question.taken) {
      button.disabled = true; // Disable if already taken
      button.classList.add("taken"); // Add a class for taken questions
    } else {
      button.onclick = () => {
        displayQuestion(index);
      };
    }
    questionGrid.appendChild(button);
  });

  // Show Undo button if there was a previously selected question
  if (selectedQuestionIndex >= 0) {
    document.getElementById("undo-button").classList.remove("hidden");
  } else {
    document.getElementById("undo-button").classList.add("hidden");
  }
}

// Display the selected question
// Display the selected question
// Function to display the selected question in both Sinhala and English
function displayQuestion(index) {
  selectedQuestionIndex = index;
  const question = currentRoundQuestions[index];

  document.getElementById("question-pool").classList.add("hidden");
  document.getElementById("display-question").classList.remove("hidden");

  // For open-ended questions
  if (question.type === "open-ended") {
    document.getElementById("multiple-choice").classList.add("hidden");
    document.getElementById("open-ended").classList.remove("hidden");

    // Display both English and Sinhala questions
    document.getElementById("open-ended-text").innerHTML = `
      <p> ${question.question.en}</p>
      <p>${question.question.si}</p>
    `;

    // Display both English and Sinhala answers (if needed)
  }
  // For multiple-choice questions
  else if (question.type === "multiple-choice") {
    document.getElementById("open-ended").classList.add("hidden");
    document.getElementById("multiple-choice").classList.remove("hidden");

    // Display both English and Sinhala questions
    document.getElementById("question-text").innerHTML = `
      <p>${question.question.en}</p>
      <p>${question.question.si}</p>
    `;

    const choicesList = document.getElementById("choices-list");
    choicesList.innerHTML = ""; // Clear previous choices

    // Display multiple choices in both languages
    question.choices.en.forEach((choiceEn, idx) => {
      const li = document.createElement("li");
      li.innerHTML = `${choiceEn} &nbsp;&nbsp; ${question.choices.si[idx]}`;
      choicesList.appendChild(li);
    });
  }

  // Mark the question as taken
  markQuestionAsTaken();
}

// Function to mark a question as taken
function markQuestionAsTaken() {
  if (selectedQuestionIndex >= 0) {
    currentRoundQuestions[selectedQuestionIndex].taken = true;
    saveQuestionsState(); // Save the updated state to localStorage
    renderQuestionsGrid(); // Re-render the questions grid
  }
}

// Function to save the current state to localStorage
function saveQuestionsState() {
  localStorage.setItem(
    `round${currentRound}-questions`,
    JSON.stringify(currentRoundQuestions)
  );
}

// Undo the selection of the last question
function undoLastSelection() {
  if (selectedQuestionIndex >= 0) {
    currentRoundQuestions[selectedQuestionIndex].taken = false; // Undo the taken status
    saveQuestionsState(); // Save the updated state to localStorage
    renderQuestionsGrid(); // Re-render the questions grid
    selectedQuestionIndex = -1; // Reset the selected index
  }
}

// Function to reset only the current round
function resetRound() {
  if (currentRound !== null) {
    // Check if a round is currently selected
    // Clear localStorage for the current round only
    localStorage.removeItem(`round${currentRound}-questions`);

    // Reset the questions for the current round to default "not taken" state
    currentRoundQuestions.forEach((question) => {
      question.taken = false;
    });

    // Reset selectedQuestionIndex
    selectedQuestionIndex = -1;

    // Re-render the question grid
    renderQuestionsGrid();

    // Hide the Undo button (since no question is selected anymore)
    document.getElementById("undo-button").classList.add("hidden");

    alert(`Round ${currentRound} has been reset!`);
  } else {
    alert("No round selected to reset.");
  }
}

// Function to navigate back to the questions grid
function backToQuestions() {
  document.getElementById("display-question").classList.add("hidden");
  document.getElementById("question-pool").classList.remove("hidden");
}

// Navigate back to the round selection
function backToRoundSelection() {
  document.getElementById("question-pool").classList.add("hidden");
  document.getElementById("round-selection").classList.remove("hidden");
}
