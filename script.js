// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
  }
  
  // Method to deposit money into the account
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
      console.log('Invalid amount for deposit.');
    }
  };
  
  // Method to withdraw money from the account
  BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount && amount > 0) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
      console.log('Insufficient balance or invalid amount for withdrawal.');
    }
  };
  
  // Method to check the account balance
  BankAccount.prototype.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
  };
  
  // Method to check if the account is active
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  
  // Create multiple BankAccount objects representing different accounts
  let account1 = new BankAccount(1, 'khushi', 'Savings', 1000);
  let account2 = new BankAccount(2, 'nandini', 'Checking', 5000);
  let account3 = new BankAccount(3, 'palak', 'Savings', 3000);
  
  // Test operations on accounts
  account1.deposit(500);
  account1.withdraw(200);
  
  account2.deposit(1000);
  account2.withdraw(6000);

  account2.deposit(2000);
  account2.withdraw(1500);

  account1.checkBalance();
  account2.checkBalance();
  account3.checkBalance();
  
  // Function to calculate total balance of all active accounts
  function getTotalBalance(...accounts) {
    return accounts.reduce((total,acc)=>{
      if (acc.isActive()) {
        total += acc.balance;
      }
    
    return total;
})
}
  
  
  // Test getTotalBalance function to display the total balance of all active accounts
  console.log (getTotalBalance(account1,account2,account3));

  