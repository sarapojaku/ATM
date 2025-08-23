// Load PIN from localStorage or default to 1202
let UserPin = localStorage.getItem("userPin")
  ? parseInt(localStorage.getItem("userPin"))
  : 1202;

// Load balance from localStorage or default
let BALANCE = localStorage.getItem("balance")
  ? parseInt(localStorage.getItem("balance"))
  : 12290;

// Cache DOM elements
const welcomeScreen = document.getElementById("welcome-screen");
const loginScreen = document.getElementById("login-screen");
const menuScreen = document.getElementById("menu-screen");
const messageScreen = document.getElementById("message-screen");

const pinInput = document.getElementById("pin-input");
const loginBtn = document.getElementById("login-btn");
const balanceBtn = document.getElementById("check-balance");
const withdrawBtn = document.getElementById("withdraw");
const depositBtn = document.getElementById("deposit");
const changePinBtn = document.getElementById("change-pin");
const exitBtn = document.getElementById("exit");
const messageBox = document.getElementById("message");
const backBtn = document.getElementById("back-btn");

function showScreen(screen) {
  [welcomeScreen, loginScreen, menuScreen, messageScreen].forEach(
    (s) => (s.style.display = "none")
  );
  screen.style.display = "block";
}

// Start at login
showScreen(loginScreen);

// --- LOGIN LOGIC ---
function login() {
  let enteredPin = parseInt(pinInput.value);
  if (enteredPin === UserPin) {
    showScreen(menuScreen);
    pinInput.value = "";
  } else {
    alert("Incorrect PIN. Try again.");
    pinInput.value = "";
  }
}

loginBtn.addEventListener("click", login);
pinInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") login();
});

// --- MENU OPTIONS ---
balanceBtn.addEventListener("click", () => {
  messageBox.innerText = `Your Available Balance is $${BALANCE}`;
  showScreen(messageScreen);
});

withdrawBtn.addEventListener("click", () => {
  let amount = parseInt(prompt("Enter the amount you want to withdraw:"));
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount.");
    return;
  }
  if (amount > BALANCE) {
    alert("Insufficient funds.");
  } else {
    BALANCE -= amount;
    localStorage.setItem("balance", BALANCE);
    messageBox.innerText = `You withdrew $${amount}. Current balance: $${BALANCE}`;
    showScreen(messageScreen);
  }
});

depositBtn.addEventListener("click", () => {
  let amount = parseInt(prompt("Enter the amount you want to deposit:"));
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount.");
    return;
  }
  BALANCE += amount;
  localStorage.setItem("balance", BALANCE);
  messageBox.innerText = `You deposited $${amount}. Current balance: $${BALANCE}`;
  showScreen(messageScreen);
});

changePinBtn.addEventListener("click", () => {
  let currentPin = parseInt(prompt("Enter your current PIN:"));
  if (currentPin === UserPin) {
    let newPin = parseInt(prompt("Enter your new PIN:"));
    if (!isNaN(newPin) && newPin.toString().length >= 4) {
      UserPin = newPin;
      localStorage.setItem("userPin", newPin); // SAVE new pin
      alert("Your PIN has been changed successfully!");
    } else {
      alert("Invalid PIN. Must be at least 4 digits.");
    }
  } else {
    alert("Incorrect current PIN.");
  }
});

exitBtn.addEventListener("click", () => {
  messageBox.innerText = "Thank you for using ARASBANK!";
  showScreen(messageScreen);
  backBtn.style.display = "none";
});

// --- BACK BUTTON ---
backBtn.addEventListener("click", () => {
  showScreen(menuScreen);
});
