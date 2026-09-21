/*
  Quiz App

  One `state` object holds everything the app knows. Nothing else stores
  anything. When something happens you change `state`, then call a render
  function that rebuilds the screen from it.

  That is the same idea as useState in React - the state is the truth, the
  screen is only a picture of it. The difference is that React re-renders for
  you; here you call render yourself.

  Work through the TODOs in order. After each one, open the page and check
  that much works before moving on.
*/

// ---------- Elements ----------

const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const resultsScreen = document.getElementById("resultsScreen");

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const nextButton = document.getElementById("nextButton");

const progress = document.getElementById("progress");
const timer = document.getElementById("timer");
const timerBar = document.getElementById("timerBar");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const feedback = document.getElementById("feedback");

const finalScore = document.getElementById("finalScore");
const scoreDetail = document.getElementById("scoreDetail");
const resultsList = document.getElementById("resultsList");

const LETTERS = ["A", "B", "C", "D"];

// ---------- State ----------

/*
  currentIndex  which question we are on, 0 to QUESTIONS.length - 1
  score         +1 per correct answer, -1 per question that timed out
  answered      has the current question been answered or timed out yet?
                (stops a second click from scoring twice)
  timeLeft      seconds remaining on the current question
  intervalId    what setInterval() handed back, so we can stop the clock
  results       one entry per finished question, used by the results screen:
                  { questionId, selected, timedOut }
                `selected` is the index the user clicked, or null on a timeout
*/
let state = {
  currentIndex: 0,
  score: 0,
  answered: false,
  timeLeft: SECONDS_PER_QUESTION,
  intervalId: null,
  results: [],
};

// ---------- Small helpers (already done, use them) ----------

// Show one screen, hide the other two.
function showScreen(screen) {
  for (const candidate of [startScreen, questionScreen, resultsScreen]) {
    candidate.classList.toggle("is-hidden", candidate !== screen);
  }
}

// 47 -> "0:47", 60 -> "1:00"
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

// Stop the clock. Safe to call even when it is not running, so call it
// any time the question ends - on an answer, on a timeout, on a restart.
function stopTimer() {
  clearInterval(state.intervalId);
  state.intervalId = null;
}

// ---------- Rendering ----------

/*
  TODO 1: put the current question on screen.

  - const question = QUESTIONS[state.currentIndex];
  - progress.textContent -> "Question 3 of 8"
      (state.currentIndex is 0-based, so add 1; QUESTIONS.length is the total)
  - questionText.textContent -> question.question
  - empty answerList, then for each answer build:

      <li>
        <button type="button" class="answer" data-index="0">
          <span class="answer__letter">A</span>
          <span class="answer__text">pop()</span>
        </button>
      </li>

    LETTERS[i] gives you the A / B / C / D. Put the index on the button with
    button.dataset.index = i - the click handler reads it back later.
  - clear the feedback: text to "", and remove `is-correct` / `is-wrong`
  - hide the next button again: nextButton.classList.add("is-hidden")
*/
function renderQuestion() {

}

/*
  TODO 5: paint the answer buttons once the question is over.

  `selected` is the index the user clicked, or null if the time ran out.

  For every .answer button in answerList:
  - set button.disabled = true, so nothing can be clicked again
  - if its index is the correct one, add the class `is-correct`
      (do this every time, including on a timeout - the brief says the right
       answer is always revealed)
  - else if its index is `selected`, add `is-wrong`

  You can read an index back off a button with Number(button.dataset.index).
*/
function renderAnswered(selected) {

}

