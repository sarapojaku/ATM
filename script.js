let TRIALS = 3;
let UserPin = localStorage.getItem("userPin")
  ? parseInt(localStorage.getItem("userPin"))
  : 1202;
let BALANCE = 12290;

const pinInput = document.getElementById("pin-input");
const pinSection = document.getElementById("pin-section");
const menuSection = document.getElementById("menu-section");
const atmMenu = document.getElementById("atm-menu");
const menuTitle = document.getElementById("menu-title");
const atmMessage = document.getElementById("atm-message");
const pinMessage = document.getElementById("pin-message");

// Numeric keypad functions
function pressKey(num) {
  pinInput.value += num;
}

function clearPin() {
  pinInput.value = "";
}

function verifyPin() {
  const pinValue = parseInt(pinInput.value);
  if (pinValue !== UserPin) {
    TRIALS--;
    if (TRIALS <= 0) {
      pinMessage.textContent = "No trials left. Card blocked.";
      disableKeypad();
    } else {
      pinMessage.textContent = `Wrong PIN. ${TRIALS} trials left.`;
      clearPin();
    }
  } else {
    pinSection.classList.add("hidden");
    menuSection.classList.remove("hidden");
  }
}

function disableKeypad() {
  const buttons = document.querySelectorAll("#keypad button");
  buttons.forEach((btn) => (btn.disabled = true));
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
    atmMessage.textContent = `$${amount} withdrawn. New balance: $${BALANCE}`;
  }
}

function depositMoney() {
  let amount = parseInt(prompt("Enter amount to deposit:"));
  BALANCE += amount;
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

function exitATM() {
  atmMenu.innerHTML = "<h2>Thank you for using ARASBANK!</h2>";
}
