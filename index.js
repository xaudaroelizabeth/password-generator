const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let toast;

window.addEventListener("DOMContentLoaded", () => {
  toast = document.getElementById("toast");
});

function showToast(message) {
  if (!toast) return; // prevents silent failure

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toast.timeoutId);

  toast.timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let strengthLabel = document.getElementById("strength-label");

window.addEventListener("DOMContentLoaded", () => {
  password1El = document.getElementById("password1-el");
  password2El = document.getElementById("password2-el");
  strengthLabel = document.getElementById("strength-label");

  makePassword();
});

function makePassword() {
  let password1 = "";
  let password2 = "";
  let quantity = Number(document.getElementById("quantity").value);

  if (quantity < 5 || quantity > 15) {
    showToast("Quantity must be between 5–15 characters");
    return;
  }

  for (let i = 0; i < quantity; i++) {
    password1 = password1 + characters[randomIndex()];
    password2 = password2 + characters[randomIndex()];
  }

  password1El.textContent = password1;
  password2El.textContent = password2;
  updateStrength(quantity);
}

function updateStrength(length) {
  let strength = "weak";
  const labels = {
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
  };

  if (length >= 12) {
    strength = "strong";
  } else if (length >= 8) {
    strength = "medium";
  }

  strengthLabel.textContent = `Strength: ${labels[strength]}`;

  strengthLabel.classList.remove("weak", "medium", "strong");
  strengthLabel.classList.add(strength);
}

function counter(increase = true) {
  let quantity = Number(document.getElementById("quantity").value);
  if (increase && quantity < 15) {
    quantity++;
    document.getElementById("quantity").value = quantity;
  } else if (!increase && quantity > 5) {
    quantity--;
    document.getElementById("quantity").value = quantity;
  } else if (increase) {
    showToast("Maximum length is 15 characters");
  } else {
    showToast("Minimum length is 5 characters");
  }
}

const quantityInput = document.getElementById("quantity");

quantityInput.addEventListener("input", () => {
  let value = Number(quantityInput.value);

  if (quanityInput.value === "") return;

  if (value > 15) {
    showToast("Maximum length is 15 characters");
    quantityInput.value = 15;
  }

  if (value < 5) {
    showToast("Minimum length is 5 characters");
    quantityInput.value = 5;
  }
});

function randomIndex() {
  return Math.floor(Math.random() * characters.length);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Password copied!");
  } catch (err) {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const temp = document.createElement("textarea");
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);

  showToast("Password copied!");
}

function copy1() {
  copyText(password1El.textContent);
}

function copy2() {
  copyText(password2El.textContent);
}

// 💡 Exposed functions to the global scope to support legacy DOM event bindings
// while maintaining a modular build system.
// Allowing inline HTML onclick handlers to access functions in production builds.

window.makePassword = makePassword;
window.copy1 = copy1;
window.copy2 = copy2;
window.counter = counter;
window.showToast = showToast;
