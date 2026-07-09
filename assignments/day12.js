let quiz = [
  { q: "Capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: "Cairo" },
  { q: "Capital of Oyo?", options: ["Ibadan", "Ilorin", "Abeokuta", "Lagos"], answer: "Ibadan" },
  { q: "Who is your instructor?", options: ["Teslim", "Ben", "Dammy", "Mike"], answer: "Dammy" },
  { q: "What year are we?", options: ["2023", "2024", "2025", "2026"], answer: "2026" },
];

let current = 0, score = 0, answered = [];

function loadQ() {
  document.getElementById("progress").innerText = `Question ${current + 1} of ${quiz.length}`;
  document.getElementById("question").innerText = quiz[current].q;
  document.getElementById("options").innerHTML = quiz[current].options.map(opt => `
    <label><input type="radio" name="opt" onclick="checkAnswer('${opt}')"> ${opt} </label>
  `).join("");
}

function checkAnswer(selected) {
  if (answered[current]) return;
  answered[current] = true;
  if (selected === quiz[current].answer) score++;
  document.getElementById("score").innerText = `Your score is ${score} / ${quiz.length}`;

}

function nextQ() { if (current < quiz.length - 1) { current++; loadQ(); } }
function prevQ() { if (current > 0) { current--; loadQ(); } }
function submitQuiz() { alert("Final score: " + score + " / " + quiz.length); }
function submitQuiz() {

  if (answered.length < quiz.length || answered.includes(undefined)) {
    alert("Please answer all questions");
    return;
  }
  alert("Final score: " + score + " / " + quiz.length);
}

loadQ();