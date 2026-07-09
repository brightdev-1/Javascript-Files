/* ============ THE STATE ============ */
/* A calculator only needs to remember 4 things at any moment: */
let current = "0";
let previous = null;
let operator = null;
let expressionText = "";

const resultEl = document.getElementById("result");
const expressionEl = document.getElementById("expression");

function updateDisplay() {
  resultEl.textContent = current;
  expressionEl.textContent = expressionText;
}

/* ============ INPUTTING DIGITS ============ */
function inputDigit(d) {
  if (current === "0" || current === "Error") {
    current = d;
  } else {
    current += d;
  }
}

function inputDecimal() {
  if (!current.includes(".")) current += ".";
}

/* ============ HANDLING OPERATORS ============ */
/* The classic calculator pattern: when you press an operator,
   you "lock in" the current number as `previous`, remember the
   operator, and clear `current` so the next digits start fresh. */
function chooseOperator(op) {
  if (current === "Error") return;
  if (operator && previous !== null) {
    // chain calculations: 5 + 3 + ... should resolve "5+3" first
    calculate();
  }
  previous = current;
  operator = op;
  expressionText = `${previous} ${symbolFor(op)}`;
  current = "0";
  updateDisplay();
}

function symbolFor(op) {
  return { add: "+", subtract: "−", multiply: "×", divide: "÷" }[op];
}

/* ============ THE ACTUAL MATH ============ */
function calculate() {
  if (operator === null || previous === null) return;
  const a = parseFloat(previous);
  const b = parseFloat(current);
  let res;
  switch (operator) {
    case "add": res = a + b; break;
    case "subtract": res = a - b; break;
    case "multiply": res = a * b; break;
    case "divide":
      if (b === 0) { current = "Error"; resetChain(); updateDisplay(); return; }
      res = a / b;
      break;
  }
  // trims floating point noise like 0.1 + 0.2 = 0.30000000000000004
  current = String(Math.round(res * 1e10) / 1e10);
  expressionText = `${previous} ${symbolFor(operator)} ${b} =`;
  resetChain();
}

function resetChain() {
  operator = null;
  previous = null;
}

/* ============ CLEAR / BACKSPACE / SIGN ============ */
function clearAll() {
  current = "0"; previous = null; operator = null; expressionText = "";
}
function clearEntry() { current = "0"; }
function backspace() {
  current = current.length > 1 ? current.slice(0, -1) : "0";
}
function negate() {
  if (current !== "0") current = current.startsWith("-") ? current.slice(1) : "-" + current;
}

/* ============ ONE-TAP FUNCTIONS ============ */
function percent() { current = String(parseFloat(current) / 100); }
function square() { current = String(parseFloat(current) ** 2); }
function sqrt() {
  const n = parseFloat(current);
  current = n < 0 ? "Error" : String(Math.sqrt(n));
}
function reciprocal() {
  const n = parseFloat(current);
  current = n === 0 ? "Error" : String(1 / n);
}

/* ============ THE DISPATCH TABLE ============ */
/* Instead of one giant if/else chain, every data-action string
   maps to a function. Adding a new button is now a one-line job. */
const actions = {
  digit: (label) => inputDigit(label),
  decimal: () => inputDecimal(),
  add: () => chooseOperator("add"),
  subtract: () => chooseOperator("subtract"),
  multiply: () => chooseOperator("multiply"),
  divide: () => chooseOperator("divide"),
  equals: () => calculate(),
  clear: () => clearAll(),
  "clear-entry": () => clearEntry(),
  backspace: () => backspace(),
  negate: () => negate(),
  percent: () => percent(),
  square: () => square(),
  sqrt: () => sqrt(),
  reciprocal: () => reciprocal(),
};

/* ============ WIRING IT UP ============ */
/* One listener on every button. We read data-action + the button's
   own label text, look up the matching function, run it, redraw. */
document.querySelectorAll(".keypad button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    actions[action]?.(btn.textContent);
    updateDisplay();
  });
});

/* ============ KEYBOARD SUPPORT (bonus) ============ */
window.addEventListener("keydown", (e) => {
  if (/[0-9]/.test(e.key)) inputDigit(e.key);
  else if (e.key === ".") inputDecimal();
  else if (e.key === "+") chooseOperator("add");
  else if (e.key === "-") chooseOperator("subtract");
  else if (e.key === "*") chooseOperator("multiply");
  else if (e.key === "/") chooseOperator("divide");
  else if (e.key === "Enter" || e.key === "=") calculate();
  else if (e.key === "Escape") clearAll();
  else if (e.key === "Backspace") backspace();
  else return;
  updateDisplay();
});

updateDisplay();