import tkinter as tk
from tkinter import messagebox, simpledialog

# Backend data
TRIALS = 3
UserPin = 1202
BALANCE = 12290

# Global state
current_balance = BALANCE

# Functions
def check_pin():
    global TRIALS
    pin = simpledialog.askinteger("PIN Entry", "Please insert your card PIN:")
    if pin != UserPin:
        TRIALS -= 1
        if TRIALS == 0:
            messagebox.showerror("Access Denied", "No trials left. Card blocked.")
            root.destroy()
        else:
            messagebox.showwarning("Wrong PIN", f"Incorrect PIN. {TRIALS} trials left.")
    else:
        language_selection()

def language_selection():
    lang_window = tk.Toplevel(root)
    lang_window.title("Select Language")

    tk.Label(lang_window, text="Select Language / Zgjidh Gjuhën").pack(pady=10)
    tk.Button(lang_window, text="English", width=20, command=lambda: [lang_window.destroy(), main_menu("E")]).pack(pady=5)
    tk.Button(lang_window, text="Shqip", width=20, command=lambda: [lang_window.destroy(), main_menu("S")]).pack(pady=5)

def main_menu(lang):
    menu_window = tk.Toplevel(root)
    menu_window.title("ATM Menu")

    def exit_atm():
        messagebox.showinfo("Exit", "Thank you for using ARASBANK!")
        root.destroy()

    def check_balance():
        messagebox.showinfo("Balance", f"Your available balance is: ${current_balance}")

    def withdraw():
        global current_balance
        amount = simpledialog.askinteger("Withdraw", "Enter amount to withdraw:")
        if amount > current_balance:
            messagebox.showerror("Error", "Insufficient funds")
        else:
            current_balance -= amount
            messagebox.showinfo("Success", f"${amount} withdrawn. New balance: ${current_balance}")

    def deposit():
        global current_balance
        amount = simpledialog.askinteger("Deposit", "Enter amount to deposit:")
        current_balance += amount
        messagebox.showinfo("Success", f"${amount} deposited. New balance: ${current_balance}")

    def change_pin():
        global UserPin
        old_pin = simpledialog.askinteger("Change PIN", "Enter current PIN:")
        if old_pin != UserPin:
            messagebox.showerror("Error", "Incorrect current PIN")
        else:
            new_pin = simpledialog.askinteger("Change PIN", "Enter new PIN:")
            UserPin = new_pin
            messagebox.showinfo("Success", f"PIN changed successfully to {UserPin}")

    if lang == "E":
        tk.Button(menu_window, text="Check Balance", width=20, command=check_balance).pack(pady=5)
        tk.Button(menu_window, text="Withdraw", width=20, command=withdraw).pack(pady=5)
        tk.Button(menu_window, text="Deposit", width=20, command=deposit).pack(pady=5)
        tk.Button(menu_window, text="Change PIN", width=20, command=change_pin).pack(pady=5)
        tk.Button(menu_window, text="Exit", width=20, command=exit_atm).pack(pady=5)
    else:
        tk.Button(menu_window, text="Kontrollo Gjëndjen", width=20, command=check_balance).pack(pady=5)
        tk.Button(menu_window, text="Tërheqje", width=20, command=withdraw).pack(pady=5)
        tk.Button(menu_window, text="Depozito", width=20, command=deposit).pack(pady=5)
        tk.Button(menu_window, text="Ndrysho PIN-in", width=20, command=change_pin).pack(pady=5)
        tk.Button(menu_window, text="Dil", width=20, command=exit_atm).pack(pady=5)

# Main application
root = tk.Tk()
root.title("ARASBANK ATM")
root.geometry("300x150")

tk.Label(root, text="WELCOME TO ARASBANK", font=("Arial", 14)).pack(pady=20)
tk.Button(root, text="Insert PIN", command=check_pin).pack()

root.mainloop()
