// Load PIN and balance from localStorage if available
let UserPin = localStorage.getItem("userPin")
  ? parseInt(localStorage.getItem("userPin"))
  : 1202;
let BALANCE = localStorage.getItem("balance")
  ? parseInt(localStorage.getItem("balance"))
  : 12290;
let TRIALS = 3;

const pinInput = document.getElementById("pin-input");
const pinSection = document.getElementById("pin-section");
const menuSection = document.getElementById("menu-section");
const atmMenu = document.getElementById("atm-menu");
const menuTitle = document.getElementById("menu-title");
const atmMessage = document.getElementById("atm-message");
const pinMessage = document.getElementById("pin-message");

// Save balance to localStorage whenever it changes
function saveBalance() {
  localStorage.setItem("balance", BALANCE);
}

// PIN verification function
function verifyPin() {
  const pinValue = parseInt(pinInput.value);
  if (pinValue !== UserPin) {
    TRIALS--;
    if (TRIALS <= 0) {
      pinMessage.textContent = "No trials left. Card blocked.";
      pinInput.disabled = true;
    } else {
      pinMessage.textContent = `Wrong PIN. ${TRIALS} trials left.`;
      pinInput.value = "";
    }
  } else {
    pinSection.classList.add("hidden");
    menuSection.classList.remove("hidden");
  }
}

// Menu functions
function showMenu(lang) {
  menuSection.classList.add("hidden");
  atmMenu.classList.remove("hidden");
  menuTitle.textContent = lang === "E" ? "ATM Menu" : "Menu i ATM";
}

function checkBalance() {
  atmMessage.textContent = `Balance: $${BALANCE}`;
}

function withdrawMoney() {
  let amount = parseInt(prompt("Enter amount to withdraw:"));
  if (amount > BALANCE) {
    atmMessage.textContent = "Insufficient funds!";
  } else {
    BALANCE -= amount;
    saveBalance();
    atmMessage.textContent = `$${amount} withdrawn. New balance: $${BALANCE}`;
  }
}

function depositMoney() {
  let amount = parseInt(prompt("Enter amount to deposit:"));
  BALANCE += amount;
  saveBalance();
  atmMessage.textContent = `$${amount} deposited. New balance: $${BALANCE}`;
}

function changePin() {
  let oldPin = parseInt(prompt("Enter current PIN:"));
  if (oldPin !== UserPin) {
    atmMessage.textContent = "Incorrect PIN!";
  } else {
    let newPin = parseInt(prompt("Enter new PIN:"));
    UserPin = newPin;
    localStorage.setItem("userPin", newPin);
    atmMessage.textContent = `PIN changed successfully!`;
  }
}

// Exit function
function exitATM() {
  const container = document.querySelector(".atm-container");
  container.innerHTML = "<h2>Thank you for using ARASBANK!</h2>";
}

// Allow pressing Enter to verify PIN
pinInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    verifyPin();
  }
});
