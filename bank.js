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
    deposit(withdrawAmount){
        super.deposit(withdrawAmount)
    }
}

class savingsAccount extends BankAccount{
    withdraw(){
        console.log(`Withdraw cannot be made on savings accounts type`)
    }

    deposit(){
        super.deposit()
    }
    
}


const myBank = new checkingAccount ('Norm', 50 , 123, 1)
const saveBank = new savingsAccount ('Norm', 50 , 123, 1)

myBank.deposit(1000)
myBank.withdraw(500)
myBank.withdraw(600)
saveBank.deposit(1000)
saveBank.withdraw(500)