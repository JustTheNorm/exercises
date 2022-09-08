class BankAccount{
    constructor(ownerName, balance, acctNum)
    {
        this.ownerName = ownerName 
        this.balance = balance
        this.acctNum = acctNum 
    }
    deposit(depositAmount){
        console.log(`This is your new balance: ${this.balance}`)
        return this.balance += depositAmount
    }
    withdraw(withdrawAmount){
        console.log(`This is your new balance: ${this.balance}`)
        return this.balance -= withdrawAmount
    }
}

class checkingAccount extends BankAccount{
    constructor(ownerName, balance, acctNum ,overdraftEnabled)
    {
        super(ownerName, balance, acctNum)
        this.overdraftEnabled = overdraftEnabled
    }
    

    withdrawCHK(withdrawAmount){
        if (balance -= withdrawAmount < 0 && overdraftEnabled == true)
        {
            console.log(`Not enough balance available: Overdraft`)
        }
        else {
            super.withdraw()
        }
    }
}

class savingsAccount extends BankAccount{
    withdraw(){
        console.log(`Withdraw cannot be made on this account type`)
    }
}


const myBank = new checkingAccount ('Norm', 50 , 123, 1)

myBank.deposit(1000)
myBank.withdraw(500)
myBank.withdraw(600)