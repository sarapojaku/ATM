// Load or initialize data (PIN + balance)
let data = JSON.parse(localStorage.getItem("atmData")) || {
  pin: "1202",
  balance: 12290,
};

let trials = 3;
let language = "E";

// --- Helpers ---
function saveData() {
  localStorage.setItem("atmData", JSON.stringify(data));
}

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// --- PIN Check ---
function checkPin() {
  const entered = document.getElementById("pin-input").value;
  if (entered !== data.pin) {
    trials--;
    if (trials <= 0) {
      alert("No trials left. Card blocked.");
      showScreen("exit-screen");
    } else {
      document.getElementById(
        "trials-left"
      ).textContent = `Incorrect PIN. ${trials} trials left.`;
    }
  } else {
    document.getElementById("pin-input").value = "";
    document.getElementById("trials-left").textContent = "";
    showScreen("lang-screen");
  }
}

// --- Language selection ---
function selectLanguage(lang) {
  language = lang;
  setMenuText();
  showScreen("menu-screen");
}

function setMenuText() {
  if (language === "E") {
    document.getElementById("balance-btn").textContent = "Check Balance";
    document.getElementById("withdraw-btn").textContent = "Withdraw";
    document.getElementById("deposit-btn").textContent = "Deposit";
    document.getElementById("change-pin-btn").textContent = "Change PIN";
    document.getElementById("exit-btn").textContent = "Exit";
  } else {
    document.getElementById("balance-btn").textContent = "Kontrollo Gjëndjen";
    document.getElementById("withdraw-btn").textContent = "Tërheqje";
    document.getElementById("deposit-btn").textContent = "Depozito";
    document.getElementById("change-pin-btn").textContent = "Ndrysho PIN-in";
    document.getElementById("exit-btn").textContent = "Dil";
  }
}

// --- Main Menu Actions ---
function checkBalance() {
  showMessage(`Your available balance is: $${data.balance}`);
}

function withdraw() {
  const amount = parseInt(prompt("Enter amount to withdraw:"));
  if (isNaN(amount) || amount <= 0) return;
  if (amount > data.balance) {
    alert("Insufficient funds");
  } else {
    data.balance -= amount;
    saveData();
    showMessage(`$${amount} withdrawn. New balance: $${data.balance}`);
  }
}

function deposit() {
  const amount = parseInt(prompt("Enter amount to deposit:"));
  if (isNaN(amount) || amount <= 0) return;
  data.balance += amount;
  saveData();
  showMessage(`$${amount} deposited. New balance: $${data.balance}`);
}

function changePin() {
  const oldPin = prompt("Enter current PIN:");
  if (oldPin !== data.pin) {
    alert("Incorrect current PIN");
    return;
  }
  const newPin = prompt("Enter new PIN:");
  if (newPin && newPin.length >= 4) {
    data.pin = newPin;
    saveData();
    showMessage(`PIN changed successfully to ${data.pin}`);
  } else {
    alert("PIN must be at least 4 digits");
  }
}

function exitATM() {
  showScreen("exit-screen");
}

// --- Message helper ---
function showMessage(msg) {
  document.getElementById("message-text").textContent = msg;
  showScreen("message-screen");
}

function goToMenu() {
  showScreen("menu-screen");
}
