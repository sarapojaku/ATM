ARASBank ATM Simulation 🏦




A simple Python ATM simulation that lets users check balance, withdraw, deposit, and change their PIN. Supports English and Albanian (Shqip) interfaces.

Table of Contents

Features

Installation

Usage

Example

Notes

License

Features

✅ PIN verification (3 attempts)

✅ English and Albanian language support

✅ Check account balance

✅ Withdraw money with validation

✅ Deposit money

✅ Change account PIN

✅ Exit the system at any time

Installation

Clone the repository:

git clone https://github.com/your-username/arasbank.git


Navigate to the project folder:

cd arasbank


Run the program with Python:

python arasbank.py

Usage

Enter your card PIN (default: 1202).

Select language:

E for English

S for Albanian/Shqip

Choose a menu option:

Check Balance

Withdraw

Deposit

Change PIN

Exit

After any operation, choose to continue or exit.

Example
print("WELCOME TO ARASBANK")
TRIALS = 3
UserPin = 1202
BALANCE = 12290

while TRIALS != 0:
    Pin = int(input("Please Insert Your CARD PIN: "))
    if Pin != UserPin:
        TRIALS -= 1
        print("WRONG PIN NUMBER", TRIALS, "TRIALS LEFT")
    else:
        Language = input("E: English or S: Albanian/Shqip: ")
        # Menu operations follow...

Notes

Default balance: $12,290

Default PIN: 1202

Inputs are case-sensitive for language selection

Handles incorrect PINs and insufficient funds

License

MIT License – free to use for educational purposes.
