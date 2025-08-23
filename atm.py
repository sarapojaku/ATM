print("WELCOME TO ARASBANK")
TRIALS = 3
UserPin = 1202
BALANCE = 12290

while TRIALS != 0:
    Pin = int(input("Pleas Insert Your CARD PIN:"))
    if Pin != UserPin:
        TRIALS -= 1
        print("WRONG PIN NUMBER", TRIALS, "TRIALS lEFT ")
    else:
        Language = input("E: English or S:Albanian/Shqip: ")
        while Language == "E":
            print("1: Check Balance")
            print("2: Withdraw ")
            print("3: Deposit ")
            print("4: Change PIN")
            print("5: Exit")
            option = int(input("Enter choice:"))
            if option == 1:
                print("Your Avaiable balance is $:", BALANCE)
                USEREXIT = input("WOULD YOU LIKE TO CONTINUE? Y/N:")
                if USEREXIT == "N":
                    print("THANK YOU FOR USING ARASBANK")
                    break
                else:
                    continue
            if option == 2:
                Withdraw = int(input("Enter The Amount You Would Like to Withdraw:"))
                if Withdraw > BALANCE:
                    print("Insufficient Funds")
                else:
                    BALANCE -= Withdraw
                    print(Withdraw, "$ Has Been Withdrawn From Your Account")
                    print("Your Current Balance is $", BALANCE)
                    USEREXIT = input("WOULD YOU LIKE TO CONTINUE? Y/N:")
                    if USEREXIT == "N":
                        print("THANK YOU FOR USING ARASBANK")
                        break
                    else:
                        continue
            if option == 3:
                Deposit = int(input("Enter The Amount You Would Like to Deposit:"))
                BALANCE += Deposit
                print(Deposit, "$ Has Been Depsoited Into Your Account")
                print("Your Current Balance is $", BALANCE)
                USEREXIT = input("WOULD YOU LIKE TO CONTINUE? Y/N:")
                if USEREXIT == "N":
                    print("THANK YOU FOR USING ARASBANK")
                    break
                else:
                    continue
            if option == 4:
                CurreltPin = int(input("Enter Your Current Card PIN:"))
                if CurreltPin > UserPin:
                    print("Incorrect Pin")
                else:
                    if CurreltPin == UserPin:
                        NewPin = int(input("Enter Your New Pin:"))
                        print("Your PIN Has Been Changed", NewPin)
                        USEREXIT = input("WOULD YOU LIKE TO CONTINUE? Y/N:")
                        if USEREXIT == "N":
                            print("THANK YOU FOR USING ARASBANK")
                            break
                        else:
                            continue
            if option == 5:
                print("THANK YOU FOR USING ARASBANK")
                break
        while Language == "S":
            print("1: Kontrollo Gjëndjen")
            print("2: Tërheqje ")
            print("3: Depozito ")
            print("4: Ndrysho PIN-in")
            print("5: Dil")
            option = int(input("Zgjidh Opsionin :"))
            if option == 1:
                print("Gjendja e Loogaris $:", BALANCE)
                USEREXIT = input("DËSHIRONI TË KRYHENI VEPRIME TË TJERA? P/J:")
                if USEREXIT == "J":
                    print("Faleminderit Që Zgjodhët ARASBANK")
                    break
                else:
                    continue
            if option == 2:
                Withdraw = int(input("Vendosni Vlerën që Dëshironi te Tërhiqni:"))
                if Withdraw > BALANCE:
                    print("Nuk Keni Kredit të Mjaftueshëm")
                else:
                    BALANCE -= Withdraw
                    print(Withdraw, "$ Është Tërhiqur nga Llogaria Juaj")
                    print("Gjendja e Logarisë Tuaj Eshtë $", BALANCE)
                    USEREXIT = input("DËSHIRONI TË KRYHENI VEPRIME TË TJERA? P/J:")
                    if USEREXIT == "J":
                        print("Faleminderit Që Zgjodhët ARASBANK")
                        break
                    else:
                        continue
            if option == 3:
                Deposit = int(input("Vendosni Vlerën qe Dëshironi të Depozitoni:"))
                BALANCE += Deposit
                print(Deposit, "$ Është Depozituar në Llogarinë Tuaj")
                print("Gjendja e Logarisë Tuaj Është $", BALANCE)
                USEREXIT = input("DËSHIRONI TË KRYHENI VEPRIME TË TJERA? P/J:")
                if USEREXIT == "J":
                    print("Faleminderit Që Zgjodhët ARASBANK")
                    break
                else:
                    continue
            if option == 4:
                CurreltPin = int(input("Vendosni Pinin e Kartes:"))
                if CurreltPin > UserPin:
                    print("PIN i Gabuar")
                else:
                    if CurreltPin == UserPin:
                        NewPin = int(input("Vendosni PIN-in e Ri:"))
                        print("Pin-i Juauj I Ri Eshte ", NewPin)
                        USEREXIT = input("DËSHIRONI TË KRYHENI VEPRIME TË TJERA? P/J:")
                        if USEREXIT == "J":
                            print("Faleminderit Që Zgjodhët ARASBANK")
                            break
                        else:
                            continue
            if option == 5:
                print("Faleminderit Që Zgjodhët ARASBANK")
                break