/*
  TODO 8: fill the results screen from state.results.

  - finalScore.textContent -> `${state.score} / ${QUESTIONS.length}`
  - scoreDetail.textContent -> something like "5 correct, 2 wrong, 1 timed out"
      (count them out of state.results)
  - empty resultsList, then one <li> per entry:

      <li class="result is-correct">
        <p class="result__question">Which method removes the last element?</p>
        <p class="result__line">Your answer: <span>pop()</span></p>
        <p class="result__line">Correct answer: <span>pop()</span></p>
      </li>

    The <li> class is `is-skipped` when the question timed out, otherwise
    `is-correct` or `is-wrong`. For a timed-out one, show "Your answer:
    <span>No answer</span>".

    Find the question an entry belongs to with
    QUESTIONS.find(q => q.id === entry.questionId).
*/
function renderResults() {

}

// ---------- The clock ----------

/*
  TODO 6: run the 60 second countdown for the current question.

  - reset state.timeLeft to SECONDS_PER_QUESTION
  - draw it once straight away (see updateTimerDisplay below), otherwise the
    old value sits there for a second
  - stopTimer() first, so two clocks can never run at once
  - state.intervalId = setInterval(..., 1000) and inside it, once a second:
      state.timeLeft -= 1
      redraw
      when state.timeLeft reaches 0 -> handleTimeout()
*/
function startTimer() {

}

/*
  TODO 7: show state.timeLeft.

  - timer.textContent -> formatTime(state.timeLeft)
  - timerBar.style.width -> the seconds left as a percentage of
    SECONDS_PER_QUESTION, e.g. "75%"
  - with 10 seconds or fewer left, add `is-urgent` to both `timer` and
    `timerBar`; otherwise remove it. classList.toggle(name, condition) does
    this in one line.
*/
function updateTimerDisplay() {

}

// ---------- What happens ----------

/*
  TODO 3: the user clicked an answer. `index` is which one.

  - if state.answered is already true, return - they have had their go
  - set state.answered = true and stopTimer()
  - work out whether index === QUESTIONS[state.currentIndex].correct
  - if it is, state.score += 1
  - record it:
      state.results.push({ questionId: ..., selected: index, timedOut: false })
  - renderAnswered(index)
  - set the feedback text to "Correct!" or "Not quite." and add the matching
    class, `is-correct` or `is-wrong`
  - show the next button: nextButton.classList.remove("is-hidden")
      On the last question it should read "See results" instead of
      "Next question" - state.currentIndex === QUESTIONS.length - 1 tells you.
*/
function handleAnswer(index) {

}

/*
  TODO 9: the 60 seconds ran out.

  Much the same as handleAnswer, with three differences:
  - the score goes DOWN by 1
  - nothing was selected, so record { selected: null, timedOut: true } and
    call renderAnswered(null)
  - the feedback reads "Time is up." with the `is-wrong` class

  The brief says a timeout should skip to the next question. Showing the
  correct answer and letting the user press Next reads better than yanking
  the card away mid-read - but if you would rather it jump on its own, call
  goToNext() from here instead of showing the button.
*/
function handleTimeout() {

}

/*
  TODO 4: move on from an answered question.

  - if this was the last question, showScreen(resultsScreen) and
    renderResults(), and stop there
  - otherwise state.currentIndex += 1, state.answered = false,
    then renderQuestion() and startTimer()
*/
function goToNext() {

}

/*
  TODO 2: start (or restart) the quiz.

  - stopTimer(), in case one is still running from a previous go
  - reset state back to a fresh object: currentIndex 0, score 0,
    answered false, timeLeft SECONDS_PER_QUESTION, intervalId null,
    results []
  - showScreen(questionScreen)
  - renderQuestion() and startTimer()
*/
function startQuiz() {

}

// ---------- Event listeners ----------

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", goToNext);

/*
  One listener on the list, not one per button - the buttons are rebuilt for
  every question, and this way there is nothing to re-attach. Same trick as
  the task list in Task Tracker.
*/
answerList.addEventListener("click", (event) => {
  const button = event.target.closest(".answer");
  if (button === null) return;
  handleAnswer(Number(button.dataset.index));
});

// The start screen is already the visible one in the HTML, so there is
// nothing to render until the user presses Start.
